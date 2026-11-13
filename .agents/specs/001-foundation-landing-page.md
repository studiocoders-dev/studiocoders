# Feature Spec: Landing Page Principal de Studio Coders (`studiocoders.dev`)

> **Ubicación:** `.agents/specs/001-foundation-landing-page.md`  
> **Estado:** Borrador  
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
Una Single Page Application (SPA) de alto impacto visual (dark mode tipo Brotherhood.dev y Vercel) estructurada en 7 secciones estratégicas:

1. **Header / Navbar:** Logo corporativo Studio Coders, navegación de anclas (`#proceso`, `#proyectos`, `#faq`) y CTA principal: *"Agendar llamada"*.
2. **Hero Section:**
   - Badge superior: *"Entrega en Producción en 14 Días · Agentes IA & Software Ágil"*.
   - Headline: *"Tu software o Agente IA en producción en dos semanas."*
   - Subtítulo: *"No un mockup ni una demo: una primera versión real, desplegada y con usuarios, lista para facturar."*
   - CTAs duales: *"Agendar Scope Call (15 min)"* y *"Explorar Proyectos Reales"*.
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
   - Mención legal: *"Operado por Jesús León Soluciones Informáticas (Chile) · Contratos de exportación y facturación B2B"*.

---

## 3. Requisitos EARS (Easy Approach to Requirements Syntax)
- **WHEN** un usuario visite la raíz del sitio, **THE SYSTEM SHALL** renderizar la página completa en tema oscuro con tiempo de carga LCP menor a 1.2 segundos y metadatos OpenGraph / Twitter Cards válidos.
- **WHEN** un usuario haga clic en *"Agendar llamada"*, **THE SYSTEM SHALL** abrir el modal o enlace directo al calendario de agendamiento (Cal.com / Google Calendar / WhatsApp B2B).
- **WHERE** los motores de búsqueda o asistentes de IA inspeccionen el HTML, **THE SYSTEM SHALL** proveer esquemas estructurados Schema.org JSON-LD (`ProfessionalService`, `FAQPage`, `SoftwareApplication`).

---

## 4. Definition of Done (DoD) Checklist
- [ ] Layout base con tipografías y tema oscuro (`globals.css`) implementado.
- [ ] Componentes modulares creados: `Navbar`, `Hero`, `ProcessTimeline`, `PortfolioShowcase`, `ComparisonTable`, `FAQ`, `Footer`.
- [ ] Esquema Schema.org JSON-LD inyectado en `layout.tsx`.
- [ ] Suite de pruebas unitarias (`tests/landing.test.ts`) validando renderizado y textos clave.
- [ ] Build de Next.js (`npm run build`) ejecutado sin errores de TypeScript ni linter.
