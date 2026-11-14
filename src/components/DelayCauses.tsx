import React from "react";

export function DelayCauses() {
  const causes = [
    {
      title: "Elegir la propuesta más barata",
      description:
        "El precio más bajo suele comprar la menor experiencia, y la diferencia vuelve convertida en rehacer trabajo. La pagas igual. La segunda vez, sin presupuesto para ella.",
    },
    {
      title: "Pedir una cotización antes de que alguien entienda el proyecto",
      description:
        "Un número calculado antes de que exista el alcance es una adivinanza bien vestida. Se corrige apenas aparece la realidad, y cada corrección es una negociación que nadie tenía planeada.",
    },
    {
      title: "No ver nada funcionando hasta el final",
      description:
        "Si la primera versión usable llega en el mes seis, el mes seis es cuando te enteras de que se construyó sobre un supuesto equivocado. Cada semana sin nada desplegado es una semana de suposiciones que nadie verificó.",
    },
    {
      title: "Nunca conocer a quienes escriben el código",
      description:
        "Un ejecutivo de cuentas toma el requerimiento, un jefe de proyecto lo reescribe, y un equipo que no conoces construye a partir de esa reescritura. Cada capa es un lugar más donde el requerimiento se desvía.",
    },
  ];

  return (
    <section id="criterio" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Antes de Contratar a Nadie
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Por qué los proyectos de software se atrasan.
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[#949aab] sm:text-xl">
            Rara vez porque la ingeniería sea difícil. Casi siempre por cuatro
            decisiones que se toman antes de que exista una línea de código.
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
