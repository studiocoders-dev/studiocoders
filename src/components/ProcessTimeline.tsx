import React from "react";

export function ProcessTimeline() {
  const steps = [
    {
      time: "Día 0",
      description:
        "Llamada técnica de 20 minutos con un desarrollador senior. Evaluamos tu necesidad, descartamos lo innecesario y definimos el núcleo funcional.",
    },
    {
      time: "Día 2",
      description:
        "Propuesta técnica con arquitectura definida y presupuesto cerrado en USD. Un precio fijo y exacto, sin sorpresas ni costes ocultos.",
    },
    {
      time: "Día 14",
      description:
        "Tu sistema o Agente IA en producción. Desplegado, conectado a base de datos y pagos, 100% operativo en tu propio repositorio de GitHub.",
    },
    {
      time: "Cada semana",
      description:
        "Ciclos de mejora continua y nuevas funciones bajo demanda. Ves avances reales en la nube cada semana, nunca en reportes teóricos.",
    },
  ];

  const reasons = [
    {
      title: "Un stack consolidado que dominamos",
      description:
        "Next.js 16, React 19, Supabase, Tailwind CSS 4, Redis y BullMQ. Arquitecturas probadas en batalla que escalan desde el minuto uno sin reinventar la rueda.",
    },
    {
      title: "Trato directo con ingenieros senior",
      description:
        "Cero intermediarios, ejecutivos comerciales o project managers teóricos. Hablas directamente con quien diseña la base de datos y escribe el código.",
    },
    {
      title: "Aceleración por IA con rigor humano",
      description:
        "La Inteligencia Artificial genera scaffolding, tipados y tests unitarios en segundos. Los arquitectos senior auditamos cada línea, garantizando máxima seguridad y cero deuda técnica.",
    },
    {
      title: "Propiedad total de código y cloud",
      description:
        "El repositorio en GitHub y la infraestructura en la nube se transfieren a tu nombre desde el primer commit. Eres el dueño del 100% de la propiedad intelectual.",
    },
  ];

  return (
    <section id="metodo" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Metodología Ágil
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            De requerimiento a producción real en dos semanas.
          </h2>
        </div>

        {/* Timeline Rows */}
        <div className="mt-14 divide-y divide-[#2e3340]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group grid grid-cols-1 gap-4 py-7 sm:grid-cols-12 sm:items-start transition-colors hover:bg-[#1c1f28]/40 px-3 -mx-3 rounded-md"
            >
              <div className="font-mono text-base font-semibold text-[#818cf8] sm:col-span-3">
                {step.time}
              </div>
              <div className="font-serif text-lg leading-relaxed text-[#edeff4] sm:col-span-9 sm:text-xl">
                {step.description}
              </div>
            </div>
          ))}
        </div>

        {/* Subsection: ¿Cómo logramos entregar en 14 días? */}
        <div className="mt-24 pt-16 border-t border-[#2e3340]/60">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold tracking-tight text-[#edeff4] sm:text-3xl">
              ¿Cómo logramos entregar en 14 días?
            </h3>
            <p className="mt-3 font-serif text-lg text-[#949aab]">
              Eliminamos las capas de intermediarios y combinamos aceleración por
              IA con arquitectura senior probada.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-[#2e3340] bg-[#1c1f28]/50 p-6 transition-all hover:border-[#6366f1]/40 hover:bg-[#1c1f28]"
              >
                <div className="font-mono text-xs text-[#818cf8] mb-2">0{idx + 1}.</div>
                <h4 className="text-base font-semibold text-[#edeff4]">
                  {reason.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#949aab]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
