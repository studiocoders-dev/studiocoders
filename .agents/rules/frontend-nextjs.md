---
description: Directrices de arquitectura frontend, Next.js 16, React 19, Tailwind CSS y diseño visual inspirado en Brotherhood.dev
trigger: model_decision
---

# Reglas de Frontend, Arquitectura Next.js & UI/UX

## 1. Stack & Fundamentos
- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5.
- **Estilos:** Tailwind CSS 4 con `@tailwindcss/turbopack`.
- **Iconos:** `lucide-react`.
- **Renderizado:** Preferir Server Components (RSC) por defecto. Usar `'use client'` únicamente cuando existan interactividad (estados, eventos, animaciones).

## 2. Línea Visual & Estética (Inspiración Brotherhood.dev / Vercel)
- **Tema:** Dark mode absoluto (`#070B14`, `#0B0F19`, `#14161c`).
- **Acentos & Bordes:** Bordes ultra-sutiles (`border-white/10`, `border-white/5`), glows ambientales tenues (`blur-[140px] opacity-10`), gradientes limpios de azul y cian.
- **Tipografía:** 
  - Títulos limpios y de alto impacto con `tracking-tight`.
  - Badges, métricas, tags y números en estilo monoespaciado (`font-mono`).
- **Psicología Visual B2B:** Cero elementos infantiles, cero ilustraciones genéricas 3D tipo SaaS barato. Transmitir solvencia técnica, seriedad arquitectónica y velocidad de entrega.

## 3. Prácticas Obligatorias
- **Accesibilidad web WCAG 2.1 AA (`100/100`):** relación de contraste mínima $\ge 4.5:1$ en textos secundarios y botones primarios con `text-white` (ej. `#9ea5b8` sobre fondos oscuros `#14161c`/`#1c1f28` y `#4f46e5` en botones primarios), HTML5 semántico (`nav`, `main`, `section`, `footer`), foco visible y jerarquía única de headings.
- **Navegación & Layout:** usar `whitespace-nowrap` en enlaces y CTAs de la barra de navegación para evitar saltos de línea en anchos intermedios (`md`).
- **Imágenes y SVGs:** optimizados con `next/image` y formatos WebP/AVIF.
- **Rendimiento Core Web Vitals (móvil y desktop):** `LCP <= 2.5s`, `CLS <= 0.1`, `INP <= 200ms` y fuentes cargadas con `display: swap`.
