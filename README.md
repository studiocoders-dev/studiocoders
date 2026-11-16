# Studio Coders (`studiocoders.dev`)

[![CI](https://github.com/studiocoders-dev/studiocoders/actions/workflows/ci.yml/badge.svg)](https://github.com/studiocoders-dev/studiocoders/actions/workflows/ci.yml)
![TypeScript Strict](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)
![Next.js 16](https://img.shields.io/badge/Next.js-16%20Static%20Export-000000?logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![Vitest 5](https://img.shields.io/badge/Vitest-5-6E9F18?logo=vitest&logoColor=white)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages%20%2B%20Functions-F38020?logo=cloudflare&logoColor=white)

Repositorio oficial de **[studiocoders.dev](https://www.studiocoders.dev)** — estudio de ingeniería de software e inteligencia artificial con sede en Santiago de Chile, especializado en el lanzamiento de aplicaciones web, plataformas SaaS y agentes de IA en producción en 30 días.

Este proyecto opera bajo **Spec-Driven Development (SDD)** con **4 Hard Code-Gates**, exportación estática pura (`output: "export"`) en **Cloudflare Pages**, y envío transaccional sin servidor mediante **Cloudflare Pages Functions + Resend**.

---

## Arquitectura en Producción

```text
Visitante ─▶ Cloudflare DNS / CDN ─┬─▶ Exportación estática (out/) ─▶ HTML/CSS/JS + inlineCss
                                   └─▶ POST /api/contact (functions/api/contact.ts)
                                         └─▶ Resend API ─▶ studiocoders.dev@gmail.com
```

- **Zero Node.js Runtime:** El frontend se compila a HTML/CSS/JS estáticos en `out/` (`output: "export"`).
- **Contacto Edge (`POST /api/contact`):** Validación estricta de payload, protección *honeypot* anti-spam y entrega directa vía REST API de Resend sin dependencias externas en runtime.
- **SEO / AEO / GEO:** Metadatos estructurados Schema.org (`JSON-LD`), `robots.txt` y `sitemap.xml` generados estáticamente en build time.

---

## Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework Web** | Next.js 16 (`App Router`, `output: "export"`), React 19, TypeScript 5 (`strict: true`) | Renderizado estático de alto rendimiento (`out/`). |
| **Estilos & UI** | Tailwind CSS 4 (`@tailwindcss/turbopack`), Lucide React | Interfaz dark mode con animaciones GPU compuestas (`transform` / `opacity`). |
| **Testing** | Vitest 5 (`npm test`) | Suite automatizada de landing, SEO/AEO y API de contacto (`47` pruebas). |
| **Edge & Mail** | Cloudflare Pages, Cloudflare Pages Functions, Resend | Hosting estático global, endpoint `/api/contact` y entrega de leads. |
| **CI/CD** | GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)) | Verificación (`tsc`, `eslint`, `vitest`, `next build`) y despliegue automático. |

---

## Estructura del Proyecto

```text
studiocoders/
├── AGENTS.md                          # Guía maestra SDD y reglas de orquestación
├── next.config.ts                     # Configuración Next.js 16 (output: "export", inlineCss)
├── src/
│   ├── app/                           # App Router (layout.tsx, page.tsx, robots.ts, sitemap.ts)
│   └── components/                    # Secciones modulares y ContactForm conectado a /api/contact
├── functions/
│   └── api/
│       └── contact.ts                 # Cloudflare Pages Function (POST /api/contact -> Resend)
├── tests/                             # Pruebas unitarias (Vitest)
├── docs/
│   └── cloudflare-pages-deployment-guide.md
└── .agents/
    ├── rules/                         # Reglas por dominio (SDD, Frontend, AEO/SEO, Business)
    ├── specs/                         # Especificaciones funcionales (EARS + DoD)
    └── plans/                         # Planes técnicos de implementación
```

---

## Desarrollo Local y Verificación

### Requisitos
- Node.js `>= 22`
- npm

### Comandos principales

```bash
# Instalar dependencias
npm ci

# Iniciar servidor de desarrollo (http://localhost:3000)
npm run dev

# Verificación estricta de tipos (TypeScript)
npx tsc --noEmit

# Linter (ESLint)
npm run lint

# Suite completa de pruebas unitarias (Vitest)
npm test

# Compilar exportación estática en out/
npm run build
```

---

## Variables de Entorno y Despliegue

El endpoint [`functions/api/contact.ts`](functions/api/contact.ts) utiliza las siguientes variables en **Cloudflare Pages** (*Settings → Variables and Secrets*):

| Variable | Requerida | Descripción |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Sí | API Key de Resend (configurada como *Secret*). |
| `CONTACT_TO_EMAIL` | No | Destino de leads (por defecto `studiocoders.dev@gmail.com`). |
| `CONTACT_FROM_EMAIL` | No | Remitente verificado (por defecto `Studio Coders <contacto@studiocoders.dev>`). |

Para el despliegue continuo desde [`.github/workflows/ci.yml`](.github/workflows/ci.yml), configura `CLOUDFLARE_API_TOKEN` y `CLOUDFLARE_ACCOUNT_ID` en los secretos de GitHub Actions. Consulta la guía completa en [`docs/cloudflare-pages-deployment-guide.md`](docs/cloudflare-pages-deployment-guide.md).

---

## Metodología de Ingeniería (SDD)

Toda modificación del repositorio sigue el ciclo formal de **4 Hard Code-Gates** documentado en [`AGENTS.md`](AGENTS.md):
1. **Gate 1 (Spec):** Definición funcional EARS + *Definition of Done* en `.agents/specs/`.
2. **Gate 2 (Plan):** Diseño técnico y estrategia de pruebas en `.agents/plans/`.
3. **Gate 3 (Aprobación):** Revisión humana explícita antes de modificar código.
4. **Gate 4 (Verificación):** `tsc --noEmit`, `eslint`, `vitest` y `next build` en verde.
