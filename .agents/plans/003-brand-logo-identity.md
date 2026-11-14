# Plan Técnico: Implementación del Nuevo Isotipo y Favicons de Studio Coders

> **Ubicación:** `.agents/plans/003-brand-logo-identity.md`  
> **Estado:** Implementado  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/003-brand-logo-identity.md`](../specs/003-brand-logo-identity.md)

---

## 1. Resumen de la Implementación (Concepto `< • >`)

Reemplazo integral del isotipo gráfico en todos los puntos de contacto visuales de la aplicación:
1. **Componente de Navegación (`Navbar.tsx`):**
   - Actualización del marcado SVG interno con viewBox `0 0 24 24`:
     - Chevron izquierdo `<`: `path d="m8.5 7-5 5 5 5" stroke="#949aab" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"`
     - Núcleo central IA `•`: `circle cx="12" cy="12" r="2.5" fill="#818cf8"` con halo sutil.
     - Chevron derecho `>`: `path d="m15.5 7 5 5-5 5" stroke="#949aab" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"`
2. **Generación de Assets de Favicon:**
   - Creación de `src/app/icon.svg` en formato vectorial SVG nativo con viewBox `0 0 32 32` y fondo `#14161c`.
   - Script automatizado con Python PIL para renderizar `src/app/favicon.ico` con capas multiresolución de 16x16, 32x32 y 48x48 px.
   - Generación de `src/app/apple-icon.png` a 180x180 px optimizado para pantallas Retina e iOS.
3. **Validación:**
   - Verificación de la suite de pruebas unitarias (`npm test`), typecheck y build de producción con Turbopack.

---

## 2. Archivos a Modificar / Crear

- **`[MODIFY]` `src/components/Navbar.tsx`:**
  - Sustituir el path SVG de la constelación triangular por el nuevo glifo de código e IA.
- **`[MODIFY]` `src/app/icon.svg`:**
  - Reemplazar el SVG del triángulo por el nuevo isotipo vectorial.
- **`[MODIFY]` `src/app/favicon.ico`:**
  - Regenerar el binario `.ico` con el nuevo diseño.
- **`[MODIFY]` `src/app/apple-icon.png`:**
  - Regenerar la imagen PNG de 180x180 px.
- **`[MODIFY]` `tests/landing.test.tsx`:**
  - Asegurar que el Navbar sigue renderizando el logo corporativo sin fallas.

---

## 3. Verificación de Calidad (Gate 4)
- `npm test`
- `npx tsc --noEmit`
- `npm run build`
- `npm run lint`
