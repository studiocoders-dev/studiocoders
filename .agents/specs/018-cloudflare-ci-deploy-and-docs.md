# Feature Spec: Guía de Despliegue Cloudflare Pages + Resend, CI/CD en GitHub Actions y Actualización de `AGENTS.md`

> **Ubicación:** `.agents/specs/018-cloudflare-ci-deploy-and-docs.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/018-cloudflare-ci-deploy-and-docs.md`](../plans/018-cloudflare-ci-deploy-and-docs.md)

---

## 1. Contexto y Objetivos

Tras migrar `studiocoders.dev` a exportación estática (`output: "export"`) y conectar `ContactForm` mediante una Cloudflare Pages Function (`functions/api/contact.ts`) + Resend (Spec `017`), es necesario:

1. **Documentar paso a paso la puesta en producción (`docs/cloudflare-pages-deployment-guide.md`):** Guía operativa detallada para configurar Resend (verificación de dominio y API Key), Cloudflare Pages (variables de entorno, dominios personalizados, Email Routing opcional) y desconexión segura de Vercel.
2. **Automatizar el despliegue en `.github/workflows/ci.yml`:** Extender el pipeline actual para que, tras pasar `verify` (`tsc`, `lint`, `test`, `build`) en `push` a `main`, despliegue automáticamente `out/` y `functions/` a Cloudflare Pages usando `wrangler` cuando los secretos de Cloudflare estén configurados (sin romper CI si aún no se cargan).
3. **Actualizar `AGENTS.md`:** Reflejar la nueva arquitectura de infraestructura (**Cloudflare Pages + Cloudflare Pages Functions + Resend + GitHub Actions CI/CD**) y la estructura actualizada de directorios (`functions/`, `docs/`).

---

## 2. Requisitos EARS

- **WHEN** un operador siga `docs/cloudflare-pages-deployment-guide.md`, **THE SYSTEM SHALL** proveer instrucciones exactas y verificables para configurar Resend, Cloudflare Pages, secretos (`RESEND_API_KEY`, `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`), dominios personalizados (`studiocoders.dev`, `www.studiocoders.dev`) y Cloudflare Email Routing hacia `studiocoders.dev@gmail.com`.
- **WHEN** se haga `push` a `main` en GitHub y el job `verify` pase en verde, **THE SYSTEM SHALL** ejecutar el job `deploy` en `.github/workflows/ci.yml` usando `cloudflare/wrangler-action@v3` (`pages deploy out --project-name=studiocoders`) siempre que `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` estén definidos en GitHub Secrets; y **WHEN** dichos secretos no estén presentes, **THE SYSTEM SHALL** omitir el paso de despliegue sin fallar el pipeline.
- **WHEN** un agente o desarrollador consulte `AGENTS.md`, **THE SYSTEM SHALL** mostrar el stack de despliegue actualizado a **Cloudflare Pages + Cloudflare DNS + Resend + GitHub Actions** y documentar la carpeta `functions/` en el árbol del proyecto.

---

## 3. Definition of Done (DoD) Checklist

- [x] `docs/cloudflare-pages-deployment-guide.md` creado con guía completa paso a paso (Resend, Cloudflare Pages, GitHub Actions Secrets, Custom Domains, Email Routing y baja de Vercel).
- [x] `.github/workflows/ci.yml` actualizado con job `deploy` dependiente de `verify` en `push` a `main` y protegido si aún no existen los secretos de Cloudflare.
- [x] `AGENTS.md` actualizado en las secciones de Stack Tecnológico y Directorio del Proyecto.
- [x] `npx tsc --noEmit`, `npm run lint`, `npm test` y `npm run build` pasando con `0` errores.
