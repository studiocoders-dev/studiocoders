# Plan Técnico: Alineación de Posicionamiento Realista, Alcance MVP 30 Días y Hitos Comerciales

> **Ubicación:** `.agents/plans/022-honest-positioning-and-mvp-scope.md`  
> **Spec Asociada:** [`.agents/specs/022-honest-positioning-and-mvp-scope.md`](../specs/022-honest-positioning-and-mvp-scope.md)  
> **Estado:** En Revisión (Gate 3)  
> **Fecha:** Noviembre 2026

---

## 1. Estrategia de Implementación

Se realizará una actualización quirúrgica de copy y reglas comerciales sin alterar la estructura visual, estilos Tailwind, animaciones ni arquitectura de exportación estática (`output: "export"`). Es crítico mantener sincronizado el texto visible de `src/components/FAQ.tsx` con el bloque JSON-LD `FAQPage` en `src/app/layout.tsx` para cumplir con las reglas de `.agents/rules/aeo-seo-metadata.md` y evitar discrepancias en `tests/seo-geo-aeo.test.ts`.

---

## 2. Archivos a Modificar

1. **`.agents/rules/business-positioning.md`**
   - Actualizar sección `1. La Oferta Central & Propuesta de Valor`:
     - Precisar que el Día 30 entrega el **núcleo funcional (MVP en producción: auth, roles, flujo operativo principal y pagos/reportes)**, mientras módulos secundarios, integraciones complejas de hardware/terceros o publicación en tiendas nativas pasan a **Fase 2 / ciclos semanales desde el Día 31**.
     - Explicitar el esquema de pagos por hitos: **5% inicio (arquitectura/repo) → 45% aprobación de Staging (Día 15) → 50% despliegue en Producción (Día 30)**.
     - Ajustar diferenciador a trato directo con el **ingeniero senior** (en singular) que diseña y audita el código con aceleración multi-agente.
     - Aclarar que el año de soporte incluido cubre **garantía técnica, estabilidad y corrección de fallos sobre el alcance entregado**.

2. **`src/app/layout.tsx`**
   - `metadata.description`, `openGraph.description`, `twitter.description` y `ProfessionalService.description`: reemplazar *"desarrolladores senior"* / *"ingenieros senior"* por *"ingeniero senior directo"* o *"ingeniería senior directa"*.
   - `FAQPage` en JSON-LD:
     - Pregunta 1 (`¿Qué es Studio Coders...`): cambiar *"trato directo con desarrolladores senior"* por *"trato directo con un ingeniero senior"*.
     - Pregunta 3 (`¿Cómo es posible tener una primera versión en producción en 30 días?`): cambiar a singular (*"hablas directamente con un ingeniero senior con más de cinco años de experiencia"*) y explicitar que el sprint de 30 días cubre el **núcleo operativo (MVP)** y deja módulos secundarios para Fase 2.

3. **`src/components/CommercialGuarantees.tsx`**
   - Tarjeta `01.`: cambiar *"Nuestro equipo de ingenieros y especialistas acumula..."* por *"Ingeniería senior con más de cinco años diseñando, auditando y desplegando plataformas en producción a medida."*
   - Tarjeta `02. Arrancas con solo el 5%`: explicitar en la descripción el esquema completo: *"Inicias la ingeniería y arquitectura con apenas el 5% del presupuesto aprobado; continúas con 45% al aprobar Staging (Día 15) y 50% al pasar a Producción (Día 30)."*
   - Tarjeta `03. Entrega en 30 días`: aclarar *"pone el núcleo funcional de tu plataforma (MVP) en producción en 30 días, listo para operar y facturar desde el primer mes."*
   - Tarjeta `05. 1 año de soporte incluido`: aclarar *"garantía técnica, estabilidad y corrección de fallos sin costo durante doce meses completos sobre el alcance entregado."*

4. **`src/components/ProcessTimeline.tsx`**
   - Paso `Día 0`: *"con un ingeniero senior"* + *"definimos el núcleo funcional (MVP) que sale en 30 días, dejando módulos secundarios para Fase 2."*
   - Paso `Día 2`: *"inicio con el 5% inicial (45% en Staging Día 15 y 50% en Producción Día 30)."*
   - Paso `Día 30`: *"El núcleo funcional de tu sistema o Agente IA en producción..."*
   - Razón 2: título `"Trato directo con ingeniero senior"` y descripción en singular (*"Hablas directamente con quien diseña la base de datos y audita cada línea de código."*).
   - Razón 3: *"El ingeniero senior audita cada línea..."* (en lugar de *"Los arquitectos senior auditamos..."*).

5. **`src/components/ServicesSection.tsx`**
   - Servicio 02: cambiar título a `"Aplicaciones móviles y Web Apps instalables (PWA)"` y descripción a: *"En 30 días sales operando en teléfonos reales con una Web App instalable (PWA) de alto rendimiento. La publicación nativa en App Store y Google Play se planifica en Fase 2 según los tiempos de revisión de cada tienda."*

6. **`src/components/QuickStepsCTA.tsx`**
   - Paso 01: *"Conversas directamente con un ingeniero senior sobre tu operación y objetivos, sin vendedores intermediarios."*
   - Paso 02: *"activas el desarrollo con solo el 5% inicial (45% al aprobar Staging y 50% en Producción)."*
   - Paso 03: *"recibes el núcleo funcional de tu software desplegado a tu nombre el día 30."*

7. **`src/components/FAQ.tsx`**
   - Sincronizar exactamente con `layout.tsx` JSON-LD las respuestas de la Pregunta 1 (`¿Qué es Studio Coders...`), Pregunta 3 (`¿Cómo es posible tener una primera versión en producción en 30 días?`) y Pregunta 6 (`¿Cómo funcionan los pagos...?`, agregando el desglose `5% inicio → 45% Staging → 50% Producción`).

8. **`tests/landing.test.tsx`**
   - Actualizar las aserciones afectadas:
     - `ServicesSection`: validar `"Aplicaciones móviles y Web Apps instalables (PWA)"` y mención a `"Fase 2"`.
     - `ProcessTimeline`: validar `"Trato directo con ingeniero senior"`.
     - `layout.tsx` metadata: validar `"ingeniero senior"` / `"ingeniería senior"`.
     - `CommercialGuarantees`: validar presencia de `"5%"`, `"45%"`, `"50%"` y `"garantía técnica"` / `"corrección de fallos"`.

---

## 3. Verificación (Gate 4)

Ejecutar y confirmar `0` errores tras aplicar los cambios:
1. `npx tsc --noEmit`
2. `npm run lint`
3. `npm test`
4. `npm run build`
