# Feature Spec: Pulido Mobile UI (`Navbar` y `Hero`), Copy CTA, Enlaces PageSpeed en `AuditGuarantees` y Optimización Rendimiento Móvil `97 -> 100`

> **Ubicación:** `.agents/specs/015-mobile-ui-pagespeed-100-and-audit-links.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/015-mobile-ui-pagespeed-100-and-audit-links.md`](../plans/015-mobile-ui-pagespeed-100-and-audit-links.md)

---

## 1. Contexto y Objetivos

Las pruebas reales en dispositivo móvil y el reporte de PageSpeed Insights (`97/100` Rendimiento, `100/100` Accesibilidad, `100/100` Recomendaciones, `100/100` SEO, `3/3` Navegación con agentes) revelaron cuatro mejoras concretas:

1. **Colisión visual en `Navbar` móvil (`~360px`):** El botón `"Cuéntanos tu proyecto"` queda demasiado pegado al logo `studiocoders.dev` y se recorta en el borde derecho.
2. **Desalineación y copy del CTA primario en `Hero` móvil:** El botón `"Cotizar proyecto (Scope 20 min)"` envuelve en dos líneas y queda desalineado en ancho respecto a `"Conoce nuestra arquitectura"`. Se requiere cambiar el texto a `"Cotizar proyecto en 20 minutos"` y alinear ambos botones al mismo ancho en móvil.
3. **Enlaces de auditoría en `AuditGuarantees` (`01.` y `02.`):** El visor web de `wave.webaim.org` falla con `This page couldn't load` por su proxy remoto; se migra la Card `02.` (y se apunta también la Card `01.`) al reporte directo de `studiocoders.dev` en **Google PageSpeed Insights**.
4. **Rendimiento Móvil `97 -> 100/100` (`Speed Index` `4.5s`):** El reporte de Lighthouse muestra `FCP 1.4s`, `LCP 1.4s`, `TBT 10ms` y `CLS 0`, pero `Speed Index` en `4.5s` debido a:
   - Solicitudes de bloqueo de renderización CSS (`~300 ms`).
   - Elementos del `Hero` above-the-fold iniciando con `opacity: 0` / `filter: blur(4px)` en `.sc-fade-up`.
   - Animaciones no compuestas (`filter: blur(...)` y `box-shadow` en 68 elementos) reportadas por Lighthouse.

---

## 2. Requisitos EARS

- **WHEN** el `Navbar` se renderice en viewports móviles (`360px`–`430px`), **THE SYSTEM SHALL** mantener una separación clara entre el logo `studiocoders.dev` y el botón `"Cuéntanos tu proyecto"` sin desbordamiento horizontal ni recorte del botón.
- **WHEN** se renderice el `Hero` en dispositivos móviles (`< sm`), **THE SYSTEM SHALL** mostrar el botón primario con el texto exacto `"Cotizar proyecto en 20 minutos"` y alinear verticalmente ambos botones CTA con ancho uniforme (`w-full sm:w-auto`), evitando saltos de línea no deseados.
- **WHEN** un visitante haga clic en los enlaces de verificación de las tarjetas `01.` y `02.` de `AuditGuarantees`, **THE SYSTEM SHALL** abrir el análisis en vivo de **Google PageSpeed Insights** (`https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.studiocoders.dev%2F`).
- **WHEN** la página cargue y se anime en dispositivos móviles, **THE SYSTEM SHALL** mantener todo el bloque above-the-fold del `Hero` visible sin `opacity: 0` inicial ni `filter: blur()`, limitar las animaciones de scroll a propiedades compuestas en GPU (`transform` y `opacity`) eliminando `filter: blur()` de las transiciones de scroll, y habilitar `experimental.inlineCss` (si soportado por Next.js 16) para reducir el `Speed Index` y el bloqueo de renderización CSS.

---

## 3. Definition of Done (DoD) Checklist

- [x] `Navbar.tsx` ajustado en espaciado móvil para evitar colisión entre logo y CTA.
- [x] `Hero.tsx` actualizado con el texto `"Cotizar proyecto en 20 minutos"` y alineación `w-full sm:w-auto` en ambos botones CTA.
- [x] `AuditGuarantees.tsx` actualizado para que las cards `01.` y `02.` enlacen a `https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.studiocoders.dev%2F`.
- [x] `MotionController.tsx`, `globals.css` y `next.config.ts` optimizados (animaciones 100% compuestas `transform`/`opacity` sin `filter: blur()` ni `opacity: 0` above-the-fold, más CSS inline crítico si aplica).
- [x] `tests/landing.test.tsx` actualizado con el nuevo texto del CTA, el enlace de PageSpeed Insights y verificación de ausencia de `filter: blur` en transiciones compuestas.
- [x] `npx tsc --noEmit`, `npm run lint`, `npm test` y `npm run build` pasando con `0` errores.
