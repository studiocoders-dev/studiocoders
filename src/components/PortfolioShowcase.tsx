import React from "react";

export function PortfolioShowcase() {
  const projects = [
    {
      id: "whagil",
      name: "Whagil IA",
      url: "https://whagil.com",
      domain: "whagil.com",
      category: "SaaS B2B · Agentes IA Omnicanal",
      badge: "EN PRODUCCIÓN",
      description:
        "Plataforma distribuida de automatización conversacional para el ecosistema Meta (WhatsApp, Instagram, Messenger). Diseñada con WebSockets para latencia cero, colas BullMQ sobre clúster Redis y orquestación dinámica de modelos LLM.",
      extendedDetails:
        "Infraestructura diseñada para empresas que necesitan orquestar agentes de venta y soporte 24/7 en alta concurrencia. Conecta catálogos, agendamientos y pasarelas de pago, procesando miles de interacciones diarias con tolerancia a fallos.",
      specs: [
        { label: "Arquitectura", value: "Distribuida / WebSockets" },
        { label: "Colas & Cache", value: "BullMQ + Redis" },
        { label: "Base de Datos", value: "PostgreSQL Relacional" },
        { label: "Propósito", value: "Cierres de venta 24/7" },
      ],
    },
    {
      id: "whalinkbot",
      name: "Whalinkbot",
      url: "https://whalinkbot.com",
      domain: "whalinkbot.com",
      category: "Motor Cloud Asíncrono · WhatsApp",
      badge: "ALTA DISPONIBILIDAD",
      description:
        "Infraestructura en la nube con gestión concurrente de miles de sesiones de mensajería. Sistema tolerante a fallos con reconexión automática (auto-healing) y despacho de webhooks en sub-segundos.",
      extendedDetails:
        "Capa de transporte desacoplada que soporta tráfico transaccional masivo para plataformas SaaS, garantizando que ningún mensaje entrante ni saliente se pierda ante caídas de red o picos de tráfico.",
      specs: [
        { label: "Concurrencia", value: "Sesiones aisladas en contenedores" },
        { label: "Protocolo", value: "WebSockets & Event-Driven" },
        { label: "Resiliencia", value: "Auto-healing & Failover activo" },
        { label: "Despacho", value: "Webhooks en <200ms" },
      ],
    },
    {
      id: "infra-manager",
      name: "Infra Manager Pro",
      url: "https://inframanagerpro.com",
      domain: "inframanagerpro.com",
      category: "ERP Empresarial · Activos & Finanzas",
      badge: "33,000 LOC",
      description:
        "Sistema empresarial crítico de más de 33,000 líneas de código para control de activos inmobiliarios y mantenimiento corporativo. Módulos de facturación recurrente, auditoría y trazabilidad operativa.",
      extendedDetails:
        "Plataforma para gestión de flujos de caja recurrentes, conciliación de pagos, generación de órdenes de trabajo para contratistas y auditoría contable con control de acceso basado en roles (RBAC).",
      specs: [
        { label: "Volumen", value: "33,000+ Líneas de Código" },
        { label: "Base de Datos", value: "PostgreSQL Relacional Estricta" },
        { label: "Seguridad", value: "RBAC & Auditoría Financiera" },
        { label: "Infraestructura", value: "Cloud Dedicada / Backups automáticos" },
      ],
    },
    {
      id: "servitecnology",
      name: "Servitecnology E-Commerce",
      url: "https://servitecnology.com",
      domain: "servitecnology.com",
      category: "Headless E-Commerce · Catálogo Cloud",
      badge: "SUB-SECOND LCP",
      description:
        "Comercio electrónico desacoplado de máxima velocidad. Arquitectura moderna sobre Astro y Supabase con sincronización de inventario en tiempo real y tiempos de carga instantáneos.",
      extendedDetails:
        "Catálogo de productos de alta demanda con Core Web Vitals superiores a 99 puntos. Rendimiento optimizado para conversión móvil con LCP inferior a 0.8s y checkout sin fricción.",
      specs: [
        { label: "Frontend", value: "Astro Headless SSG/SSR" },
        { label: "Base de Datos", value: "Supabase Realtime Cloud" },
        { label: "Performance", value: "Core Web Vitals 99+" },
        { label: "Velocidad", value: "LCP < 0.8s en Móvil" },
      ],
    },
    {
      id: "eaestampa",
      name: "EA Estampa",
      url: "https://eaestampa.com",
      domain: "eaestampa.com",
      category: "Landing Corporativa · Agente IA de Ventas",
      badge: "NEXT.JS + WHATSAPP AI",
      description:
        "Landing page corporativa de alta conversión en Next.js con Turbopack para taller premium de estampado DTF y sublimación. Integrada con agente de ventas inteligente en WhatsApp impulsado por Whagil IA.",
      extendedDetails:
        "Canaliza tráfico orgánico desde redes sociales hacia un embudo de ventas automatizado en WhatsApp, entregando catálogos interactivos, cotizaciones personalizadas y cerrando pedidos sin intervención humana inicial.",
      specs: [
        { label: "Framework", value: "Next.js App Router (Turbopack)" },
        { label: "Automatización", value: "Agente IA 24/7 en WhatsApp" },
        { label: "Optimización", value: "GEO / AEO & Schema.org" },
        { label: "Conversión", value: "Cotizaciones automáticas instantáneas" },
      ],
    },
  ];

  return (
    <section id="proyectos" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl sc-section-flow">
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

        {/* Full-width Expandable Cards Stack */}
        <div className="mt-16 space-y-6">
          {projects.map((project, idx) => (
            <details
              key={project.id}
              open={idx === 0}
              className="group sc-details sc-card-flow sc-surface-glow rounded-xl border border-[#2e3340] bg-[#1c1f28]/60 p-7 sm:p-9 transition-all hover:border-[#6366f1]/40 open:border-[#6366f1]/50 open:bg-[#1c1f28] [&_summary::-webkit-details-marker]:hidden"
              style={{ "--stagger-index": idx } as React.CSSProperties}
            >
              <summary className="cursor-pointer list-none">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#818cf8]">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="rounded border border-[#2e3340] bg-[#14161c] px-2.5 py-0.5 font-mono text-[10px] text-[#edeff4]">
                      {project.badge}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#818cf8] group-hover:text-white transition-colors">
                      <span className="hidden sm:inline text-[11px] uppercase tracking-wider">
                        Arquitectura
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-base font-bold transition-transform duration-200 group-open:rotate-45"
                      >
                        +
                      </span>
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-baseline gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold tracking-tight text-[#edeff4] hover:text-[#818cf8] transition-colors"
                  >
                    <span>{project.name}</span>
                    <svg
                      className="h-4 w-4 text-[#9ea5b8] transition-transform hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-[#818cf8]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                  <span className="font-mono text-xs text-[#9ea5b8]">
                    ({project.domain})
                  </span>
                </div>

                <p className="mt-3 font-serif text-base sm:text-lg leading-relaxed text-[#949aab] max-w-4xl">
                  {project.description}
                </p>
              </summary>

              {/* Expanded Technical Deep-Dive */}
              <div className="mt-6 border-t border-[#2e3340]/60 pt-6">
                <p className="font-serif text-sm sm:text-base leading-relaxed text-[#edeff4]/90 max-w-4xl">
                  {project.extendedDetails}
                </p>

                {/* 4 Deep Specs Grid */}
                <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 font-mono text-xs">
                  {project.specs.map((spec, i) => (
                    <div
                      key={i}
                      className="sc-fade-up rounded-lg border border-[#2e3340]/80 bg-[#14161c]/80 p-3.5 transition-colors duration-200 hover:border-[#6366f1]/40"
                      style={{ "--stagger-index": i } as React.CSSProperties}
                    >
                      <span className="block text-[10px] uppercase tracking-wider text-[#9ea5b8]">
                        {spec.label}
                      </span>
                      <span className="mt-1 block font-medium text-[#edeff4] text-[11px] sm:text-xs">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="mt-7 flex items-center justify-between border-t border-[#2e3340]/40 pt-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-[#818cf8] hover:text-white transition-colors"
                  >
                    <span>Visitar plataforma en producción ({project.domain})</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
