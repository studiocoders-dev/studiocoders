# Technical Plan: Redacción Abierta de Portafolio en FAQ y Schema.org

> **Ubicación:** `.agents/plans/021-faq-portfolio-open-copy.md`  
> **Spec Asociada:** [`.agents/specs/021-faq-portfolio-open-copy.md`](../specs/021-faq-portfolio-open-copy.md)  
> **Estado:** Esperando Aprobación Humana (Gate 3)

---

## 1. Archivos a Modificar

| Archivo | Cambio Exacto | Justificación |
| :--- | :--- | :--- |
| `src/app/layout.tsx` | En la línea 166 (`FAQPage` pregunta 2), reemplazar `"incluye cinco plataformas"` por `"incluye, entre otras, las siguientes plataformas recientes"`. | Evitar acotar el portafolio a un número fijo en el Schema.org consumido por buscadores e IAs. |
| `src/components/FAQ.tsx` | En la línea 19, reemplazar `"incluye cinco plataformas"` por `"incluye, entre otras, las siguientes plataformas recientes"`. | Mantener paridad exacta entre el contenido visible al usuario y el JSON-LD (`FAQPage`). |
| `tests/seo-geo-aeo.test.ts` | En la línea 113 (`validates Question 2...`), actualizar `expect(words.length).toBe(99)` a `expect(words.length).toBe(103)` y verificar que no contenga `"cinco plataformas"`. | Alinear el test de conteo de palabras con el nuevo copy (+4 palabras). |

---

## 2. Verificación (Gate 4)

Tras la aprobación en Gate 3:
1. `npx tsc --noEmit` → `0` errores.
2. `npm run lint` → `0` errores.
3. `npm test` → toda la suite pasando.
4. `npm run build` → compilación estática exitosa.
