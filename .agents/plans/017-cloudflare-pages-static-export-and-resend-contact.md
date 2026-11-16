# Plan Técnico: Exportación Estática para Cloudflare Pages y Formulario de Contacto con Resend

> **Ubicación:** `.agents/plans/017-cloudflare-pages-static-export-and-resend-contact.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/017-cloudflare-pages-static-export-and-resend-contact.md`](../specs/017-cloudflare-pages-static-export-and-resend-contact.md)

---

## 1. Arquitectura de Cambios

### 1.1 `[MODIFY]` `next.config.ts` — Modo Static Export (`out/`)
- Configurar `output: "export"` e `images: { unoptimized: true }`.
- Remover `cacheComponents: true` y `partialPrefetching: true` (incompatibles con exportación estática pura sin servidor Node.js).
- Mantener `experimental: { inlineCss: true }` y la regla `turbopack` para `@tailwindcss/turbopack`, validando en Gate 4 que `npm run build` genere `out/` limpiamente.

### 1.2 `[MODIFY]` `src/app/robots.ts` y `src/app/sitemap.ts` — Metadata Estática
- Añadir `export const dynamic = "force-static";` al inicio de ambos archivos para garantizar que Next.js emita `out/robots.txt` y `out/sitemap.xml` durante `next build`.

### 1.3 `[NEW]` `functions/api/contact.ts` — Cloudflare Pages Function + Resend
- Exportar `onRequestPost` siguiendo la convención de Cloudflare Pages Functions (mapea automáticamente a `POST /api/contact`).
- Definir interfaces TypeScript locales mínimas (`ContactEnv`, `CFContext`) para que `npx tsc --noEmit` valide el archivo sin instalar dependencias adicionales.
- **Variables de entorno soportadas en Cloudflare Pages:**
  - `RESEND_API_KEY` (requerida, secreto en Cloudflare Pages).
  - `CONTACT_TO_EMAIL` (opcional, por defecto `"studiocoders.dev@gmail.com"`).
  - `CONTACT_FROM_EMAIL` (opcional, por defecto `"Studio Coders <contacto@studiocoders.dev>"`).
- **Flujo de `onRequestPost`:**
  1. Parsear JSON `{ email, project, website }`; si el JSON es inválido, responder `400`.
  2. Si `website` (campo *honeypot*) contiene texto, responder `200` `{ ok: true }` sin llamar a Resend.
  3. Validar `email` (formato válido, `<= 254` chars) y `project` (`>= 5` y `<= 5000` chars tras `trim()`). Si falla, responder `400` `{ ok: false, error: "..." }`.
  4. Verificar existencia de `env.RESEND_API_KEY`; si falta, responder `500` `{ ok: false, error: "..." }`.
  5. Llamar vía `fetch("https://api.resend.com/emails", ...)` con `from`, `to: [toEmail]`, `reply_to: email`, `subject: "Nuevo lead en studiocoders.dev — <email>"` y `text` estructurado.
  6. Si Resend responde `!res.ok`, retornar `502` `{ ok: false, error: "..." }`; si responde OK, retornar `200` `{ ok: true }`.

### 1.4 `[MODIFY]` `src/components/ContactForm.tsx` — Integración Real con `/api/contact`
- Reemplazar `setTimeout` por `fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, project, website }) })`.
- Añadir estado `error: string | null` y renderizar un bloque accesible con `role="alert"` cuando ocurra un error, manteniendo los valores del formulario intactos.
- Incluir un input *honeypot* oculto (`name="website"`, `tabIndex={-1}`, `autoComplete="off"`, `aria-hidden="true"`, clase `hidden`).

### 1.5 `[MODIFY]` `.gitignore` — Artefactos Locales
- Verificar e incluir `.wrangler/` (y confirmar que `out/` esté ignorado) para evitar subir builds locales al repositorio.

### 1.6 `[NEW]` `tests/contact-api.test.ts` — Pruebas Unitarias del Endpoint (Gate 4)
- Testear `onRequestPost` directamente con `Request` estándar y `vi.stubGlobal("fetch", ...)`:
  1. Envío válido: llama a `https://api.resend.com/emails` con `Authorization: Bearer ...`, `to: ["studiocoders.dev@gmail.com"]`, `reply_to`, y retorna `200`.
  2. *Honeypot* relleno: retorna `200` sin invocar `fetch`.
  3. Email inválido o `project` vacío/corto: retorna `400` sin invocar `fetch`.
  4. Ausencia de `RESEND_API_KEY`: retorna `500`.
  5. Error HTTP de Resend: retorna `502`.

---

## 2. Archivos a Crear / Modificar

- **`[MODIFY]` `next.config.ts`**
- **`[MODIFY]` `src/app/robots.ts`**
- **`[MODIFY]` `src/app/sitemap.ts`**
- **`[NEW]` `functions/api/contact.ts`**
- **`[MODIFY]` `src/components/ContactForm.tsx`**
- **`[MODIFY]` `.gitignore`** (si falta `.wrangler/` o `out/`)
- **`[NEW]` `tests/contact-api.test.ts`**

---

## 3. Pasos de Despliegue Posterior en Cloudflare (Manual del Usuario)

Una vez aprobado e implementado este plan:
1. En **Cloudflare Pages**: conectar el repo de GitHub con *Build command*: `npm run build` y *Build output directory*: `out`.
2. En **Resend**: verificar el dominio `studiocoders.dev` agregando los registros DNS en Cloudflare y crear un API Key.
3. En **Cloudflare Pages > Settings > Environment variables**: agregar `RESEND_API_KEY`.
4. En **Cloudflare Pages > Custom domains**: agregar `studiocoders.dev` y `www.studiocoders.dev` (reemplazando el DNS que apuntaba a Vercel).
5. Opcional: activar **Cloudflare Email Routing** para reenviar correos directos a `contacto@studiocoders.dev` hacia `studiocoders.dev@gmail.com`.

---

## 4. Comandos de Verificación (Gate 4 — Tras Aprobación Gate 3)

```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```
