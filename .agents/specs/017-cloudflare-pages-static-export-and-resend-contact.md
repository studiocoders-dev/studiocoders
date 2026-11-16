# Feature Spec: Exportación Estática para Cloudflare Pages y Formulario de Contacto con Resend

> **Ubicación:** `.agents/specs/017-cloudflare-pages-static-export-and-resend-contact.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/017-cloudflare-pages-static-export-and-resend-contact.md`](../plans/017-cloudflare-pages-static-export-and-resend-contact.md)

---

## 1. Contexto y Objetivos

La cuenta de Vercel del equipo fue pausada temporalmente en el plan Hobby por consumo de *Fluid Active CPU* compartido con otro proyecto (`whagil.com`). Dado que `studiocoders.dev` es una landing informativa sin base de datos ni SSR dinámico y su dominio está gestionado en Cloudflare:

1. **Migración fuera de Vercel hacia Cloudflare Pages ($0/mes):** Configurar Next.js 16 para generar una exportación estática pura (`output: "export"` en `out/`), eliminando por completo el consumo de CPU/builds en Vercel y sirviendo el sitio desde la red edge gratuita de Cloudflare Pages.
2. **Formulario de contacto real hacia `studiocoders.dev@gmail.com`:** Reemplazar la simulación actual (`setTimeout`) en `ContactForm.tsx` por un envío real mediante una **Cloudflare Pages Function** (`POST /api/contact`) conectada a la API REST de **Resend**, manteniendo el sitio 100% libre de servidor Node.js.
3. **Protección básica anti-spam y experiencia de error accesible:** Incluir validación de campos, campo *honeypot* oculto contra bots y manejo claro de errores en UI (`role="alert"`) con enlace directo de respaldo `mailto:contacto@studiocoders.dev`.

---

## 2. Requisitos EARS

- **WHEN** se ejecute `npm run build`, **THE SYSTEM SHALL** generar una exportación estática completa en el directorio `out/` (incluyendo `index.html`, `robots.txt` y `sitemap.xml`) compatible con Cloudflare Pages y sin dependencias de servidor Node.js.
- **WHEN** un visitante envíe el formulario en `ContactForm` con un correo electrónico válido y una descripción del proyecto, **THE SYSTEM SHALL** enviar una petición `POST /api/contact` en formato JSON y mostrar el estado de confirmación `"Mensaje recibido"` solo cuando el endpoint responda exitosamente (`HTTP 200`).
- **WHEN** `POST /api/contact` reciba una solicitud válida, **THE SYSTEM SHALL** invocar la API de Resend (`https://api.resend.com/emails`) utilizando el secreto `RESEND_API_KEY` configurado en Cloudflare Pages, entregando el mensaje a `studiocoders.dev@gmail.com` (o `CONTACT_TO_EMAIL` si está definido) con `reply_to` configurado al correo del remitente.
- **WHEN** `POST /api/contact` reciba datos inválidos (correo mal formado, campos vacíos o longitud excesiva), **THE SYSTEM SHALL** responder con `HTTP 400` y un mensaje de error claro sin invocar a Resend; y **WHEN** el campo *honeypot* venga relleno por un bot, **THE SYSTEM SHALL** responder `HTTP 200` de forma silenciosa sin enviar correo.
- **WHEN** ocurra un fallo de red o error del proveedor de correo (`HTTP 4xx/5xx`), **THE SYSTEM SHALL** mostrar un mensaje de error accesible (`role="alert"`) en `ContactForm` preservando los datos ingresados por el usuario para que pueda reintentar o usar `contacto@studiocoders.dev`.

---

## 3. Definition of Done (DoD) Checklist

- [x] `next.config.ts` configurado con `output: "export"` y `images: { unoptimized: true }`, removiendo opciones incompatibles de servidor (`cacheComponents`, `partialPrefetching`).
- [x] `src/app/robots.ts` y `src/app/sitemap.ts` marcados con `export const dynamic = "force-static";` para su generación en `out/`.
- [x] `functions/api/contact.ts` implementado como Cloudflare Pages Function (`onRequestPost`) usando `fetch` nativo hacia Resend API, validación estricta, *honeypot* y tipado compatible con `tsc --noEmit` sin dependencias externas nuevas.
- [x] `src/components/ContactForm.tsx` conectado a `POST /api/contact` con estados `loading`, `submitted` y `error` accesible (`role="alert"`).
- [x] `.gitignore` actualizado para ignorar artefactos locales de Cloudflare (`out/`, `.wrangler/`) si no están incluidos.
- [x] Suite de pruebas unitarias (`tests/contact-api.test.ts` y validación de `tests/landing.test.tsx`) cubriendo casos de éxito, validación, *honeypot* y errores de proveedor.
- [x] `npx tsc --noEmit`, `npm run lint`, `npm test` y `npm run build` pasando con `0` errores, generando `out/` correctamente.
