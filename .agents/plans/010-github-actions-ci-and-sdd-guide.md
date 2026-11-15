# Plan Técnico: Configuración de GitHub Actions CI y Actualización de Guía SDD

> **Ubicación:** `.agents/plans/010-github-actions-ci-and-sdd-guide.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/010-github-actions-ci-and-sdd-guide.md`](../specs/010-github-actions-ci-and-sdd-guide.md)

---

## 1. Arquitectura de Cambios

### 1.1 `[NEW]` `.github/workflows/ci.yml`
Crear el flujo de Integración Continua estándar para Next.js 16 + Vitest:
- **Triggers:** `push` en `main` y `pull_request` hacia `main`.
- **Runner:** `ubuntu-latest` con `actions/checkout@v4` y `actions/setup-node@v4` (Node.js `22` con `cache: 'npm'`).
- **Pasos de verificación:**
  1. `npm ci`
  2. `npx tsc --noEmit`
  3. `npm run lint`
  4. `npm test`
  5. `npm run build`

### 1.2 `[MODIFY]` `docs/sdd-migration-guide.md`
- **Sección 2 (Anatomía del Repositorio SDD):** Añadir `.github/workflows/ci.yml` al árbol de archivos estándar.
- **Prompt Maestro (Fases de Migración):** Añadir la creación obligatoria del pipeline `.github/workflows/ci.yml` adaptada al stack del proyecto (Node/Next.js, Python, Go, etc.) como requisito mandatorio para certificar el Gate 4 en la nube.

---

## 2. Archivos a Crear / Modificar
- **`[NEW]` `.github/workflows/ci.yml`**
- **`[MODIFY]` `docs/sdd-migration-guide.md`**

---

## 3. Comandos de Verificación (Gate 4)
```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```
