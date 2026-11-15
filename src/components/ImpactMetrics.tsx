import React from "react";

export function ImpactMetrics() {
  const metrics = [
    {
      value: "30",
      label: "Días para entregar tu proyecto",
      detail: "Primera versión operativa en producción",
    },
    {
      value: "5%",
      label: "Inversión inicial para arrancar",
      detail: "Inicio inmediato sin desembolsos rígidos",
    },
    {
      value: "+5",
      label: "Años de experiencia en ingeniería",
      detail: "Arquitectura senior y código en producción",
    },
  ];

  return (
    <section id="metricas" className="border-t border-[#2e3340]/60 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl sc-section-flow">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Métricas de Ejecución
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Construimos plataformas de software y aplicaciones móviles listas para escalar.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {metrics.map((metric, idx) => (
            <div
              key={metric.value}
              className="group sc-card-flow sc-surface-glow rounded-xl border border-[#2e3340] bg-[#1c1f28]/50 p-7 sm:p-8 transition-all hover:-translate-y-0.5 hover:border-[#6366f1]/40 hover:bg-[#1c1f28]"
              style={{ "--stagger-index": idx } as React.CSSProperties}
            >
              <div className="font-mono text-4xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
                {metric.value}
              </div>
              <h3 className="mt-3 text-base font-semibold tracking-tight text-[#edeff4]">
                {metric.label}
              </h3>
              <p className="mt-1.5 font-serif text-sm leading-relaxed text-[#949aab]">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
