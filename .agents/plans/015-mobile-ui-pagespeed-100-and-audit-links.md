# Plan Técnico: Pulido Mobile UI, Copy CTA, PageSpeed Insights en `AuditGuarantees` y Optimización Rendimiento `97 -> 100`

> **Ubicación:** `.agents/plans/015-mobile-ui-pagespeed-100-and-audit-links.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/015-mobile-ui-pagespeed-100-and-audit-links.md`](../specs/015-mobile-ui-pagespeed-100-and-audit-links.md)

---

## 1. Arquitectura de Cambios

### 1.1 `[MODIFY]` `src/components/Navbar.tsx` — Respiro en Mobile (`360px+`)
- En el contenedor principal: usar `px-4 sm:px-8 gap-2 sm:gap-4`.
- En el logo (`studiocoders.dev`): usar `text-[13px] sm:text-sm` y `gap-2 sm:gap-2.5` con `shrink-0`.
- En el CTA `"Cuéntanos tu proyecto"`: usar `px-2.5 sm:px-4 text-[11px] sm:text-xs` manteniendo `whitespace-nowrap` para que en pantallas de `360px` exista separación holgada entre el logo y el botón sin recorte en el borde derecho.

### 1.2 `[MODIFY]` `src/components/Hero.tsx` — Copy CTA & Alineación Móvil + Hero Paint Inmediato
- Cambiar el texto del botón primario de `"Cotizar proyecto (Scope 20 min)"` a **`"Cotizar proyecto en 20 minutos"`**.
- Cambiar el contenedor de acciones a `mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4`.
- Aplicar `w-full sm:w-auto px-5 sm:px-7 text-xs sm:text-sm whitespace-nowrap` en ambos botones (`"Cotizar proyecto en 20 minutos"` y `"Conoce nuestra arquitectura"`) para que en móvil tengan exactamente el mismo ancho, alineados a izquierda y derecha y sin envolver en 2 líneas.
- Quitar `.sc-fade-up` del Hero above-the-fold (o evitar `opacity: 0` inicial en el Hero) para que el viewport inicial se estabilice al `1.4s` junto al FCP/LCP, mejorando directamente el `Speed Index`.

### 1.3 `[MODIFY]` `src/components/AuditGuarantees.tsx` — Enlaces PageSpeed Insights
- Actualizar Card `01.` y Card `02.` para que apunten al reporte directo en vivo:
  - Card `01.`: `linkLabel: "Auditar Core Web Vitals en PageSpeed"`, `linkUrl: "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.studiocoders.dev%2F"`.
  - Card `02.`: `linkLabel: "Auditar Accesibilidad 100/100 en PageSpeed"`, `linkUrl: "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.studiocoders.dev%2F"`.

### 1.4 `[MODIFY]` `src/components/MotionController.tsx` & `src/app/globals.css` — 100% Compositor GPU (Eliminar animaciones no compuestas y reducir `Speed Index`)
- Eliminar `filter: blur(...)` de `.sc-section-flow`, `.sc-card-flow`, `.sc-row-flow`, `.sc-hero-exit` y `@keyframes sc-fade-up-in`, y remover `filter` y `background-color` de `will-change` / listas de transición masivas para resolver la auditoría de Lighthouse *"Evita las animaciones no compuestas — Se encontraron 68 elementos animados"*.
- Mantener animaciones puramente compuestas (`transform` y `opacity`) en entrada (`entering`), foco activo (`active` / `data-vfocus="true"`) y salida (`exiting`).
- Sustituir `box-shadow` animado en `.sc-row-flow[data-vfocus="true"]` por un pseudo-elemento `::before` o borde lateral estático con `opacity`/`transform` compuestos para evitar repintados en scroll.

### 1.5 `[MODIFY]` `next.config.ts` — Reducir CSS Render-Blocking (`~300 ms`)
- Evaluar y habilitar `experimental: { inlineCss: true }` en `next.config.ts` (verificando compatibilidad con TypeScript y `npm run build` en Next.js 16.4.6) para inyectar el CSS crítico en el HTML y eliminar el bloqueo de renderización de red.

### 1.6 `[MODIFY]` `tests/landing.test.tsx` — Actualizar Aserciones (Gate 4)
- Actualizar la aserción de CTA primario a `"Cotizar proyecto en 20 minutos"`.
- Actualizar la verificación de `AuditGuarantees` al enlace `https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.studiocoders.dev%2F`.
- Verificar que `globals.css` y `MotionController.tsx` no usen `filter: blur` en `.sc-section-flow` / `.sc-card-flow` / `.sc-row-flow`.

---

## 2. Archivos a Modificar

- **`[MODIFY]` `src/components/Navbar.tsx`**
- **`[MODIFY]` `src/components/Hero.tsx`**
- **`[MODIFY]` `src/components/AuditGuarantees.tsx`**
- **`[MODIFY]` `src/components/MotionController.tsx`**
- **`[MODIFY]` `src/app/globals.css`**
- **`[MODIFY]` `next.config.ts`** (sujeto a verificación de soporte `inlineCss` en Next.js 16.4.6)
- **`[MODIFY]` `tests/landing.test.tsx`**

---

## 3. Comandos de Verificación (Gate 4 — Tras Aprobación Gate 3)

```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```
