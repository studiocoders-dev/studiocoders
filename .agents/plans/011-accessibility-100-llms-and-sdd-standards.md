# Plan Técnico: Accesibilidad 100/100, `llms.txt` 3/3, Navbar `whitespace-nowrap` y Reglas CWV + A11y en SDD

> **Ubicación:** `.agents/plans/011-accessibility-100-llms-and-sdd-standards.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/011-accessibility-100-llms-and-sdd-standards.md`](../specs/011-accessibility-100-llms-and-sdd-standards.md)

---

## 1. Arquitectura de Cambios

### 1.1 Contraste WCAG 2.1 AA ($\ge 4.5:1$) para Accesibilidad 100/100
- **Texto secundario (`#818799` -> `#9ea5b8`):** `#818799` sobre `#1c1f28` tiene ~4.0:1 (falla WCAG AA). `#9ea5b8` logra ~6.4:1 sobre `#1c1f28` y ~7.4:1 sobre `#14161c`.
  - Actualizar `--color-faint` en `src/app/globals.css` y todas las clases `text-[#818799]` / `placeholder-[#818799]/60` en:
    - `src/components/Hero.tsx`
    - `src/components/ComparisonTable.tsx`
    - `src/components/PublicCode.tsx`
    - `src/components/PortfolioShowcase.tsx`
    - `src/components/ContactForm.tsx` (usar `placeholder-[#9ea5b8]/80`)
    - `src/components/Footer.tsx`
- **Botones primarios con `text-white` (`bg-[#6366f1]` -> `bg-[#4f46e5]`):** `#6366f1` con blanco da ~4.45:1 (< 4.5:1). `#4f46e5` (hover `#4338ca`) supera ~6.2:1 manteniendo la identidad índigo.
  - Actualizar `bg-[#6366f1]` + `hover:bg-[#4f46e5]` por `bg-[#4f46e5]` + `hover:bg-[#4338ca]` en botones/iconos con `text-white` de:
    - `src/components/Navbar.tsx`
    - `src/components/Hero.tsx`
    - `src/components/ContactForm.tsx`

### 1.2 `Navbar.tsx` sin saltos de línea indeseados
- Agregar `whitespace-nowrap` a los enlaces de navegación (`nav > a`) y al CTA `"Cuéntanos tu proyecto"` en `src/components/Navbar.tsx`, además de ajustar `gap-6 lg:gap-8` si es necesario para evitar desbordamiento en viewports `md`.

### 1.3 `public/llms.txt` según especificación `llmstxt.org` (3/3 Navegación agéntica)
- Estructurar `public/llms.txt` con:
  - `# Studio Coders`
  - Un único `> blockquote` de un párrafo resumiendo la firma, propuesta de 14 días, stack y datos legales.
  - Secciones `##` únicamente con listas `- [Nombre](URL): descripción` hacia secciones y plataformas del portafolio (`https://studiocoders.dev/#servicios`, `#proceso`, `#proyectos`, `#comparativa`, `#faq`, `#contacto`, `https://whagil.com`, `https://whalinkbot.com`, `https://inframanagerpro.com`, `https://servitecnology.com`, `https://eaestampa.com`, `https://github.com/studiocoders-dev`).

### 1.4 Reglas mandatorias en `docs/sdd-migration-guide.md`
- Incorporar en la estructura base de reglas (`.agents/rules/frontend-ui.md` y/o `quality-standards.md`) y en el **Prompt Maestro** el mandato explícito de incluir siempre estándares verificables de:
  - **Core Web Vitals** (LCP $\le 2.5\text{s}$, CLS $\le 0.1$, INP $\le 200\text{ms}$, fuentes con `display: swap`, cero recursos bloqueantes innecesarios).
  - **Accesibilidad web WCAG 2.1 AA** (contraste $\ge 4.5:1$, landmarks semánticos, jerarquía única de headings, navegación por teclado y atributos ARIA correctos).

---

## 2. Archivos a Modificar

- **`[MODIFY]` `src/app/globals.css`**
- **`[MODIFY]` `src/components/Navbar.tsx`**
- **`[MODIFY]` `src/components/Hero.tsx`**
- **`[MODIFY]` `src/components/ComparisonTable.tsx`**
- **`[MODIFY]` `src/components/PublicCode.tsx`**
- **`[MODIFY]` `src/components/PortfolioShowcase.tsx`**
- **`[MODIFY]` `src/components/ContactForm.tsx`**
- **`[MODIFY]` `src/components/Footer.tsx`**
- **`[MODIFY]` `public/llms.txt`**
- **`[MODIFY]` `docs/sdd-migration-guide.md`**
- **`[MODIFY]` `tests/seo-geo-aeo.test.ts`** (agregar test de validación de estructura `llmstxt.org` en `public/llms.txt`)

---

## 3. Comandos de Verificación (Gate 4)

```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```
