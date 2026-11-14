import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#2e3340]/60 bg-[#14161c]/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[#edeff4] transition-colors hover:text-white"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded bg-[#1c1f28] border border-[#2e3340] text-[#818cf8] transition-transform group-hover:scale-105 group-hover:border-[#6366f1]/50">
            {/* Geometric Constellation / Code Nodes */}
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="4" r="2" />
              <circle cx="4" cy="18" r="2" />
              <circle cx="20" cy="18" r="2" />
              <line x1="12" y1="6" x2="4" y2="16" />
              <line x1="12" y1="6" x2="20" y2="16" />
              <line x1="6" y1="18" x2="18" y2="18" />
            </svg>
          </div>
          <span className="font-mono text-sm tracking-tight text-[#edeff4] group-hover:text-white">
            studiocoders<span className="text-[#818cf8]">.dev</span>
          </span>
        </Link>

        {/* Navigation Anchors */}
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-7 text-xs font-mono tracking-wider uppercase text-[#949aab] md:flex"
        >
          <a
            href="#metodo"
            className="transition-colors hover:text-[#edeff4]"
          >
            Método 14 Días
          </a>
          <a
            href="#proyectos"
            className="transition-colors hover:text-[#edeff4]"
          >
            Proyectos Reales
          </a>
          <a
            href="#comparativa"
            className="transition-colors hover:text-[#edeff4]"
          >
            Comparativa
          </a>
          <a
            href="#faq"
            className="transition-colors hover:text-[#edeff4]"
          >
            FAQ
          </a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#6366f1] px-4 font-mono text-xs font-medium tracking-wide text-white transition-all hover:bg-[#4f46e5] hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] active:scale-95"
          >
            Cuéntanos tu proyecto
          </a>
        </div>
      </div>
    </header>
  );
}
