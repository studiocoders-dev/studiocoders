# Feature Spec: Incorporación de Secciones "Qué Construimos" y "Por Qué los Proyectos se Atrasan", Estructura Homóloga y Calibración de Copys

> **Ubicación:** `.agents/specs/005-services-and-delay-causes-sections.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/005-services-and-delay-causes-sections.md`](../plans/005-services-and-delay-causes-sections.md)

---

## 1. Contexto y Objetivos

El usuario ha solicitado alinear la estructura y completitud de secciones de `studiocoders.dev` con el estándar de `brotherhood.dev`, incorporando dos secciones de alto impacto comercial que faltaban en la landing, ajustando el subtítulo del Hero a una longitud concisa (eliminando la palabra "sprint"), eliminando la locución "de fantasía" de todos los textos legales y ontológicos, y manteniendo una paráfrasis elegante con la misma simplicidad y contundencia del original.

### Metas Específicas:
1. **Calibración del Subtítulo del Hero:**
   - Reducir la extensión a 3 frases concisas con el ritmo idéntico del modelo ("Sin maquetas ni promesas en papel. Una versión real, desplegada con base de datos y pagos, que tú y tu equipo pueden abrir y usar el día catorce. Después iteramos contigo cada semana.").
   - Eliminar definitivamente la palabra "sprint".
2. **Eliminación Total de "de fantasía":**
   - Reemplazar "operado bajo el nombre de fantasía Studio Coders Dev..." por "operado formalmente bajo la firma Studio Coders Dev..." o "operado comercialmente como Studio Coders Dev con RUT 77.709.717-2" en todos los componentes (`FAQ.tsx`, `layout.tsx`, `llms.txt`, `llms-full.txt` y tests).
3. **Nueva Sección: "Qué construimos" (`ServicesSection.tsx`):**
   - Título: *"Cinco cosas, descritas por lo que resuelven."*
   - Eyebrow: `QUÉ CONSTRUIMOS`
   - 5 capacidades esenciales:
     1. Sitios web y plataformas que cargan al instante.
     2. Aplicaciones móviles para iOS y Android.
     3. Sistemas internos y software a medida.
     4. Integraciones entre herramientas que ya usas.
     5. Inteligencia Artificial aplicada a un proceso real.
4. **Nueva Sección: "Antes de contratar a nadie" (`DelayCauses.tsx`):**
   - Título: *"Por qué los proyectos de software se atrasan."*
   - Eyebrow: `ANTES DE CONTRATAR A NADIE`
   - Bajada: *"Rara vez ocurre porque la ingeniería sea difícil. Casi siempre se debe a cuatro decisiones tomadas antes de que exista una línea de código."*
   - 4 decisiones parafraseadas con exactitud y sencillez:
     1. Elegir la propuesta más económica.
     2. Pedir un presupuesto antes de entender el alcance.
     3. No ver software funcionando hasta el final.
     4. Nunca conocer a quienes escriben el código.
5. **Estructura Homóloga de la Página (`page.tsx`):**
   - Orden secuencial:
     `Navbar` → `Hero` → `ServicesSection` (Qué construimos) → `ProcessTimeline` (El Método) → `PortfolioShowcase` (Proyectos) → `DelayCauses` (Antes de contratar a nadie) → `ComparisonTable` (Comparativa) → `FAQ` → `ContactForm` → `Footer`.

---

## 2. Requisitos EARS

- **WHEN** un usuario examine el Hero, **THE SYSTEM SHALL** presentar un subtítulo conciso de 3 frases, sin la palabra "sprint", que comunique entrega en el día catorce e iteración semanal.
- **WHEREVER** se mencione la personería comercial y RUT de la empresa, **THE SYSTEM SHALL NOT** incluir la expresión "de fantasía", empleando en su lugar "operado formalmente como Studio Coders Dev con RUT 77.709.717-2".
- **WHEN** el usuario navegue tras el Hero, **THE SYSTEM SHALL** renderizar la sección "Qué construimos" desglosando las 5 soluciones orientadas a valor de negocio.
- **WHEN** el usuario llegue a la sección post-portafolio, **THE SYSTEM SHALL** renderizar "Antes de contratar a nadie", exponiendo las 4 decisiones prematuras que retrasan el software.
- **WHEN** se ejecute la suite de verificación Vitest (`npm test`), **THE SYSTEM SHALL** verificar el 100% de los tests unitarios, el blindaje AEO (134-167 palabras) y la ausencia de términos prohibidos.

---

## 3. Definition of Done (DoD) Checklist

- [x] Subtítulo del Hero recortado a longitud exacta, sin "sprint" y con métrica de 3 oraciones concisas.
- [x] Frase "de fantasía" erradicada en `FAQ.tsx`, `layout.tsx`, `public/llms.txt`, `public/llms-full.txt` y tests.
- [x] Componente `src/components/ServicesSection.tsx` creado y estilizado con Tailwind 4 y dark mode.
- [x] Componente `src/components/DelayCauses.tsx` creado y estilizado con estética editorial minimalista.
- [x] `src/app/page.tsx` actualizado con el nuevo orden homólogo de secciones.
- [x] `src/components/Navbar.tsx` actualizado para incluir anclaje directo a `#servicios`.
- [x] Tests en `tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts` actualizados con aserciones para las dos nuevas secciones y conteo de palabras del Answer-First.
- [x] `npm test` aprobado al 100% (28/28 tests).
- [x] `npx tsc --noEmit` y `npm run build` con 0 errores.
