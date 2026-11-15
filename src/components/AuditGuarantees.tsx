import React from "react";

export function AuditGuarantees() {
  const commitments = [
    {
      title: "Core Web Vitals en verde, medido en móvil",
      description:
        "Móvil es la prueba real, no una laptop con fibra óptica. Monitoreamos LCP y CLS en dispositivos reales antes de entregar en producción.",
      linkLabel: "Auditar Core Web Vitals en PageSpeed",
      linkUrl: "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.studiocoders.dev%2F",
    },
    {
      title: "Accesibilidad web WCAG 2.1 AA",
      description:
        "Navegación completa por teclado, estructura semántica para lectores de pantalla y contraste de color auditado bajo estándares internacionales.",
      linkLabel: "Auditar Accesibilidad 100/100 en PageSpeed",
      linkUrl: "https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fwww.studiocoders.dev%2F",
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
        <div className="max-w-3xl sc-section-flow">
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
              className="group sc-card-flow sc-surface-glow rounded-xl border border-[#2e3340] bg-[#1c1f28]/50 p-7 sm:p-8 transition-all hover:-translate-y-0.5 hover:border-[#6366f1]/40 hover:bg-[#1c1f28]"
              style={{ "--stagger-index": idx } as React.CSSProperties}
            >
              <div className="font-mono text-xs text-[#818cf8] mb-3 inline-flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400/80 transition-transform duration-200 group-hover:scale-125"
                />
                0{idx + 1}.
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#edeff4]">
                {item.title}
              </h3>
              <p className="mt-3 font-serif text-base leading-relaxed text-[#949aab]">
                {item.description}
              </p>
              {item.linkUrl && item.linkLabel && (
                <div className="mt-5 pt-4 border-t border-[#2e3340]/60">
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#818cf8] hover:text-white transition-colors"
                  >
                    <span>{item.linkLabel}</span>
                    <svg
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
