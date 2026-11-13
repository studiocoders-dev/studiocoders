---
description: Regla madre del ciclo de desarrollo Spec-Driven Development (SDD) con 4 Hard Code-Gates
trigger: model_decision
---

# Regla Madre: SDD Workflow & 4 Hard Code-Gates

## 1. Principios Clave
Este repositorio opera bajo el estándar **Spec-Driven Development (SDD)**. Está terminantemente prohibido realizar cambios directos en el código fuente (`src/`, `components/`, etc.) sin atravesar las 4 compuertas formales de desarrollo.

## 2. Los 4 Hard Code-Gates Innegociables
1. **Gate 1 (Spec Obligatoria - El "Qué"):**
   - Redactar o actualizar `.agents/specs/<feat>.md`.
   - Explica el problema de negocio/UX, la solución funcional, la sintaxis EARS y el checklist de **Definition of Done (DoD)**.
   - **PROHIBIDO** incluir código de implementación en este paso.

2. **Gate 2 (Plan Técnico - El "Cómo"):**
   - Redactar o actualizar `.agents/plans/<feat>.md`.
   - Detalla los archivos a modificar (`[MODIFY]`, `[NEW]`, `[DELETE]`), modelos de datos, contratos y suite de tests unitarios que certificarán el DoD.

3. **Gate 3 (Parada Humana Obligatoria):**
   - La IA tiene **TERMINANTEMENTE PROHIBIDO** escribir código en el mismo turno en que propone el Plan.
   - **DEBE** detener su ejecución y esperar la aprobación explícita del usuario.

4. **Gate 4 (Testing Mandate & Verificación DoD):**
   - Ejecutar la suite de pruebas automatizadas (`npm test`) y typechecking (`npx tsc --noEmit`) con 0 errores.
   - Actualizar el estado del Spec a `Completado` y marcar los checks `- [x]` del DoD.

## 3. Anti-Patrones Prohibidos
- **Anti-patrón:** Saltarse el Spec y empezar a editar componentes de Next.js directamente.
- **Anti-patrón:** Cerrar una tarea sin correr `npm test` ni verificar que el build de Next.js pase.
