import React from "react";

export function PublicCode() {
  return (
    <section
      id="codigo-publico"
      className="border-t border-[#2e3340]/60 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Código Público
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Audita nuestro estándar de ingeniería directamente en el código fuente.
          </h2>
          <p className="mt-5 font-serif text-lg leading-relaxed text-[#949aab] sm:text-xl">
            No dependes de testimonios ni de presentaciones comerciales. Webhook
            Verifier es una librería de código abierto que construimos y
            mantenemos para verificar eventos criptográficos de Meta, WhatsApp y
            Stripe: tipado estricto en TypeScript, cero dependencias externas y
            suites de pruebas automatizadas. Inspecciónala, clónala o úsala
            libremente en tu propio stack.
          </p>
        </div>

        {/* Public Code Box (npm & github) */}
        <div className="mt-14 overflow-hidden rounded-xl border border-[#2e3340] bg-[#1c1f28]/60">
          <div className="grid grid-cols-1 divide-y divide-[#2e3340] sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            {/* NPM Package Column */}
            <div className="p-7 sm:p-8">
              <span className="block font-mono text-xs uppercase tracking-wider text-[#9ea5b8]">
                Paquete en npm
              </span>
              <a
                href="https://www.npmjs.com/package/@studiocoders/webhook-verifier"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 font-mono text-base sm:text-lg font-medium text-[#818cf8] hover:text-white transition-colors"
              >
                <span>@studiocoders/webhook-verifier</span>
                <svg
                  className="h-4 w-4 text-[#9ea5b8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#818cf8]"
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
              <p className="mt-2 text-xs text-[#949aab]">
                Verificación HMAC SHA-256 ultra-rápida para Next.js y Edge runtimes.
              </p>
            </div>

            {/* GitHub Repo Column */}
            <div className="p-7 sm:p-8">
              <span className="block font-mono text-xs uppercase tracking-wider text-[#9ea5b8]">
                Código en GitHub
              </span>
              <a
                href="https://github.com/studiocoders-dev/webhook-verifier"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 font-mono text-base sm:text-lg font-medium text-[#818cf8] hover:text-white transition-colors"
              >
                <span>studiocoders-dev/webhook-verifier</span>
                <svg
                  className="h-4 w-4 text-[#9ea5b8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#818cf8]"
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
              <p className="mt-2 text-xs text-[#949aab]">
                Repositorio público con suite de tests Vitest, CI/CD y tipado estricto.
              </p>
            </div>
          </div>

          {/* Badges Bar */}
          <div className="border-t border-[#2e3340]/60 bg-[#14161c]/80 px-7 py-4">
            <div className="flex flex-wrap items-center gap-4 font-mono text-xs text-[#9ea5b8]">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                TypeScript Strict
              </span>
              <span>·</span>
              <span>Zero Dependencies</span>
              <span>·</span>
              <span>MIT License</span>
              <span>·</span>
              <span className="text-[#818cf8]">100% Test Coverage</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
