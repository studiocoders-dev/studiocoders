import React from "react";

export function PortfolioShowcase() {
  const projects = [
    {
      id: "whagil",
      name: "Whagil IA",
      url: "https://whagil.com",
      category: "SaaS B2B · Agentes IA Omnicanal",
      badge: "EN PRODUCCIÓN",
      description:
        "Plataforma distribuida de automatización conversacional para el ecosistema Meta. Diseñada con WebSockets para latencia cero, colas BullMQ sobre Redis y orquestación inteligente de modelos LLM.",
      specs: [
        { label: "Arquitectura", value: "Distribuida / WebSockets" },
        { label: "Colas & Cache", value: "BullMQ + Redis" },
        { label: "Propósito", value: "Cierres de venta 24/7" },
      ],
    },
    {
      id: "whalinkbot",
      name: "Whalinkbot",
      url: "https://whalinkbot.com",
      category: "Motor Cloud Asíncrono · WhatsApp",
      badge: "ALTA DISPONIBILIDAD",
      description:
        "Infraestructura en la nube con gestión concurrente de miles de sesiones de mensajería. Sistema tolerante a fallos con reconexión automática y despacho de webhooks en milisegundos.",
      specs: [
        { label: "Concurrencia", value: "Sesiones concurrentes aisladas" },
        { label: "Protocolo", value: "WebSockets & Event-Driven" },
        { label: "Resiliencia", value: "Auto-healing & Failover" },
      ],
    },
    {
      id: "infra-manager",
      name: "Infra Manager Pro",
      url: "#",
      category: "ERP Empresarial · Activos & Finanzas",
      badge: "33,000 LOC",
      description:
        "Sistema empresarial crítico de 33,000 líneas de código para control de activos inmobiliarios y mantenimiento corporativo. Módulos de facturación recurrente, auditoría y trazabilidad operativa.",
      specs: [
        { label: "Volumen", value: "33,000+ Líneas de Código" },
        { label: "Base de Datos", value: "PostgreSQL Relacional Estricta" },
        { label: "Seguridad", value: "RBAC & Auditoría Financiera" },
      ],
    },
    {
      id: "servitecnology",
      name: "Servitecnology E-Commerce",
      url: "https://servitecnology.com",
      category: "Headless E-Commerce · Catálogo Cloud",
      badge: "SUB-SECOND LCP",
      description:
        "Comercio electrónico desacoplado de máxima velocidad. Arquitectura moderna sobre Astro y Supabase con sincronización de inventario en tiempo real y tiempos de carga instantáneos.",
      specs: [
        { label: "Frontend", value: "Astro Headless SSG/SSR" },
        { label: "Database", value: "Supabase Realtime Cloud" },
        { label: "Performance", value: "Core Web Vitals 99+" },
      ],
    },
  ];

  return (
    <section id="proyectos" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Código en Producción
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Plataformas activas procesando operaciones críticas cada día.
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[#949aab] sm:text-xl">
            No vendemos promesas sobre maquetas de Figma. Respaldamos nuestra
            ingeniería con sistemas propios y de clientes operando 24/7 en alta
            concurrencia.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-xl border border-[#2e3340] bg-[#1c1f28]/60 p-7 sm:p-8 transition-all hover:border-[#6366f1]/50 hover:bg-[#1c1f28] hover:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#818cf8]">
                    {project.category}
                  </span>
                  <span className="rounded border border-[#2e3340] bg-[#14161c] px-2 py-0.5 font-mono text-[10px] text-[#edeff4]">
                    {project.badge}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-bold tracking-tight text-[#edeff4] group-hover:text-white">
                  {project.name}
                </h3>

                <p className="mt-3 font-serif text-base leading-relaxed text-[#949aab]">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 border-t border-[#2e3340]/60 pt-5">
                <div className="grid grid-cols-3 gap-2 font-mono text-xs">
                  {project.specs.map((spec, i) => (
                    <div key={i}>
                      <span className="block text-[10px] uppercase text-[#818799]">
                        {spec.label}
                      </span>
                      <span className="mt-1 block font-medium text-[#edeff4] text-[11px] truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
