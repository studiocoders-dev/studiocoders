# Plan Técnico: Landing Page Principal de Studio Coders (`studiocoders.dev`)

> **Ubicación:** `.agents/plans/001-foundation-landing-page.md`  
> **Estado:** Borrador  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/001-foundation-landing-page.md`](../specs/001-foundation-landing-page.md)

---

## 1. Resumen de la Arquitectura
Implementación de la landing page sobre **Next.js 16 (App Router)** utilizando Server Components para la entrega de HTML estático ultra-rápido, minimizando la hidratación en el cliente.
- **Estilos:** Tailwind CSS 4 con utilidades personalizadas para fondos oscuros (`#070B14`, `#0B0F19`), bordes de baja opacidad (`border-white/10`) y efectos de resplandor.
- **Tipografía:** Integración de Google Fonts con `next/font` (`Inter` para lectura y `Geist_Mono` para badges/métricas).
- **SEO/AEO:** Generación de metadatos mediante `generateMetadata` de Next.js y componente estructurado JSON-LD en `src/app/layout.tsx`.

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
