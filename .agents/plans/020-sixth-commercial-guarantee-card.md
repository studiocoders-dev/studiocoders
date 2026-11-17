# Technical Plan: Sexta Tarjeta en `CommercialGuarantees`

> **Ubicación:** `.agents/plans/020-sixth-commercial-guarantee-card.md`  
> **Spec Asociada:** [`.agents/specs/020-sixth-commercial-guarantee-card.md`](../specs/020-sixth-commercial-guarantee-card.md)  
> **Estado:** Esperando Aprobación Humana (Gate 3)

---

## 1. Archivos a Modificar

| Archivo | Cambio Exacto | Justificación |
| :--- | :--- | :--- |
| `src/components/CommercialGuarantees.tsx` | Importar `Layers` (o `Unlock`) desde `lucide-react` y agregar el objeto `06` al arreglo `guarantees`: `title: "Cero vendor lock-in"`, `description: "Arquitectura sobre estándares abiertos desplegada en tus propios repositorios y nube. Sin cajas negras ni dependencias que te aten a un proveedor."`. | Completar la grilla simétrica `3x2` en desktop (`lg:grid-cols-3`) y `2x3` en tablet (`sm:grid-cols-2`) con uno de los pilares obligatorios de `AGENTS.md`. |
| `tests/landing.test.tsx` | Actualizar el test en línea ~264 (`renders CommercialGuarantees multi-industry section...`) para verificar `6` tarjetas, `"06."` y `"Cero vendor lock-in"`. | Mantener cobertura exacta del componente en Gate 4. |

---

## 2. Verificación (Gate 4)

Tras la aprobación en Gate 3:
1. `npx tsc --noEmit` → `0` errores.
2. `npm run lint` → `0` errores.
3. `npm test` → toda la suite pasando.
4. `npm run build` → compilación estática exitosa.
