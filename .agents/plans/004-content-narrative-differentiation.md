# Plan Técnico: Reingeniería Narrativa y Desacople de Copys de Brotherhood

> **Ubicación:** `.agents/plans/004-content-narrative-differentiation.md`  
> **Estado:** Completado (Verificado)  
> **Fecha:** Noviembre 2026  
> **Referencia Spec:** [`.agents/specs/004-content-narrative-differentiation.md`](../specs/004-content-narrative-differentiation.md)

---

## 1. Resumen de la Arquitectura de Cambios

Modificación modular de los copys y componentes visuales para eliminar similitudes léxicas con Brotherhood, manteniendo la elegancia visual de Next.js 16 + Tailwind 4 y el cumplimiento del estándar de citabilidad en IA:

1. **`src/app/layout.tsx`:**
   - Actualización de `metadata.title` a: `"studiocoders.dev — De la Idea a Producción en 14 Días"`.
   - Sincronización de OpenGraph y Twitter Cards con la nueva narrativa.
2. **`src/components/Hero.tsx`:**
   - Retiro del contenedor de texto plano "Definición de Entidad & Arquitectura".
   - Aplicación del nuevo headline: *"Lanzamos tu aplicación web o Agente de IA en 14 días"*.
   - Subtítulo editorial en Newsreader reescrito para enfatizar valor de negocio y eliminación de intermediarios.
   - Botones CTA actualizados: *"Cotizar proyecto (Scope 20 min)"* y *"Conoce nuestra arquitectura"*.
3. **`src/components/ProcessTimeline.tsx`:**
   - Reemplazo del título por: *"De requerimiento a producción real en dos semanas"*.
   - Mantenimiento del formato simple y minimalista (`Día 0`, `Día 2`, `Día 14`, `Cada semana`) con redacción 100% original:
     - `Día 0`: "Llamada técnica de 20 minutos con un desarrollador senior. Evaluamos tu necesidad, descartamos lo innecesario y definimos el núcleo funcional."
     - `Día 2`: "Propuesta técnica con arquitectura definida y presupuesto cerrado en USD. Un precio fijo y exacto, sin sorpresas ni costes ocultos."
     - `Día 14`: "Tu sistema o Agente IA en producción. Desplegado, conectado a base de datos y pagos, 100% operativo en tu propio repositorio de GitHub."
     - `Cada semana`: "Ciclos de mejora continua y nuevas funciones bajo demanda. Ves avances reales en la nube cada semana, nunca en reportes teóricos."
   - Subsección: *"¿Cómo logramos entregar en 14 días? Eliminamos las capas de intermediarios y combinamos aceleración por IA con desarrollo senior."*
4. **`src/components/PortfolioShowcase.tsx`:**
   - Nuevo título: *"Plataformas activas procesando operaciones críticas cada día"*.
   - Copy explicativo enfocado en concurrencia y resultados reales.
5. **`src/components/ComparisonTable.tsx`:**
   - Título original: *"Studio Coders frente al modelo de agencia tradicional"*.
6. **`src/components/FAQ.tsx`:**
   - Inserción de la pregunta rectora:
     `¿Qué es Studio Coders y quién respalda su operación técnica y legal?`
     con las 154 palabras exactas del Answer-First.
   - Mantenimiento del acordeón desplegable nativo con micro-interacciones.
7. **`src/components/ContactForm.tsx`:**
   - Titular: *"Construyamos tu próximo sistema"*.
   - Subtítulo de respuesta técnica en 24 horas.
8. **Pruebas (`tests/landing.test.tsx` y `tests/seo-geo-aeo.test.ts`):**
   - Actualización de aserciones para validar los nuevos textos, títulos y la ubicación del bloque Answer-First en la sección FAQ.

---

## 2. Archivos a Modificar

- **`[MODIFY]` `src/app/layout.tsx`**
- **`[MODIFY]` `src/components/Hero.tsx`**
- **`[MODIFY]` `src/components/ProcessTimeline.tsx`**
- **`[MODIFY]` `src/components/PortfolioShowcase.tsx`**
- **`[MODIFY]` `src/components/ComparisonTable.tsx`**
- **`[MODIFY]` `src/components/FAQ.tsx`**
- **`[MODIFY]` `src/components/ContactForm.tsx`**
- **`[MODIFY]` `tests/landing.test.tsx`**
- **`[MODIFY]` `tests/seo-geo-aeo.test.ts`**

---

## 3. Comandos de Verificación (Gate 4)
- `npm test`
- `npx tsc --noEmit`
- `npm run build`
- `npm run lint`
