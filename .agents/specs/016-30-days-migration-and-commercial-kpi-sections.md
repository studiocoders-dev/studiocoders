# Feature Spec: Unificación Comercial, Migración Integral a 30 Días y Nuevas Secciones KPI / Garantías / CTA en 3 Pasos

> **Ubicación:** `.agents/specs/016-30-days-migration-and-commercial-kpi-sections.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/016-30-days-migration-and-commercial-kpi-sections.md`](../plans/016-30-days-migration-and-commercial-kpi-sections.md)

---

## 1. Contexto y Objetivos

El análisis competitivo de la estrategia dual entre `brotherhood.dev` (14 días) y `landing.brotherhood.dev` (30 días, enfoque comercial de conversión) demuestra que dividir la marca en un subdominio separado (`landing.`) diluye la autoridad SEO de dominio y genera contradicciones semánticas frente a compradores B2B y motores de respuesta IA (AEO/GEO). Asimismo, prometer entregas de software complejo en 14 días genera fricción de credibilidad frente a plataformas de alta ingeniería, mientras que **30 días** ofrece realismo operativo conservando una ventaja de velocidad de 4x a 6x frente a las agencias tradicionales.

Para consolidar la autoridad técnica, el SEO/AEO y la conversión comercial en un único dominio canónico (`studiocoders.dev`), esta especificación define los siguientes objetivos:

1. **Migración Integral de 14 Días a 30 Días (con Hito Staging al Día 15):** Actualizar de forma unánime la promesa de valor, metadatos SEO, esquemas JSON-LD, archivos `llms.txt`, documentación estratégica SDD, cronograma operativo y FAQs de **14 días** a **30 días**, manteniendo una entrega intermedia verificable en entorno de pruebas (*Staging*) en el **Día 15** y lanzamiento productivo llave en mano en el **Día 30**.
2. **Sección de Métricas KPI (`ImpactMetrics`):** Incorporar una sección de impacto cuantitativo con encabezado parafraseado (omitiendo cualquier referencia artificial a `"+100 proyectos"`) y 3 indicadores KPI limpios:
   - **`30`**: Días para entregar tu desarrollo en producción.
   - **`5%`**: Inversión inicial para arrancar el proyecto.
   - **`+5`**: Años de experiencia en ingeniería de software.
3. **Sección de Respaldo Multi-Industria y Garantías Comerciales (`CommercialGuarantees`):** Incorporar una sección con encabezado enfocado en múltiples industrias (logística, salud, finanzas, comercio y operaciones) con desarrollos llave en mano, 100% a nombre del cliente y un año de soporte incluido (sin mencionar `"+100 proyectos entregados"`), acompañada de **5 tarjetas diferenciadoras** (excluyendo la tarjeta de `"+100 proyectos exitosos"` y ajustando la trayectoria a **`+5 años de experiencia`** en coherencia con el KPI):
   - `01.` **`+5 años de experiencia`** (equipo de ingenieros y especialistas con más de cinco años creando soluciones tecnológicas a medida).
   - `02.` **`Arrancas con solo el 5%`** (inicio de desarrollo con apenas el 5% del presupuesto cerrado).
   - `03.` **`Entrega en 30 días`** (metodología ágil asistida por IA para liberar software funcional en un mes).
   - `04.` **`100% a tu nombre`** (entrega llave en mano, código fuente y propiedad intelectual totales para el cliente).
   - `05.` **`1 año de soporte incluido`** (acompañamiento técnico gratuito durante doce meses posteriores al lanzamiento).
4. **Sección de Pre-Cierre en 3 Simples Pasos (`QuickStepsCTA`):** Añadir un bloque comercial directo previo al formulario de contacto con una dinámica transparente en 3 pasos y un llamado a la acción principal hacia `#contacto`.
5. **Originalidad de Copy (Cero Plagio):** Todo el texto visible en las nuevas secciones debe estar **100% parafraseado** con la voz B2B de Studio Coders (nunca copiado textualmente de `landing.brotherhood.dev`), respetando los estándares de contraste WCAG 2.1 AA, animaciones compuestas GPU y reglas estrictas de posicionamiento de marca.

---

## 2. Requisitos Funcionales EARS

- **WHEN** un usuario, buscador tradicional o motor de respuesta IA inspeccione cualquier sección visible, metadato HTML, esquema Schema.org JSON-LD o archivo `llms.txt` / `llms-full.txt` de `studiocoders.dev`, **THE SYSTEM SHALL** comunicar de manera uniforme el plazo de entrega en producción de **30 días** (con validación funcional en Staging en el **Día 15**), sin menciones residuales ni contradictorias a 14 días.
- **WHEN** se renderice la sección de métricas de ejecución (`ImpactMetrics`), **THE SYSTEM SHALL** presentar un encabezado original y parafraseado libre de menciones a `"+100 proyectos"` y renderizar exactamente 3 tarjetas KPI con los valores `30`, `5%` y `+5` (años de experiencia).
- **WHEN** se renderice la sección de garantías comerciales (`CommercialGuarantees`), **THE SYSTEM SHALL** mostrar un título y subtítulo multi-industria parafraseados (logística, salud, finanzas, entregas llave en mano, 100% a nombre del cliente y un año de soporte incluido, sin citar `"+100 proyectos entregados"`) y exactamente 5 tarjetas numeradas (`01.` a `05.`): `+5 años de experiencia`, `Arrancas con solo el 5%`, `Entrega en 30 días`, `100% a tu nombre` y `1 año de soporte incluido`.
- **WHEN** el visitante avance hacia la etapa de conversión previa al formulario de contacto, **THE SYSTEM SHALL** renderizar la sección `QuickStepsCTA` con un titular parafraseado de 3 simples pasos (*Llamada de alcance técnico*, *Propuesta cerrada e inicio con 5%* y *Despliegue llave en mano en 30 días*) junto a un botón CTA primario que enlace a `#contacto`.
- **WHILE** se añadan y actualicen las secciones y contenidos de `studiocoders.dev`, **THE SYSTEM SHALL** mantener todo el copy 100% parafraseado respecto a referencias externas, respetar todas las prohibiciones de vocabulario de marca (cero `"boutique"`, cero `"de fantasía"`, cero `"sprint"`, cero divisas o medios informales) y preservar el conteo exacto de palabras requerido en las respuestas atómicas AEO del JSON-LD (`105` palabras en la Pregunta 1 y `99` palabras en la Pregunta 2).
- **WHEN** el usuario navegue por las 3 nuevas secciones (`#metricas`, `#respaldo`, `#como-empezar`), **THE SYSTEM SHALL** registrar sus IDs en `MotionController.tsx` (`SECTION_IDS`) y aplicar exactamente las mismas animaciones compuestas en GPU que el resto de la página: ciclo completo de scroll (**Entrada** `data-vstate="entering"`, **Durante** `data-vstate="active"` + `data-vfocus="true"` + spotlight radial `--spotlight-x`/`--spotlight-y` + haz láser superior `data-section-state="active"`, y **Salida** `data-vstate="exiting"`), eliminando además cualquier transición residual de `box-shadow` en `src/app/globals.css` (`.sc-surface-glow` y `[data-vfocus="true"]`) para mantener únicamente `transform` y `opacity` sin alertas de animaciones no compuestas en Lighthouse.
- **WHILE** se rendericen `ImpactMetrics`, `CommercialGuarantees` y `QuickStepsCTA`, **THE SYSTEM SHALL** mantenerlas como **React Server Components puros** (cero JavaScript adicional en el cliente) y cumplir al 100% los criterios de **Google PageSpeed Insights**: jerarquía secuencial estricta de encabezados (`h2` -> `h3` sin saltos), `aria-hidden="true"` en todos los íconos SVG/`lucide-react` decorativos, contraste WCAG 2.1 AA ($\ge 4.5:1$) y soporte completo de `prefers-reduced-motion: reduce` (`100` Accesibilidad, `100` Recomendaciones, `100` SEO, `3/3` Navegación con agentes).

---

## 3. Definition of Done (DoD) Checklist

- [x] Documentos maestros y reglas SDD actualizados a la propuesta de **30 días** (con hito Día 15, inicio con 5% y 1 año de soporte): `AGENTS.md`, `.agents/rules/business-positioning.md`, `.agents/rules/aeo-seo-metadata.md` y `ROADMAP.md`.
- [x] Documentación para LLMs actualizada a 30 días en `public/llms.txt` y `public/llms-full.txt`.
- [x] Metadatos, OpenGraph, Twitter Cards y grafo Schema.org JSON-LD (`WebSite`, `ProfessionalService`, `FAQPage`) actualizados a 30 días en `src/app/layout.tsx`, preservando los conteos exactos de palabras AEO (`105` palabras en Q1 y `99` palabras en Q2).
- [x] Componentes existentes actualizados de forma consistente a **30 días** (y Staging al Día 15): `Navbar.tsx`, `Hero.tsx`, `ProcessTimeline.tsx`, `ComparisonTable.tsx` y `FAQ.tsx`.
- [x] Nuevos Server Components comerciales implementados con copy 100% parafraseado, jerarquía `h2 -> h3`, `aria-hidden="true"` en iconos decorativos y animaciones GPU compuestas (`.sc-section-flow`, `.sc-card-flow`, `.sc-surface-glow`, `--stagger-index`): `ImpactMetrics.tsx` (3 KPIs: `30`, `5%`, `+5`), `CommercialGuarantees.tsx` (encabezado multi-industria + 5 cards desde `+5 años de experiencia`) y `QuickStepsCTA.tsx` (3 pasos simples + CTA a `#contacto`).
- [x] `MotionController.tsx` actualizado con `"metricas"`, `"respaldo"` y `"como-empezar"` en `SECTION_IDS`, y `src/app/globals.css` depurado de transiciones residuales de `box-shadow` en `.sc-surface-glow` y `[data-vfocus="true"]` para asegurar 100% composición GPU en PageSpeed Insights.
- [x] Nuevos componentes integrados en el flujo principal de `src/app/page.tsx`.
- [x] Suites de pruebas unitarias actualizadas y ampliadas en `tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts` validando la migración a 30 días, las 3 nuevas secciones, la ausencia de `"+100"`, la cobertura de animaciones/IDs en `MotionController.tsx` y las reglas de marca/accesibilidad/PageSpeed.
- [x] Verificación Gate 4 ejecutada y aprobada con `0` errores (`npx tsc --noEmit`, `npm run lint`, `npm test`, `npm run build`).
