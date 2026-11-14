# Plan Técnico: Implementación de Secciones "Qué Puedes Auditar" y "Código Público Open-Source"

> **Ubicación:** `.agents/plans/007-audit-guarantees-and-public-code.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/007-audit-guarantees-and-public-code.md`](../specs/007-audit-guarantees-and-public-code.md)

---

## 1. Arquitectura de Cambios

### 1.1 Nuevo Componente: `src/components/AuditGuarantees.tsx`
- **Sección:** `#auditoria`
- **Estructura:**
  - Header con Eyebrow `GARANTÍAS TÉCNICAS` y Headline *"Qué puedes verificar tú mismo."*
  - Bajada en Newsreader serif.
  - Grid de 4 tarjetas o bloques verticales con numeración mono (`01.`, `02.`, `03.`, `04.`):
    1. Core Web Vitals en verde, medido en móvil.
    2. Accesibilidad web WCAG 2.1 AA.
    3. Cero ataduras ni dependencias cautivas.
    4. Pruebas automatizadas y CI/CD en verde.

### 1.2 Nuevo Componente: `src/components/PublicCode.tsx`
- **Sección:** `#codigo-publico`
- **Estructura:**
  - Header con Eyebrow `CÓDIGO PÚBLICO` y Headline *"Audita nuestro estándar de ingeniería directamente en el código fuente."*
  - Párrafo explicativo de la librería open-source `@studiocoders/webhook-verifier` (Web Crypto nativo, zero dependencies, validación HMAC para Meta, WhatsApp y Stripe).
  - Bloque dividido en 2 columnas con bordes `#2e3340` y fondo `#1c1f28`/60:
    - Columna 1: `PAQUETE EN NPM` → enlace a `https://www.npmjs.com/package/@studiocoders/webhook-verifier`
    - Columna 2: `CÓDIGO EN GITHUB` → enlace a `https://github.com/studiocoders-dev/webhook-verifier`
  - Badges de arquitectura: `MIT License` · `Zero Dependencies` · `TypeScript Strict` · `100% Test Coverage`.

### 1.3 Secuencia en `src/app/page.tsx`
Insertar ambos componentes inmediatamente después de `DelayCauses` y antes de `ComparisonTable`:
```tsx
<Hero />
<ServicesSection />
<ProcessTimeline />
<PortfolioShowcase />
<DelayCauses />
<AuditGuarantees />
<PublicCode />
<ComparisonTable />
<FAQ />
<ContactForm />
```

### 1.4 Pruebas Unitarias (`tests/landing.test.tsx`)
- Añadir suite `describe("Audit Guarantees: Qué puedes verificar tú mismo")` validando los 4 compromisos.
- Añadir suite `describe("Public Code: Código Abierto y Proof of Work")` validando los enlaces a npm y GitHub.

---

## 2. Archivos a Modificar / Crear
- **`[CREATE]` `src/components/AuditGuarantees.tsx`**
- **`[CREATE]` `src/components/PublicCode.tsx`**
- **`[MODIFY]` `src/app/page.tsx`**
- **`[MODIFY]` `tests/landing.test.tsx`**

---

## 3. Comandos de Verificación (Gate 4)
```bash
npm test
npx tsc --noEmit
npm run build
npm run lint
```
