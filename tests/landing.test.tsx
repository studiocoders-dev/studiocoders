import React from "react";
import fs from "node:fs";
import path from "node:path";
import { describe, it, expect, vi } from "vitest";

vi.mock("next/font/google", () => ({
  Archivo: () => ({ variable: "--font-archivo", className: "font-archivo" }),
  Newsreader: () => ({ variable: "--font-newsreader", className: "font-newsreader" }),
  IBM_Plex_Mono: () => ({ variable: "--font-mono", className: "font-mono" }),
}));

import { renderToStaticMarkup } from "react-dom/server";
import Home from "../src/app/page";
import { metadata } from "../src/app/layout";

describe("Studio Coders Landing Page & Architecture Suite", () => {
  const html = renderToStaticMarkup(React.createElement(Home));

  describe("Gate 4 Compliance: Core Value Proposition & Copy", () => {
    it("renders the primary headline promising 14-day delivery", () => {
      expect(html).toContain(
        "Lanzamos tu aplicación web o Agente de IA en 14 días."
      );
    });

    it("renders the Santiago, Chile geographical badge", () => {
      expect(html).toContain(
        "Santiago de Chile · Ingeniería Ágil para Latinoamérica &amp; Global"
      );
    });

    it("renders the editorial subhead clarifying real production vs demo/mockup", () => {
      expect(html).toContain("Sin maquetas ni promesas en papel");
      expect(html).toContain(
        "Una versión real, desplegada con base de datos y pagos, que tú y tu equipo pueden abrir y usar el día catorce."
      );
      expect(html).toContain("Después iteramos contigo cada semana.");
      expect(html.toLowerCase()).not.toContain("sprint");
    });

    it("renders the primary CTA with prompt to tell project", () => {
      expect(html).toContain("Cotizar proyecto en 20 minutos");
    });
  });

  describe("Services Section: Qué Construimos (5 Soluciones)", () => {
    it("renders the section header and all 5 business solutions", () => {
      expect(html).toContain("Qué Construimos");
      expect(html).toContain("Cinco cosas, descritas por lo que resuelven.");
      expect(html).toContain("Sitios web y plataformas que cargan al instante");
      expect(html).toContain("Aplicaciones móviles para iOS y Android");
      expect(html).toContain("Sistemas internos y software a medida");
      expect(html).toContain("Integraciones entre herramientas que ya usas");
      expect(html).toContain("Inteligencia Artificial aplicada a un proceso concreto");
    });
  });

  describe("Technical Diagnosis: Cuatro decisiones que descarrilan un proyecto de software", () => {
    it("renders the section header and the 4 critical decision pitfalls", () => {
      expect(html).toContain("Diagnóstico Técnico");
      expect(html).toContain("Cuatro decisiones que descarrilan un proyecto de software.");
      expect(html).toContain("Priorizar el presupuesto más bajo");
      expect(html).toContain("Fijar un precio cerrado sin dimensionar el alcance técnico");
      expect(html).toContain("Aceptar meses de desarrollo a oscuras sin despliegues reales");
      expect(html).toContain("Poner intermediarios entre tu visión y los desarrolladores");
    });
  });

  describe("Audit Guarantees: Qué puedes verificar tú mismo", () => {
    it("renders the section header and the 4 objective technical commitments", () => {
      expect(html).toContain("Garantías Técnicas");
      expect(html).toContain("Qué puedes verificar tú mismo.");
      expect(html).toContain("Core Web Vitals en verde, medido en móvil");
      expect(html).toContain("Accesibilidad web WCAG 2.1 AA");
      expect(html).toContain("Cero dependencias cautivas ni vendor lock-in");
      expect(html).toContain("Pruebas automatizadas y CI/CD en verde");
    });
  });

  describe("Public Code: Open-source Proof of Work", () => {
    it("renders the section header and the public open-source package links", () => {
      expect(html).toContain("Código Público");
      expect(html).toContain("Audita nuestro estándar de ingeniería directamente en el código fuente.");
      expect(html).toContain("@studiocoders/webhook-verifier");
      expect(html).toContain("studiocoders-dev/webhook-verifier");
      expect(html).toContain("https://www.npmjs.com/package/@studiocoders/webhook-verifier");
      expect(html).toContain("https://github.com/studiocoders-dev/webhook-verifier");
      expect(html).toContain("TypeScript Strict");
      expect(html).toContain("100% Test Coverage");
    });
  });

  describe("The 14-Day Process Timeline", () => {
    it("includes all milestones: Día 0, Día 2, Día 14 and Cada semana", () => {
      expect(html).toContain("Día 0");
      expect(html).toContain("Día 2");
      expect(html).toContain("Día 14");
      expect(html).toContain("Cada semana");
    });

    it("explains why 2 weeks is possible with senior developers and AI acceleration", () => {
      expect(html).toContain("¿Cómo logramos entregar en 14 días?");
      expect(html).toContain("Un stack consolidado que dominamos");
      expect(html).toContain("Trato directo con ingenieros senior");
      expect(html).toContain("Aceleración por IA con rigor humano");
      expect(html).toContain("Propiedad total de código y cloud");
    });
  });

  describe("Canonical Portfolio Verification", () => {
    it("showcases Whagil IA with distributed architecture details", () => {
      expect(html).toContain("Whagil IA");
      expect(html).toContain("BullMQ + Redis");
      expect(html).toContain("WebSockets");
    });

    it("showcases Whalinkbot as async cloud motor for WhatsApp", () => {
      expect(html).toContain("Whalinkbot");
      expect(html).toContain("Motor Cloud Asíncrono · WhatsApp");
    });

    it("showcases Infra Manager Pro with 33,000 LOC ERP", () => {
      expect(html).toContain("Infra Manager Pro");
      expect(html).toContain("33,000+ Líneas de Código");
    });

    it("showcases Servitecnology E-Commerce with Astro + Supabase headless architecture", () => {
      expect(html).toContain("Servitecnology E-Commerce");
      expect(html).toContain("Astro Headless SSG/SSR");
      expect(html).toContain("Supabase Realtime Cloud");
    });

    it("showcases EA Estampa with Next.js + WhatsApp AI automation", () => {
      expect(html).toContain("EA Estampa");
      expect(html).toContain("eaestampa.com");
      expect(html).toContain("NEXT.JS + WHATSAPP AI");
    });
  });

  describe("Strict Brand & Positioning Guardrails (Unbreakable Rules)", () => {
    it("displays official B2B operating entity with commercial firm name and RUT", () => {
      expect(html).toContain("Studio Coders Dev · RUT: 77.709.717-2");
      expect(html).toContain("Facturación B2B en USD");
    });

    it("displays the official corporate email and zero public gmail mentions", () => {
      expect(html).toContain("contacto@studiocoders.dev");
      expect(html).not.toContain("studiocoders.dev@gmail.com");
    });

    it("strictly contains ZERO occurrences of the word boutique", () => {
      const lowerHtml = html.toLowerCase();
      expect(lowerHtml).not.toContain("boutique");
    });

    it("strictly contains ZERO occurrences of the phrase 'de fantasía'", () => {
      const lowerHtml = html.toLowerCase();
      expect(lowerHtml).not.toContain("de fantasía");
      expect(lowerHtml).not.toContain("de fantasia");
    });

    it("strictly contains ZERO forbidden references to informal payment rails or local currencies", () => {
      const lowerHtml = html.toLowerCase();
      expect(lowerHtml).not.toContain("bolívar");
      expect(lowerHtml).not.toContain("bolivares");
      expect(lowerHtml).not.toContain("pago móvil");
      expect(lowerHtml).not.toContain("pagomovil");
      expect(lowerHtml).not.toContain("tasa bcv");
    });

    it("strictly contains ZERO references to hardware support or repair", () => {
      const lowerHtml = html.toLowerCase();
      expect(lowerHtml).not.toContain("reparación de pc");
      expect(lowerHtml).not.toContain("servicio técnico de computadoras");
      expect(lowerHtml).not.toContain("cctv");
      expect(lowerHtml).not.toContain("repuestos de hardware");
    });
  });

  describe("SEO & AEO Metadata Verification", () => {
    it("defines valid OpenGraph and Twitter title and descriptions in layout", () => {
      expect(metadata.title).toBe("studiocoders.dev — De la Idea a Producción en 14 Días");
      expect(metadata.description).toContain("Santiago de Chile");
      expect(metadata.description).toContain("desarrolladores senior");
    });

    it("includes both atomic FAQ questions for entity and canonical portfolio", () => {
      expect(html).toContain("¿Qué es Studio Coders y quién respalda su operación técnica y legal?");
      expect(html).toContain("Studio Coders Dev con RUT 77.709.717-2");
      expect(html).toContain("¿Qué plataformas y proyectos en producción respaldan la ingeniería de Studio Coders?");
      expect(html).toContain("https://whagil.com");
      expect(html).toContain("https://whalinkbot.com");
      expect(html).toContain("https://inframanagerpro.com");
      expect(html).toContain("https://servitecnology.com");
      expect(html).toContain("https://eaestampa.com");
      expect(html).toContain("EA Estampa (eaestampa.com)");
      expect(html).toContain("cotizaciones y atención automatizadas 24/7 vía WhatsApp impulsadas por IA");
    });
  });

  describe("Pro Section Animations & Motion Accessibility Guardrails (Spec 014)", () => {
    const globalsCss = fs.readFileSync(
      path.join(process.cwd(), "src/app/globals.css"),
      "utf-8"
    );

    it("renders scroll progress bar, lifecycle animation classes and smooth details hooks across sections", () => {
      expect(html).toContain("sc-scroll-progress");
      expect(html).toContain("sc-hero-exit");
      expect(html).toContain("sc-section-flow");
      expect(html).toContain("sc-card-flow");
      expect(html).toContain("sc-row-flow");
      expect(html).toContain("sc-details");
      expect(html).toContain("sc-surface-glow");
      expect(html).toContain("sc-nav-link");
    });

    it("enforces reduced-motion opt-in, progressive feature detection and smooth intrinsic sizing in globals.css", () => {
      expect(globalsCss).toContain("@media (prefers-reduced-motion: no-preference)");
      expect(globalsCss).toContain("@supports ((animation-timeline: view()) and (animation-range: entry))");
      expect(globalsCss).toContain("interpolate-size: allow-keywords");
      expect(globalsCss).toContain("transition-behavior: allow-discrete");
      expect(globalsCss).toContain("cubic-bezier(0.22, 1, 0.36, 1)");
    });

    it("includes horizontal padding on FAQ details and public verification links in AuditGuarantees", () => {
      expect(html).toContain("sc-details sc-row-flow py-6 px-5 -mx-5");
      expect(html).toContain("https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.studiocoders.dev%2F");
      expect(html).toContain("Auditar Core Web Vitals en PageSpeed");
      expect(html).toContain("Auditar Accesibilidad 100/100 en PageSpeed");
    });

    it("keeps GPU-composited animations without filter: blur on scroll-animated elements", () => {
      const css = fs.readFileSync(path.resolve(process.cwd(), "src/app/globals.css"), "utf-8");
      const motionCtrl = fs.readFileSync(
        path.resolve(process.cwd(), "src/components/MotionController.tsx"),
        "utf-8"
      );
      expect(css).not.toContain("filter: blur");
      expect(motionCtrl).not.toContain("filter: blur");
    });
  });
});
