import React from "react";
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
        "En dos semanas tu software o Agente IA está en producción."
      );
    });

    it("renders the Santiago, Chile geographical badge", () => {
      expect(html).toContain(
        "Santiago, Chile · Trabajamos con toda Latinoamérica"
      );
    });

    it("renders the editorial subhead clarifying real production vs demo/mockup", () => {
      expect(html).toContain("No un mockup ni una demo");
      expect(html).toContain(
        "abrir y usar el día catorce. Después iteramos contigo cada semana hasta terminarlo."
      );
    });

    it("renders the primary CTA with prompt to tell project", () => {
      expect(html).toContain("Cuéntanos tu proyecto");
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
      expect(html).toContain("Por qué dos semanas es posible");
      expect(html).toContain("Un stack fijo que dominamos");
      expect(html).toContain("Reuniones directas con ingenieros senior");
      expect(html).toContain("Aceleración con IA bajo revisión humana");
      expect(html).toContain("Propiedad total desde el primer commit");
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
  });

  describe("Strict Brand & Positioning Guardrails (Unbreakable Rules)", () => {
    it("displays official B2B operating entity and USD billing", () => {
      expect(html).toContain("Jesús León Soluciones Informáticas");
      expect(html).toContain("Facturación B2B en USD");
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
      expect(metadata.title).toContain("Studio Coders");
      expect(metadata.title).toContain("14 días");
      expect(metadata.description).toContain("Santiago de Chile");
      expect(metadata.description).toContain("desarrolladores senior");
    });
  });
});
