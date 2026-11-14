# Feature Spec: Landing Page Principal de Studio Coders (`studiocoders.dev`)

> **Ubicación:** `.agents/specs/001-foundation-landing-page.md`  
> **Estado:** Completado  
> **Fecha:** Noviembre 2026  
> **Referencia Plan Técnico:** [`.agents/plans/001-foundation-landing-page.md`](../plans/001-foundation-landing-page.md)

---

## 1. Problema y Fricción de Usuario (UX)
Los fundadores, gerentes y tomadores de decisiones B2B enfrentan una fricción recurrente al contratar desarrollo de software:
- Las agencias tradicionales tardan meses en entregar un primer avance, inflan presupuestos y colocan project managers intermediarios que no entienden de arquitectura técnica.
- Los clientes necesitan validar rápido con software real en producción, sin perder semanas en mockups inútiles de Figma.
- Studio Coders necesita una vitrina digital de alto estatus que comunique de inmediato velocidad (14 días), trato directo con desarrolladores senior y respaldo de proyectos propios reales.

---

## 2. Solución Funcional y Arquitectura de Pantallas
Una Single Page Application (SPA) de estética minimalista inspirada directamente en Brotherhood.dev:
- **Línea Visual:** Fondo Dark Graphite (`#14161c`), tarjetas elevadas (`#1c1f28`), líneas divisorias sutiles (`#2e3340`) y acento púrpura eléctrico (`#6366f1` / `#818cf8` con wash `rgba(99, 102, 241, 0.12)`) sustituyendo el azul tradicional.
- **Trío Tipográfico:**
  - **Archivo:** Headings limpios y contundentes con `tracking-tight`.
  - **Newsreader:** Subtítulos y prosa en serif editorial de alto estatus.
  - **IBM Plex Mono:** Eyebrows geográficos, cronogramas y etiquetas técnicas.

Estructurada en 7 secciones estratégicas:

1. **Header / Navbar:** Logo corporativo `studiocoders.dev`, navegación contextual (`#metodo`, `#proyectos`, `#faq`) y botón CTA en púrpura eléctrico.
2. **Hero Section:**
   - Badge superior (IBM Plex Mono + wash púrpura): `SANTIAGO, CHILE · TRABAJAMOS CON TODA LATINOAMÉRICA`.
   - Headline (Archivo): *"En dos semanas tu software o Agente IA está en producción."*
   - Subtítulo (Newsreader serif): *"No un mockup ni una demo: una primera versión real, desplegada, que tú y tu equipo pueden abrir y usar el día catorce. Después iteramos contigo cada semana hasta terminarlo."*
   - CTAs duales: *"Cuéntanos tu proyecto"* (botón sólido púrpura `#6366f1`) y *"Mira cómo trabajamos"* (botón outline minimalista con borde `#2e3340`).
3. **El Proceso de 14 Días (Timeline visual):**
   - **Día 0:** Scope call técnica y definición de MVP.
   - **Día 2:** Presupuesto cerrado y arquitectura fijada.
   - **Día 7:** Primera versión funcional desplegada en staging.
   - **Día 14:** Despliegue en producción final con base de datos y pagos.
4. **Showcase del Portafolio de Ingeniería (4 Proyectos Reales):**
   - **Whagil IA:** Agentes conversacionales y automatización omnicanal con WebSockets y BullMQ.
   - **Whalinkbot:** Motor cloud asíncrono para WhatsApp.
   - **Infra Manager Pro:** ERP empresarial de 33,000 líneas de código para activos y cobranza.
   - **Servitecnology E-commerce:** Arquitectura headless de comercio electrónico en Astro + Supabase.
5. **Tabla Comparativa de Mercado (AEO-Friendly):**
   - Studio Coders vs. Agencias Tradicionales vs. Freelancers.
6. **FAQ Atómica:** 6 preguntas clave con respuestas directas sobre propiedad del código, soporte post-lanzamiento, stack tecnológico y facturación internacional.
7. **Footer Institucional:**
   - Enlace de contacto (`studiocoders.dev@gmail.com`).
   - Mención legal: *"Operado por Studio Coders Dev · RUT: 77.709.717-2 (Chile) · Contratos de exportación y facturación B2B"*.

---

## 3. Requisitos EARS (Easy Approach to Requirements Syntax)
- **WHEN** un usuario visite la raíz del sitio, **THE SYSTEM SHALL** renderizar la página completa en tema oscuro con tiempo de carga LCP menor a 1.2 segundos y metadatos OpenGraph / Twitter Cards válidos.
- **WHEN** un usuario haga clic en *"Agendar llamada"*, **THE SYSTEM SHALL** abrir el modal o enlace directo al calendario de agendamiento (Cal.com / Google Calendar / WhatsApp B2B).
- **WHERE** los motores de búsqueda o asistentes de IA inspeccionen el HTML, **THE SYSTEM SHALL** proveer esquemas estructurados Schema.org JSON-LD (`ProfessionalService`, `FAQPage`, `SoftwareApplication`).

---

## 4. Definition of Done (DoD) Checklist
- [x] Layout base con tipografías (Archivo, Newsreader, IBM Plex Mono) y tema oscuro (`globals.css`) implementado.
- [x] Componentes modulares creados: `Navbar`, `Hero`, `ProcessTimeline`, `PortfolioShowcase`, `ComparisonTable`, `FAQ`, `ContactForm`, `Footer`.
- [x] Esquema Schema.org JSON-LD inyectado en `layout.tsx` (`ProfessionalService`, `FAQPage`).
- [x] Suite de pruebas unitarias (`tests/landing.test.tsx`) validando 15 tests con 100% de éxito.
- [x] Build de Next.js (`npm run build`) y linter (`npm run lint`) ejecutados con 0 errores y 0 warnings.
