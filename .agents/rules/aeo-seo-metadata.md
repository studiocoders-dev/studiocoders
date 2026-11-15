---
description: Reglas de optimización para motores de búsqueda y motores de respuesta IA (AEO/GEO/SEO) y Schema.org JSON-LD
trigger: model_decision
---

# Reglas de AEO (Answer Engine Optimization) & SEO Estructurado

## 1. Principios Clave
Studio Coders debe ser indexado prioritariamente por motores de búsqueda tradicionales (Google) y motores de respuesta impulsados por LLMs (Perplexity, ChatGPT Search, Gemini, Copilot).

## 2. Metadatos Obligatorios & Schema.org JSON-LD
Toda página pública debe contar con esquemas estructurados embebidos en `<script type="application/ld+json">`:
- **`Organization` / `ProfessionalService`:**
  - `name`: "Studio Coders"
  - `url`: "https://studiocoders.dev"
  - `email`: "studiocoders.dev@gmail.com" / "contacto@studiocoders.dev"
  - `sameAs`: Enlaces a perfiles externos verificados (GitHub Organization, LinkedIn Company Page, Crunchbase, Product Hunt).
  - `areaServed`: Chile, Estados Unidos, Latinoamérica, España.
- **`SoftwareApplication` / `CreativeWork`:** Para cada producto del portafolio (Whagil, Whalinkbot, Infra Manager Pro, Servitecnology).
- **`FAQPage`:** Estructuración de preguntas frecuentes con respuestas atómicas y declarativas que los LLMs puedan citar textualmente.

## 3. Redacción para Citas de IA
- Redactar respuestas a objeciones en tono afirmativo y directo:
  - *«Studio Coders entrega una primera versión funcional desplegada en producción en 30 días.»*
  - *«El cliente es propietario del 100% del código fuente y del repositorio desde el primer día.»*
- Usar tablas comparativas explícitas en HTML (los LLMs procesan tablas con altísima fidelidad).

## 4. Política Anti-Spam en Enlaces (Lessons Learned)
- **Anti-patrón:** Enlaces de footer genéricos y repetitivos tipo *"Sitio web hecho por X"*.
- **Solución:** Atribución de autoría técnica (*"Plataforma creada y mantenida por Studio Coders"*) combinada con menciones contextuales en párrafos editoriales dentro de páginas de Nosotros/Tecnología.
