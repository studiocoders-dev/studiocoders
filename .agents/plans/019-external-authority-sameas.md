# Technical Plan: Incorporación de LinkedIn, Crunchbase y npm en `sameAs`

> **Ubicación:** `.agents/plans/019-external-authority-sameas.md`  
> **Spec Asociada:** [`.agents/specs/019-external-authority-sameas.md`](../specs/019-external-authority-sameas.md)  
> **Estado:** Esperando Aprobación Humana (Gate 3)

---

## 1. Archivos a Modificar

| Archivo | Cambio Exacto | Justificación |
| :--- | :--- | :--- |
| `src/app/layout.tsx` | Ampliar el arreglo `sameAs` en el nodo `@id: "https://studiocoders.dev/#organization"` (líneas 88–90) agregando `https://www.linkedin.com/company/studiocoders-dev`, `https://www.crunchbase.com/organization/studio-coders` y `https://www.npmjs.com/package/@studiocoders/webhook-verifier`. | Consolidar el Grafo de Entidades (Knowledge Graph) de Studio Coders antes de la indexación en Google Search Console y Bing Webmaster Tools. |
| `tests/seo-geo-aeo.test.ts` | Agregar bloque `describe("External Authority sameAs Links")` verificando que `src/app/layout.tsx` contenga las 4 URLs esperadas dentro de `sameAs`. | Garantizar mediante pruebas automatizadas (Gate 4) que los enlaces externos de autoridad no se pierdan en futuros cambios. |

---

## 2. Verificación (Gate 4)

Tras la aprobación en Gate 3 y aplicación de los cambios:
1. `npx tsc --noEmit` → `0` errores.
2. `npm run lint` → `0` errores.
3. `npm test` → toda la suite de Vitest pasando (incluyendo el nuevo test de `sameAs`).
4. `npm run build` → compilación de producción (`out/`) exitosa sin errores.
