# Feature Spec: Paráfrasis Integral y Diferenciación de la Sección de Retrasos en Proyectos

> **Ubicación:** `.agents/specs/009-delay-causes-narrative-paraphrase.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/009-delay-causes-narrative-paraphrase.md`](../plans/009-delay-causes-narrative-paraphrase.md)

---

## 1. Problema y Diagnóstico de Originalidad

La sección actual `src/components/DelayCauses.tsx` contiene una copia literal de los titulares, subtítulos y descripciones de la sección homóloga de `brotherhood.dev`.

### Métrica de Similitud Previa:
- Titular actual: *"Por qué los proyectos de software se atrasan."* (100% idéntico a Brotherhood).
- Bajada: *"Rara vez porque la ingeniería sea difícil. Casi siempre por cuatro decisiones que se toman antes de que exista una línea de código."* (100% idéntico a Brotherhood).
- Los 4 títulos y cuerpos ("Elegir la propuesta más barata...", "Pedir una cotización antes de que alguien entienda el proyecto...", "No ver nada funcionando hasta el final...", "Nunca conocer a quienes escriben el código...") son calcos literales.

---

## 2. Solución Funcional: Nueva Narrativa 100% Original

Reescribir íntegramente la sección bajo la identidad de ingeniería senior de Studio Coders, preservando la agudeza del diagnóstico pero con vocabulario, sintaxis y enfoque originales:

| Elemento | Texto Anterior (Copia Literal) | Nueva Narrativa Original Studio Coders |
| :--- | :--- | :--- |
| **Eyebrow** | `Antes de Contratar a Nadie` | `DIAGNÓSTICO TÉCNICO` |
| **Titular** | *"Por qué los proyectos de software se atrasan."* | **"Cuatro decisiones que descarrilan un proyecto de software."** |
| **Bajada** | *"Rara vez porque la ingeniería sea difícil. Casi siempre por cuatro decisiones que se toman antes de que exista una línea de código."* | *"Casi ningún retraso se debe a la complejidad del código. La mayoría nace de compromisos apresurados y vicios de gestión asumidos antes de abrir el editor."* |
| **Punto 01** | *"Elegir la propuesta más barata..."* | **Título:** `Priorizar el presupuesto más bajo` <br> **Cuerpo:** `La tarifa más económica suele financiar perfiles junior o soluciones improvisadas. El ahorro aparente desaparece en cuanto hay que reescribir la base de datos o corregir arquitectura, pagando dos veces por el mismo sistema.` |
| **Punto 02** | *"Pedir una cotización antes de que alguien entienda el proyecto..."* | **Título:** `Fijar un precio cerrado sin dimensionar el alcance técnico` <br> **Cuerpo:** `Presupuestar a ciegas es apostar contra la realidad. Cuando surgen los requerimientos verdaderos, el presupuesto inicial revienta y cada ajuste se convierte en una fricción contractual que paraliza el avance.` |
| **Punto 03** | *"No ver nada funcionando hasta el final..."* | **Título:** `Aceptar meses de desarrollo a oscuras sin despliegues reales` <br> **Cuerpo:** `Esperar seis meses para probar la primera versión es descubrir demasiado tarde que el sistema se programó sobre supuestos falsos. Cada semana sin software vivo en producción es tiempo acumulado de riesgo no validado.` |
| **Punto 04** | *"Nunca conocer a quienes escriben el código..."* | **Título:** `Poner intermediarios entre tu visión y los desarrolladores` <br> **Cuerpo:** `Cuando un vendedor promete, un gestor interpreta y programadores remotos intentan descifrar la minuta, el requerimiento original se desvanece. En software, cada capa de intermediación es una distorsión garantizada.` |

---

## 3. Requisitos EARS

- **WHEN** un usuario examine la sección `#criterio`, **THE SYSTEM SHALL** renderizar una narrativa 100% original con menos del 5% de coincidencia léxica con Brotherhood.
- **WHERE** se inspeccionen los 4 puntos de diagnóstico, **THE SYSTEM SHALL** utilizar la nueva estructura conceptual (Priorizar presupuesto bajo, Fijar precio a ciegas, Desarrollo a oscuras, Intermediarios).
- **WHEN** se ejecute la suite de verificación Vitest (`npm test`), **THE SYSTEM SHALL** validar las nuevas cadenas textuales y asegurar 0 fallos de regresión.

---

## 4. Definition of Done (DoD) Checklist

- [x] `src/components/DelayCauses.tsx` reescrito con el nuevo titular, bajada y los 4 puntos parafraseados.
- [x] `tests/landing.test.tsx` adaptado para verificar las nuevas aserciones textuales originales (32/32 tests pasados).
- [x] `npm test`, `npx tsc --noEmit` y `npm run build` aprobados con 0 errores.
