# Feature Spec: Enlaces de Dominios Canónicos en FAQ y Portafolio (`whagil.com`, `whalinkbot.com`, `inframanagerpro.com`, `servitecnology.com`, `eaestampa.com`)

> **Ubicación:** `.agents/specs/006-portfolio-domains-linking.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/006-portfolio-domains-linking.md`](../plans/006-portfolio-domains-linking.md)

---

## 1. Contexto y Objetivos de Negocio / AEO

El usuario solicitó incluir explícitamente los dominios canónicos (`whagil.com`, `whalinkbot.com`, `inframanagerpro.com`, `servitecnology.com` y `eaestampa.com`) con enlaces cliqueables en la definición ontológica del FAQ y en el ecosistema del sitio web.

### Corrección Crítica de EA Estampa:
Tras inspeccionar el sitio en vivo `https://eaestampa.com` y su repositorio base, se constató que **EA Estampa no es un e-commerce**, sino una **landing page corporativa de alta conversión en Next.js** para un taller especializado en estampado DTF y sublimación, cuya característica técnica sobresaliente es su integración con **atención y cotizaciones automáticas 24/7 vía WhatsApp impulsadas por el agente de ventas de Whagil IA**. Por ende, la descripción debe reflejar fielmente su naturaleza de landing de alta conversión con automatización conversacional.

### Objetivos Específicos:
1. **Enlaces Interactivos en FAQ Question 1:**
   - Incorporar hipervínculos con `target="_blank" rel="noopener noreferrer"` en la respuesta de la Pregunta 1 del acordeón FAQ hacia los 5 sistemas en producción.
   - Mostrar el dominio textual entre paréntesis para cada producto:
     - `Whagil IA (whagil.com)`
     - `Whalinkbot (whalinkbot.com)`
     - `Infra Manager Pro (inframanagerpro.com)`
     - `Servitecnology (servitecnology.com)`
     - `EA Estampa (eaestampa.com)` (descrita como landing con cotizaciones automáticas vía WhatsApp).
2. **Cumplimiento Estricto del Estándar Princeton / Georgia Tech:**
   - La nueva versión del Answer-First se calibra a exactamente **153 palabras**, situándose en el rango óptimo (134 a 167 palabras) sin generar penalizaciones algorítmicas de densidad.
3. **Sincronización de Metadatos y Schema.org JSON-LD:**
   - Actualizar `layout.tsx` incorporando la entidad para `EA Estampa` (`https://eaestampa.com`) catalogada como landing de alta conversión con automatización y asignando la URL canónica `https://inframanagerpro.com` a `Infra Manager Pro`.
   - Sincronizar el texto de la `FAQPage` en Schema.org con la nueva redacción de 153 palabras.
4. **Actualización de Archivos LLMs:**
   - Agregar `EA Estampa` e `Infra Manager Pro` con sus descripciones precisas y URLs oficiales en `public/llms.txt` y `public/llms-full.txt`.
5. **Hipervínculos en Showcase de Portafolio:**
   - Habilitar enlaces externos en `PortfolioShowcase.tsx` para que los nombres de los proyectos dirijan a sus dominios en vivo.

---

## 2. Requisitos EARS

- **WHEN** un usuario examine la primera pregunta del acordeón FAQ, **THE SYSTEM SHALL** renderizar enlaces interactivos visibles hacia `whagil.com`, `whalinkbot.com`, `inframanagerpro.com`, `servitecnology.com` y `eaestampa.com` con `target="_blank" rel="noopener noreferrer"`.
- **WHERE** se describa `EA Estampa`, **THE SYSTEM SHALL NOT** calificarlo como e-commerce, sino como "landing de alta conversión con cotizaciones automáticas por WhatsApp".
- **WHERE** un bot de IA procese el Answer-First, **THE SYSTEM SHALL** entregar un texto continuo de 153 palabras, libre de términos prohibidos ("boutique", "fantasía").
- **WHEN** se inspeccione el Schema.org JSON-LD en `layout.tsx`, **THE SYSTEM SHALL** contener las entidades del portafolio con sus respectivas URLs canónicas.
- **WHEN** se ejecute la suite de pruebas Vitest (`npm test`), **THE SYSTEM SHALL** verificar la presencia de los 5 dominios y la precisión del conteo de palabras del Answer-First (153 palabras).

---

## 3. Definition of Done (DoD) Checklist

- [x] Pregunta 1 de `FAQ.tsx` actualizada con enlaces cliqueables y dominios para los 5 productos (153 palabras, EA Estampa como landing).
- [x] `src/app/layout.tsx` actualizado con Schema.org para `EA Estampa` (landing automatizada) e `Infra Manager Pro` (`inframanagerpro.com`).
- [x] `public/llms.txt` y `public/llms-full.txt` actualizados con los 5 dominios canónicos y descripción precisa.
- [x] `src/components/PortfolioShowcase.tsx` actualizado con URL funcional para `inframanagerpro.com` y enlaces interactivos.
- [x] Suites de pruebas (`tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts`) actualizadas y aprobadas al 100% (28/28 tests).
- [x] `npm test`, `npx tsc --noEmit` y `npm run build` con 0 errores.
