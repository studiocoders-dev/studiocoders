# Feature Spec: Alineación de Posicionamiento Realista, Alcance MVP 30 Días y Hitos Comerciales

> **Ubicación:** `.agents/specs/022-honest-positioning-and-mvp-scope.md`  
> **Estado:** En Revisión (Gate 3)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/022-honest-positioning-and-mvp-scope.md`](../plans/022-honest-positioning-and-mvp-scope.md)

---

## 1. Contexto y Objetivos

La operación comercial actual de Studio Coders combina un ingeniero senior principal asistido por orquestación multi-agente (SDD) para entregar primeras versiones productivas en 30 días. Al contrastar los guiones de video marketing y la promesa comercial con la capacidad operativa real, se detectaron 5 desajustes en el copy público de la landing y en la regla comercial `.agents/rules/business-positioning.md` que pueden generar expectativas irreales:

1. **Plural innecesario:** Referencias a *"equipo de ingenieros"*, *"ingenieros senior"*, *"arquitectos senior"* o *"desarrolladores senior"* en plural cuando el trato es directo con el ingeniero senior responsable del proyecto.
2. **Gancho del 5% sin hitos visibles:** Se comunica *"Arrancas con solo el 5%"* sin explicitar el esquema completo de hitos (`5%` inicio → `45%` al aprobar Staging en Día 15 → `50%` al pasar a Producción en Día 30).
3. **Apps móviles nativas en 30 días:** `ServicesSection` promete *"Aplicaciones móviles para iOS y Android — Una sola base de código para ambas tiendas"* sin diferenciar que en 30 días se entrega como **Web App instalable (PWA)** operativa en terreno, mientras la publicación en App Store y Google Play corresponde a Fase 2 por tiempos de revisión externos.
4. **Alcance de 30 días (MVP Core vs. Fase 2):** Falta explicitar en `ProcessTimeline`, `CommercialGuarantees` y `FAQ` que los 30 días cubren el **núcleo funcional (MVP en producción: autenticación, roles, flujo operativo principal y pagos/reportes)**, dejando módulos secundarios o integraciones de hardware/terceros complejos para iteraciones semanales o Fase 2 desde el Día 31.
5. **Alcance del año de soporte:** En `CommercialGuarantees`, la tarjeta `05. 1 año de soporte incluido` debe acotar explícitamente que cubre **garantía técnica, estabilidad y corrección de fallos sobre el alcance entregado** (sin incluir nuevas funcionalidades fuera de alcance).

**Objetivo:**
Actualizar el copy de la landing, los metadatos/JSON-LD (`layout.tsx`), la regla `.agents/rules/business-positioning.md` y la suite de pruebas `tests/landing.test.tsx` para reflejar con 100% de honestidad operativa la oferta de Studio Coders sin perder fuerza de conversión B2B.

---

## 2. Requisitos EARS

- **WHEN** un visitante lea cualquier sección de la landing (`Hero`, `CommercialGuarantees`, `ProcessTimeline`, `ServicesSection`, `QuickStepsCTA`, `FAQ`) o los metadatos/JSON-LD (`layout.tsx`), **THE SYSTEM SHALL** referirse al interlocutor técnico en singular o como ingeniería senior directa (*"ingeniero senior directo"*, *"trato directo con tu ingeniero senior"*), eliminando promesas de múltiples desarrolladores o equipos de ingenieros en plural (manteniendo intacta la crítica a intermediarios en `DelayCauses.tsx`).
- **WHEN** se presente la modalidad de pago inicial (`CommercialGuarantees`, `QuickStepsCTA`, `ProcessTimeline`, `FAQ`), **THE SYSTEM SHALL** mantener el gancho del `5%` inicial e informar explícitamente el esquema completo de hitos: `5%` al aprobar arquitectura/inicio, `45%` al validar Staging (Día 15) y `50%` al pasar a Producción (Día 30).
- **WHEN** se muestre el servicio móvil en `ServicesSection`, **THE SYSTEM SHALL** precisar que en 30 días se despliega como Web App móvil instalable (PWA) lista para operar en teléfonos reales, y que la publicación nativa en App Store y Google Play se aborda como Fase 2 sujeta a revisión de las tiendas.
- **WHEN** se describa la entrega en 30 días (`CommercialGuarantees`, `ProcessTimeline`, `FAQ`, `layout.tsx`), **THE SYSTEM SHALL** dejar explícito que el sprint de 30 días entrega el **núcleo funcional en producción (MVP)** —auth, roles, flujo operativo principal y pagos/reportes— y que módulos adicionales o integraciones complejas pasan a Fase 2 / ciclos semanales a partir del Día 31.
- **WHEN** se muestre la tarjeta `05.` en `CommercialGuarantees`, **THE SYSTEM SHALL** mantener el título `"1 año de soporte incluido"` y especificar en su descripción que cubre garantía técnica, estabilidad y corrección de fallos sobre el alcance entregado.
- **WHEN** se actualice `.agents/rules/business-positioning.md`, **THE SYSTEM SHALL** sincronizar la regla comercial con estos 5 criterios (trato directo con ingeniero senior, hitos `5% / 45% / 50%`, MVP Core en 30 días vs. Fase 2, PWA en 30 días vs. tiendas nativas en Fase 2, y garantía técnica de 12 meses).
- **WHEN** se ejecute `tests/landing.test.tsx`, **THE SYSTEM SHALL** validar el nuevo copy actualizado y mantener el resto de los invariantes SEO/AEO y de marca.

---

## 3. Definition of Done (DoD) Checklist

- [ ] `.agents/rules/business-positioning.md` actualizado con los lineamientos comerciales honestos.
- [ ] `src/app/layout.tsx` (metadata + JSON-LD `FAQPage` y `ProfessionalService`) actualizado sin plurales engañosos y con alcance MVP / hitos claros.
- [ ] `src/components/CommercialGuarantees.tsx` actualizado (tarjeta `01.` singular/estudio, `02.` hitos `5% / 45% / 50%`, `03.` MVP en producción, `05.` garantía de estabilidad/fallos).
- [ ] `src/components/ProcessTimeline.tsx` actualizado (singular en ingeniero senior, alcance núcleo MVP en Día 0 y Día 30, hitos en Día 2, Fase 2 desde Día 31).
- [ ] `src/components/ServicesSection.tsx` actualizado (PWA móvil en 30 días vs. publicación nativa App Store/Google Play en Fase 2).
- [ ] `src/components/QuickStepsCTA.tsx` y `src/components/FAQ.tsx` actualizados en sintonía con el JSON-LD y las garantías.
- [ ] `tests/landing.test.tsx` actualizado para reflejar el nuevo copy y verificar los ajustes.
- [ ] Gate 4 en verde: `npx tsc --noEmit`, `npm run lint`, `npm test` y `npm run build` con `0` errores.
