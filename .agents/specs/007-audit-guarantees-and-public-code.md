# Feature Spec: Incorporación de Secciones "Qué Puedes Auditar" y "Código Público Open-Source" (`@studiocoders/webhook-verifier`)

> **Ubicación:** `.agents/specs/007-audit-guarantees-and-public-code.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/007-audit-guarantees-and-public-code.md`](../plans/007-audit-guarantees-and-public-code.md)

---

## 1. Contexto y Objetivos

Para consolidar el posicionamiento de **Studio Coders** como estudio de ingeniería de software de élite y desarmar el escepticismo de clientes y directores técnicos, se incorporarán dos secciones gemelas en la landing page inspiradas en el estándar de transparencia radical:
1. **Garantías Técnicas Auditables ("Qué puedes verificar tú mismo"):** Cuatro compromisos objetivos comprobables por el cliente mediante herramientas públicas estándar de la industria (Lighthouse, WCAG axe, GitHub Actions, Cloudflare/Vercel).
2. **Prueba de Trabajo de Código Abierto ("Código público"):** Exhibición de una librería open-source real creada y mantenida por Studio Coders en **npm** y **GitHub**, diseñada con cero dependencias, tipado estricto en TypeScript y 100% de cobertura en tests unitarios.

---

## 2. Decisión Arquitectónica de la Librería Open-Source

### Selección: `@studiocoders/webhook-verifier`
- **Justificación:**
  - Se alinea directamente con el núcleo de negocio de Studio Coders: plataformas SaaS y Agentes de IA que procesan eventos en tiempo real (Meta / WhatsApp, Stripe, Shopify).
  - La verificación criptográfica de firmas HMAC SHA-256 en Next.js App Router (Streams crudos sin `body-parser`) es un problema real, crítico y de alta relevancia técnica.
  - Al estar implementada con Web Crypto API nativa, opera con **cero dependencias externas**, funciona en runtimes Node.js y Edge (Vercel, Cloudflare Workers), y demuestra maestría en seguridad, tipado genérico y testing.
- **Identificadores Públicos:**
  - **Paquete en npm:** `@studiocoders/webhook-verifier`
  - **Repositorio en GitHub:** `studiocoders-dev/webhook-verifier`
  - **Licencia:** MIT

---

## 3. Especificación de Componentes de UI

### A. `AuditGuarantees.tsx` (`#auditoria` o `#garantias`)
- **Eyebrow:** `GARANTÍAS TÉCNICAS`
- **Titular:** *"Qué puedes verificar tú mismo."*
- **Bajada:** *"No pedimos que confíes en promesas verbales. Cada compromiso de esta lista lo puedes auditar con herramientas públicas desde el día uno."*
- **Los 4 Compromisos:**
  1. **Core Web Vitals en verde, medido en móvil:** Móvil es la prueba real, no una laptop con fibra óptica. Monitoreamos LCP y CLS en dispositivos reales antes de entregar en producción.
  2. **Accesibilidad web WCAG 2.1 AA:** Navegación completa por teclado, estructura semántica para lectores de pantalla y contraste de color auditado.
  3. **Cero dependencias cautivas ni vendor lock-in:** El código, la base de datos y los despliegues viven en tus propias cuentas. Si mañana decides continuar con otro equipo, el sistema sigue corriendo 100% operativo.
  4. **Pruebas automatizadas y CI/CD en verde:** Suite de tests unitarios y tipado estricto en TypeScript ejecutándose en cada commit. Ningún cambio va a producción sin pasar la batería de pruebas.

### B. `PublicCode.tsx` (`#codigo-publico`)
- **Eyebrow:** `CÓDIGO PÚBLICO`
- **Titular:** *"Audita nuestro estándar de ingeniería directamente en el código fuente."*
- **Bajada:** *"No dependes de testimonios ni de presentaciones comerciales. Webhook Verifier es una librería de código abierto que construimos y mantenemos para verificar eventos criptográficos de Meta, WhatsApp y Stripe: tipado estricto en TypeScript, cero dependencias externas y suites de pruebas automatizadas. Inspecciónala, clónala o úsala libremente en tu propio stack."*
- **Bloque de Enlaces:**
  - Caja izquierda: `PAQUETE EN NPM` → `@studiocoders/webhook-verifier` (con enlace externo a npmjs).
  - Caja derecha: `CÓDIGO EN GITHUB` → `studiocoders-dev/webhook-verifier` (con enlace externo a GitHub).
  - Badges informativos: `TypeScript Strict` · `Zero Dependencies` · `MIT License` · `100% Test Coverage`.

---

## 4. Requisitos EARS

- **WHEN** un usuario visite la sección `#garantias`, **THE SYSTEM SHALL** renderizar los 4 compromisos técnicos auditables con diseño editorial de alto contraste.
- **WHEN** un usuario visite la sección `#codigo-publico`, **THE SYSTEM SHALL** presentar los enlaces directos al paquete npm y al repositorio de GitHub de `@studiocoders/webhook-verifier`.
- **WHERE** se inspeccione la estructura de la landing en `src/app/page.tsx`, **THE SYSTEM SHALL** ubicar estas secciones de forma consecutiva entre `#criterio` (Causas de retraso) y `#comparativa`.
- **WHEN** se ejecute la suite de verificación Vitest (`npm test`), **THE SYSTEM SHALL** validar la presencia de ambas secciones, sus enlaces públicos y la ausencia de términos prohibidos.

---

## 5. Definition of Done (DoD) Checklist

- [x] Componente `src/components/AuditGuarantees.tsx` creado y estilizado.
- [x] Componente `src/components/PublicCode.tsx` creado con enlaces a npm y GitHub.
- [x] `src/app/page.tsx` actualizado integrando ambos componentes en la secuencia exacta.
- [x] `tests/landing.test.tsx` actualizado con aserciones para las dos nuevas secciones.
- [x] `npm test`, `npx tsc --noEmit` y `npm run build` aprobados con 0 errores (30/30 tests).
