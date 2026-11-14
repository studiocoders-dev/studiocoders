import React from "react";

export function FAQ() {
  const faqs = [
    {
      q: "¿Cómo es posible tener una primera versión en producción en 14 días?",
      a: "Trabajamos sin intermediarios: hablas directamente con desarrolladores senior. Utilizamos aceleración asistida por Inteligencia Artificial para el boilerplate y la codificación repetitiva bajo estricta supervisión de arquitectura, y nos basamos en componentes probados en batalla (Next.js 16, Supabase, Tailwind CSS, Redis y BullMQ).",
    },
    {
      q: "¿Quién es el dueño del código fuente y de los accesos?",
      a: "Tú eres el propietario del 100% del código fuente, repositorio en GitHub y despliegues desde el día uno. No retenemos propiedad intelectual ni creamos dependencias cautivas.",
    },
    {
      q: "¿Qué incluye el soporte y mantenimiento posterior?",
      a: "Ofrecemos garantía contra fallos post-lanzamiento y planes opcionales de mantenimiento mensual que cubren monitoreo 24/7, corrección de errores, hosting, base de datos y actualizaciones de seguridad. Nuevas funcionalidades se cotizan por separado con alcance cerrado.",
    },
    {
      q: "¿Cómo funcionan los pagos y la facturación internacional?",
      a: "Operamos formalmente bajo Jesús León Soluciones Informáticas (Chile). Emitimos facturación comercial y contratos internacionales de exportación de servicios. Todos nuestros presupuestos son en USD, cerrados y sin costos ocultos.",
    },
    {
      q: "¿Qué tecnologías utilizan para construir las plataformas?",
      a: "Nuestro núcleo tecnológico es Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, bases de datos PostgreSQL / Supabase, y colas asíncronas BullMQ sobre Redis. Para Inteligencia Artificial integramos modelos de vanguardia mediante APIs de inferencia de alto rendimiento.",
    },
    {
      q: "¿Trabajan con clientes de fuera de Chile?",
      a: "Sí. Nuestra sede operativa está en Santiago de Chile y trabajamos con clientes en toda Latinoamérica, Estados Unidos y España. Contratos, facturación, reuniones de alcance y revisiones se coordinan 100% de forma remota.",
    },
  ];

  return (
    <section id="faq" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Preguntas Frecuentes
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Respuestas directas, sin rodeos.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-[#2e3340]">
          {faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group py-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none text-left">
                <span className="text-lg font-semibold text-[#edeff4] group-hover:text-white transition-colors">
                  {faq.q}
                </span>
                <span
                  aria-hidden="true"
                  className="font-mono text-xl font-bold text-[#818cf8] shrink-0 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 font-serif text-base leading-relaxed text-[#949aab] max-w-2xl pr-4">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
