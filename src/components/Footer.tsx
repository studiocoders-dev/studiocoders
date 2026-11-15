import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-[#2e3340]/60 bg-[#14161c] py-14 text-xs font-mono text-[#9ea5b8]">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo & Tagline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-semibold text-[#edeff4]">
              <span className="h-2 w-2 rounded-full bg-[#818cf8]" />
              studiocoders<span className="text-[#818cf8]">.dev</span>
            </div>
            <p className="text-[#949aab]">
              Santiago, Chile · Trabajamos con toda Latinoamérica
            </p>
          </div>

          {/* Legal and B2B Attribution */}
          <div className="text-left sm:text-right space-y-1">
            <p className="text-[#edeff4] font-medium font-mono text-xs">
              Studio Coders Dev · RUT: 77.709.717-2
            </p>
            <p className="text-[11px] text-[#9ea5b8]">
              Contratos internacionales de exportación · Facturación B2B en USD
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2e3340]/40 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-[11px]">
          <div>
            © 2026 Studio Coders. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/studiocoders-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#edeff4] transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:contacto@studiocoders.dev"
              className="hover:text-[#edeff4] transition-colors"
            >
              contacto@studiocoders.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
