# Feature Spec: Sexta Tarjeta en `CommercialGuarantees` (`Cero vendor lock-in`)

> **Ubicación:** `.agents/specs/020-sixth-commercial-guarantee-card.md`  
> **Estado:** En Revisión (Gate 3)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/020-sixth-commercial-guarantee-card.md`](../plans/020-sixth-commercial-guarantee-card.md)

---

## 1. Contexto y Objetivos

La sección `#respaldo` (`src/components/CommercialGuarantees.tsx`) utiliza una grilla responsiva de 3 columnas en escritorio (`lg:grid-cols-3`) y 2 columnas en tablet (`sm:grid-cols-2`). Actualmente renderiza 5 tarjetas (`01.` a `05.`), dejando un espacio vacío en la segunda fila en desktop y un ítem huérfano en tablet.

De acuerdo con el estándar #3 de `AGENTS.md` (*"Cero dependencias cautivas ni vendor lock-in: código estándar, repositorios y servicios cloud 100% portables"*), el pilar comercial/técnico que mejor complementa las garantías existentes (`01.` Experiencia, `02.` Inicio 5%, `03.` 30 días, `04.` 100% a tu nombre, `05.` 1 año de soporte) es **Cero vendor lock-in** (`06.`), resolviendo la objeción B2B de portabilidad técnica e independencia del proveedor.

**Objetivo:**
Agregar la tarjeta `06.` **`Cero vendor lock-in`** en `src/components/CommercialGuarantees.tsx` para lograr una grilla simétrica `3x2` en escritorio y `2x3` en tablet, actualizando la cobertura de `tests/landing.test.tsx`.

---

## 2. Requisitos EARS

- **WHEN** se renderice la sección `#respaldo` (`CommercialGuarantees`), **THE SYSTEM SHALL** mostrar exactamente `6` tarjetas numeradas del `01.` al `06.`, cerrando la grilla de 3 columnas en escritorio sin espacios vacíos.
- **WHEN** se muestre la tarjeta `06.`, **THE SYSTEM SHALL** presentar el título `"Cero vendor lock-in"`, un ícono de `lucide-react` coherente (`Unlock` o `Layers`, con `aria-hidden="true"`), y una descripción concisa que comunique portabilidad total sobre estándares abiertos, repositorios y nube propia del cliente sin dependencias cautivas.
- **WHEN** se ejecute `tests/landing.test.tsx`, **THE SYSTEM SHALL** verificar la presencia de las 6 tarjetas incluyendo `"06."` y `"Cero vendor lock-in"`.

---

## 3. Definition of Done (DoD) Checklist

- [ ] `src/components/CommercialGuarantees.tsx` actualizado con la tarjeta `06. Cero vendor lock-in`.
- [ ] `tests/landing.test.tsx` actualizado para validar las 6 tarjetas.
- [ ] Gate 4 en verde: `npx tsc --noEmit`, `npm run lint`, `npm test` y `npm run build` con `0` errores.
