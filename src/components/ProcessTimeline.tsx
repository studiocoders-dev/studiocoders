import React from "react";

export function ProcessTimeline() {
  const steps = [
    {
      time: "Día 0",
      description:
        "Llamada técnica de 20 minutos con un ingeniero senior. Evaluamos tu operación, acotamos el núcleo funcional (MVP) para 30 días y separamos módulos secundarios para Fase 2.",
    },
    {
      time: "Día 2",
      description:
        "Propuesta técnica con arquitectura definida y presupuesto cerrado en USD. Inicio con solo el 5% inicial (45% al aprobar Staging en Día 15 y 50% al pasar a Producción en Día 30).",
    },
    {
      time: "Día 15",
      description:
        "Primer entregable funcional en entorno de pruebas (Staging). Tú y tu equipo validan flujos reales a mitad de camino antes del lanzamiento.",
    },
    {
      time: "Día 30",
      description:
        "El núcleo funcional de tu sistema o Agente IA en producción llave en mano. Desplegado, conectado a base de datos y pagos, 100% operativo a tu nombre y en tu propio GitHub.",
    },
    {
      time: "Cada semana",
      description:
        "Ciclos de mejora continua y módulos de Fase 2 bajo demanda desde el Día 31. Ves avances reales en la nube cada semana, nunca en reportes teóricos.",
    },
  ];

  const reasons = [
    {
      title: "Un stack consolidado que dominamos",
      description:
        "Next.js 16, React 19, Supabase, Tailwind CSS 4, Redis y BullMQ. Arquitecturas probadas en batalla que escalan desde el minuto uno sin reinventar la rueda.",
    },
    {
      title: "Trato directo con ingeniero senior",
      description:
        "Cero intermediarios, ejecutivos comerciales o project managers teóricos. Hablas directamente con quien diseña la base de datos y audita cada línea de código.",
    },
    {
      title: "Aceleración por IA con rigor humano",
      description:
        "La Inteligencia Artificial genera scaffolding, tipados y tests unitarios en segundos. El ingeniero senior audita cada línea, garantizando máxima seguridad y cero deuda técnica.",
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
        <div className="max-w-3xl sc-section-flow">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Metodología Ágil
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            De requerimiento a producción real en treinta días.
          </h2>
        </div>

        {/* Timeline Rows */}
        <div className="mt-14 divide-y divide-[#2e3340]">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="group sc-row-flow grid grid-cols-1 gap-4 py-7 sm:grid-cols-12 sm:items-start transition-colors hover:bg-[#1c1f28]/40 px-3 -mx-3 rounded-md"
              style={{ "--stagger-index": idx } as React.CSSProperties}
            >
              <div className="font-mono text-base font-semibold text-[#818cf8] sm:col-span-3 inline-flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-[#6366f1]/60 transition-all duration-200 group-hover:scale-125 group-hover:bg-[#a5b4fc] group-hover:shadow-[0_0_8px_#818cf8]"
                />
                {step.time}
              </div>
              <div className="font-serif text-lg leading-relaxed text-[#edeff4] sm:col-span-9 sm:text-xl">
                {step.description}
              </div>
            </div>
          ))}
        </div>

        {/* Subsection: ¿Cómo logramos entregar en 30 días? */}
        <div className="mt-24 pt-16 border-t border-[#2e3340]/60">
          <div className="max-w-3xl sc-section-flow">
            <h3 className="text-2xl font-bold tracking-tight text-[#edeff4] sm:text-3xl">
              ¿Cómo logramos entregar en 30 días?
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
                className="group sc-card-flow sc-surface-glow rounded-lg border border-[#2e3340] bg-[#1c1f28]/50 p-6 transition-all hover:-translate-y-0.5 hover:border-[#6366f1]/40 hover:bg-[#1c1f28]"
                style={{ "--stagger-index": idx } as React.CSSProperties}
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
