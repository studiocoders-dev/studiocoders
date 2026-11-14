# Feature Spec: Portafolio Expandible de Ancho Completo (5 Plataformas) y Bifurcación Atómica del FAQ para AEO

> **Ubicación:** `.agents/specs/008-expandable-portfolio-and-split-faq.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/008-expandable-portfolio-and-split-faq.md`](../plans/008-expandable-portfolio-and-split-faq.md)

---

## 1. Contexto y Objetivos

El usuario ha solicitado dos mejoras fundamentales de experiencia de usuario y arquitectura de información:
1. **Rediseño del Showcase de Portafolio (`PortfolioShowcase.tsx`):**
   - Transformar la cuadrícula de proyectos para que cada tarjeta abarque el ancho completo (equivalente al ancho de dos tarjetas).
   - Incorporar un mecanismo interactivo desplegable (acordeón o `<details>` nativo accesible) para que cada plataforma revele especificaciones arquitectónicas profundas y enlaces de acceso en vivo a sus dominios en producción.
   - Integrar formalmente **`EA Estampa`** (`https://eaestampa.com`) como la 5.ª plataforma del portafolio.
2. **Bifurcación Atómica de la Pregunta Ontológica del FAQ:**
   - Dividir la Pregunta 1 actual en dos preguntas independientes y atómicas:
     - **Pregunta A (Entidad, Legal y Modelo 14 Días):** Responde a quién respalda legalmente a Studio Coders, su RUT, sede y modelo directo senior sin intermediarios.
     - **Pregunta B (Portafolio Canónico en Producción):** Responde qué plataformas reales respaldan la ingeniería de Studio Coders con enlaces canónicos y tecnologías.
   - **Objetivo AEO/GEO:** Mejorar la tasa de extracción de citas en Perplexity y ChatGPT Search al proveer respuestas atómicas directas (snippets autónomos de 90-105 palabras) para dos intenciones de búsqueda diferentes.

---

## 2. Requisitos de UI y Portafolio

### Las 5 Plataformas Canónicas en `PortfolioShowcase.tsx`:
1. **Whagil IA** (`https://whagil.com`): SaaS B2B · Agentes IA Omnicanal (WebSockets, BullMQ, Redis, orquestación LLM).
2. **Whalinkbot** (`https://whalinkbot.com`): Motor Cloud Asíncrono · WhatsApp (Alta disponibilidad, gestión concurrente de sesiones, webhooks en sub-segundos).
3. **Infra Manager Pro** (`https://inframanagerpro.com`): ERP Empresarial · Activos & Finanzas (33.000+ LOC, PostgreSQL estricto, RBAC y auditoría contable).
4. **Servitecnology E-Commerce** (`https://servitecnology.com`): Headless E-Commerce · Catálogo Cloud (Astro SSG/SSR, Supabase Realtime, Core Web Vitals 99+).
5. **EA Estampa** (`https://eaestampa.com`): Landing Corporativa · Agente IA de Ventas (Next.js App Router, optimización GEO/AEO, cotizaciones automatizadas 24/7 vía WhatsApp con Whagil IA).

### Diseño de Tarjeta de Ancho Completo Desplegable:
- Cada tarjeta ocupa el ancho completo del contenedor principal (`w-full`).
- **Estado colapsado:** Muestra categoría, badges, titular del sistema con enlace externo, descripción esencial y botón de despliegue *"Ver arquitectura y especificaciones +"*.
- **Estado desplegado:** Revela rejilla técnica de 4 especificaciones avanzadas (Arquitectura, Base de Datos, Concurrencia/Rendimiento, Protocolo), caso de uso crítico resuelto, y botón CTA directo *"Visitar plataforma en producción →"*.

---

## 3. Especificación de la Bifurcación del FAQ (AEO & Schema.org)

### Pregunta 1: Entidad, Legal y Modelo de 14 Días (105 palabras)
- **Pregunta:** `¿Qué es Studio Coders y quién respalda su operación técnica y legal?`
- **Respuesta:**
  > *"Studio Coders es un estudio de ingeniería de software e inteligencia artificial con sede en Santiago de Chile, operado formalmente bajo la firma comercial Studio Coders Dev con RUT 77.709.717-2. Especializado en el desarrollo ágil de aplicaciones web, plataformas SaaS y agentes de IA conversacionales para empresas y fundadores en América Latina, Estados Unidos y Europa. La firma se distingue por su entrega en producción en 14 días bajo presupuesto cerrado en dólares estadounidenses (USD) y trato directo con desarrolladores senior, eliminando intermediarios de agencias tradicionales. El cliente mantiene el 100% de la propiedad del código fuente y repositorios en GitHub desde el primer día."*

### Pregunta 2: Portafolio Canónico y Casos de Éxito en Producción (99 palabras)
- **Pregunta:** `¿Qué plataformas y proyectos en producción respaldan la ingeniería de Studio Coders?`
- **Respuesta:**
  > *"El portafolio de ingeniería de Studio Coders probado en batalla incluye cinco plataformas operando en alta concurrencia: el SaaS B2B omnicanal [Whagil IA (whagil.com)](https://whagil.com/) con WebSockets y colas BullMQ sobre Redis, el motor en la nube [Whalinkbot (whalinkbot.com)](https://whalinkbot.com/) para mensajería asíncrona de WhatsApp, el ERP empresarial [Infra Manager Pro (inframanagerpro.com)](https://inframanagerpro.com/) con más de 33.000 líneas de código en TypeScript y PostgreSQL, la plataforma de comercio headless [Servitecnology (servitecnology.com)](https://servitecnology.com/) sobre arquitectura Astro y Supabase con tiempos de carga sub-segundo, y la landing page corporativa [EA Estampa (eaestampa.com)](https://eaestampa.com/) en Next.js con cotizaciones y atención automatizadas 24/7 vía WhatsApp impulsadas por IA."*

---

## 4. Requisitos EARS

- **WHEN** un usuario visite la sección `#proyectos`, **THE SYSTEM SHALL** renderizar las 5 plataformas en tarjetas de ancho completo con capacidad interactiva de despliegue.
- **WHEN** un usuario despliegue una tarjeta de proyecto, **THE SYSTEM SHALL** exhibir el desglose de arquitectura y el botón directo hacia su URL en vivo con `target="_blank" rel="noopener noreferrer"`.
- **WHERE** se consulte la sección FAQ, **THE SYSTEM SHALL** presentar dos preguntas atómicas separadas (una para personería legal/modelo 14 días y otra para plataformas en producción con enlaces).
- **WHEN** los motores de IA inspeccionen Schema.org `FAQPage` en `layout.tsx`, **THE SYSTEM SHALL** entregar ambas preguntas de manera independiente para maximizar la citabilidad algorítmica.
- **WHEN** se ejecute la suite de verificación Vitest (`npm test`), **THE SYSTEM SHALL** validar la presencia de las 5 tarjetas de ancho completo y las 2 preguntas atómicas del FAQ.

---

## 5. Definition of Done (DoD) Checklist

- [x] `src/components/PortfolioShowcase.tsx` rediseñado con tarjetas de ancho completo (`w-full`), acordeón interactivo y las 5 plataformas.
- [x] `src/components/FAQ.tsx` actualizado con las dos preguntas atómicas separadas con enlaces interactivos.
- [x] `src/app/layout.tsx` sincronizado en Schema.org `FAQPage` con ambas preguntas separadas.
- [x] `tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts` actualizados con aserciones para las 5 plataformas y las 2 preguntas (32/32 tests pasados).
- [x] `npm test`, `npx tsc --noEmit` y `npm run build` con 0 errores.
