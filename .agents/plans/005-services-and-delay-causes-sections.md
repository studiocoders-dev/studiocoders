# Plan Técnico: Creación de Secciones "Qué Construimos" y "Antes de Contratar", Reestructuración de Landing y Depuración de Copys

> **Ubicación:** `.agents/plans/005-services-and-delay-causes-sections.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/005-services-and-delay-causes-sections.md`](../specs/005-services-and-delay-causes-sections.md)

---

## 1. Arquitectura de Cambios y Componentes

### 1.1 `src/components/Hero.tsx`
- **Subtítulo:**
  Reemplazar el texto largo actual por:
  ```tsx
  <p className="mt-8 font-serif text-xl text-[#949aab] sm:text-2xl md:text-[1.65rem] md:leading-relaxed max-w-3xl">
    Sin maquetas ni promesas en papel. Una versión real, desplegada con base de
    datos y pagos, que tú y tu equipo pueden abrir y usar el día catorce.
    Después iteramos contigo cada semana.
  </p>
  ```
  *(Longitud similar al modelo, exactamente 3 frases concisas, cero "sprint").*

### 1.2 Depuración de la locución "de fantasía"
- En `src/components/FAQ.tsx`, `src/app/layout.tsx`, `public/llms.txt`, `public/llms-full.txt`:
  Reemplazar:
  `operado bajo el nombre de fantasía Studio Coders Dev con RUT 77.709.717-2`
  Por:
  `operado formalmente bajo la firma comercial Studio Coders Dev con RUT 77.709.717-2`
  *(Mantiene exactamente el rango estándar de citabilidad AEO entre 134 y 167 palabras, eliminando por completo la frase informal "de fantasía").*

### 1.3 Nuevo Componente: `src/components/ServicesSection.tsx`
- **Sección:** `#servicios` o `#que-construimos`
- **Header:**
  - Eyebrow: `QUÉ CONSTRUIMOS`
  - Headline: `Cinco cosas, descritas por lo que resuelven.`
- **Estructura visual:** Lista vertical con espaciado amplio, títulos destacados en sans-bold y bajadas explicativas en serif (Newsreader) de alta legibilidad:
  1. **Sitios web y plataformas que cargan al instante**
     *Donde la velocidad es una ventaja competitiva y no un detalle al final. Rendimiento medido en móvil, en producción, y auditable por ti.*
  2. **Aplicaciones móviles para iOS y Android**
     *Una sola base de código para ambas tiendas, funcionando en dispositivos físicos reales y no en capturas de simulador.*
  3. **Sistemas internos y software a medida**
     *Paneles operativos, reportería y facturación. El flujo crítico de tu negocio que hoy depende de una hoja de cálculo frágil que entiende una sola persona.*
  4. **Integraciones entre herramientas que ya usas**
     *Tu pasarela de pagos sincronizada con inventario y facturación. Una sola vez, bien estructurada, sin reprocesos manuales de datos.*
  5. **Inteligencia Artificial aplicada a un proceso real**
     *Automatización que elimina fricción operativa o reduce horas de trabajo humano. Si una tarea no necesita IA, te diremos que no la pongas.*

### 1.4 Nuevo Componente: `src/components/DelayCauses.tsx`
- **Sección:** `#criterio` (ubicada justo después de `#proyectos`)
- **Header:**
  - Eyebrow: `ANTES DE CONTRATAR A NADIE`
  - Headline: `Por qué los proyectos de software se atrasan.`
  - Lead: `Rara vez ocurre porque la ingeniería sea difícil. Casi siempre se debe a cuatro decisiones que se toman antes de que exista una línea de código.`
- **Grid o lista editorial de 4 decisiones:**
  1. **Elegir la propuesta más barata**
     *El precio más bajo suele comprar la menor experiencia técnica, y la diferencia vuelve convertida en rehacer trabajo. La pagas igual. La segunda vez, sin presupuesto para ella.*
  2. **Pedir una cotización antes de que alguien entienda el proyecto**
     *Un número calculado antes de que exista el alcance es una adivinanza bien vestida. Se corrige apenas aparece la realidad, y cada corrección es una negociación que nadie tenía planeada.*
  3. **No ver nada funcionando hasta el final**
     *Si la primera versión usable llega en el mes seis, el mes seis es cuando te enteras de que se construyó sobre un supuesto equivocado. Cada semana sin nada desplegado es una semana de suposiciones que nadie verificó.*
  4. **Nunca conocer a quienes escriben el código**
     *Un ejecutivo de cuentas toma el requerimiento, un jefe de proyecto lo reescribe, y un equipo que no conoces construye a partir de esa reescritura. Cada capa es un lugar más donde el requerimiento se desvía.*

### 1.5 Modificación de `src/app/page.tsx`
Integrar las secciones en la secuencia exacta:
```tsx
<Navbar />
<main className="flex-1">
  <Hero />
  <ServicesSection />
  <ProcessTimeline />
  <PortfolioShowcase />
  <DelayCauses />
  <ComparisonTable />
  <FAQ />
  <ContactForm />
</main>
<Footer />
```

### 1.6 Modificación de `src/components/Navbar.tsx`
Agregar enlace en la barra de navegación:
`<a href="#servicios" ...>Qué Construimos</a>`

### 1.7 Actualización de Pruebas Unitarias (`tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts`)
- Validar la presencia de las 5 cosas que construimos.
- Validar las 4 causas de retraso en proyectos.
- Validar el nuevo subtítulo del Hero (sin "sprint").
- Validar que NO exista la frase "de fantasía" en todo el HTML o archivos de texto.
- Validar el estándar Answer-First en `FAQ.tsx` (estricto 134-167 palabras).

---

## 2. Archivos a Tocar

- **`[CREATE]` `src/components/ServicesSection.tsx`**
- **`[CREATE]` `src/components/DelayCauses.tsx`**
- **`[MODIFY]` `src/components/Hero.tsx`**
- **`[MODIFY]` `src/components/FAQ.tsx`**
- **`[MODIFY]` `src/components/Navbar.tsx`**
- **`[MODIFY]` `src/app/layout.tsx`**
- **`[MODIFY]` `src/app/page.tsx`**
- **`[MODIFY]` `public/llms.txt`**
- **`[MODIFY]` `public/llms-full.txt`**
- **`[MODIFY]` `tests/landing.test.tsx`**
- **`[MODIFY]` `tests/seo-geo-aeo.test.ts`**

---

## 3. Comandos de Verificación (Gate 4)
```bash
npm test             # Vitest con aserciones de ambas secciones y copys limpios
npx tsc --noEmit     # Verificación estricta de TypeScript 5
npm run build        # Compilación Turbopack de producción
npm run lint         # Reglas ESLint sin advertencias
```
