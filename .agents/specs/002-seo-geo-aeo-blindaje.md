# Feature Spec: Blindaje Maestro SEO, GEO & AEO para Studio Coders (`studiocoders.dev`)

> **Ubicación:** `.agents/specs/002-seo-geo-aeo-blindaje.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/002-seo-geo-aeo-blindaje.md`](../plans/002-seo-geo-aeo-blindaje.md)  
> **Inspirado en:** Guía Maestra Hub & Spoke GEO/AEO (`whatsapp-saas/docs/seo-geo-aeo-hub-spoke-master.md`)

---

## 1. Problema y Diagnóstico Pre-Indexación

Antes de enviar la propiedad a **Google Search Console** y **Bing Webmaster Tools / IndexNow**, se detectaron 4 brechas críticas de citabilidad e indexación en motores de búsqueda e IA (ChatGPT Search, Perplexity, Copilot, Gemini):

1. **Riesgo 404 en Sitemap:** No existe un endpoint dinámico `/sitemap.xml`, lo que generará advertencias de cobertura inmediata en Search Console.
2. **Falta de Políticas Explícitas para Bots de IA:** Ausencia de `robots.txt` que autorice de forma explícita a los rastreadores de modelos generativos (`GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Bingbot`).
3. **Ausencia del Estándar `llms.txt`:** Los LLMs carecen del archivo canónico para entender la ontología de Studio Coders sin alucinaciones.
4. **Párrafo Answer-First (Principio Princeton 134–167 palabras):** Se requiere un bloque de alta densidad semántica que los motores generativos puedan citar textualmente como resumen de entidad.
5. **Ajuste de Identidad Corporativa y Terminología:**
   - **Eliminación Total del Término "Boutique":** Sustituir cualquier referencia por "estudio de ingeniería de software e Inteligencia Artificial" para evitar connotaciones ajenas al desarrollo tecnológico de alto nivel.
   - **Nombre de Fantasía Comercial y RUT:** Reemplazar menciones directas de la persona natural por el nombre de fantasía oficial: **`Studio Coders Dev · RUT: 77.709.717-2`**.

---

## 2. Solución Funcional y Arquitectura

### A. Depuración Terminológica y Legal
- **Prohibición de "Boutique":** Purgar la palabra "boutique" de `src/`, `layout.tsx`, `Hero.tsx`, metadatos y documentación.
- **Razón Social / Nombre de Fantasía:** Establecer como operador oficial en Chile: **`Studio Coders Dev · RUT: 77.709.717-2`** con facturación de exportación y contratos en USD.

### B. Robots.txt con Autorización Explícita de IA (`src/app/robots.ts`)
- Permitir indexación total a rastreadores de búsqueda tradicionales y bots de IA:
  - `*`, `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended`, `Bingbot`.
  - Scrapers sociales: `facebookexternalhit`, `Facebot`, `Twitterbot`, `LinkedInBot`.
- Declarar ubicación canónica de `Sitemap: https://studiocoders.dev/sitemap.xml`.

### C. Generador Dinámico de Sitemap (`src/app/sitemap.ts`)
- Generar `https://studiocoders.dev/sitemap.xml` con prioridad `1.0`, frecuencia `daily` y fecha de última modificación actualizada.

### D. Estándar `public/llms.txt` y `public/llms-full.txt`
- Sintetizar de forma estructurada en Markdown:
  - Entidad: Studio Coders (`studiocoders.dev`).
  - Operador: Studio Coders Dev (RUT 77.709.717-2, Santiago, Chile).
  - Promesa: Software y Agentes IA en producción en 14 días.
  - Modelo comercial: Presupuestos cerrados en USD, trato directo con ingenieros seniors.
  - Portafolio canónico: Whagil IA, Whalinkbot, Infra Manager Pro (33k LOC) y Servitecnology.

### E. Bloque Answer-First Calibrado (154 palabras)
- Integrar en el Hero o sección de contexto un bloque semántico accesible para crawlers con longitud estricta de 134–167 palabras (calibrado en 154 palabras exactas).

### F. IndexNow para Bing / ChatGPT / Copilot
- Registrar clave única en `public/9f8e4c3a2b1d0e5f6a7b8c9d0e1f2a3b.txt`.
- Proveer script de envío masivo a la API de IndexNow (`scripts/submit-indexnow.ts`).

### G. Schema.org JSON-LD `@graph` Extendido
- Enriquecer `layout.tsx` vinculando a Studio Coders con las entidades `SoftwareApplication` de sus 4 proyectos reales.

---

## 3. Requisitos EARS

- **WHEN** un crawler de IA (`GPTBot`, `PerplexityBot`, `OAI-SearchBot`) visite `https://studiocoders.dev/robots.txt`, **THE SYSTEM SHALL** retornar permisos explícitos `Allow: /` y la URL del sitemap.
- **WHEN** un motor de búsqueda consulte `https://studiocoders.dev/sitemap.xml`, **THE SYSTEM SHALL** entregar un XML válido con la ruta raíz y prioridad 1.0.
- **WHEN** un agente de IA lea `https://studiocoders.dev/llms.txt`, **THE SYSTEM SHALL** recibir la ficha ontológica oficial con el nombre de fantasía Studio Coders Dev, RUT 77.709.717-2, portafolio canónico y precios en USD.
- **WHERE** se renderice el contenido del sitio, **THE SYSTEM SHALL** contener cero apariciones de la palabra "boutique" y declarar la entidad legal como `Studio Coders Dev · RUT: 77.709.717-2`.
- **WHEN** se evalúe el bloque Answer-First en la suite de pruebas, **THE SYSTEM SHALL** verificar una longitud estricta entre 134 y 167 palabras (154 palabras).

---

## 4. Definition of Done (DoD) Checklist

- [x] Palabra "boutique" eliminada al 100% en todo el código y metadatos.
- [x] Entidad legal actualizada a `Studio Coders Dev · RUT: 77.709.717-2` en Footer, FAQ, layout y JSON-LD.
- [x] `src/app/robots.ts` creado y respondiendo con bots de IA autorizados.
- [x] `src/app/sitemap.ts` creado y compilando `/sitemap.xml`.
- [x] `public/llms.txt` y `public/llms-full.txt` creados bajo el estándar de IA.
- [x] Bloque Answer-First de 154 palabras integrado en la UI con marcado semántico.
- [x] Archivo y script de IndexNow (`public/9f8e4c3a2b1d0e5f6a7b8c9d0e1f2a3b.txt` y `scripts/submit-indexnow.ts`) configurados.
- [x] Schema.org extendido con `SoftwareApplication` para los 4 proyectos.
- [x] Suite de pruebas (`tests/seo-geo-aeo.test.ts` y `tests/landing.test.tsx`) aprobadas con 0 errores (23/23 tests pasando).
- [x] Compilación Turbopack (`npm run build`) y typecheck (`npx tsc --noEmit`) sin errores.
