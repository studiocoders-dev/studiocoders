import React from "react";

export function QuickStepsCTA() {
  const steps = [
    {
      step: "Paso 01",
      title: "Diagnóstico técnico en 20 minutos",
      description:
        "Conversas directamente con un desarrollador senior sobre tu operación y objetivos, sin vendedores intermediarios.",
    },
    {
      step: "Paso 02",
      title: "Propuesta cerrada e inicio con 5%",
      description:
        "En 48 horas recibes la arquitectura definida, el presupuesto fijo en USD y activas el desarrollo con solo el 5% inicial.",
    },
    {
      step: "Paso 03",
      title: "Lanzamiento llave en mano en 30 días",
      description:
        "Validas avances en entorno de pruebas el día 15 y recibes tu software desplegado a tu nombre el día 30.",
    },
  ];

  return (
    <section
      id="como-empezar"
      className="border-t border-[#2e3340]/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl sc-section-flow">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Proceso de Inicio
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Lo hacemos realidad en 3 simples pasos.
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[#949aab] sm:text-xl">
            Una dinámica ágil, directa y sin burocracia para que tu desarrollo
            comience de inmediato.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="group sc-card-flow sc-surface-glow rounded-xl border border-[#2e3340] bg-[#1c1f28]/50 p-7 sm:p-8 transition-all hover:-translate-y-0.5 hover:border-[#6366f1]/40 hover:bg-[#1c1f28]"
              style={{ "--stagger-index": idx } as React.CSSProperties}
            >
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#818cf8]">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-bold tracking-tight text-[#edeff4]">
                {item.title}
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-[#949aab]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 sc-card-flow"
          style={{ "--stagger-index": 3 } as React.CSSProperties}
        >
          <a
            href="#contacto"
            className="inline-flex h-12 w-full sm:w-auto items-center justify-center whitespace-nowrap rounded-md bg-[#4f46e5] px-7 font-mono text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#4338ca] active:scale-95"
          >
            Cotizar proyecto en 20 minutos
          </a>
        </div>
      </div>
    </section>
  );
}
