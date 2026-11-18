import React from "react";
import { Award, Clock, Headset, KeyRound, Layers, Wallet } from "lucide-react";

export function CommercialGuarantees() {
  const guarantees = [
    {
      index: "01",
      title: "+5 años de experiencia",
      description:
        "Ingeniería senior con más de cinco años diseñando, auditando y desplegando plataformas en producción a medida.",
      Icon: Award,
    },
    {
      index: "02",
      title: "Arrancas con solo el 5%",
      description:
        "Inicias arquitectura y desarrollo con apenas el 5% del presupuesto; continúas con 45% al aprobar Staging (Día 15) y 50% al pasar a Producción (Día 30).",
      Icon: Wallet,
    },
    {
      index: "03",
      title: "Entrega en 30 días",
      description:
        "Metodología ágil asistida por IA que pone el núcleo funcional de tu plataforma (MVP) en producción en 30 días, listo para operar y facturar.",
      Icon: Clock,
    },
    {
      index: "04",
      title: "100% a tu nombre",
      description:
        "Cada plataforma se entrega llave en mano y registrada íntegramente a nombre del cliente. El código fuente y la propiedad intelectual son tuyos.",
      Icon: KeyRound,
    },
    {
      index: "05",
      title: "1 año de soporte incluido",
      description:
        "Garantía técnica, estabilidad y corrección de fallos sin costo durante doce meses completos sobre el alcance entregado.",
      Icon: Headset,
    },
    {
      index: "06",
      title: "Cero vendor lock-in",
      description:
        "Arquitectura sobre estándares abiertos desplegada en tus propios repositorios y nube. Sin cajas negras ni dependencias que te aten a un proveedor.",
      Icon: Layers,
    },
  ];

  return (
    <section id="respaldo" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl sc-section-flow">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Respaldo Comercial &amp; Técnico
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Especialistas en desarrollo de software a medida para múltiples industrias.
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[#949aab] sm:text-xl">
            Soluciones para logística, salud, finanzas, comercio y operaciones.
            Entregamos plataformas llave en mano, registradas al 100% a nombre de
            tu empresa y respaldadas con un año completo de soporte incluido.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <div
                key={item.index}
                className="group sc-card-flow sc-surface-glow rounded-xl border border-[#2e3340] bg-[#1c1f28]/50 p-7 sm:p-8 transition-all hover:-translate-y-0.5 hover:border-[#6366f1]/40 hover:bg-[#1c1f28]"
                style={{ "--stagger-index": idx } as React.CSSProperties}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#2e3340] bg-[#14161c] text-[#818cf8] transition-colors group-hover:border-[#6366f1]/40">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-[#9ea5b8] transition-transform duration-200 group-hover:translate-x-0.5">
                    {item.index}.
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold tracking-tight text-[#edeff4]">
                  {item.title}
                </h3>
                <p className="mt-3 font-serif text-base leading-relaxed text-[#949aab]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
