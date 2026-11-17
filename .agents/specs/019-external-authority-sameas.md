# Feature Spec: Incorporación de Perfiles Externos (LinkedIn y Crunchbase) en `sameAs` de Schema.org

> **Ubicación:** `.agents/specs/019-external-authority-sameas.md`  
> **Estado:** En Revisión (Gate 3)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/019-external-authority-sameas.md`](../plans/019-external-authority-sameas.md)

---

## 1. Contexto y Objetivos

Como parte de la **Fase C (Autoridad Externa)** documentada en `docs/authority-network-and-cross-linking-strategy.md`, ya se encuentran publicados y activos los perfiles oficiales de **Studio Coders** en:
- **LinkedIn Company Page:** `https://www.linkedin.com/company/studiocoders-dev`
- **Crunchbase:** `https://www.crunchbase.com/organization/studio-coders`

Actualmente el nodo `ProfessionalService` (`@id: "https://studiocoders.dev/#organization"`) en `src/app/layout.tsx` solo declara `"https://github.com/studiocoders-dev"` dentro de `sameAs`.

**Objetivo:**
Cerrar la validación bidireccional de entidad (*Bidirectional Entity Resolution*) antes de ejecutar la indexación oficial en Google Search Console y Bing Webmaster Tools (Fase D), incorporando LinkedIn, Crunchbase y el paquete npm oficial dentro del arreglo `sameAs` en `src/app/layout.tsx` y cubriéndolo con pruebas automatizadas en `tests/seo-geo-aeo.test.ts`.

---

## 2. Requisitos EARS

- **WHEN** un motor de búsqueda (Google, Bing) o un motor de respuesta IA (ChatGPT Search, Perplexity, Gemini) procese el JSON-LD `@graph` de `studiocoders.dev`, **THE SYSTEM SHALL** incluir en `sameAs` del nodo `https://studiocoders.dev/#organization` las URLs canónicas verificadas:
  - `https://github.com/studiocoders-dev`
  - `https://www.linkedin.com/company/studiocoders-dev`
  - `https://www.crunchbase.com/organization/studio-coders`
  - `https://www.npmjs.com/package/@studiocoders/webhook-verifier`
- **WHEN** se ejecute la suite de pruebas `tests/seo-geo-aeo.test.ts`, **THE SYSTEM SHALL** validar la presencia exacta de dichas URLs en el arreglo `sameAs` de `src/app/layout.tsx` sin romper la validación de Schema.org ni el conteo estricto de palabras del FAQ (`105` palabras).

---

## 3. Definition of Done (DoD) Checklist

- [ ] `src/app/layout.tsx` actualizado con las URLs reales en `sameAs` dentro de `#organization`.
- [ ] `tests/seo-geo-aeo.test.ts` ampliado con test unitario que verifique las URLs de `sameAs`.
- [ ] Gate 4 en verde: `npx tsc --noEmit`, `npm run lint`, `npm test` y `npm run build` ejecutados con `0` errores.
