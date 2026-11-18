import type { Metadata, Viewport } from "next";
import { Archivo, Newsreader, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#14161c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "studiocoders.dev — De la Idea a Producción en 30 Días",
  description:
    "Estudio de ingeniería de software e Inteligencia Artificial en Santiago de Chile. Lanzamos tu plataforma web o Agente de IA en 30 días. Trato directo con ingeniero senior.",
  metadataBase: new URL("https://studiocoders.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "studiocoders.dev — De la Idea a Producción en 30 Días",
    description:
      "Lanzamos tu plataforma web o Agente de IA en 30 días. Software funcional, conectado a base de datos y pagos, directo con ingeniero senior.",
    url: "https://studiocoders.dev",
    siteName: "studiocoders.dev",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "studiocoders.dev — De la Idea a Producción en 30 Días",
    description:
      "Tu sistema o Agente IA en producción en 30 días. Trato directo con ingeniero senior y arquitectura ágil asistida por IA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://studiocoders.dev/#website",
      name: "Studio Coders",
      url: "https://studiocoders.dev",
      description: "Tu software o Agente IA en producción en 30 días.",
      inLanguage: "es",
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://studiocoders.dev/#organization",
      name: "Studio Coders",
      legalName: "Studio Coders Dev",
      taxID: "77.709.717-2",
      url: "https://studiocoders.dev",
      email: "contacto@studiocoders.dev",
      description:
        "Estudio de ingeniería de software e Inteligencia Artificial en Santiago de Chile. Entrega de software y agentes de IA en producción en 30 días.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
      },
      areaServed: ["Chile", "Latinoamérica", "Estados Unidos", "España"],
      sameAs: [
        "https://github.com/studiocoders-dev",
        "https://www.linkedin.com/company/studiocoders-dev",
        "https://www.crunchbase.com/organization/studio-coders",
        "https://www.npmjs.com/package/@studiocoders/webhook-verifier",
      ],
      priceRange: "$$$",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://studiocoders.dev/#whagil",
      name: "Whagil IA",
      url: "https://whagil.com",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Cloud (SaaS)",
      creator: { "@id": "https://studiocoders.dev/#organization" },
      description:
        "Plataforma SaaS B2B omnicanal de Agentes IA para Meta (WhatsApp, Instagram, Messenger).",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://studiocoders.dev/#whalinkbot",
      name: "Whalinkbot",
      url: "https://whalinkbot.com",
      applicationCategory: "CommunicationApplication",
      operatingSystem: "Cloud (SaaS)",
      creator: { "@id": "https://studiocoders.dev/#organization" },
      description:
        "Motor cloud asíncrono de alta disponibilidad para mensajería y automatización de WhatsApp.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://studiocoders.dev/#infra-manager",
      name: "Infra Manager Pro",
      url: "https://inframanagerpro.com",
      applicationCategory: "ERPApplication",
      operatingSystem: "Web / Cloud",
      creator: { "@id": "https://studiocoders.dev/#organization" },
      description:
        "ERP empresarial de gestión inmobiliaria y mantenimiento crítico con más de 33,000 líneas de código.",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://studiocoders.dev/#servitecnology",
      name: "Servitecnology E-Commerce",
      url: "https://servitecnology.com",
      applicationCategory: "CommerceApplication",
      operatingSystem: "Headless Web",
      creator: { "@id": "https://studiocoders.dev/#organization" },
      description:
        "Plataforma de comercio electrónico headless construida en Astro y Supabase con inventario en tiempo real.",
    },
    {
      "@type": "WebSite",
      "@id": "https://studiocoders.dev/#eaestampa",
      name: "EA Estampa",
      url: "https://eaestampa.com",
      creator: { "@id": "https://studiocoders.dev/#organization" },
      description:
        "Landing page corporativa de alta conversión en Next.js para taller de estampado DTF y sublimación, con cotizaciones automáticas 24/7 vía WhatsApp impulsadas por Whagil IA.",
    },
    {
      "@type": "FAQPage",
      "@id": "https://studiocoders.dev/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es Studio Coders y quién respalda su operación técnica y legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Studio Coders es un estudio de ingeniería de software e inteligencia artificial con sede en Santiago de Chile, operado formalmente bajo la firma comercial Studio Coders Dev con RUT 77.709.717-2. Especializado en el desarrollo ágil de aplicaciones web, plataformas SaaS y agentes de IA conversacionales para empresas y fundadores en América Latina, Estados Unidos y Europa. La firma se distingue por su entrega en producción en 30 días bajo presupuesto cerrado en dólares estadounidenses (USD) y trato directo con ingeniería senior, eliminando intermediarios de agencias tradicionales. El cliente mantiene el 100% de la propiedad del código fuente y repositorios en GitHub desde el primer día.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué plataformas y proyectos en producción respaldan la ingeniería de Studio Coders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "El portafolio de ingeniería de Studio Coders probado en batalla incluye, entre otras, las siguientes plataformas recientes operando en alta concurrencia: el SaaS B2B omnicanal Whagil IA (whagil.com) con WebSockets y colas BullMQ sobre Redis, el motor en la nube Whalinkbot (whalinkbot.com) para mensajería asíncrona de WhatsApp, el ERP empresarial Infra Manager Pro (inframanagerpro.com) con más de 33.000 líneas de código en TypeScript y PostgreSQL, la plataforma de comercio headless Servitecnology (servitecnology.com) sobre arquitectura Astro y Supabase con tiempos de carga sub-segundo, y la landing page corporativa EA Estampa (eaestampa.com) en Next.js con cotizaciones y atención automatizadas 24/7 vía WhatsApp impulsadas por IA.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo es posible tener una primera versión en producción en 30 días?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trabajamos sin intermediarios: hablas directamente con un ingeniero senior con más de cinco años de experiencia. Acotamos el alcance al núcleo operativo (MVP: autenticación, roles, flujo principal y pagos), validamos en entorno de pruebas al día 15 y usamos aceleración asistida por IA sobre componentes probados (Next.js 16, Supabase, Tailwind CSS, Redis y BullMQ) para lanzar en producción al día 30 y continuar módulos de Fase 2 desde el día 31.",
          },
        },
        {
          "@type": "Question",
          name: "¿Quién es el dueño del código fuente y los accesos?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tú eres el propietario del 100% del código fuente, repositorio en GitHub y despliegues desde el día uno. No retenemos propiedad intelectual ni creamos dependencias cautivas.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo funciona la facturación y los pagos internacionales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Operamos formalmente bajo la firma comercial Studio Coders Dev con RUT 77.709.717-2 (Chile). Emitimos facturación comercial y contratos internacionales de exportación de servicios. Todos nuestros presupuestos son en USD, cerrados y sin costos ocultos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué incluye el soporte y mantenimiento posterior?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Todos los desarrollos llave en mano incluyen un año completo de soporte técnico sin costo tras la entrega en producción para garantizar estabilidad y corrección de fallos, además de planes opcionales para evolución continua, nuevas funcionalidades e infraestructura administrada.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${newsreader.variable} ${ibmPlexMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#14161c] text-[#edeff4] selection:bg-[#6366f1]/30 selection:text-white font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
