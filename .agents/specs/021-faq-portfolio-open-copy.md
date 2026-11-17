# Feature Spec: Redacción Abierta de Portafolio en FAQ y Schema.org (`FAQPage`)

> **Ubicación:** `.agents/specs/021-faq-portfolio-open-copy.md`  
> **Estado:** En Revisión (Gate 3)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/021-faq-portfolio-open-copy.md`](../plans/021-faq-portfolio-open-copy.md)

---

## 1. Contexto y Objetivos

Actualmente, la pregunta 2 de la sección de Preguntas Frecuentes (`src/components/FAQ.tsx`) y su espejo estructurado `FAQPage` en JSON-LD (`src/app/layout.tsx`) indican que el portafolio de Studio Coders *"incluye cinco plataformas operando en alta concurrencia"*.

Limitar explícitamente el portafolio a un número fijo (`"cinco"`) reduce la percepción de trayectoria del estudio frente a clientes B2B. Se requiere actualizar la redacción a una formulación abierta (*"incluye, entre otras, las siguientes plataformas recientes"*), manteniendo exactamente los 5 casos de estudio citados con sus enlaces canónicos y ajustando el conteo de palabras validado en `tests/seo-geo-aeo.test.ts`.

---

## 2. Requisitos EARS

- **WHEN** un usuario lea la pregunta 2 en `src/components/FAQ.tsx` o un motor de IA/búsqueda procese el nodo `FAQPage` de `src/app/layout.tsx`, **THE SYSTEM SHALL** presentar el texto `"El portafolio de ingeniería de Studio Coders probado en batalla incluye, entre otras, las siguientes plataformas recientes operando en alta concurrencia:"` seguido de los cinco casos de estudio en producción (`whagil.com`, `whalinkbot.com`, `inframanagerpro.com`, `servitecnology.com`, `eaestampa.com`).
- **WHEN** se ejecute `tests/seo-geo-aeo.test.ts`, **THE SYSTEM SHALL** verificar que el texto de la pregunta 2 en `src/app/layout.tsx` tiene exactamente `103` palabras, no contiene la palabra `"cinco plataformas"` ni términos prohibidos, y mantiene los enlaces canónicos requeridos.

---

## 3. Definition of Done (DoD) Checklist

- [ ] `src/app/layout.tsx` actualizado con la redacción abierta en `FAQPage`.
- [ ] `src/components/FAQ.tsx` actualizado con la misma redacción en la UI visible.
- [ ] `tests/seo-geo-aeo.test.ts` actualizado al nuevo conteo de `103` palabras.
- [ ] Gate 4 en verde: `npx tsc --noEmit`, `npm run lint`, `npm test` y `npm run build` con `0` errores.
