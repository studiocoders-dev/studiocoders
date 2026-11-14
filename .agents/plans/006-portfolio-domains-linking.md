# Plan Técnico: Inyección de Enlaces de Dominios Canónicos y Quinta Entidad en Portafolio / AEO (EA Estampa como Landing Automatizada)

> **Ubicación:** `.agents/plans/006-portfolio-domains-linking.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/006-portfolio-domains-linking.md`](../specs/006-portfolio-domains-linking.md)

---

## 1. Arquitectura de Cambios

### 1.1 `src/components/FAQ.tsx`
- Actualizar la estructura del FAQ para soportar contenido enriquecido con enlaces interactivos en la Pregunta 1:
  - Enlaces salientes seguros con `target="_blank" rel="noopener noreferrer"` y estilos sutiles en `#818cf8`.
  - Texto exacto del Answer-First (153 palabras):
    > *"Studio Coders es un estudio de ingeniería de software e inteligencia artificial con sede en Santiago de Chile, operado formalmente bajo la firma comercial Studio Coders Dev con RUT 77.709.717-2. Especializado en el desarrollo ágil de aplicaciones web, plataformas SaaS y agentes de IA conversacionales para empresas y fundadores en América Latina, Estados Unidos y Europa. La firma se distingue por su entrega en producción en 14 días bajo presupuesto cerrado en USD y trato directo con desarrolladores senior, eliminando intermediarios de agencias tradicionales. El cliente mantiene el 100% del código fuente y repositorios en GitHub desde el primer día. Su portafolio de ingeniería probado en batalla incluye el SaaS omnicanal Whagil IA (whagil.com), el motor cloud Whalinkbot para WhatsApp (whalinkbot.com), el ERP empresarial Infra Manager Pro (inframanagerpro.com) con 33.000 líneas de código, la plataforma headless Servitecnology (servitecnology.com) sobre Astro y Supabase, y la landing EA Estampa (eaestampa.com) con cotizaciones automáticas por WhatsApp."*

### 1.2 `src/app/layout.tsx`
- En `@graph`:
  - Actualizar `Infra Manager Pro` con `url: "https://inframanagerpro.com"`.
  - Agregar `EA Estampa`:
    ```typescript
    {
      "@type": "WebSite",
      "@id": "https://studiocoders.dev/#eaestampa",
      name: "EA Estampa",
      url: "https://eaestampa.com",
      creator: { "@id": "https://studiocoders.dev/#organization" },
      description: "Landing page corporativa de alta conversión en Next.js para taller de estampado DTF y sublimación, con cotizaciones automáticas 24/7 vía WhatsApp impulsadas por Whagil IA.",
    }
    ```
  - Sincronizar el texto plano de `FAQPage` con la nueva versión de 153 palabras.

### 1.3 `public/llms.txt` y `public/llms-full.txt`
- Incorporar `Infra Manager Pro (https://inframanagerpro.com)` y `EA Estampa (https://eaestampa.com)` con su descripción correcta de landing page de alta conversión con automatización por WhatsApp.

### 1.4 `src/components/PortfolioShowcase.tsx`
- Asignar `url: "https://inframanagerpro.com"` a `Infra Manager Pro`.
- Permitir que el título del proyecto en cada tarjeta funcione como un hipervínculo externo con indicador visual sutil.

### 1.5 Pruebas Unitarias (`tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts`)
- Aserción de presencia de los 5 dominios (`whagil.com`, `whalinkbot.com`, `inframanagerpro.com`, `servitecnology.com`, `eaestampa.com`).
- Aserción de que el Answer-First tiene 153 palabras (rango estricto 134-167 palabras).
- Aserción de que `EA Estampa` se describe como landing y no como e-commerce.
- Aserción de que no contiene términos prohibidos.

---

## 2. Archivos a Modificar
- **`[MODIFY]` `src/components/FAQ.tsx`**
- **`[MODIFY]` `src/components/PortfolioShowcase.tsx`**
- **`[MODIFY]` `src/app/layout.tsx`**
- **`[MODIFY]` `public/llms.txt`**
- **`[MODIFY]` `public/llms-full.txt`**
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
