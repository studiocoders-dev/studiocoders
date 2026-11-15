import React from "react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* Subtle purple ambient glow at the top */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#6366f1]/10 blur-[140px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-4xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded border border-[#6366f1]/30 bg-[#6366f1]/10 px-3 py-1 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-[#818cf8]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#818cf8] animate-pulse" />
            Santiago de Chile · Ingeniería Ágil para Latinoamérica & Global
          </div>

          {/* Headline */}
          <h1 className="mt-8 text-4xl font-bold tracking-tight text-[#edeff4] sm:text-6xl md:text-7xl leading-[1.08]">
            Lanzamos tu aplicación web o Agente de IA en 14 días.
          </h1>

          {/* Editorial Subtitle (Newsreader Serif) */}
          <p className="mt-8 font-serif text-xl text-[#949aab] sm:text-2xl md:text-[1.65rem] md:leading-relaxed max-w-3xl">
            Sin maquetas ni promesas en papel. Una versión real, desplegada con
            base de datos y pagos, que tú y tu equipo pueden abrir y usar el día
            catorce. Después iteramos contigo cada semana.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex h-12 items-center justify-center rounded-md bg-[#4f46e5] px-7 font-mono text-sm font-medium tracking-wide text-white transition-all hover:bg-[#4338ca] hover:shadow-[0_0_30px_rgba(79,70,229,0.4)] active:scale-95"
            >
              Cotizar proyecto (Scope 20 min)
            </a>
            <a
              href="#metodo"
              className="inline-flex h-12 items-center justify-center rounded-md border border-[#2e3340] bg-[#1c1f28]/60 px-6 font-mono text-sm font-medium text-[#edeff4] transition-all hover:bg-[#242835] hover:border-[#9ea5b8]/40 active:scale-95"
            >
              Conoce nuestra arquitectura
            </a>
          </div>

          {/* Trust Highlights (Minimalist Monospace) */}
          <div className="mt-14 pt-8 border-t border-[#2e3340]/60 grid grid-cols-2 gap-4 sm:grid-cols-4 font-mono text-xs text-[#9ea5b8]">
            <div>
              <span className="block text-sm font-semibold text-[#edeff4]">14 Días</span>
              <span className="text-[#949aab]">Entrega en producción</span>
            </div>
            <div>
              <span className="block text-sm font-semibold text-[#edeff4]">100% Tuyo</span>
              <span className="text-[#949aab]">Código y repo propio</span>
            </div>
            <div>
              <span className="block text-sm font-semibold text-[#edeff4]">Senior Direct</span>
              <span className="text-[#949aab]">Cero intermediarios</span>
            </div>
            <div>
              <span className="block text-sm font-semibold text-[#edeff4]">USD B2B</span>
              <span className="text-[#949aab]">RUT: 77.709.717-2</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
