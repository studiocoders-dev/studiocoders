# Plan Técnico: Sincronización de Estándares de Calidad en `AGENTS.md` y `.agents/rules/frontend-nextjs.md`

> **Ubicación:** `.agents/plans/012-agents-md-and-frontend-rules-sync.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/012-agents-md-and-frontend-rules-sync.md`](../specs/012-agents-md-and-frontend-rules-sync.md)

---

## 1. Arquitectura de Cambios

### 1.1 `[MODIFY]` `AGENTS.md`
Agregar una sección breve (`## ✅ Estándares de Calidad Obligatorios`) inmediatamente después de los 4 Hard Code-Gates (o junto al Router de Reglas), con 4 viñetas de 1 línea cada una:
1. **Core Web Vitals en verde (móvil):** `LCP <= 2.5s`, `CLS <= 0.1`, `INP <= 200ms`.
2. **Accesibilidad web WCAG 2.1 AA:** contraste $\ge 4.5:1$, HTML semántico y foco visible (`100/100` en Lighthouse).
3. **Cero dependencias cautivas ni vendor lock-in:** código estándar, repositorios y servicios cloud 100% portables.
4. **Pruebas automatizadas y CI/CD en verde:** Gate 4 local + pipeline [`.github/workflows/ci.yml`](.github/workflows/ci.yml) pasando sin errores.

### 1.2 `[MODIFY]` `.agents/rules/frontend-nextjs.md`
Ampliar `## 3. Prácticas Obligatorias` para dejar explícitos los detalles operativos aprendidos y validados en producción:
- **Accesibilidad WCAG 2.1 AA (`100/100`):** relación de contraste mínima $\ge 4.5:1$ en textos secundarios y botones primarios con `text-white` (ej. `#9ea5b8` sobre fondos oscuros `#14161c`/`#1c1f28` y `#4f46e5` en botones primarios), HTML5 semántico (`nav`, `main`, `section`, `footer`) y jerarquía única de headings.
- **Navegación & Layout:** usar `whitespace-nowrap` en enlaces y CTAs de la barra de navegación para evitar saltos de línea en anchos intermedios (`md`).
- **Core Web Vitals:** `LCP <= 2.5s`, `CLS <= 0.1`, `INP <= 200ms`, fuentes con `display: swap` e imágenes/SVGs optimizados.

### 1.3 `[MODIFY]` `docs/sdd-migration-guide.md`
En la sección `### FASE 5: Construcción del Router Maestro (AGENTS.md en la raíz)` del Prompt Maestro (punto 6), exigir explícitamente que el `AGENTS.md` generado incluya la sección concisa **Estándares de Calidad Obligatorios**:
1. Core Web Vitals en verde (móvil: `LCP <= 2.5s`, `CLS <= 0.1`, `INP <= 200ms`).
2. Accesibilidad web WCAG 2.1 AA (contraste $\ge 4.5:1$, HTML semántico y foco visible).
3. Cero dependencias cautivas ni vendor lock-in (código y servicios cloud 100% portables).
4. Pruebas automatizadas y CI/CD (`.github/workflows/ci.yml`) en verde.

---

## 2. Archivos a Modificar

- **`[MODIFY]` `AGENTS.md`**
- **`[MODIFY]` `.agents/rules/frontend-nextjs.md`**
- **`[MODIFY]` `docs/sdd-migration-guide.md`**

---

## 3. Comandos de Verificación (Gate 4)

```bash
npx tsc --noEmit
npm run lint
npm test
```
