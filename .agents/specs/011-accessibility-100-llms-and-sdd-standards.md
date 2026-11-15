# Feature Spec: Accesibilidad 100/100 (WCAG 2.1 AA), `llms.txt` 3/3, Navbar `whitespace-nowrap` y Estándares Core Web Vitals + A11y en SDD

> **Ubicación:** `.agents/specs/011-accessibility-100-llms-and-sdd-standards.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/011-accessibility-100-llms-and-sdd-standards.md`](../plans/011-accessibility-100-llms-and-sdd-standards.md)

---

## 1. Contexto y Objetivos

Las auditorías de PageSpeed Insights (móvil) y Lighthouse local sobre `studiocoders.dev` arrojaron:
- **Accesibilidad:** `96/100` (única falla: contraste insuficiente entre fondo y primer plano en texto secundario `#818799` sobre superficies `#1c1f28` / `#14161c` y botones primarios `bg-[#6366f1] text-white`).
- **Navegación agéntica (Lighthouse 13):** `2/3` (`llms.txt no sigue las recomendaciones` de `llmstxt.org`).
- **UI Navbar (ancho medio con DevTools abierto):** Los enlaces de navegación y el botón CTA `"Cuéntanos tu proyecto"` hacen salto de línea en varias filas.
- **Estandarización SDD (`docs/sdd-migration-guide.md`):** Se requiere incorporar **Core Web Vitals** y **Accesibilidad web WCAG 2.1 AA** como reglas obligatorias para todo nuevo proyecto o migración iniciada con la metodología SDD.

Objetivos:
1. Llevar **Accesibilidad a 100/100** cumpliendo relación de contraste WCAG 2.1 AA ($\ge 4.5:1$).
2. Llevar **Navegación agéntica a 3/3** ajustando `public/llms.txt` estrictamente al estándar `llmstxt.org`.
3. Evitar saltos de línea indeseados en los ítems del `Navbar` agregando `whitespace-nowrap`.
4. Incorporar reglas mandatorias de **Core Web Vitals** y **Accesibilidad web WCAG 2.1 AA** en `docs/sdd-migration-guide.md`.

---

## 2. Requisitos EARS

- **WHEN** se rendericen textos secundarios sobre `#14161c` o `#1c1f28` y botones primarios con texto blanco (`#ffffff`), **THE SYSTEM SHALL** usar colores con relación de contraste mínima WCAG 2.1 AA ($\ge 4.5:1$), reemplazando `#818799` por `#9ea5b8` (y placeholders con opacidad suficiente) y `bg-[#6366f1]` en botones con `text-white` por `bg-[#4f46e5]` (hover `hover:bg-[#4338ca]`).
- **WHEN** un agente de IA o Lighthouse 13 inspeccione `/llms.txt`, **THE SYSTEM SHALL** servir `public/llms.txt` cumpliendo la especificación oficial de `llmstxt.org`: un encabezado `# H1`, un único bloque `> blockquote` descriptivo de un párrafo, y secciones `##` compuestas por listas `- [Título](URL): descripción`.
- **WHEN** el `Navbar` se muestre en viewports medianos/estrechos de escritorio (`md`), **THE SYSTEM SHALL** mantener cada enlace y botón CTA en una sola línea mediante `whitespace-nowrap`.
- **WHERE** se consulte `docs/sdd-migration-guide.md`, **THE SYSTEM SHALL** incluir reglas obligatorias de **Core Web Vitals** (LCP $\le 2.5\text{s}$, CLS $\le 0.1$, INP $\le 200\text{ms}$, imágenes optimizadas) y **Accesibilidad web WCAG 2.1 AA** (contraste $\ge 4.5:1$, HTML semántico, foco visible, `aria-*`) tanto en la anatomía/reglas SDD como en el Prompt Maestro.

---

## 3. Definition of Done (DoD) Checklist

- [x] Contraste WCAG 2.1 AA ($\ge 4.5:1$) aplicado en `globals.css`, `Navbar.tsx`, `Hero.tsx`, `ComparisonTable.tsx`, `PublicCode.tsx`, `PortfolioShowcase.tsx`, `ContactForm.tsx` y `Footer.tsx`.
- [x] `public/llms.txt` validado con estructura estricta `llmstxt.org`.
- [x] `Navbar.tsx` actualizado con `whitespace-nowrap` en enlaces y CTA.
- [x] `docs/sdd-migration-guide.md` actualizado con reglas mandatorias de Core Web Vitals y Accesibilidad web WCAG 2.1 AA.
- [x] Suite completa (`npx tsc --noEmit`, `npm run lint`, `npm test`, `npm run build`) ejecutada y en verde (`0` errores).
