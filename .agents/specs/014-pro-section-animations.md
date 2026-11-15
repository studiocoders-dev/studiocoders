# Feature Spec: Sistema de Animaciones Profesionales (Sutil-Intermedio) en Entrada, Durante y Salida para las 12 Secciones

> **Ubicación:** `.agents/specs/014-pro-section-animations.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/014-pro-section-animations.md`](../plans/014-pro-section-animations.md)

---

## 1. Contexto y Objetivos

La landing page de `studiocoders.dev` cuenta con una arquitectura sólida en Next.js 16 (App Router) y Tailwind CSS 4 inspirada en estética dark-mode de ingeniería (Linear, Vercel, Raycast y Brotherhood.dev). Sin embargo, las transiciones actuales se limitan a cambios básicos de color en `:hover` y un `animate-pulse` puntual en el Hero, mientras que los acordeones `<details>` en Portafolio y FAQ se abren de forma abrupta y las secciones carecen de coreografía de entrada, permanencia activa y salida durante el scroll.

Siguiendo los principios de **Design Engineering** de `skills.sh` (`emilkowalski/skills`, `ibelick/ui-skills`, `aicodedecode/motion`) y las guías nativas de la plataforma web (`modern-web-guidance`: CSS Scroll-Driven Animations, `::details-content` con `interpolate-size`, `@starting-style`, `sibling-index()` y respeto estricto a `prefers-reduced-motion`), se implementará un sistema integral de movimiento de nivel **sutil-intermedio** en los 12 componentes de la página sin sacrificar **React Server Components (RSC)**, **Core Web Vitals en móvil** (`LCP <= 2.5s`, `CLS <= 0.1`, `INP <= 200ms`) ni **Accesibilidad WCAG 2.1 AA (`100/100`)**.

Objetivos:
1. Establecer en `src/app/globals.css` un sistema de tokens y utilidades de animación en el hilo compositor de la GPU (`transform`, `opacity`) con curvas de precisión (`cubic-bezier(0.22, 1, 0.36, 1)`), timelines de scroll nativos (`animation-timeline: scroll()` y `animation-timeline: view()`) y soporte de degradación progresiva (`@supports` y `@media (prefers-reduced-motion: no-preference)`).
2. Aplicar animaciones diferenciadas de **Entrada**, **Durante (scroll activo, hover, focus e interacción)** y **Salida** en las 12 secciones de `studiocoders.dev`: `Navbar`, `Hero`, `ServicesSection`, `ProcessTimeline`, `PortfolioShowcase`, `DelayCauses`, `AuditGuarantees`, `PublicCode`, `ComparisonTable`, `FAQ`, `ContactForm` y `Footer`.
3. Incorporar apertura y cierre fluido nativo en los elementos `<details>` de `PortfolioShowcase` y `FAQ` mediante `::details-content`, `interpolate-size: allow-keywords` y `transition-behavior: allow-discrete`.
4. Garantizar cero regresiones en SSR/RSC, cero dependencias externas adicionales y validación automatizada mediante la suite de pruebas en Vitest.

---

## 2. Requisitos EARS

- **WHEN** el usuario navegue y haga scroll a lo largo de la página en un navegador moderno sin restricción de movimiento, **THE SYSTEM SHALL** ejecutar animaciones de entrada (`entry`), permanencia (`contain`/hover) y salida (`exit`) en el hilo compositor (`transform`, `opacity`) utilizando curvas `cubic-bezier(0.22, 1, 0.36, 1)` y `animation-timeline: view()` con `animation-range` calibrado.
- **WHEN** se renderice el `Hero` en la carga inicial, **THE SYSTEM SHALL** mantener el `<h1>` y el subtítulo editorial inmediatamente visibles para proteger el `LCP <= 2.5s` en móvil, aplicando coreografía escalonada (*stagger*) en el eyebrow badge, CTAs y métricas de confianza, respiración ambiental en el glow superior y parallax sutil de salida al hacer scroll hacia `#servicios`.
- **WHEN** el usuario desplace el documento verticalmente, **THE SYSTEM SHALL** actualizar una barra superior de progreso de lectura en `Navbar` impulsada por `animation-timeline: scroll(root)` y aplicar micro-interacciones direccionales en los enlaces y CTA.
- **WHEN** el usuario abra o cierre un acordeón `<details>` en `PortfolioShowcase` o `FAQ`, **THE SYSTEM SHALL** animar suavemente la altura intrínseca de `::details-content` usando `interpolate-size: allow-keywords`, `contain: layout` y `transition-behavior: allow-discrete`, además de revelar escalonadamente las especificaciones técnicas internas del portafolio.
- **WHEN** el usuario interactúe con filas y tarjetas en `ServicesSection`, `ProcessTimeline`, `DelayCauses`, `AuditGuarantees`, `PublicCode` y `ComparisonTable`, **THE SYSTEM SHALL** responder con micro-desplazamientos de índices monoespaciados, iluminación de bordes índigo, progresión visual de hitos (`Día 0` a `Cada semana`), trayectorias diagonales en iconos externos y entrada escalonada por índice de hermano (`--stagger-index` / `sibling-index()`).
- **WHEN** el usuario envíe el formulario en `ContactForm`, **THE SYSTEM SHALL** animar la transición del estado de confirmación mediante `@starting-style` y trazado progresivo del icono de verificación.
- **WHEN** una fila `<details>` de `FAQ` (*"Respuestas directas, sin rodeos."*) reciba el estado activo de foco de lectura (`data-vfocus="true"`) con barra lateral índigo (`inset 3px 0 0 #818cf8`), **THE SYSTEM SHALL** mantener padding horizontal suficiente (`px-5 -mx-5 rounded-md` o equivalente) para que ni la pregunta ni el párrafo de respuesta queden pegados a la barra lateral púrpura.
- **WHEN** se rendericen las tarjetas `01.` (Core Web Vitals) y `02.` (Accesibilidad WCAG 2.1 AA) de `AuditGuarantees` (*"Qué puedes verificar tú mismo."*), **THE SYSTEM SHALL** incluir enlaces externos verificables (`target="_blank"` y `rel="noopener noreferrer"`) hacia las herramientas públicas de auditoría usadas para medirlos (**Google PageSpeed Insights** en `https://pagespeed.web.dev/` y **WAVE WebAIM** en `https://wave.webaim.org/`).
- **WHERE** el sistema operativo o navegador del usuario tenga activo `@media (prefers-reduced-motion: reduce)`, **THE SYSTEM SHALL** desactivar desplazamientos espaciales, escalados y animaciones continuas de scroll, manteniendo el 100% del contenido visible en su estado final estático y conservando únicamente transiciones suaves de color/foco.
- **WHERE** un navegador no soporte `animation-timeline: view()` o `interpolate-size: allow-keywords`, **THE SYSTEM SHALL** aplicar mejora progresiva mediante `@supports`, mostrando todos los bloques con `opacity: 1` y funcionalidad completa sin contenido oculto ni saltos de layout (`CLS = 0`).

---

## 3. Definition of Done (DoD) Checklist

- [x] Sistema de variables de curva (`--ease-out-expo`), keyframes de entrada/durante/salida, barra de progreso de scroll y animación de `::details-content` implementado en `src/app/globals.css` con `@media (prefers-reduced-motion: no-preference)` y `@supports`.
- [x] Animaciones aplicadas en los 12 componentes: `Navbar.tsx`, `Hero.tsx`, `ServicesSection.tsx`, `ProcessTimeline.tsx`, `PortfolioShowcase.tsx`, `DelayCauses.tsx`, `AuditGuarantees.tsx`, `PublicCode.tsx`, `ComparisonTable.tsx`, `FAQ.tsx`, `ContactForm.tsx` y `Footer.tsx`.
- [x] Todos los componentes de servidor permanecen como React Server Components (únicamente `ContactForm.tsx` usa `'use client'`).
- [x] Suite de pruebas unitarias actualizada en `tests/landing.test.tsx` verificando la presencia de las clases/atributos del sistema de animaciones y el cumplimiento de accesibilidad (`prefers-reduced-motion`).
- [x] Padding horizontal de respiro aplicado en las filas de `FAQ.tsx` para separar los textos de la barra lateral púrpura en estado `data-vfocus="true"`.
- [x] Enlaces públicos de verificación agregados en `AuditGuarantees.tsx` (Card `01.` -> `https://pagespeed.web.dev/`, Card `02.` -> `https://wave.webaim.org/`) y cubiertos en `tests/landing.test.tsx`.
- [x] Verificación de integridad (`npx tsc --noEmit`, `npm run lint`, `npm test`, `npm run build`) ejecutada con `0` errores tras los ajustes.
