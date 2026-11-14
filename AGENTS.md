# Studio Coders (`studiocoders.dev`) — Guía Maestra de Orquestación IA (SDD)

> Este repositorio opera bajo **Spec-Driven Development (SDD)** con **Context Routing** y **4 Hard Code-Gates**.  
> **Misión:** Estudio de ingeniería de software de élite y desarrollo ágil asistido por IA. Entrega de aplicaciones web, móviles y agentes de IA en producción en 14 días.

---

## 🧱 Stack Tecnológico

| Capa | Tecnologías | Propósito |
| :--- | :--- | :--- |
| **Framework Web** | **Next.js 16 (App Router)**, **React 19**, **TypeScript 5** | Arquitectura moderna con Server Components y renderizado híbrido. |
| **Estilos & UI** | **Tailwind CSS 4** (`@tailwindcss/turbopack`), **Lucide React** | Estética dark mode inspirada en Brotherhood.dev y Vercel. |
| **Testing** | **Vitest 5** (`npm test`) | Suite de pruebas unitarias automatizadas para cumplimiento de DoD. |
| **Despliegue** | **Vercel** / **Cloudflare DNS** | Hosting serverless con CI/CD automatizado y SSL HSTS precargado. |

---

## 🛠️ Comandos Principales

```bash
npm run dev          # Iniciar servidor de desarrollo en http://localhost:3000
npm test             # Ejecutar suite de pruebas unitarias (Vitest)
npx tsc --noEmit     # Verificación estricta de tipos de TypeScript
npm run build        # Compilar producción con Turbopack
npm run lint         # Ejecutar linter de ESLint
```

---

## 🧭 Enrutamiento de Reglas de Contexto (`.agents/rules/`)

Antes de realizar cualquier propuesta o modificación, consulta las reglas del dominio correspondiente:

- **Flujo de Trabajo SDD:** [`.agents/rules/sdd-workflow.md`](.agents/rules/sdd-workflow.md)
- **Frontend, UI & Next.js 16:** [`.agents/rules/frontend-nextjs.md`](.agents/rules/frontend-nextjs.md)
- **Metadatos, SEO & AEO (Schema.org):** [`.agents/rules/aeo-seo-metadata.md`](.agents/rules/aeo-seo-metadata.md)
- **Posicionamiento Comercial & Marca B2B:** [`.agents/rules/business-positioning.md`](.agents/rules/business-positioning.md)

---

## 🚦 Los 4 Hard Code-Gates Innegociables (MANDATORIO OBLIGATORIO)

> ⚠️ **REGLA DE ORO INQUEBRANTABLE:** Antes de tocar, modificar o escribir una sola línea de código en `src/`, `public/`, `tests/` o archivos de configuración, la IA tiene **TERMINANTEMENTE PROHIBIDO** actuar sin antes haber presentado la Spec y el Plan Técnico (o ajustar los existentes si la tarea es similar o incremental) y haber recibido la **aprobación humana explícita (Gate 3)**. Esta regla aplica para cualquier tarea, sin importar qué tan pequeña o trivial parezca.

1. **Gate 1 (Spec Obligatoria - El "Qué"):** Redactar o ajustar `.agents/specs/<feat>.md` con EARS y Definition of Done (DoD). Sin código.
2. **Gate 2 (Plan Técnico - El "Cómo"):** Redactar o ajustar `.agents/plans/<feat>.md` detallando archivos a tocar y tests requeridos.
3. **Gate 3 (Parada Humana Obligatoria):** Esperar la aprobación explícita del usuario (`aprobado`) antes de escribir código. Prohibido codificar en el mismo turno del plan.
4. **Gate 4 (Testing Mandate & Verificación DoD):** Ejecutar `npm test` y typechecking con 0 errores antes de cerrar la tarea.

---

## 📂 Directorio del Proyecto

```text
studiocoders/
├── AGENTS.md                          # 🧭 Router Maestro SDD (este archivo)
├── ROADMAP.md                         # 🗺️ Hoja de Ruta Estratégica Completa
├── .agents/
│   ├── rules/                         # 🚦 Reglas atómicas por dominio
│   ├── specs/                         # 📋 Especificaciones funcionales (EARS + DoD)
│   ├── plans/                         # 🛠️ Planes técnicos de implementación
│   └── archive/                       # 📦 Resguardo histórico
├── src/
│   ├── app/                           # App Router de Next.js 16 (layout.tsx, page.tsx, globals.css)
│   └── components/                    # Componentes modulares de UI
└── tests/                             # Pruebas unitarias automatizadas (Vitest)
```
