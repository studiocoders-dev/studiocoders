"use client";

import { useEffect } from "react";

const SECTION_IDS = [
  "metricas",
  "servicios",
  "respaldo",
  "metodo",
  "proyectos",
  "criterio",
  "auditoria",
  "codigo-publico",
  "comparativa",
  "faq",
  "como-empezar",
  "contacto",
];

const RUNTIME_MOTION_CSS = `
/* Runtime Pro Motion Injection (guarantees active styles even across stale CSS HMR) */
main > section {
  position: relative;
}

main > section::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #6366f1 30%, #a5b4fc 50%, #6366f1 70%, transparent 100%);
  transform: scaleX(0);
  transform-origin: center;
  opacity: 0;
  transition:
    transform 0.75s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
}

main > section[data-section-state="active"]::before {
  transform: scaleX(1);
  opacity: 0.9;
}

.sc-scroll-progress {
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, #4f46e5 0%, #818cf8 55%, #a5b4fc 100%);
  box-shadow: 0 0 12px rgba(129, 140, 248, 0.65);
  transform-origin: 0 50%;
  transform: scaleX(var(--scroll-progress, 0));
  transition: transform 0.08s linear;
  pointer-events: none;
}

.sc-nav-link {
  position: relative;
  transition: color 0.22s cubic-bezier(0.22, 1, 0.36, 1);
}

.sc-nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -5px;
  height: 1.5px;
  background: linear-gradient(90deg, #818cf8, #4f46e5);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.26s cubic-bezier(0.22, 1, 0.36, 1);
}

.sc-nav-link:hover::after,
.sc-nav-link:focus-visible::after,
.sc-nav-link[data-active="true"]::after {
  transform: scaleX(1);
}

.sc-nav-link[data-active="true"] {
  color: #ffffff !important;
}

.sc-surface-glow {
  position: relative;
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1);
}

.sc-surface-glow::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  background: radial-gradient(
    380px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%),
    rgba(99, 102, 241, 0.16),
    transparent 70%
  );
}

.sc-surface-glow:hover::before,
.sc-surface-glow:focus-within::before,
.sc-card-flow[data-vfocus="true"].sc-surface-glow::before {
  opacity: 1;
}

html[data-motion-ready="true"] :is(.sc-section-flow, .sc-card-flow, .sc-row-flow, .sc-hero-exit) {
  will-change: transform, opacity;
  transition:
    opacity 0.62s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.62s cubic-bezier(0.22, 1, 0.36, 1) !important;
}

html[data-motion-ready="true"] :is(.sc-card-flow, .sc-row-flow)[data-vstate="active"] {
  transition-delay: calc(var(--stagger-index, 0) * 45ms);
}

/* 1. ENTRADA (Entering from bottom of viewport) */
html[data-motion-ready="true"] .sc-section-flow[data-vstate="entering"] {
  opacity: 0 !important;
  transform: translate3d(0, 42px, 0) scale(0.96) !important;
}

html[data-motion-ready="true"] .sc-card-flow[data-vstate="entering"] {
  opacity: 0 !important;
  transform: translate3d(0, 46px, 0) scale(0.94) !important;
}

html[data-motion-ready="true"] .sc-row-flow[data-vstate="entering"] {
  opacity: 0 !important;
  transform: translate3d(-18px, 28px, 0) scale(0.98) !important;
}

/* 2. DURANTE (Active in viewport + Focused in reading zone) */
html[data-motion-ready="true"] :is(.sc-section-flow, .sc-card-flow, .sc-row-flow, .sc-hero-exit)[data-vstate="active"] {
  opacity: 1 !important;
  transform: translate3d(0, 0, 0) scale(1) !important;
}

html[data-motion-ready="true"] .sc-row-flow[data-vstate="active"][data-vfocus="true"] {
  transform: translate3d(10px, 0, 0) scale(1) !important;
  background-color: rgba(28, 31, 40, 0.78) !important;
  border-left: 3px solid #818cf8 !important;
}

html[data-motion-ready="true"] .sc-card-flow[data-vstate="active"][data-vfocus="true"] {
  transform: translate3d(0, -5px, 0) scale(1.01) !important;
  border-color: rgba(129, 140, 248, 0.55) !important;
}

/* 3. SALIDA (Exiting towards top of viewport, clearly visible below sticky Navbar) */
html[data-motion-ready="true"] .sc-section-flow[data-vstate="exiting"] {
  opacity: 0.14 !important;
  transform: translate3d(0, -32px, 0) scale(0.95) !important;
}

html[data-motion-ready="true"] .sc-card-flow[data-vstate="exiting"] {
  opacity: 0.15 !important;
  transform: translate3d(0, -34px, 0) scale(0.945) !important;
}

html[data-motion-ready="true"] .sc-row-flow[data-vstate="exiting"] {
  opacity: 0.16 !important;
  transform: translate3d(12px, -22px, 0) scale(0.97) !important;
}

html[data-motion-ready="true"] .sc-hero-exit[data-vstate="exiting"] {
  opacity: 0.22 !important;
  transform: translate3d(0, -30px, 0) scale(0.96) !important;
}
`;

export function MotionController() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = document.documentElement;
    root.setAttribute("data-motion-ready", "true");

    // Ensure runtime CSS is always active even if dev server CSS HMR cache is stale
    let styleEl = document.getElementById(
      "sc-pro-motion-runtime"
    ) as HTMLStyleElement | null;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.id = "sc-pro-motion-runtime";
      document.head.appendChild(styleEl);
    }
    styleEl.textContent = RUNTIME_MOTION_CSS;

    const progressEl = document.querySelector<HTMLElement>(".sc-scroll-progress");
    const animatedSelector =
      ".sc-section-flow, .sc-card-flow, .sc-row-flow, .sc-hero-exit";

    let rafId = 0;

    const updateViewportStates = () => {
      rafId = 0;
      const vh = window.innerHeight || 1;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const docHeight = Math.max(
        document.documentElement.scrollHeight - vh,
        1
      );
      const progress = Math.min(1, Math.max(0, scrollY / docHeight));

      if (progressEl) {
        progressEl.style.setProperty("--scroll-progress", progress.toFixed(4));
      }

      // Thresholds positioned inside the user's direct field of view:
      // - Entry triggers at 78% of viewport height (bottom 22% of screen)
      // - Exit triggers when element rises into top 24% of viewport (well below the 64px navbar)
      // - Active Focus ("Durante") highlights elements in the middle reading band (28% to 64%)
      const entryLine = vh * 0.78;
      const exitCenterLine = Math.max(150, vh * 0.22);
      const exitBottomLine = Math.max(210, vh * 0.28);
      const focusTop = vh * 0.26;
      const focusBottom = vh * 0.64;

      const elements = document.querySelectorAll<HTMLElement>(animatedSelector);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const centerY = rect.top + rect.height / 2;

        if (el.classList.contains("sc-hero-exit")) {
          if (scrollY > 140 && rect.bottom < vh * 0.68) {
            el.setAttribute("data-vstate", "exiting");
          } else {
            el.setAttribute("data-vstate", "active");
          }
          return;
        }

        if (rect.top > entryLine) {
          el.setAttribute("data-vstate", "entering");
          el.removeAttribute("data-vfocus");
        } else if (
          scrollY > 80 &&
          (rect.bottom < exitBottomLine ||
            (rect.height < vh * 0.55 && centerY < exitCenterLine))
        ) {
          el.setAttribute("data-vstate", "exiting");
          el.removeAttribute("data-vfocus");
        } else {
          el.setAttribute("data-vstate", "active");
          if (centerY >= focusTop && centerY <= focusBottom) {
            el.setAttribute("data-vfocus", "true");
          } else {
            el.removeAttribute("data-vfocus");
          }
        }
      });

      // Section top-border laser beam & Navbar Scroll-Spy
      let activeSectionId = "";
      for (const id of SECTION_IDS) {
        const sectionEl = document.getElementById(id);
        if (!sectionEl) continue;
        const rect = sectionEl.getBoundingClientRect();
        if (rect.top <= vh * 0.72 && rect.bottom >= vh * 0.22) {
          sectionEl.setAttribute("data-section-state", "active");
        } else {
          sectionEl.setAttribute("data-section-state", "idle");
        }
        if (rect.top <= vh * 0.45 && rect.bottom >= 160) {
          activeSectionId = id;
        }
      }

      document
        .querySelectorAll<HTMLAnchorElement>("header nav a.sc-nav-link")
        .forEach((link) => {
          const href = link.getAttribute("href") || "";
          if (activeSectionId && href === `#${activeSectionId}`) {
            link.setAttribute("data-active", "true");
          } else {
            link.removeAttribute("data-active");
          }
        });
    };

    const requestTick = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateViewportStates);
      }
    };

    updateViewportStates();
    window.addEventListener("scroll", requestTick, { passive: true });
    window.addEventListener("resize", requestTick, { passive: true });

    // Interactive Pointer Spotlight on .sc-surface-glow cards ("Durante")
    const handlePointerMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>(
        ".sc-surface-glow"
      );
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--spotlight-x", `${e.clientX - rect.left}px`);
      target.style.setProperty("--spotlight-y", `${e.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    // Universal Smooth Accordion (<details.sc-details>) Open & Close
    const handleSummaryClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target || target.closest("a")) return;

      const summary = target.closest("summary");
      if (!summary) return;

      const details = summary.parentElement;
      if (
        !(details instanceof HTMLDetailsElement) ||
        !details.classList.contains("sc-details")
      ) {
        return;
      }

      const content = summary.nextElementSibling as HTMLElement | null;
      if (!content || typeof content.animate !== "function") return;

      e.preventDefault();

      if (details.open) {
        const startHeight = content.offsetHeight;
        const anim = content.animate(
          [
            {
              height: `${startHeight}px`,
              opacity: 1,
              transform: "translateY(0)",
            },
            {
              height: "0px",
              opacity: 0,
              transform: "translateY(-8px)",
            },
          ],
          {
            duration: 280,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        );
        anim.onfinish = () => {
          details.open = false;
          requestTick();
        };
      } else {
        details.open = true;
        const endHeight = content.offsetHeight;
        content.animate(
          [
            {
              height: "0px",
              opacity: 0,
              transform: "translateY(-8px)",
            },
            {
              height: `${endHeight}px`,
              opacity: 1,
              transform: "translateY(0)",
            },
          ],
          {
            duration: 360,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          }
        );
        requestTick();
      }
    };

    document.addEventListener("click", handleSummaryClick);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", requestTick);
      window.removeEventListener("resize", requestTick);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("click", handleSummaryClick);
    };
  }, []);

  return null;
}
