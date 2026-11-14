import React from "react";

export function ServicesSection() {
  const services = [
    {
      title: "Sitios web y plataformas que cargan al instante",
      description:
        "Donde la velocidad es la característica principal y no algo que se optimiza al final. Rendimiento medido en dispositivos móviles, publicado en la nube y auditable por ti en cualquier momento.",
    },
    {
      title: "Aplicaciones móviles para iOS y Android",
      description:
        "Una sola base de código para ambas tiendas, corriendo en teléfonos de verdad y no en capturas de simulador.",
    },
    {
      title: "Sistemas internos y software a medida",
      description:
        "Paneles operativos, reportería y facturación. Ese flujo crítico de trabajo que hoy vive en una planilla que entiende una sola persona.",
    },
    {
      title: "Integraciones entre herramientas que ya usas",
      description:
        "Tu pasarela de pagos sincronizada con inventario y tu inventario con contabilidad. Una sola vez, bien estructurado, sin que nadie vuelva a tipear los mismos datos.",
    },
    {
      title: "Inteligencia Artificial aplicada a un proceso concreto",
      description:
        "Donde le quita un paso real a un flujo de trabajo diario. Si una tarea no necesita IA, te diremos con honestidad que ahí no va.",
    },
  ];

  return (
    <section id="servicios" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Qué Construimos
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Cinco cosas, descritas por lo que resuelven.
          </h2>
        </div>

        {/* Services List */}
        <div className="mt-14 divide-y divide-[#2e3340]">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group grid grid-cols-1 gap-3 py-8 sm:grid-cols-12 sm:gap-8 transition-colors hover:bg-[#1c1f28]/40 px-3 -mx-3 rounded-md"
            >
              <div className="sm:col-span-5">
                <span className="font-mono text-xs text-[#818cf8] block mb-1">
                  0{idx + 1}.
                </span>
                <h3 className="text-xl font-bold tracking-tight text-[#edeff4] group-hover:text-white transition-colors">
                  {service.title}
                </h3>
              </div>
              <div className="sm:col-span-7">
                <p className="font-serif text-lg leading-relaxed text-[#949aab]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
