"use client";

import React, { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, project, website }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.ok) {
        setError(
          data?.error ||
            "No pudimos enviar tu mensaje. Intenta nuevamente o escribe a contacto@studiocoders.dev."
        );
        return;
      }

      setEmail("");
      setProject("");
      setWebsite("");
      setSubmitted(true);
    } catch {
      setError(
        "Error de conexión al enviar el mensaje. Intenta nuevamente o escribe a contacto@studiocoders.dev."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="border-t border-[#2e3340]/60 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="max-w-2xl sc-section-flow">
          <span className="font-mono text-xs uppercase tracking-widest text-[#818cf8]">
            Contacto Directo
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#edeff4] sm:text-5xl">
            Construyamos tu próximo sistema.
          </h2>
          <p className="mt-4 font-serif text-lg text-[#949aab]">
            Agenda una sesión técnica de 20 minutos con un desarrollador senior.
            Analizamos la viabilidad de tu idea y te entregamos un presupuesto
            cerrado en menos de 24 horas.
          </p>
        </div>

        <div className="mt-12 rounded-xl border border-[#2e3340] bg-[#1c1f28]/60 p-7 sm:p-10 sc-card-flow sc-surface-glow">
          {submitted ? (
            <div className="sc-starting-reveal rounded-lg border border-[#6366f1]/40 bg-[#6366f1]/10 p-8 text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#4f46e5] text-white mb-4">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    className="sc-check-draw"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#edeff4]">
                Mensaje recibido
              </h3>
              <p className="mt-2 text-sm text-[#949aab] max-w-md mx-auto">
                Un desarrollador senior revisará tus requerimientos y te
                contactará hoy mismo para agendar los 20 minutos de alcance.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 font-mono text-xs text-[#818cf8] underline hover:text-white"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-xs uppercase tracking-wider text-[#9ea5b8]"
                >
                  Correo corporativo
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@empresa.com"
                  className="mt-2 block w-full rounded-md border border-[#2e3340] bg-[#14161c] px-4 py-3 font-mono text-sm text-[#edeff4] placeholder-[#9ea5b8]/80 transition-colors focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block font-mono text-xs uppercase tracking-wider text-[#9ea5b8]"
                >
                  ¿Qué necesitas construir?
                </label>
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={4}
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  placeholder="¿Qué estás tratando de construir, y qué tiene que hacer?"
                  className="mt-2 block w-full rounded-md border border-[#2e3340] bg-[#14161c] px-4 py-3 font-sans text-sm text-[#edeff4] placeholder-[#9ea5b8]/80 transition-colors focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                />
              </div>

              {error ? (
                <div
                  role="alert"
                  className="rounded-md border border-red-500/40 bg-red-500/10 px-4 py-3 font-mono text-xs text-red-200"
                >
                  {error}
                </div>
              ) : null}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex w-full h-12 items-center justify-center rounded-md bg-[#4f46e5] px-6 font-mono text-sm font-semibold tracking-wide text-white transition-all hover:bg-[#4338ca] hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] disabled:opacity-50 active:scale-[0.99]"
                >
                  {loading ? "Enviando..." : "Solicitar llamada técnica (20 min)"}
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 pt-2 font-mono text-xs text-[#9ea5b8]">
                <span>O escríbenos directamente a:</span>
                <a
                  href="mailto:contacto@studiocoders.dev"
                  className="text-[#818cf8] hover:underline"
                >
                  contacto@studiocoders.dev
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
