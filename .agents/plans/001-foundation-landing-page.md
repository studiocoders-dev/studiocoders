# Plan Técnico: Landing Page Principal de Studio Coders (`studiocoders.dev`)

> **Ubicación:** `.agents/plans/001-foundation-landing-page.md`  
> **Estado:** Implementado  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/001-foundation-landing-page.md`](../specs/001-foundation-landing-page.md)

---

## 1. Resumen de la Arquitectura & Sistema de Diseño (Inspiración Brotherhood.dev + Electric Purple)
Implementación de la landing page sobre **Next.js 16 (App Router)** utilizando Server Components para la entrega de HTML estático ultra-rápido y mínimo JS en el cliente.
- **Tipografías nativas (`next/font/google`):**
  - Display / Titulares: `Archivo` (`--font-archivo`)
  - Subtítulos y prosa editorial: `Newsreader` (`--font-newsreader`, serif elegante)
  - Monospace / Badges técnicos: `IBM_Plex_Mono` (`--font-mono`)
- **Tokens de Color (Adaptación de Brotherhood.dev a Electric Purple `#6366f1`):**
  - `--color-ink`: `#14161c` (Fondo de página ultra-dark graphite)
  - `--color-raise`: `#1c1f28` (Superficie de tarjetas y contenedores)
  - `--color-raise-2`: `#242835` (Hover en tarjetas y botones secundarios)
  - `--color-line`: `#2e3340` (Bordes finos y divisores sutiles)
  - `--color-paper`: `#edeff4` (Texto principal de alto contraste)
  - `--color-muted`: `#949aab` (Texto secundario y explicativo)
  - `--color-faint`: `#818799` (Etiquetas y placeholders de baja jerarquía)
  - `--color-brand`: `#6366f1` (Púrpura eléctrico / Indigo 500 extraído de la muestra del usuario)
  - `--color-brand-hover`: `#4f46e5` (Estado activo/hover del botón principal)
  - `--color-brand-text`: `#818cf8` (Texto de acento y enlaces sobre fondo oscuro)
  - `--color-brand-wash`: `rgba(99, 102, 241, 0.12)` (Fondo translúcido para el badge y selecciones)
- **SEO/AEO:** Generación de metadatos mediante `generateMetadata` de Next.js y componente estructurado JSON-LD (`ProfessionalService`, `FAQPage`, `SoftwareApplication`) en `src/app/layout.tsx`.

---

## 2. Archivos a Modificar / Crear

- **`[MODIFY]` `src/app/layout.tsx`:**
  - Configuración de fuentes optimizadas, títulos dinámicos, meta tags OpenGraph / Twitter Cards y JSON-LD estructurado.
- **`[MODIFY]` `src/app/globals.css`:**
  - Definición de variables de color dark theme, estilos de selección y scrollbar sutil.
- **`[MODIFY]` `src/app/page.tsx`:**
  - Composición de la landing integrando todas las secciones modulares.
- **`[NEW]` `src/components/Navbar.tsx`:**
  - Barra superior fija con efecto backdrop-blur y botón CTA.
- **`[NEW]` `src/components/Hero.tsx`:**
  - Titular principal, propuesta de valor de 14 días y badges visuales.
- **`[NEW]` `src/components/ProcessTimeline.tsx`:**
  - El flujo de 4 fases (Día 0, 2, 7 y 14).
- **`[NEW]` `src/components/PortfolioShowcase.tsx`:**
  - Tarjetas de los 4 proyectos canónicos (Whagil, Whalinkbot, Infra Manager Pro, Servitecnology).
- **`[NEW]` `src/components/ComparisonTable.tsx`:**
  - Tabla comparativa de Studio Coders vs. Agencias vs. Freelancers.
- **`[NEW]` `src/components/FAQ.tsx`:**
  - Acordeón de preguntas frecuentes con soporte semántico para LLMs.
- **`[NEW]` `src/components/Footer.tsx`:**
  - Datos de contacto, razón social y enlaces.
- **`[NEW]` `tests/landing.test.ts`:**
  - Pruebas automatizadas con Vitest verificando existencia y consistencia de los datos del portafolio y la promesa de entrega.

---

## 3. Pruebas Unitarias y Verificación
- Comando de pruebas: `npm test`
- Verificación de tipos: `npx tsc --noEmit`
- Verificación de compilación: `npm run build`
