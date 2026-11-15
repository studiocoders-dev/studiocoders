# Feature Spec: Pipeline CI/CD Obligatorio en GitHub Actions y Estandarización en la Guía SDD

> **Ubicación:** `.agents/specs/010-github-actions-ci-and-sdd-guide.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/010-github-actions-ci-and-sdd-guide.md`](../plans/010-github-actions-ci-and-sdd-guide.md)

---

## 1. Contexto y Objetivos

Para materializar el compromiso auditable **04 ("Pruebas automatizadas y CI/CD en verde")** en `studiocoders.dev` y convertirlo en un estándar innegociable de todo proyecto inicializado bajo la metodología **Spec-Driven Development (SDD)**, se requiere:

1. **Implementar el Pipeline de CI/CD en GitHub Actions (`.github/workflows/ci.yml`):**
   - Ejecutar automáticamente en cada `push` y `pull_request` hacia `main` la verificación estricta de tipos (`npx tsc --noEmit`), linter (`npm run lint`), suite completa de pruebas unitarias (`npm test`) y compilación de producción (`npm run build`).
   - Proveer visibilidad pública en GitHub del estado verde (`passing`) de cada commit.
2. **Actualizar la Guía Maestra de Migración SDD (`docs/sdd-migration-guide.md`):**
   - Incorporar la creación obligatoria del workflow `.github/workflows/ci.yml` dentro de la anatomía base del repositorio SDD y dentro del **Prompt Maestro** (como fase obligatoria al inicializar o migrar cualquier proyecto).

---

## 2. Requisitos EARS

- **WHEN** se realice un `push` o `pull_request` a la rama `main`, **THE SYSTEM SHALL** disparar el workflow de GitHub Actions `.github/workflows/ci.yml` sobre Ubuntu con Node.js 22 y caché de `npm`.
- **WHEN** el pipeline CI se ejecute, **THE SYSTEM SHALL** correr secuencialmente: instalación limpia (`npm ci`), typechecking (`npx tsc --noEmit`), linting (`npm run lint`), pruebas (`npm test`) y build de producción (`npm run build`).
- **IF** cualquiera de los 4 pasos falla, **THEN THE SYSTEM SHALL** marcar el check como fallido (`failed`) para impedir el merge o despliegue con regresiones.
- **WHERE** se consulte `docs/sdd-migration-guide.md`, **THE SYSTEM SHALL** especificar explícitamente la creación de `.github/workflows/ci.yml` como requisito obligatorio al iniciar o migrar cualquier proyecto bajo SDD.

---

## 3. Definition of Done (DoD) Checklist

- [x] Archivo `.github/workflows/ci.yml` creado con Node.js 22, `npm ci`, `tsc --noEmit`, `lint`, `test` y `build`.
- [x] Documento `docs/sdd-migration-guide.md` actualizado en su anatomía de proyecto y Prompt Maestro exigiendo `.github/workflows/ci.yml` de forma mandatoria.
- [x] Validación local de todos los pasos del pipeline (`npm test`, `npx tsc --noEmit`, `npm run lint`, `npm run build`) con 0 errores.
