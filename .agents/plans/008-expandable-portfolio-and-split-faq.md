# Plan Técnico: Rediseño de Showcase Expandible (5 Proyectos) y Bifurcación Atómica del FAQ

> **Ubicación:** `.agents/plans/008-expandable-portfolio-and-split-faq.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/008-expandable-portfolio-and-split-faq.md`](../specs/008-expandable-portfolio-and-split-faq.md)

---

## 1. Arquitectura de Cambios

### 1.1 `src/components/PortfolioShowcase.tsx`
- **Reemplazar el grid de 2 columnas por una lista vertical de tarjetas de ancho completo (`w-full`):**
  - Implementación con `<details className="group rounded-xl border border-[#2e3340] bg-[#1c1f28]/60 p-7 sm:p-8 transition-all hover:border-[#6366f1]/40 open:border-[#6366f1]/50 open:bg-[#1c1f28]">` para indexación SEO inmediata sin depender de JavaScript del cliente.
  - El primer proyecto (`Whagil IA`) se mantiene con atributo `open` por defecto para demostrar la interactividad.
  - Encabezado de tarjeta:
    - Badges de categoría y métrica clave (`EN PRODUCCIÓN`, `33,000 LOC`, `SUB-SECOND LCP`, etc.).
    - Título del proyecto como hipervínculo con icono de flecha externa.
    - Breve resumen funcional.
    - Indicador de despliegue animado (+ / -).
  - Cuerpo desplegado:
    - Rejilla técnica de 4 especificaciones (Arquitectura, Base de Datos, Protocolo, Resiliencia/Rendimiento).
    - Descripción extendida del problema de negocio que resuelve y por qué es crítico.
    - Botón de enlace saliente: `Visitar plataforma en producción ({domain}) →` con `target="_blank" rel="noopener noreferrer"`.
  - Los 5 proyectos incluidos:
    1. Whagil IA (`whagil.com`)
    2. Whalinkbot (`whalinkbot.com`)
    3. Infra Manager Pro (`inframanagerpro.com`)
    4. Servitecnology E-Commerce (`servitecnology.com`)
    5. EA Estampa (`eaestampa.com`)

### 1.2 `src/components/FAQ.tsx`
- Separar la Pregunta 1 en dos preguntas atómicas:
  1. `¿Qué es Studio Coders y quién respalda su operación técnica y legal?` (105 palabras sobre personería jurídica, RUT 77.709.717-2, sede en Santiago de Chile, USD y modelo de 14 días con código 100% del cliente).
  2. `¿Qué plataformas y proyectos en producción respaldan la ingeniería de Studio Coders?` (99 palabras con los 5 dominios cliqueables y tecnologías clave).

### 1.3 `src/app/layout.tsx`
- Sincronizar `@graph` en `FAQPage`:
  - Reemplazar la pregunta combinada por las dos preguntas atómicas con sus textos exactos.
  - Asegurar que Schema.org refleje la bifurcación para optimización en Google AI Overviews, Perplexity y ChatGPT Search.

### 1.4 Pruebas Unitarias (`tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts`)
- Actualizar `tests/landing.test.tsx`:
  - Validar las 5 plataformas en `PortfolioShowcase`.
  - Validar los enlaces a `eaestampa.com`, `inframanagerpro.com`, etc., en las tarjetas de portafolio.
  - Validar las dos preguntas atómicas del FAQ.
- Actualizar `tests/seo-geo-aeo.test.ts`:
  - Validar que las respuestas atómicas cumplan con los estándares de citabilidad.

---

## 2. Archivos a Modificar
- **`[MODIFY]` `src/components/PortfolioShowcase.tsx`**
- **`[MODIFY]` `src/components/FAQ.tsx`**
- **`[MODIFY]` `src/app/layout.tsx`**
- **`[MODIFY]` `tests/landing.test.tsx`**
- **`[MODIFY]` `tests/seo-geo-aeo.test.ts`**

---

## 3. Comandos de Verificación (Gate 4)
```bash
npm test
npx tsc --noEmit
npm run build
npm run lint
```
