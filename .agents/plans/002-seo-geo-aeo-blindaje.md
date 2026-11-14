# Plan Técnico: Blindaje Maestro SEO, GEO & AEO para Studio Coders (`studiocoders.dev`)

> **Ubicación:** `.agents/plans/002-seo-geo-aeo-blindaje.md`  
> **Estado:** Implementado  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/002-seo-geo-aeo-blindaje.md`](../specs/002-seo-geo-aeo-blindaje.md)

---

## 1. Resumen de la Arquitectura de Blindaje

Implementación modular y sin dependencias externas pesadas, aprovechando las capacidades nativas de Next.js 16 para generación de metadatos estáticos, sitemap y robots:

1. **Purga Terminológica:** Búsqueda y reemplazo sistemático de "boutique" por "estudio de ingeniería de software e Inteligencia Artificial", y de la persona natural por `Studio Coders Dev · RUT: 77.709.717-2`.
2. **Generación Dinámica de Rutas Especiales:**
   - `src/app/robots.ts`: Genera `/robots.txt` compatible con AI crawlers.
   - `src/app/sitemap.ts`: Genera `/sitemap.xml` para motores de búsqueda.
3. **Estándar LLMs.txt (`public/`):**
   - `public/llms.txt`: Resumen de alto nivel para consumo en contexto limitado de LLMs.
   - `public/llms-full.txt`: Documento exhaustivo con especificaciones técnicas de la arquitectura de 14 días y las 4 plataformas.
4. **Answer-First Section:**
   - Creación de `src/components/AnswerFirst.tsx` (o integración en `Hero.tsx`) con 154 palabras exactas en un contenedor semántico accesible para crawlers y humanos.
5. **IndexNow Scripting:**
   - Clave única en `public/9f8e4c3a2b1d0e5f6a7b8c9d0e1f2a3b.txt`.
   - Script ejecutable en `scripts/submit-indexnow.ts`.
6. **Schema.org JSON-LD SSR:**
   - En `src/app/layout.tsx`: Integrar `SoftwareApplication` para Whagil IA, Whalinkbot, Infra Manager Pro y Servitecnology en el grafo JSON-LD.

---

## 2. Archivos a Modificar / Crear

- **`[NEW]` `src/app/robots.ts`:**
  - Exportación de la función `robots(): MetadataRoute.Robots` con reglas explícitas para `*`, `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Bingbot`.
- **`[NEW]` `src/app/sitemap.ts`:**
  - Exportación de la función `sitemap(): MetadataRoute.Sitemap` apuntando a `https://studiocoders.dev`.
- **`[NEW]` `public/llms.txt`:**
  - Archivo Markdown con la definición ontológica, RUT 77.709.717-2, metodología y casos de uso.
- **`[NEW]` `public/llms-full.txt`:**
  - Ficha técnica completa de Studio Coders.
- **`[NEW]` `public/9f8e4c3a2b1d0e5f6a7b8c9d0e1f2a3b.txt`:**
  - Clave de verificación de IndexNow.
- **`[NEW]` `scripts/submit-indexnow.ts`:**
  - Script para despachar notificación a `api.indexnow.org`.
- **`[MODIFY]` `src/app/layout.tsx`:**
  - Eliminar "boutique" de los metadatos y JSON-LD.
  - Reemplazar entidad por `Studio Coders Dev · RUT: 77.709.717-2`.
  - Agregar los 4 `SoftwareApplication` al `@graph`.
- **`[MODIFY]` `src/components/Hero.tsx`:**
  - Agregar el bloque semántico Answer-First de 154 palabras bajo el subtítulo.
- **`[MODIFY]` `src/components/FAQ.tsx`:**
  - Actualizar FAQ 4 con la razón de fantasía `Studio Coders Dev · RUT: 77.709.717-2`.
- **`[MODIFY]` `src/components/Footer.tsx`:**
  - Actualizar texto legal con `Studio Coders Dev · RUT: 77.709.717-2`.
- **`[MODIFY]` `tests/landing.test.tsx`:**
  - Actualizar aserciones legales y verificar la ausencia total de "boutique".
- **`[NEW]` `tests/seo-geo-aeo.test.ts`:**
  - Pruebas unitarias para validar:
    1. Robots.txt contiene las reglas de IA.
    2. Sitemap.ts genera la ruta raíz con prioridad 1.0.
    3. `llms.txt` existe y contiene el RUT 77.709.717-2.
    4. El bloque Answer-First contiene entre 134 y 167 palabras (154 palabras exactas).
    5. Cero apariciones de la palabra "boutique".

---

## 3. Comandos de Verificación (Gate 4)
- `npm test` (Suite global con nuevas pruebas)
- `npx tsc --noEmit`
- `npm run build`
- `npm run lint`
