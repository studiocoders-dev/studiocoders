# Feature Spec: Desacople Narrativo, Paráfrasis Integral y Rediseño de Contenidos para Studio Coders (`studiocoders.dev`)

> **Ubicación:** `.agents/specs/004-content-narrative-differentiation.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/004-content-narrative-differentiation.md`](../plans/004-content-narrative-differentiation.md)

---

## 1. Problema y Diagnóstico de Originalidad (Brand Differentiation)

### Diagnóstico Actual:
1. **Título de Pestaña (Browser Tooltip):** El título actual (`studiocoders.dev - tu software en producción en dos semanas`) es un calco literal del de `brotherhood.dev`.
2. **Textos y Copys de la Web:** Titulares como *"En dos semanas tu software o Agente IA está en producción"*, subtítulos como *"No un mockup ni una demo..."*, y títulos de sección como *"Los primeros toman dos semanas"* y *"No tienes que creernos sobre cómo construimos software"* presentan un porcentaje de similitud excesivo con Brotherhood.
3. **Bloque Answer-First en el Hero:** El bloque textual de 154 palabras colocado como bloque denso dentro del Hero satura visualmente la primera pantalla y perjudica la experiencia de usuario (UX), ya que ningún tomador de decisiones B2B lee un bloque denso de texto corrido al aterrizar.
4. **Referencia Whagil.com:** En `whagil.com`, el Answer-First y las definiciones ontológicas se manejan de forma elegante mediante acordeones interactivos AEO (`LandingFaqSection`), Schema.org JSON-LD estructurado y archivos `llms.txt`, manteniendo el Hero limpio, visual y orientado a la conversión rápida.

---

## 2. Solución Funcional y Reingeniería Narrativa

### A. Nuevo Título de Pestaña (Conciso, Único y sin Cortes):
- **Nuevo Title:** `studiocoders.dev — De la Idea a Producción en 14 Días` (51 caracteres).
- **Ventaja:** Comunica velocidad, transformación ("de la idea a producción") y cabe al 100% en las pestañas de Chrome/Brave/Safari sin puntos suspensivos ni calcos de terceros.

### B. Reescritura y Paráfrasis Integral de Secciones (Cero Calco):

| Sección | Texto Anterior (Similitud Brotherhood) | Nueva Narrativa Original Studio Coders |
| :--- | :--- | :--- |
| **Hero Eyebrow** | `SANTIAGO, CHILE · TRABAJAMOS CON TODA LATINOAMÉRICA` | `SANTIAGO DE CHILE · INGENIERÍA ÁGIL PARA LATINOAMÉRICA & GLOBAL` |
| **Hero Headline** | *"En dos semanas tu software o Agente IA está en producción."* | **"Lanzamos tu aplicación web o Agente de IA en 14 días."** |
| **Hero Subtitle** | *"No un mockup ni una demo. Una versión real, desplegada, que tú y tu equipo pueden abrir..."* | *"Olvídate de presupuestos inflados y agencias que tardan meses en maquetas. Construimos una plataforma funcional, desplegada con base de datos y pagos, lista para operar en tu primer sprint. Directo con ingenieros senior."* |
| **Hero CTAs** | *"Cuéntanos tu proyecto"* / *"Mira cómo trabajamos"* | **"Cotizar proyecto (Scope 20 min)"** / **"Conoce nuestra arquitectura"** |
| **Proceso 14 Días** | *"Los primeros toman dos semanas."* / *"Por qué dos semanas es posible: La velocidad sin explicación..."* | **"De requerimiento a producción real en dos semanas."** / Subtítulo: *"¿Cómo logramos entregar en 14 días? Eliminamos las capas de intermediarios y aceleramos con IA bajo supervisión senior."* |
| **Hitos del Proceso** | Día 0, Día 2, Día 14, Cada semana (idéntico a Brotherhood) | **Día 0:** Llamada técnica de 20 min con un desarrollador senior para definir el núcleo funcional · **Día 2:** Arquitectura definida y presupuesto cerrado en USD sin costos ocultos · **Día 14:** Sistema o Agente IA en producción, desplegado y con repo 100% tuyo · **Cada semana:** Iteraciones y nuevas funciones con avances reales en navegador. |
| **Portafolio** | *"No tienes que creernos sobre cómo construimos software."* | **"Plataformas activas procesando operaciones críticas cada día."** / *"Respaldamos cada línea de código con sistemas propios y de clientes funcionando 24/7 en alta concurrencia."* |
| **Comparativa** | *"Por qué fundadores y empresas eligen Studio Coders."* | **"Studio Coders frente al modelo de agencia tradicional."** |
| **Contacto** | *"Cuéntanos tu proyecto."* | **"Construyamos tu próximo sistema."** / *"Agenda una sesión técnica de 20 minutos con un desarrollador senior. Analizamos la viabilidad y te entregamos un presupuesto cerrado en menos de 24 horas."* |

### C. Rediseño del Bloque Answer-First (Patrón Whagil.com):
- **Retiro del Hero:** Eliminar el bloque de texto denso del Hero para devolverle la elegancia minimalista y el impacto visual.
- **Integración en FAQ Desplegable (AEO Nativo):** Transformar la definición ontológica en la **Pregunta 1 del Acordeón FAQ**:
  - `¿Qué es Studio Coders y quién respalda su operación técnica y legal?`
  - Contiene exactamente las 154 palabras del Answer-First con la mención de `Studio Coders Dev · RUT: 77.709.717-2`, portafolio canónico, contratos en USD y sede en Santiago de Chile.
- **Beneficio:** Cumple al 100% el requerimiento de extracción para Google AI Overviews, Perplexity y ChatGPT Search mediante Schema.org `FAQPage` y contenido visible expandible, sin sobrecargar la experiencia del usuario.

---

## 3. Requisitos EARS

- **WHEN** un usuario visite la landing, **THE SYSTEM SHALL** presentar una narrativa 100% original, diferenciada y persuasiva con menos del 15% de similitud léxica con Brotherhood.
- **WHEN** se posicione el cursor en la pestaña del navegador, **THE SYSTEM SHALL** mostrar `studiocoders.dev — De la Idea a Producción en 14 Días` sin truncamiento.
- **WHERE** se inspeccione la sección Hero, **THE SYSTEM SHALL** lucir limpia, sin bloques de texto masivos, derivando la densidad semántica al acordeón FAQ y a los metadatos JSON-LD.
- **WHEN** los crawlers de IA inspeccionen el sitio, **THE SYSTEM SHALL** encontrar la definición Answer-First intacta dentro de la primera pregunta del FAQ y en `public/llms.txt`.

---

## 4. Definition of Done (DoD) Checklist

- [x] Título de pestaña actualizado en `layout.tsx` a `studiocoders.dev — De la Idea a Producción en 14 Días`.
- [x] Hero rediseñado con nuevo titular, subtítulo en Newsreader y CTAs directos, retirando el bloque de texto denso.
- [x] Proceso de 14 días parafraseado con estructura simple y original (Día 0, Día 2, Día 14, Cada semana).
- [x] Portafolio, Comparativa y Contacto actualizados con copys originales de alto valor.
- [x] FAQ enriquecida incluyendo la definición Answer-First de 154 palabras en la primera pregunta desplegable.
- [x] Metadatos OpenGraph, Twitter y Schema.org sincronizados con los nuevos textos.
- [x] Suite de pruebas Vitest (`npm test`) adaptada y aprobada al 100% (25/25 tests).
- [x] Compilación Turbopack (`npm run build`) y typecheck (`npx tsc --noEmit`) con 0 errores.
