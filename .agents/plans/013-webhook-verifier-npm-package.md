# Plan Técnico: Arquitectura, Implementación y Publicación de `@studiocoders/webhook-verifier`

> **Ubicación:** `.agents/plans/013-webhook-verifier-npm-package.md`  
> **Estado:** Borrador (Esperando Aprobación Gate 3)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/013-webhook-verifier-npm-package.md`](../specs/013-webhook-verifier-npm-package.md)

---

## 1. Arquitectura y Patrones de Diseño

El paquete se estructurará en `packages/webhook-verifier/` como un proyecto autónomo listo para ser sincronizado con el repositorio público `github.com/studiocoders-dev/webhook-verifier` y publicado en npm bajo `@studiocoders/webhook-verifier`:

```text
packages/webhook-verifier/
├── .github/
│   └── workflows/
│       └── ci.yml                 # Pipeline CI propio (Typecheck, Tests + 100% Coverage, Build)
├── src/
│   ├── types.ts                   # Tipos discriminados (Result pattern), códigos de error y contratos
│   ├── crypto/
│   │   ├── timing-safe.ts         # Comparación byte a byte en tiempo constante (XOR bitwise) y hex codec
│   │   └── hmac.ts                # HMAC-SHA256 sobre Web Crypto API (globalThis.crypto.subtle)
│   ├── providers/
│   │   ├── meta.ts                # Verificador Meta / WhatsApp Cloud API (POST firma + GET challenge)
│   │   ├── stripe.ts              # Verificador Stripe (t= timestamp anti-replay + rotación multi-v1)
│   │   └── generic.ts             # Verificador genérico HMAC-SHA256 con prefijo configurable
│   ├── adapters/
│   │   └── request.ts             # Adaptador nativo para Web Fetch Request (Next.js App Router / Edge)
│   └── index.ts                   # Barrel export público limpio y documentado con JSDoc
├── tests/
│   └── webhook-verifier.test.ts   # Suite exhaustiva (100% coverage en statements, branches, functions, lines)
├── package.json                   # @studiocoders/webhook-verifier v1.0.0, zero dependencies, exports ESM/CJS
├── tsconfig.json                  # TypeScript strict + noUncheckedIndexedAccess + exactOptionalPropertyTypes
├── vitest.config.ts               # Configuración Vitest con umbral obligatorio 100% coverage
├── LICENSE                        # MIT License (Studio Coders Dev)
└── README.md                      # Documentación técnica, ejemplos Next.js 16, arquitectura y seguridad
```

### 1.1 Decisiones de Ingeniería Clave
1. **Railway-Oriented Programming (`VerificationResult`):**
   - Ninguna función de verificación lanza excepciones ante cabeceras malformadas, firmas inválidas o timestamps vencidos; retorna siempre una unión discriminada `{ ok: true, ... } | { ok: false, code, reason, ... }` fácil de usar con TypeScript narrowing.
2. **Web Crypto API pura (`crypto.subtle`):**
   - Cero uso de `Buffer` ni `node:crypto`, garantizando ejecución idéntica en Edge Runtime (Vercel/Cloudflare) y Node.js >= 20.
3. **Protección Anti-Timing y Anti-Replay:**
   - Conversión hexadecimal validada estrictamente y comparación constante mediante acumulador XOR sin saltos condicionales dependientes del secreto.
   - En Stripe, validación del payload firmado `${timestamp}.${rawBody}` y ventana temporal configurable (`toleranceSeconds`, default `300s`).
4. **Aislamiento Limpio del Monorepo Principal:**
   - Excluir `packages/**` del `tsconfig.json` y `eslint.config.mjs` de la landing si es necesario para que el build de Next.js y el build del paquete operen sin colisiones, manteniendo ambos verificados.

---

## 2. Archivos a Crear / Modificar (Tras Aprobación Gate 3)

- **`[NEW]` `packages/webhook-verifier/package.json`**
- **`[NEW]` `packages/webhook-verifier/tsconfig.json`**
- **`[NEW]` `packages/webhook-verifier/vitest.config.ts`**
- **`[NEW]` `packages/webhook-verifier/LICENSE`**
- **`[NEW]` `packages/webhook-verifier/README.md`**
- **`[NEW]` `packages/webhook-verifier/.github/workflows/ci.yml`**
- **`[NEW]` `packages/webhook-verifier/src/types.ts`**
- **`[NEW]` `packages/webhook-verifier/src/crypto/timing-safe.ts`**
- **`[NEW]` `packages/webhook-verifier/src/crypto/hmac.ts`**
- **`[NEW]` `packages/webhook-verifier/src/providers/meta.ts`**
- **`[NEW]` `packages/webhook-verifier/src/providers/stripe.ts`**
- **`[NEW]` `packages/webhook-verifier/src/providers/generic.ts`**
- **`[NEW]` `packages/webhook-verifier/src/adapters/request.ts`**
- **`[NEW]` `packages/webhook-verifier/src/index.ts`**
- **`[NEW]` `packages/webhook-verifier/tests/webhook-verifier.test.ts`**
- **`[MODIFY]` `tsconfig.json` / `vitest.config.ts`** (en raíz, solo si se requiere aislar o integrar los tests del paquete)

---

## 3. Comandos de Verificación (Gate 4)

```bash
# En packages/webhook-verifier
npm test
npm run build
npx tsc --noEmit

# En la raíz de studiocoders
npx tsc --noEmit
npm run lint
npm test
npm run build
```
