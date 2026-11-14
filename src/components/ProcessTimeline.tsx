import React from "react";

export function ProcessTimeline() {
  const steps = [
    {
      time: "Día 0",
      description:
        "Una llamada de 20 minutos. Nos cuentas el problema. Preguntamos solo lo necesario para dimensionarlo con rigor arquitectónico.",
    },
    {
      time: "Día 2",
      description:
        "Una propuesta con alcance, plazo y precio cerrado en USD. Un número exacto, sin rangos abiertos ni costes ocultos.",
    },
    {
      time: "Día 14",
      description:
        "Primera versión en producción. Desplegada, usable, en tu propio repositorio y en tus cuentas cloud si quieres.",
    },
    {
      time: "Cada semana",
      description:
        "Iteramos contigo hasta terminarlo. Ves avances cada semana, directamente en un navegador, no en un PDF de estado.",
    },
  ];

  const reasons = [
    {
      title: "Un stack fijo que dominamos",
      description:
        "Next.js 16, React 19, Supabase, Tailwind CSS 4, Redis y BullMQ. No experimentamos con tecnologías de moda; usamos arquitecturas probadas en batalla que escalan desde el minuto uno.",
    },
    {
      title: "Reuniones directas con ingenieros senior",
      description:
        "Nadie en el medio. Cero intermediarios, directores de cuenta o project managers teóricos. Hablas directamente con quien diseña la base de datos y escribe el código.",
    },
    {
      title: "Aceleración con IA bajo revisión humana",
      description:
        "La Inteligencia Artificial genera scaffolding, tipados y suites de prueba en segundos. Los arquitectos senior validamos cada línea, garantizando seguridad y cero deuda técnica.",
    },
    {
      title: "Propiedad total desde el primer commit",
      description:
        "El repositorio en GitHub y la infraestructura en la nube se crean a tu nombre. Eres el dueño del 100% de la propiedad intelectual y de las claves de acceso.",
    },
  ];

  return (
    <section id="metodo" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            El Método
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Los primeros toman dos semanas.
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

        {/* Subsection: Por qué dos semanas es posible */}
        <div className="mt-24 pt-16 border-t border-[#2e3340]/60">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-bold tracking-tight text-[#edeff4] sm:text-3xl">
              Por qué dos semanas es posible
            </h3>
            <p className="mt-3 font-serif text-lg text-[#949aab]">
              La velocidad sin explicación suena a que se corta por algún lado.
              De acá sale la nuestra.
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
