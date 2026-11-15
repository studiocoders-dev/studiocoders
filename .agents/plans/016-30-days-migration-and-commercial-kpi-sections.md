# Plan Técnico: Unificación Comercial, Migración Integral a 30 Días y Nuevas Secciones KPI / Garantías / CTA en 3 Pasos

> **Ubicación:** `.agents/plans/016-30-days-migration-and-commercial-kpi-sections.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/016-30-days-migration-and-commercial-kpi-sections.md`](../specs/016-30-days-migration-and-commercial-kpi-sections.md)

---

## 1. Arquitectura de Cambios

### 1.1 Sincronización de Reglas Maestras y Documentación IA (`[MODIFY]`)
Actualizar de manera coordinada las referencias de 14 días a 30 días para eliminar cualquier contradicción interna:
- **`[MODIFY]` `AGENTS.md`:** Actualizar la línea de misión de *"en producción en 14 días"* a *"en producción en 30 días"*.
- **`[MODIFY]` `.agents/rules/business-positioning.md`:**
  - Actualizar la **Promesa Irresistible** a 30 días.
  - Actualizar el **Modelo Operativo** con los hitos: `Día 0` (Scope Call de 20 min), `Día 2` (Presupuesto cerrado y arquitectura definida), `Día 15` (Primera versión funcional en entorno de staging) y `Día 30` (Despliegue llave en mano en producción con base de datos, autenticación y pagos).
  - Documentar las condiciones comerciales unificadas: arranque con el `5%` de inversión inicial y `1 año de soporte técnico` incluido tras la entrega.
- **`[MODIFY]` `.agents/rules/aeo-seo-metadata.md`:** Actualizar el ejemplo de cita declarativa de IA de `"en 14 días"` a `"en 30 días"`.
- **`[MODIFY]` `ROADMAP.md`:** Actualizar el modelo de entrega a 30 días, consolidando el embudo comercial dentro del dominio principal `studiocoders.dev` en lugar de fragmentarlo en subdominios aislados.
- **`[MODIFY]` `public/llms.txt`:** Actualizar el resumen ejecutivo y el enlace `#metodo` de `"14 días"` / `"Método 14 Días"` a `"30 días"` / `"Método 30 Días"`.
- **`[MODIFY]` `public/llms-full.txt`:** Renombrar la sección `### El Método de los 14 Días:` a `### El Método de los 30 Días:`, actualizando los hitos (`Día 15 (Staging Funcional)` y `Día 30 (Producción Final)`) e incorporando las condiciones comerciales (`5%` de inversión inicial y `1 año de soporte` post-lanzamiento).

---

### 1.2 Metadatos SEO y Schema.org JSON-LD (`[MODIFY]` `src/app/layout.tsx`)
- Actualizar `metadata.title`, `openGraph.title` y `twitter.title` a `"studiocoders.dev — De la Idea a Producción en 30 Días"`.
- Actualizar `metadata.description`, `openGraph.description`, `twitter.description`, `WebSite.description` y `ProfessionalService.description` cambiando `"14 días"` por `"30 días"`.
- En `FAQPage`:
  - **Pregunta 1:** Reemplazar `"14 días"` por `"30 días"` manteniendo exactamente la estructura y las **105 palabras** requeridas por la aserción de `tests/seo-geo-aeo.test.ts`.
  - **Pregunta 3:** Actualizar el título a `"¿Cómo es posible tener una primera versión en producción en 30 días?"` manteniendo el detalle técnico del hito de revisión al día 15 y la entrega final al día 30.
  - **Pregunta de soporte:** Reflejar el año completo de soporte técnico incluido post-lanzamiento junto con los planes opcionales de evolución y mantenimiento extendido.

---

### 1.3 Actualización de Componentes Existentes (`[MODIFY]`)
1. **`[MODIFY]` `src/components/Navbar.tsx`:**
   - Cambiar el texto del enlace `#metodo` de `"Método 14 Días"` a `"Método 30 Días"`.
2. **`[MODIFY]` `src/components/Hero.tsx`:**
   - Cambiar el `<h1>` a `"Lanzamos tu aplicación web o Agente de IA en 30 días."`.
   - En el subtítulo `<p>`, reemplazar `"el día catorce"` por `"el día treinta"`, manteniendo la validación previa en staging y las iteraciones semanales posteriores.
   - En la barra inferior de métricas de confianza, cambiar `"14 Días"` por `"30 Días"`.
3. **`[MODIFY]` `src/components/ProcessTimeline.tsx`:**
   - Actualizar `<h2>` a `"De requerimiento a producción real en treinta días."`.
   - Actualizar la lista `steps` con los 5 hitos reales:
     - `Día 0`: Llamada técnica de 20 minutos con un desarrollador senior.
     - `Día 2`: Propuesta técnica con arquitectura definida, presupuesto cerrado en USD e inicio con el 5%.
     - `Día 15`: Primer entregable funcional en entorno de pruebas (*Staging*) para que tu equipo valide flujos reales.
     - `Día 30`: Tu sistema o Agente IA en producción llave en mano, conectado a base de datos y pagos, 100% operativo en tu propio GitHub.
     - `Cada semana`: Evolución continua y nuevas funcionalidades bajo demanda.
   - Actualizar el subtítulo `<h3>` a `"¿Cómo logramos entregar en 30 días?"`.
4. **`[MODIFY]` `src/components/ComparisonTable.tsx`:**
   - En la fila `"Entrega de primera versión"`, cambiar `"14 Días en producción"` por `"30 Días en producción"`.
   - En el subtítulo de la sección, cambiar `"en dos semanas."` por `"en treinta días."`.
5. **`[MODIFY]` `src/components/FAQ.tsx`:**
   - Sincronizar Pregunta 1 y Pregunta 3 con `layout.tsx` (`"30 días"`).
   - Actualizar la pregunta de soporte y mantenimiento para detallar el año completo de soporte técnico incluido tras el lanzamiento en producción y los planes opcionales de evolución continua.

---

### 1.4 Nuevos Componentes Comerciales (100% Parafraseados y Server Components) (`[NEW]`)

Todos los nuevos componentes serán **React Server Components** puros (sin `'use client'`, cero peso adicional en el bundle de cliente), usarán la paleta oficial (`#14161c`, `#1c1f28`, `#2e3340`, `#edeff4`, `#949aab`, `#9ea5b8`, `#818cf8`, `#4f46e5`), animaciones compuestas GPU (`.sc-section-flow` en la cabecera, `.sc-card-flow sc-surface-glow` con `--stagger-index` en cada tarjeta), jerarquía estricta de encabezados (`<h2>` en cabecera -> `<h3>` en tarjetas), `aria-hidden="true"` en todos los íconos decorativos y copy original parafraseado (nunca literal de `landing.brotherhood.dev` y sin usar palabras prohibidas como `"boutique"` o `"sprint"`).

1. **`[NEW]` `src/components/ImpactMetrics.tsx`:**
   - **Sección `#metricas`:**
   - **Eyebrow + `<h2>` con `.sc-section-flow`:** `"Métricas de Ejecución"` / `"Construimos plataformas de software y aplicaciones móviles listas para escalar."` *(sin `+100 proyectos`)*.
   - **Grilla KPI (`grid-cols-1 sm:grid-cols-3 gap-6`):** Cada tarjeta con `.sc-card-flow sc-surface-glow` y `--stagger-index` (`0` a `2`):
     1. Valor: `"30"` — Etiqueta (`<h3>` o título accesible): `"Días para entregar tu proyecto"`
     2. Valor: `"5%"` — Etiqueta: `"Inversión inicial para arrancar"`
     3. Valor: `"+5"` — Etiqueta: `"Años de experiencia en ingeniería"`

2. **`[NEW]` `src/components/CommercialGuarantees.tsx`:**
   - **Sección `#respaldo`:**
   - **Cabecera con `.sc-section-flow`:**
     - **Eyebrow:** `"Respaldo Comercial & Técnico"`
     - **`<h2>`:** `"Especialistas en desarrollo de software a medida para múltiples industrias."` *(sin `+100 proyectos entregados`)*.
     - **`<p>`:** `"Soluciones para logística, salud, finanzas, comercio y operaciones. Entregamos plataformas llave en mano, registradas al 100% a nombre de tu empresa y respaldadas con un año completo de soporte incluido."`
   - **Grilla de 5 tarjetas (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`, excluyendo la tarjeta de `+100 proyectos exitosos`):** Cada tarjeta con `.sc-card-flow sc-surface-glow`, `--stagger-index` (`0` a `4`), título en `<h3>` y íconos de `lucide-react` (`Award`, `Wallet`, `Clock`, `KeyRound`, `Headset`) marcados con `aria-hidden="true"`:
     1. `01.` **`+5 años de experiencia`**: *"Nuestro equipo de ingenieros y especialistas acumula más de cinco años diseñando y desplegando soluciones tecnológicas a medida."*
     2. `02.` **`Arrancas con solo el 5%`**: *"Iniciamos la ingeniería de tu proyecto con apenas el 5% del presupuesto aprobado, sin exigir grandes desembolsos iniciales."*
     3. `03.` **`Entrega en 30 días`**: *"Metodología de ejecución ágil asistida por IA que acelera el arranque y pone tu software o aplicación en producción en 30 días."*
     4. `04.` **`100% a tu nombre`**: *"Cada plataforma se entrega llave en mano y registrada íntegramente a nombre del cliente. El código fuente y la propiedad intelectual son tuyos."*
     5. `05.` **`1 año de soporte incluido`**: *"Te acompañamos con acompañamiento y soporte técnico sin costo durante doce meses completos tras la puesta en producción."*

3. **`[NEW]` `src/components/QuickStepsCTA.tsx`:**
   - **Sección `#como-empezar`:**
   - **Cabecera con `.sc-section-flow`:**
     - **Eyebrow:** `"Proceso de Inicio"`
     - **`<h2>`:** `"Lo hacemos realidad en 3 simples pasos."`
     - **`<p>`:** `"Una dinámica ágil, directa y sin burocracia para que tu desarrollo comience de inmediato."`
   - **Grilla de 3 pasos (`grid-cols-1 md:grid-cols-3 gap-6`):** Cada tarjeta con `.sc-card-flow sc-surface-glow`, `--stagger-index` (`0` a `2`) y título en `<h3>`:
     1. `Paso 01` — **`Diagnóstico técnico en 20 minutos`**: *"Conversas directamente con un desarrollador senior sobre tu operación y objetivos, sin vendedores intermediarios."*
     2. `Paso 02` — **`Propuesta cerrada e inicio con 5%`**: *"En 48 horas recibes la arquitectura definida, el presupuesto fijo en USD y activas el desarrollo con solo el 5% inicial."*
     3. `Paso 03` — **`Lanzamiento llave en mano en 30 días`**: *"Validas avances en entorno de pruebas el día 15 y recibes tu software desplegado a tu nombre el día 30."*
   - **Acción principal (CTA):** Botón centrado `"Cotizar proyecto en 20 minutos"` apuntando a `#contacto` con el estilo primario (`bg-[#4f46e5] text-white hover:bg-[#4338ca]`) y envoltura `.sc-card-flow` (`--stagger-index: 3`).

---

### 1.5 Animaciones Completas y Blindaje PageSpeed Insights 100% (`[MODIFY]` `src/components/MotionController.tsx` & `src/app/globals.css`)
1. **`[MODIFY]` `src/components/MotionController.tsx`:**
   - Agregar `"metricas"`, `"respaldo"` y `"como-empezar"` al arreglo `SECTION_IDS` en el orden exacto de la página para que `MotionController` active en las 3 nuevas secciones:
     - El haz láser superior de sección (`data-section-state="active"` -> `main > section::before`).
     - El ciclo completo de **Entrada** (`data-vstate="entering"`), **Durante** (`data-vstate="active"` + `data-vfocus="true"` + spotlight radial `--spotlight-x`/`--spotlight-y`) y **Salida** (`data-vstate="exiting"`).
2. **`[MODIFY]` `src/app/globals.css`:**
   - Eliminar las declaraciones residuales de `box-shadow` en `.sc-surface-glow` (líneas 72, 96-101) y en `[data-vfocus="true"]` (líneas 107, 113-115) para alinear completamente `globals.css` con `MotionController.tsx`.
   - Mantener 100% de las animaciones de scroll/hover en propiedades compuestas GPU (`transform` y `opacity`), evitando advertencias de Lighthouse sobre animaciones no compuestas y manteniendo las métricas objetivo de **PageSpeed Insights** (`100` Accesibilidad, `100` Recomendaciones, `100` SEO, `3/3` Navegación con agentes y máximo puntaje en Rendimiento móvil).

---

### 1.6 Integración en la Página Principal (`[MODIFY]` `src/app/page.tsx`)
Integrar los 3 nuevos componentes dentro de `<main>` manteniendo el orden narrativo de conversión y autoridad:
```text
Navbar -> Hero -> ImpactMetrics -> ServicesSection -> CommercialGuarantees -> ProcessTimeline -> PortfolioShowcase -> DelayCauses -> AuditGuarantees -> PublicCode -> ComparisonTable -> FAQ -> QuickStepsCTA -> ContactForm -> Footer
```

---

### 1.7 Actualización de Suites de Pruebas (`[MODIFY]` `tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts`)
1. **`[MODIFY]` `tests/landing.test.tsx`:**
   - Actualizar las aserciones de `Hero` (`30 días`, `el día treinta`), `Navbar` (`Método 30 Días`), `ProcessTimeline` (`Día 0`, `Día 2`, `Día 15`, `Día 30`, `Cada semana`, `¿Cómo logramos entregar en 30 días?`) y `metadata.title` (`studiocoders.dev — De la Idea a Producción en 30 Días`).
   - Agregar bloques `describe` dedicados para:
     - `ImpactMetrics`: verificar los 3 KPIs (`30`, `5%`, `+5`), sus clases de animación (`.sc-section-flow`, `.sc-card-flow`, `.sc-surface-glow`, `--stagger-index`) y validar la **ausencia** de `"+100"` en el HTML renderizado.
     - `CommercialGuarantees`: verificar el encabezado multi-industria, `aria-hidden="true"` en íconos y las 5 tarjetas (`+5 años de experiencia`, `Arrancas con solo el 5%`, `Entrega en 30 días`, `100% a tu nombre`, `1 año de soporte incluido`), confirmando que **no** existan referencias a `"+100 proyectos exitosos"` ni `"más de una década"`.
     - `QuickStepsCTA`: verificar los 3 pasos simples (`Paso 01`, `Paso 02`, `Paso 03`, `Lo hacemos realidad en 3 simples pasos.`), sus clases de animación y el CTA hacia `#contacto`.
     - **Animaciones y PageSpeed Insights Guardrails:** verificar que `MotionController.tsx` registra `"metricas"`, `"respaldo"` y `"como-empezar"` en `SECTION_IDS`, y que `globals.css` no anima `box-shadow` en `.sc-surface-glow` ni en `[data-vfocus="true"]`.
2. **`[MODIFY]` `tests/seo-geo-aeo.test.ts`:**
   - Actualizar la aserción de `public/llms-full.txt` de `"El Método de los 14 Días"` a `"El Método de los 30 Días"`.
   - Mantener intactas las validaciones de conteo exacto de palabras AEO (`105` en Q1 y `99` en Q2).

---

## 2. Resumen de Archivos a Tocar (Tras Aprobación Gate 3)

- **`[MODIFY]` `AGENTS.md`**
- **`[MODIFY]` `.agents/rules/business-positioning.md`**
- **`[MODIFY]` `.agents/rules/aeo-seo-metadata.md`**
- **`[MODIFY]` `ROADMAP.md`**
- **`[MODIFY]` `public/llms.txt`**
- **`[MODIFY]` `public/llms-full.txt`**
- **`[MODIFY]` `src/app/layout.tsx`**
- **`[MODIFY]` `src/app/page.tsx`**
- **`[MODIFY]` `src/app/globals.css`**
- **`[MODIFY]` `src/components/MotionController.tsx`**
- **`[MODIFY]` `src/components/Navbar.tsx`**
- **`[MODIFY]` `src/components/Hero.tsx`**
- **`[MODIFY]` `src/components/ProcessTimeline.tsx`**
- **`[MODIFY]` `src/components/ComparisonTable.tsx`**
- **`[MODIFY]` `src/components/FAQ.tsx`**
- **`[NEW]` `src/components/ImpactMetrics.tsx`**
- **`[NEW]` `src/components/CommercialGuarantees.tsx`**
- **`[NEW]` `src/components/QuickStepsCTA.tsx`**
- **`[MODIFY]` `tests/landing.test.tsx`**
- **`[MODIFY]` `tests/seo-geo-aeo.test.ts`**

---

## 3. Comandos de Verificación (Gate 4 — Tras Aprobación Gate 3)

```bash
npx tsc --noEmit
npm run lint
npm test
npm run build
```
