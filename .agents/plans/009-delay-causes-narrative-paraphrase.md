# Plan Técnico: Paráfrasis Integral de la Sección de Causas de Retraso

> **Ubicación:** `.agents/plans/009-delay-causes-narrative-paraphrase.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/009-delay-causes-narrative-paraphrase.md`](../specs/009-delay-causes-narrative-paraphrase.md)

---

## 1. Arquitectura de Cambios

### 1.1 `src/components/DelayCauses.tsx`
- **Eyebrow:** Cambiar a `DIAGNÓSTICO TÉCNICO`.
- **Titular:** *"Cuatro decisiones que descarrilan un proyecto de software."*
- **Bajada:** *"Casi ningún retraso se debe a la complejidad del código. La mayoría nace de compromisos apresurados y vicios de gestión asumidos antes de abrir el editor."*
- **Array `causes`:**
  1. `title: "Priorizar el presupuesto más bajo"`
     `description: "La tarifa más económica suele financiar perfiles junior o soluciones improvisadas. El ahorro aparente desaparece en cuanto hay que reescribir la base de datos o corregir arquitectura, pagando dos veces por el mismo sistema."`
  2. `title: "Fijar un precio cerrado sin dimensionar el alcance técnico"`
     `description: "Presupuestar a ciegas es apostar contra la realidad. Cuando surgen los requerimientos verdaderos, el presupuesto inicial revienta y cada ajuste se convierte en una fricción contractual que paraliza el avance."`
  3. `title: "Aceptar meses de desarrollo a oscuras sin despliegues reales"`
     `description: "Esperar seis meses para probar la primera versión es descubrir demasiado tarde que el sistema se programó sobre supuestos falsos. Cada semana sin software vivo en producción es tiempo acumulado de riesgo no validado."`
  4. `title: "Poner intermediarios entre tu visión y los desarrolladores"`
     `description: "Cuando un vendedor promete, un gestor interpreta y programadores remotos intentan descifrar la minuta, el requerimiento original se desvanece. En software, cada capa de intermediación es una distorsión garantizada."`

### 1.2 `tests/landing.test.tsx`
- Actualizar el bloque `describe("Before Hiring Anyone: Por qué los proyectos de software se atrasan", ...)`:
  - Verificar `"Diagnóstico Técnico"`.
  - Verificar `"Cuatro decisiones que descarrilan un proyecto de software."`.
  - Verificar `"Priorizar el presupuesto más bajo"`.
  - Verificar `"Fijar un precio cerrado sin dimensionar el alcance técnico"`.
  - Verificar `"Aceptar meses de desarrollo a oscuras sin despliegues reales"`.
  - Verificar `"Poner intermediarios entre tu visión y los desarrolladores"`.

---

## 2. Archivos a Modificar
- **`[MODIFY]` `src/components/DelayCauses.tsx`**
- **`[MODIFY]` `tests/landing.test.tsx`**

---

## 3. Comandos de Verificación (Gate 4)
```bash
npm test
npx tsc --noEmit
npm run build
npm run lint
```
