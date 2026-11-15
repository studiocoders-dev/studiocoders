# Plan Técnico: Sistema de Animaciones Profesionales (Sutil-Intermedio) en las 12 Secciones

> **Ubicación:** `.agents/plans/014-pro-section-animations.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/014-pro-section-animations.md`](../specs/014-pro-section-animations.md)

---

## 1. Arquitectura de Cambios

### 1.1 `[MODIFY]` `src/app/globals.css` — Motor CSS Nativo de Movimiento (Zero-JS Overhead)
Definir la arquitectura de animación basada en `skills.sh` (`emilkowalski/skills`, `ibelick/ui-skills`) y las guías de `modern-web-guidance` (`scroll-entry-exit-effects`, `motion`, `dynamic-sibling-animations`, `accordion`, `animate-to-intrinsic-sizes`, `animate-element-entry-exit`, `scroll-progress-indicator`):

1. **Tokens de Timing y Curvas (`:root`):**
   - `--ease-out-expo: cubic-bezier(0.22, 1, 0.36, 1);` (curva principal para entradas, hovers y acordeones).
   - `--ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);`
   - `interpolate-size: allow-keywords;` en `:root` (protegido bajo `@media (prefers-reduced-motion: no-preference)`) para habilitar transiciones hacia `block-size: auto`.

2. **Barra de Progreso de Scroll en Header (`.sc-scroll-progress`):**
   - Elemento decorativo (`aria-hidden="true"`) con `transform-origin: 0 50%` y `@keyframes sc-grow-progress` (`scaleX(0)` -> `scaleX(1)`), vinculado a `animation-timeline: scroll(block root)` dentro de `@supports (animation-timeline: scroll())`.

3. **Ciclo Completo de Sección y Tarjetas (`entry` · `contain` · `exit` con `animation-timeline: view()`):**
   - Protegido dentro de `@media (prefers-reduced-motion: no-preference)` y `@supports ((animation-timeline: view()) and (animation-range: entry))`:
   - `.sc-section-flow`: `@keyframes sc-section-lifecycle` con fase `entry 0%` (`opacity: 0; translate: 0 18px`), fase activa `entry 100%, exit 0%` (`opacity: 1; translate: 0 0`) y fase `exit 100%` (`opacity: 0.32; translate: 0 -12px`).
   - `.sc-card-flow`: `@keyframes sc-card-lifecycle` con `entry 0%` (`opacity: 0; translate: 0 20px; scale: 0.985`), `entry 100%, exit 0%` (`opacity: 1; translate: 0 0; scale: 1`), `exit 100%` (`opacity: 0.35; translate: 0 -10px; scale: 0.99`), soportando desfase escalonado mediante `--stagger-index` y `sibling-index()`.
   - `.sc-row-flow`: Revelado progresivo de filas de lista/tabla (`ServicesSection`, `ProcessTimeline`, `ComparisonTable`, `FAQ`) durante `entry` y atenuación suave en `exit`.
   - `.sc-hero-exit`: Efecto parallax sutil de salida para el contenedor del `Hero` (`animation-range: exit 0% exit 100%`) sin retrasar el primer pintado (LCP) del `<h1>`.

4. **Coreografía de Entrada Inicial y Ambiental (`.sc-fade-up`, `.sc-ambient-orb`):**
   - `.sc-fade-up`: Animación de entrada con `--stagger-index` (`calc(var(--stagger-index, 0) * 65ms)` y soporte progresivo `calc(sibling-index() * 65ms)`) para elementos secundarios del Hero y métricas.
   - `.sc-ambient-orb`: Respiración lenta (`8s ease-in-out infinite alternate`) del glow superior.

5. **Acordeones Nativos Fluidos (`.sc-details` y `::details-content`):**
   - `details.sc-details::details-content`: `overflow: clip; contain: layout;` con `details.sc-details:not([open])::details-content { block-size: 0; }`.
   - En `@media (prefers-reduced-motion: no-preference)`: transición de `block-size`, `opacity` y `content-visibility` en `0.28s var(--ease-out-expo)` con `transition-behavior: allow-discrete` declarado por separado después de `transition`.

6. **Micro-interacciones de Superficie y `@starting-style` (`.sc-surface-glow`, `.sc-starting-reveal`, `.sc-check-draw`):**
   - `.sc-surface-glow`: Transición de borde e iluminación interior radial sutil en `:hover` y `:focus-within` con curva `--ease-out-expo`.
   - `.sc-starting-reveal`: Uso de `@starting-style` (`opacity: 0; translate: 0 8px; scale: 0.98`) para la vista de confirmación de `ContactForm` y aperturas dinámicas.
   - `.sc-check-draw`: Animación de `stroke-dashoffset` para el check de envío exitoso.

---

### 1.2 Aplicación por Sección en `src/components/`

1. **`[MODIFY]` `src/components/Navbar.tsx`**
   - Agregar barra superior `<div aria-hidden="true" className="sc-scroll-progress ..." />`.
   - Añadir subrayado direccional animado en enlaces de navegación (`after:origin-left after:scale-x-0 hover:after:scale-x-100`) y transición con curva `--ease-out-expo` en el logo y CTA primario.

2. **`[MODIFY]` `src/components/Hero.tsx`**
   - Mantener `<h1>` y `<p>` principal con visibilidad inmediata (100% LCP safe).
   - Aplicar `.sc-ambient-orb` al glow púrpura superior, `.sc-hero-exit` al bloque principal para salida suave en scroll, y `.sc-fade-up` con `--stagger-index` en el eyebrow badge, grupo de CTAs y las 4 columnas de métricas (`14 Días`, `100% Tuyo`, `Senior Direct`, `USD B2B`).

3. **`[MODIFY]` `src/components/ServicesSection.tsx`**
   - Aplicar `.sc-section-flow` al encabezado de sección.
   - Aplicar `.sc-row-flow` con `--stagger-index` a cada una de las 5 soluciones (`01.` a `05.`), con micro-desplazamiento horizontal (`group-hover:translate-x-1`) en el índice monoespaciado y título durante `:hover`.

4. **`[MODIFY]` `src/components/ProcessTimeline.tsx`**
   - Aplicar `.sc-section-flow` al encabezado, `.sc-row-flow` a los 4 hitos (`Día 0`, `Día 2`, `Día 14`, `Cada semana`) con indicador visual de nodo activo en hover/scroll, y `.sc-card-flow` + `.sc-surface-glow` a las 4 tarjetas de *"¿Cómo logramos entregar en 14 días?"*.

5. **`[MODIFY]` `src/components/PortfolioShowcase.tsx`**
   - Aplicar `.sc-section-flow` al encabezado y `.sc-details sc-card-flow sc-surface-glow` a cada `<details>` de los 5 sistemas en producción.
   - Escalonar las 4 cajas internas de `specs` al desplegar el detalle técnico.

6. **`[MODIFY]` `src/components/DelayCauses.tsx`**
   - Aplicar `.sc-section-flow` al encabezado y `.sc-card-flow sc-surface-glow` con `--stagger-index` a las 4 tarjetas del diagnóstico técnico, con micro-transición del índice `01.–04.` en hover.

7. **`[MODIFY]` `src/components/AuditGuarantees.tsx`**
   - Aplicar `.sc-section-flow` al encabezado y `.sc-card-flow sc-surface-glow` con `--stagger-index` a las 4 garantías verificables, incluyendo un indicador luminoso sutil junto al índice numérico en hover.
   - Agregar enlaces públicos de verificación con `target="_blank"` y `rel="noopener noreferrer"` y micro-animación de flecha diagonal (`↗`) al pie de las cards `01.` y `02.`:
     - Card `01.` (**Core Web Vitals en verde, medido en móvil**): enlace a **Google PageSpeed Insights** (`https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fstudiocoders.dev` o `https://pagespeed.web.dev/` — usar `https://pagespeed.web.dev/` con texto `"Auditar en PageSpeed Insights"`).
     - Card `02.` (**Accesibilidad web WCAG 2.1 AA**): enlace a **WAVE WebAIM** (`https://wave.webaim.org/` con texto `"Auditar en WAVE (WCAG 2.1 AA)"`).

8. **`[MODIFY]` `src/components/PublicCode.tsx`**
   - Aplicar `.sc-section-flow` al encabezado, `.sc-card-flow sc-surface-glow` al contenedor dividido (`npm` / `GitHub`) y animación escalonada en los badges inferiores (`TypeScript Strict`, `Zero Dependencies`, `MIT License`, `100% Test Coverage`).

9. **`[MODIFY]` `src/components/ComparisonTable.tsx`**
   - Aplicar `.sc-section-flow` al encabezado, `.sc-card-flow` al contenedor de la tabla y `.sc-row-flow` a cada fila `<tr>`, con micro-escala en los iconos de check de la columna **Studio Coders** al hacer hover en la fila.

10. **`[MODIFY]` `src/components/FAQ.tsx`**
    - Aplicar `.sc-section-flow` al encabezado y `.sc-details sc-row-flow` a cada uno de los 8 `<details>`, logrando apertura/cierre suave mediante `::details-content`.
    - Agregar padding horizontal de respiro (`px-5 -mx-5 sm:px-6 sm:-mx-6 rounded-md`) en cada `<details>` (y mantener alineado el texto sin pegarse al `inset 3px 0 0 #818cf8` cuando `data-vfocus="true"` ilumina la fila).

11. **`[MODIFY]` `src/components/ContactForm.tsx`**
    - Aplicar `.sc-section-flow` al encabezado, `.sc-card-flow sc-surface-glow` al contenedor del formulario, y `.sc-starting-reveal` + `.sc-check-draw` al estado `submitted`.

12. **`[MODIFY]` `src/components/Footer.tsx`**
    - Aplicar revelado suave de entrada sin animación de salida (ancla final del documento) y micro-transiciones limpias en enlaces de GitHub y correo.

---

### 1.3 `[MODIFY]` `tests/landing.test.tsx` — Suite de Pruebas Unitarias (Gate 4)
Agregar un bloque `describe("Pro Section Animations & Motion Accessibility Guardrails", ...)` que verifique:
1. Presencia de la barra de progreso de scroll (`.sc-scroll-progress` con `aria-hidden="true"`) en `Navbar`.
2. Aplicación de las clases de ciclo de vida de animación (`.sc-section-flow`, `.sc-card-flow`, `.sc-row-flow`, `.sc-details`) en las secciones renderizadas.
3. Existencia de las reglas `@media (prefers-reduced-motion: no-preference)`, `@supports ((animation-timeline: view()) and (animation-range: entry))`, `interpolate-size: allow-keywords` y `transition-behavior: allow-discrete` en `src/app/globals.css`.
4. Presencia de los enlaces públicos de auditoría en `AuditGuarantees` (`https://pagespeed.web.dev/` y `https://wave.webaim.org/`) y del espaciado horizontal (`px-5`) en los ítems `<details>` de `FAQ`.

---

## 2. Archivos a Modificar

- **`[NEW]` `src/components/MotionController.tsx`**
- **`[MODIFY]` `src/app/page.tsx`**
- **`[MODIFY]` `src/app/globals.css`**
- **`[MODIFY]` `src/components/Navbar.tsx`**
- **`[MODIFY]` `src/components/Hero.tsx`**
- **`[MODIFY]` `src/components/ServicesSection.tsx`**
- **`[MODIFY]` `src/components/ProcessTimeline.tsx`**
- **`[MODIFY]` `src/components/PortfolioShowcase.tsx`**
- **`[MODIFY]` `src/components/DelayCauses.tsx`**
- **`[MODIFY]` `src/components/AuditGuarantees.tsx`**
- **`[MODIFY]` `src/components/PublicCode.tsx`**
- **`[MODIFY]` `src/components/ComparisonTable.tsx`**
- **`[MODIFY]` `src/components/FAQ.tsx`**
- **`[MODIFY]` `src/components/ContactForm.tsx`**
- **`[MODIFY]` `src/components/Footer.tsx`**
- **`[MODIFY]` `tests/landing.test.tsx`**

---

## 3. Comandos de Verificación (Gate 4 — Tras Aprobación Gate 3)

```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```
