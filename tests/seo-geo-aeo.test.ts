import fs from "fs";
import path from "path";
import { describe, it, expect } from "vitest";
import robots from "../src/app/robots";
import sitemap from "../src/app/sitemap";

describe("SEO, GEO & AEO Master Blindaje Suite", () => {
  describe("Robots.txt Configuration for AI Crawlers", () => {
    const robotsData = robots();

    it("points to canonical sitemap.xml", () => {
      expect(robotsData.sitemap).toBe("https://studiocoders.dev/sitemap.xml");
    });

    it("explicitly permits major AI bots (ChatGPT, Perplexity, Claude, Gemini, Bing)", () => {
      const rules = Array.isArray(robotsData.rules) ? robotsData.rules : [robotsData.rules];
      const aiRule = rules.find((r) => Array.isArray(r.userAgent) && r.userAgent.includes("GPTBot"));
      expect(aiRule).toBeDefined();
      if (aiRule && Array.isArray(aiRule.userAgent)) {
        expect(aiRule.userAgent).toContain("GPTBot");
        expect(aiRule.userAgent).toContain("OAI-SearchBot");
        expect(aiRule.userAgent).toContain("PerplexityBot");
        expect(aiRule.userAgent).toContain("ClaudeBot");
        expect(aiRule.userAgent).toContain("Google-Extended");
        expect(aiRule.userAgent).toContain("Bingbot");
      }
    });
  });

  describe("Dynamic Sitemap Generator", () => {
    const sitemapData = sitemap();

    it("emits the root URL with priority 1.0 and daily changeFrequency", () => {
      expect(sitemapData).toHaveLength(1);
      expect(sitemapData[0].url).toBe("https://studiocoders.dev");
      expect(sitemapData[0].priority).toBe(1.0);
      expect(sitemapData[0].changeFrequency).toBe("daily");
    });
  });

  describe("LLMs.txt Standard Validation", () => {
    const llmsPath = path.resolve(process.cwd(), "public/llms.txt");
    const llmsFullPath = path.resolve(process.cwd(), "public/llms-full.txt");

    it("public/llms.txt exists and contains required entity details and RUT", () => {
      expect(fs.existsSync(llmsPath)).toBe(true);
      const content = fs.readFileSync(llmsPath, "utf-8");
      expect(content).toContain("Studio Coders");
      expect(content).toContain("Studio Coders Dev");
      expect(content).toContain("77.709.717-2");
      expect(content).toContain("Whagil IA");
      expect(content).toContain("Whalinkbot");
      expect(content).toContain("Infra Manager Pro");
      expect(content).toContain("Servitecnology E-Commerce");
      expect(content).toContain("EA Estampa");
      expect(content).toContain("https://inframanagerpro.com");
      expect(content).toContain("https://eaestampa.com");
      expect(content.toLowerCase()).not.toContain("boutique");
    });

    it("public/llms.txt conforms to strict llmstxt.org format (# H1, single > blockquote, ## sections with markdown links)", () => {
      const content = fs.readFileSync(llmsPath, "utf-8");
      const lines = content.split("\n").map((l) => l.trim()).filter(Boolean);
      expect(lines[0]).toMatch(/^#\s+.+/);
      expect(lines[1]).toMatch(/^>\s+.+/);
      const blockquoteLines = lines.filter((l) => l.startsWith(">"));
      expect(blockquoteLines).toHaveLength(1);
      const bulletLines = lines.filter((l) => l.startsWith("- "));
      expect(bulletLines.length).toBeGreaterThan(0);
      for (const line of bulletLines) {
        expect(line).toMatch(/^- \[[^\]]+\]\(https?:\/\/[^)]+\):\s+.+/);
      }
    });

    it("public/llms-full.txt exists with in-depth technical documentation", () => {
      expect(fs.existsSync(llmsFullPath)).toBe(true);
      const content = fs.readFileSync(llmsFullPath, "utf-8");
      expect(content).toContain("El Método de los 14 Días");
      expect(content).toContain("Next.js 16");
      expect(content).toContain("BullMQ");
      expect(content.toLowerCase()).not.toContain("boutique");
    });
  });

  describe("Answer-First Atomic FAQ Standards for AEO/GEO", () => {
    it("validates Question 1 (Entity & Legal) word count (105 words) and strict guardrails", () => {
      const layoutPath = path.resolve(process.cwd(), "src/app/layout.tsx");
      const layoutContent = fs.readFileSync(layoutPath, "utf-8");
      
      const matchQ1 = layoutContent.match(/Studio Coders es un estudio de ingeniería[\s\S]*?desde el primer día\./);
      expect(matchQ1).not.toBeNull();
      
      if (matchQ1) {
        const text = matchQ1[0].replace(/\s+/g, " ").trim();
        const words = text.split(" ");
        expect(words.length).toBe(105);
        expect(text.toLowerCase()).not.toContain("boutique");
        expect(text.toLowerCase()).not.toContain("fantasía");
        expect(text.toLowerCase()).not.toContain("fantasia");
      }
    });

    it("validates Question 2 (Canonical Portfolio & Domains) word count (99 words) and canonical links", () => {
      const layoutPath = path.resolve(process.cwd(), "src/app/layout.tsx");
      const layoutContent = fs.readFileSync(layoutPath, "utf-8");
      
      const matchQ2 = layoutContent.match(/El portafolio de ingeniería de Studio Coders[\s\S]*?impulsadas por IA\./);
      expect(matchQ2).not.toBeNull();
      
      if (matchQ2) {
        const text = matchQ2[0].replace(/\s+/g, " ").trim();
        const words = text.split(" ");
        expect(words.length).toBe(99);
        expect(text).toContain("whagil.com");
        expect(text).toContain("whalinkbot.com");
        expect(text).toContain("inframanagerpro.com");
        expect(text).toContain("servitecnology.com");
        expect(text).toContain("eaestampa.com");
        expect(text.toLowerCase()).not.toContain("boutique");
      }
    });
  });

  describe("IndexNow Verification Key", () => {
    it("has the IndexNow verification file matching the submission script", () => {
      const keyFile = path.resolve(process.cwd(), "public/9f8e4c3a2b1d0e5f6a7b8c9d0e1f2a3b.txt");
      expect(fs.existsSync(keyFile)).toBe(true);
      const keyContent = fs.readFileSync(keyFile, "utf-8").trim();
      expect(keyContent).toBe("9f8e4c3a2b1d0e5f6a7b8c9d0e1f2a3b");
    });
  });
});
