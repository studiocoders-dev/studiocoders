# Feature Spec: Sincronización de los 4 Estándares de Calidad en `AGENTS.md`, `.agents/rules/frontend-nextjs.md` y `docs/sdd-migration-guide.md`

> **Ubicación:** `.agents/specs/012-agents-md-and-frontend-rules-sync.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/012-agents-md-and-frontend-rules-sync.md`](../plans/012-agents-md-and-frontend-rules-sync.md)

---

## 1. Contexto y Objetivos

Actualmente, los 4 compromisos de calidad verificables (**Core Web Vitals en verde móvil**, **Accesibilidad WCAG 2.1 AA**, **Cero dependencias cautivas / vendor lock-in** y **Pruebas automatizadas + CI/CD en verde**) ya están documentados en la guía de inicialización `docs/sdd-migration-guide.md`, pero no figuran de forma explícita en `AGENTS.md` (el router maestro que la IA lee siempre al iniciar cada sesión) ni con los umbrales técnicos actualizados en `.agents/rules/frontend-nextjs.md`.

Objetivos:
1. Incorporar en `AGENTS.md` una sección concisa (4 líneas) con los **4 Estándares de Calidad Obligatorios** para que estén siempre activos en el contexto base sin inflar el archivo.
2. Actualizar `.agents/rules/frontend-nextjs.md` con los umbrales técnicos verificables de **Core Web Vitals**, **WCAG 2.1 AA** (contraste $\ge 4.5:1$ en texto y botones) y prevención de saltos de línea en navegación (`whitespace-nowrap`).
3. Actualizar `FASE 5` (Construcción del Router Maestro `AGENTS.md`) en `docs/sdd-migration-guide.md` para que, al migrar cualquier proyecto nuevo (como un SaaS con landing), la IA inyecte obligatoriamente esos **4 Estándares de Calidad Obligatorios** en el `AGENTS.md` generado.

---

## 2. Requisitos EARS

- **WHEN** un agente inicie trabajo en el repositorio leyendo `AGENTS.md`, **THE SYSTEM SHALL** exponer de forma directa y concisa los 4 estándares innegociables (Core Web Vitals en verde móvil, Accesibilidad WCAG 2.1 AA, Cero vendor lock-in, y Gate 4 + `.github/workflows/ci.yml` en verde).
- **WHERE** se consulte `.agents/rules/frontend-nextjs.md` al modificar UI o estilos, **THE SYSTEM SHALL** especificar las métricas concretas: contraste WCAG 2.1 AA ($\ge 4.5:1$ en texto normal y botones con `text-white`), `whitespace-nowrap` en ítems de barra de navegación, y Core Web Vitals (`LCP <= 2.5s`, `CLS <= 0.1`, `INP <= 200ms`).
- **WHEN** se realicen estos cambios documentales, **THE SYSTEM SHALL** mantener `AGENTS.md` conciso y sin duplicar el contenido de `docs/sdd-migration-guide.md`.
- **WHERE** se ejecute el Prompt Maestro de `docs/sdd-migration-guide.md` (`FASE 5`), **THE SYSTEM SHALL** exigir que el `AGENTS.md` generado en el nuevo proyecto incluya el punto `6. Estándares de Calidad Obligatorios` con los 4 pilares (Core Web Vitals en verde móvil, Accesibilidad WCAG 2.1 AA, Cero dependencias cautivas / vendor lock-in, y Pruebas automatizadas + CI/CD en verde).

---

## 3. Definition of Done (DoD) Checklist

- [x] `AGENTS.md` actualizado con la sección concisa de los 4 Estándares de Calidad Obligatorios.
- [x] `.agents/rules/frontend-nextjs.md` actualizado en `## 3. Prácticas Obligatorias` con los umbrales de contraste WCAG 2.1 AA, `whitespace-nowrap` y Core Web Vitals.
- [x] `docs/sdd-migration-guide.md` actualizado en `FASE 5` (Prompt Maestro) para inyectar los 4 Estándares de Calidad Obligatorios en todo `AGENTS.md` generado.
- [x] Verificación de integridad (`npx tsc --noEmit`, `npm run lint`, `npm test`) ejecutada con `0` errores.
