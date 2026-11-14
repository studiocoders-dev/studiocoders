import React from "react";

export function DelayCauses() {
  const causes = [
    {
      title: "Priorizar el presupuesto más bajo",
      description:
        "La tarifa más económica suele financiar perfiles junior o soluciones improvisadas. El ahorro aparente desaparece en cuanto hay que reescribir la base de datos o corregir arquitectura, pagando dos veces por el mismo sistema.",
    },
    {
      title: "Fijar un precio cerrado sin dimensionar el alcance técnico",
      description:
        "Presupuestar a ciegas es apostar contra la realidad. Cuando surgen los requerimientos verdaderos, el presupuesto inicial revienta y cada ajuste se convierte en una fricción contractual que paraliza el avance.",
    },
    {
      title: "Aceptar meses de desarrollo a oscuras sin despliegues reales",
      description:
        "Esperar seis meses para probar la primera versión es descubrir demasiado tarde que el sistema se programó sobre supuestos falsos. Cada semana sin software vivo en producción es tiempo acumulado de riesgo no validado.",
    },
    {
      title: "Poner intermediarios entre tu visión y los desarrolladores",
      description:
        "Cuando un vendedor promete, un gestor interpreta y programadores remotos intentan descifrar la minuta, el requerimiento original se desvanece. En software, cada capa de intermediación es una distorsión garantizada.",
    },
  ];

  return (
    <section id="criterio" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Diagnóstico Técnico
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Cuatro decisiones que descarrilan un proyecto de software.
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[#949aab] sm:text-xl">
            Casi ningún retraso se debe a la complejidad del código. La mayoría
            nace de compromisos apresurados y vicios de gestión asumidos antes de
            abrir el editor.
          </p>
        </div>

        {/* 4 Causes Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {causes.map((cause, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#2e3340] bg-[#1c1f28]/50 p-7 sm:p-8 transition-all hover:border-[#6366f1]/40 hover:bg-[#1c1f28]"
            >
              <div className="font-mono text-xs text-[#818cf8] mb-3">
                0{idx + 1}.
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#edeff4]">
                {cause.title}
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-[#949aab]">
                {cause.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
