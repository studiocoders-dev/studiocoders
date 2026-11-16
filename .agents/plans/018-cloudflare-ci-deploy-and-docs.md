# Plan Técnico: Guía Cloudflare Pages + Resend, CI/CD Deploy y Actualización de `AGENTS.md`

> **Ubicación:** `.agents/plans/018-cloudflare-ci-deploy-and-docs.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/018-cloudflare-ci-deploy-and-docs.md`](../specs/018-cloudflare-ci-deploy-and-docs.md)

---

## 1. Arquitectura de Cambios

### 1.1 `[NEW]` `docs/cloudflare-pages-deployment-guide.md` — Manual Operativo Completo
- Estructurar la guía en 6 pasos claros:
  1. **Resend:** Alta gratuita, verificación DNS de `studiocoders.dev` en Cloudflare (SPF/DKIM) y generación de `RESEND_API_KEY`.
  2. **Cloudflare Pages (Proyecto):** Creación del proyecto `studiocoders` (Direct Upload para usar CI/CD de GitHub Actions sin doble build, o integración Git directa con `npm run build` -> `out`).
  3. **Variables de Entorno en Cloudflare Pages:** Configuración de `RESEND_API_KEY` (Production y Preview) y variables opcionales (`CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`).
  4. **GitHub Actions CI/CD:** Creación de `CLOUDFLARE_API_TOKEN` (permiso *Cloudflare Pages: Edit*) y `CLOUDFLARE_ACCOUNT_ID`, y dónde agregarlos en GitHub Repository Secrets.
  5. **Dominios Personalizados y Retiro de Vercel:** Vinculación de `studiocoders.dev` y `www.studiocoders.dev` en Cloudflare Pages y eliminación del proyecto en Vercel para liberar CPU/builds.
  6. **Cloudflare Email Routing (Opcional):** Regla `contacto@studiocoders.dev` → `studiocoders.dev@gmail.com`.

### 1.2 `[MODIFY]` `.github/workflows/ci.yml` — Job `deploy` a Cloudflare Pages
- Mantener el job `verify` intacto (`npm ci`, `tsc --noEmit`, `npm run lint`, `npm test`, `npm run build`).
- Añadir un segundo job `deploy`:
  - `needs: verify`
  - `if: github.event_name == 'push' && github.ref == 'refs/heads/main'`
  - Checkout + Setup Node 22 + `npm ci` + `npm run build` (generando `out/`).
  - Paso de despliegue con `cloudflare/wrangler-action@v3` (`command: pages deploy out --project-name=studiocoders`) condicionado a `env.CLOUDFLARE_API_TOKEN != '' && env.CLOUDFLARE_ACCOUNT_ID != ''` (asignados desde `secrets`), para que el CI no falle antes de configurar los secretos.

### 1.3 `[MODIFY]` `AGENTS.md` — Sincronización de Infraestructura
- Actualizar la fila **Despliegue** en `## 🧱 Stack Tecnológico` para reflejar **Cloudflare Pages**, **Cloudflare DNS**, **Cloudflare Pages Functions** y **Resend** con CI/CD en GitHub Actions.
- Actualizar `## 📂 Directorio del Proyecto` para incluir `functions/` (`functions/api/contact.ts`) y `docs/`.

---

## 2. Archivos a Crear / Modificar

- **`[NEW]` `docs/cloudflare-pages-deployment-guide.md`**
- **`[MODIFY]` `.github/workflows/ci.yml`**
- **`[MODIFY]` `AGENTS.md`**

---

## 3. Comandos de Verificación (Gate 4 — Tras Aprobación Gate 3)

```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```
