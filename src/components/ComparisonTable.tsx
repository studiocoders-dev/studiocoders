import React from "react";

export function ComparisonTable() {
  const rows = [
    {
      criterio: "Entrega de primera versión",
      studioCoders: "14 Días en producción",
      agencias: "3 a 6 meses de espera",
      freelancers: "Impredecible",
    },
    {
      criterio: "Interlocutor técnico",
      studioCoders: "Desarrollador Senior directo",
      agencias: "Project Manager intermediario",
      freelancers: "Un solo perfil sin respaldo",
    },
    {
      criterio: "Propiedad del código",
      studioCoders: "100% tuyo desde el día 1",
      agencias: "Retención / Licencias cautivas",
      freelancers: "Disperso o sin repositorio formal",
    },
    {
      criterio: "Metodología de aceleración",
      studioCoders: "IA + Code-Review humano senior",
      agencias: "Procesos manuales lentos",
      freelancers: "Variable y sin estándares",
    },
    {
      criterio: "Presupuesto y alcance",
      studioCoders: "Cerrado por contrato en USD",
      agencias: "Horas infladas y costos ocultos",
      freelancers: "Estimaciones cambiantes",
    },
  ];

  return (
    <section id="comparativa" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Comparativa de Mercado
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Por qué fundadores y empresas eligen Studio Coders.
          </h2>
          <p className="mt-4 font-serif text-lg text-[#949aab]">
            La diferencia entre perder 6 meses en burocracia de agencia y tener
            software real funcionando en dos semanas.
          </p>
        </div>

        {/* Responsive Comparison Table */}
        <div className="mt-14 overflow-x-auto rounded-xl border border-[#2e3340] bg-[#1c1f28]/40">
          <table className="w-full min-w-[640px] text-left border-collapse">
            <thead>
              <tr className="border-b border-[#2e3340] bg-[#1c1f28]">
                <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-[#818799]">
                  Criterio
                </th>
                <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-[#818cf8] bg-[#6366f1]/10 border-x border-[#6366f1]/20">
                  Studio Coders
                </th>
                <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-[#818799]">
                  Agencias Tradicionales
                </th>
                <th className="py-5 px-6 font-mono text-xs uppercase tracking-wider text-[#818799]">
                  Freelancers Sueltos
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2e3340]/60 font-sans text-sm">
              {rows.map((row, i) => (
                <tr key={i} className="transition-colors hover:bg-[#1c1f28]/60">
                  <td className="py-5 px-6 font-medium text-[#edeff4]">
                    {row.criterio}
                  </td>
                  <td className="py-5 px-6 font-semibold text-[#818cf8] bg-[#6366f1]/5 border-x border-[#6366f1]/20">
                    <span className="inline-flex items-center gap-1.5">
                      <svg
                        className="h-4 w-4 text-[#818cf8] shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {row.studioCoders}
                    </span>
                  </td>
                  <td className="py-5 px-6 text-[#949aab]">{row.agencias}</td>
                  <td className="py-5 px-6 text-[#949aab]">{row.freelancers}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
