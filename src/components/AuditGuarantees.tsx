import React from "react";

export function AuditGuarantees() {
  const commitments = [
    {
      title: "Core Web Vitals en verde, medido en móvil",
      description:
        "Móvil es la prueba real, no una laptop con fibra óptica. Monitoreamos LCP y CLS en dispositivos reales antes de entregar en producción.",
    },
    {
      title: "Accesibilidad web WCAG 2.1 AA",
      description:
        "Navegación completa por teclado, estructura semántica para lectores de pantalla y contraste de color auditado bajo estándares internacionales.",
    },
    {
      title: "Cero dependencias cautivas ni vendor lock-in",
      description:
        "El código, la base de datos y los despliegues viven en tus propias cuentas. Si mañana decides continuar con otro equipo, el sistema sigue corriendo 100% operativo.",
    },
    {
      title: "Pruebas automatizadas y CI/CD en verde",
      description:
        "Suite de tests unitarios y tipado estricto en TypeScript ejecutándose en cada commit. Ningún cambio va a producción sin pasar la batería de pruebas.",
    },
  ];

  return (
    <section id="auditoria" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Garantías Técnicas
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Qué puedes verificar tú mismo.
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[#949aab] sm:text-xl">
            No pedimos que confíes en promesas verbales. Cada compromiso de esta
            lista lo puedes auditar con herramientas públicas desde el primer día.
          </p>
        </div>

        {/* 4 Guarantees Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {commitments.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-[#2e3340] bg-[#1c1f28]/50 p-7 sm:p-8 transition-all hover:border-[#6366f1]/40 hover:bg-[#1c1f28]"
            >
              <div className="font-mono text-xs text-[#818cf8] mb-3">
                0{idx + 1}.
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#edeff4]">
                {item.title}
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-[#949aab]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
