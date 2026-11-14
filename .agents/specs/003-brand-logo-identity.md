# Feature Spec: Rediseño del Isotipo y Favicon Exclusivo para Studio Coders (`studiocoders.dev`)

> **Ubicación:** `.agents/specs/003-brand-logo-identity.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/003-brand-logo-identity.md`](../plans/003-brand-logo-identity.md)

---

## 1. Problema y Diagnóstico de Marca

El isotipo actual (triángulo de 3 nodos interconectados) comparte excesiva similitud con la marca gráfica de `brotherhood.dev`. 
Para una firma de ingeniería de software e inteligencia artificial de alto ticket, es indispensable contar con una **identidad visual propia, memorable y diferenciada** que:
1. Elimine cualquier riesgo de confusión visual con Brotherhood.
2. Comunique los dos pilares nucleares de Studio Coders: **Código Robusto (Software)** e **Inteligencia Artificial (Agentes Autónomos)**.
3. Se adapte con alta legibilidad tanto a micro-escalas (Favicon de 16x16 px) como en la barra de navegación (`Navbar`) y redes sociales (180x180 px).

---

## 2. Concepto Visual Seleccionado: El Núcleo de Código & Agente IA `[ < • > ]`

- **Geometría y Composición:**
  - **Chevrons de Código (`<` y `>`):** Dos ángulos simétricos limpios con `stroke-width: 2` o `2.5`, bordes redondeados (`stroke-linecap="round"`), tono grafito/plata claro (`#edeff4` / `#949aab`), representando software robusto, arquitecturas limpias y compilación estricta.
  - **Núcleo de Inteligencia Artificial (`•`):** Un nodo circular central con diámetro balanceado, relleno sólido en púrpura eléctrico (`#6366f1`) y brillo en `#818cf8`, simbolizando el agente autónomo orquestando la lógica interna.
  - **Contenedor:** Cuadrado redondeado (`rounded-lg`) en `#1c1f28` con borde fino `#2e3340` y efecto hover con resplandor púrpura tenue.
- **Diferenciación:**
  - 0% de coincidencia geométrica con el triángulo/constelación de Brotherhood.
  - Identidad propia e instantáneamente reconocible como estudio de software e IA.
  - Legibilidad 100% nítida incluso a 16x16 píxeles en el Favicon.

---

## 3. Requisitos EARS

- **WHEN** un usuario visualice la barra de navegación (`Navbar`), **THE SYSTEM SHALL** renderizar el isotipo `< • >` en un contenedor estilizado con chevrons y núcleo púrpura interactivo.
- **WHEN** un navegador solicite `/favicon.ico`, `/icon.svg` o `/apple-icon.png`, **THE SYSTEM SHALL** entregar la iconografía `< • >` con fondo `#14161c` y máxima nitidez vectorial y rasterizada.
- **WHERE** se ejecute la suite de pruebas automatizadas, **THE SYSTEM SHALL** certificar la correcta presencia y estructura de los assets.

---

## 4. Definition of Done (DoD) Checklist

- [x] Isotipo SVG `< • >` implementado en [`src/components/Navbar.tsx`](file:///home/angel/Developer/studiocoders/src/components/Navbar.tsx).
- [x] [`src/app/icon.svg`](file:///home/angel/Developer/studiocoders/src/app/icon.svg) regenerado con el vector `< • >`.
- [x] [`src/app/favicon.ico`](file:///home/angel/Developer/studiocoders/src/app/favicon.ico) generado con capas multiresolución (16x16, 32x32, 48x48) con `< • >`.
- [x] [`src/app/apple-icon.png`](file:///home/angel/Developer/studiocoders/src/app/apple-icon.png) generado a 180x180 px.
- [x] Suite de pruebas Vitest (`npm test`) pasando con 100% de éxito (24/24 tests).
- [x] Compilación Turbopack (`npm run build`) y typecheck (`npx tsc --noEmit`) con 0 errores.
