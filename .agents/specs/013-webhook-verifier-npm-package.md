# Feature Spec: Creación del Paquete Open Source `@studiocoders/webhook-verifier` y Repositorio Público

> **Ubicación:** `.agents/specs/013-webhook-verifier-npm-package.md`  
> **Estado:** Borrador (Esperando Aprobación Gate 3)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/013-webhook-verifier-npm-package.md`](../plans/013-webhook-verifier-npm-package.md)

---

## 1. Contexto y Objetivos

En la sección **"Audita nuestro estándar de ingeniería directamente en el código fuente"** (`src/components/PublicCode.tsx`), `studiocoders.dev` enlaza a:
- **npm:** `https://www.npmjs.com/package/@studiocoders/webhook-verifier`
- **GitHub:** `https://github.com/studiocoders-dev/webhook-verifier`

Este paquete es la **prueba de fuego pública** de la calidad de ingeniería de Studio Coders. Debe construirse bajo los estándares más altos de la industria con:
- **TypeScript Strict** (`strict: true`, `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`).
- **Zero Dependencies** (`dependencies: {}`, basado al 100% en el estándar Web Crypto API `crypto.subtle` para compatibilidad universal con Next.js Edge/Node, Cloudflare Workers, Deno, Bun y Node.js >= 20).
- **Seguridad Criptográfica de Grado Producción:** Comparación en tiempo constante (*timing-safe*) contra ataques de canal lateral (*timing attacks*) y protección contra *replay attacks* mediante ventana de tolerancia de timestamps en Stripe y soporte de rotación de firmas (`v1` múltiple).
- **Patrones de Diseño Profesionales:**
  - *Railway-Oriented Programming* (resultados discriminados `VerificationResult` sin excepciones no controladas, con códigos de error deterministas).
  - *Strategy / Provider Pattern* desacoplado para **Meta / WhatsApp Cloud API** (POST `X-Hub-Signature-256` + GET `hub.challenge` handshake), **Stripe** (`Stripe-Signature` con timestamp `t=` y múltiples `v1=`) y **Webhooks Genéricos HMAC-SHA256**.
  - *Web Request Adapter* nativo para Next.js App Router (`Request` estándar Fetch API).
- **MIT License** y **100% Test Coverage** verificable con Vitest (`@vitest/coverage-v8`).

---

## 2. Requisitos EARS

- **WHEN** se verifique una firma HMAC-SHA256 en cualquier proveedor, **THE SYSTEM SHALL** calcular el digest mediante `globalThis.crypto.subtle` y comparar los bytes en tiempo constante sin cortocircuito por contenido.
- **WHEN** se invoque `verifyMetaSignature` o `verifyMetaWebhookChallenge`, **THE SYSTEM SHALL** validar la cabecera `X-Hub-Signature-256` (`sha256=<hex>`) sobre el payload crudo (incluyendo caracteres UTF-8/emojis de WhatsApp) y el handshake GET (`hub.mode === "subscribe"` y `hub.verify_token`) devolviendo un `VerificationResult` tipado.
- **WHEN** se invoque `verifyStripeSignature`, **THE SYSTEM SHALL** parsear el encabezado `Stripe-Signature` (`t=<timestamp>,v1=<sig1>,v1=<sig2>`), verificar que la antigüedad del evento no supere `toleranceSeconds` (por defecto `300` segundos) y validar que al menos una firma `v1` coincida con `HMAC_SHA256(secret, "${t}.${payload}")`.
- **WHEN** se invoque `verifyWebhookRequest` con un objeto Web `Request` (Next.js App Router / Edge), **THE SYSTEM SHALL** extraer de forma segura el cuerpo crudo (`await request.text()`) y la cabecera correspondiente al proveedor configurado.
- **WHERE** se ejecute la suite de pruebas del paquete, **THE SYSTEM SHALL** alcanzar **100% de cobertura** (líneas, funciones, ramas y sentencias) con `0` dependencias externas en runtime y empaquetado dual ESM/CJS + declaraciones `.d.ts`.

---

## 3. Definition of Done (DoD) Checklist

- [ ] Paquete creado en `packages/webhook-verifier` (listo también como repositorio independiente para `studiocoders-dev/webhook-verifier` y publicación en npm como `@studiocoders/webhook-verifier`).
- [ ] Primitivas criptográficas Web Crypto (`hmac.ts`) y comparación en tiempo constante (`timing-safe.ts`) implementadas con cero dependencias.
- [ ] Verificadores para Meta/WhatsApp (`meta.ts`), Stripe con anti-replay y multi-firma (`stripe.ts`), genérico (`generic.ts`) y adaptador Web `Request` (`request.ts`).
- [ ] Configuración `tsconfig.json` estricta, build dual ESM/CJS + `.d.ts`, `LICENSE` (MIT), `README.md` de nivel industrial y `.github/workflows/ci.yml` propio del paquete.
- [ ] Suite Vitest del paquete con **100% Test Coverage** (vectores criptográficos, ataques de timing/tampering, rotación de claves Stripe, expiración de timestamps, payloads UTF-8 y adaptador `Request`).
- [ ] Verificación global de `studiocoders` (`npx tsc --noEmit`, `npm run lint`, `npm test`, `npm run build`) en verde con `0` errores.
