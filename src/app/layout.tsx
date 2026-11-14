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
  title: "studiocoders.dev — De la Idea a Producción en 14 Días",
  description:
    "Estudio de ingeniería de software e Inteligencia Artificial en Santiago de Chile. Lanzamos tu plataforma web o Agente de IA en 14 días. Trato directo con desarrolladores senior.",
  metadataBase: new URL("https://studiocoders.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "studiocoders.dev — De la Idea a Producción en 14 Días",
    description:
      "Lanzamos tu plataforma web o Agente de IA en 14 días. Software funcional, conectado a base de datos y pagos, directo con ingenieros senior.",
    url: "https://studiocoders.dev",
    siteName: "studiocoders.dev",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "studiocoders.dev — De la Idea a Producción en 14 Días",
    description:
      "Tu sistema o Agente IA en producción en 14 días. Trato directo con desarrolladores senior y arquitectura ágil asistida por IA.",
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
      description: "Tu software o Agente IA en producción en 14 días.",
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
        "Estudio de ingeniería de software e Inteligencia Artificial en Santiago de Chile. Entrega de software y agentes de IA en producción en 14 días.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
      },
      areaServed: ["Chile", "Latinoamérica", "Estados Unidos", "España"],
      sameAs: [
        "https://github.com/studiocoders-dev",
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
      "@type": "FAQPage",
      "@id": "https://studiocoders.dev/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es Studio Coders y quién respalda su operación técnica y legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Studio Coders es un estudio de ingeniería de software e inteligencia artificial con sede en Santiago de Chile, operado bajo el nombre de fantasía Studio Coders Dev con RUT 77.709.717-2. Especializado en el desarrollo ágil de aplicaciones web, plataformas SaaS y agentes de IA conversacionales para empresas y fundadores en América Latina, Estados Unidos y Europa. La firma se distingue por su modelo de entrega en producción en 14 días bajo presupuesto cerrado en dólares estadounidenses (USD) y trato directo con desarrolladores senior, eliminando intermediarios y burocracia de agencias tradicionales. El cliente mantiene la propiedad del 100% del código fuente y repositorios en GitHub desde el primer día. Su portafolio de ingeniería probado en batalla incluye el SaaS omnicanal Whagil IA, el motor en la nube Whalinkbot para WhatsApp, el ERP empresarial Infra Manager Pro con más de 33.000 líneas de código y la plataforma de comercio headless Servitecnology sobre arquitectura Astro y Supabase.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo es posible tener una primera versión en producción en 14 días?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Trabajamos sin intermediarios: hablas directamente con desarrolladores senior. Utilizamos aceleración asistida por Inteligencia Artificial para el boilerplate y la codificación repetitiva bajo estricta supervisión de arquitectura, y nos basamos en componentes probados en batalla (Next.js 16, Supabase, Tailwind CSS, Redis y BullMQ).",
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
            text: "Operamos formalmente bajo el nombre de fantasía Studio Coders Dev con RUT 77.709.717-2 (Chile). Emitimos facturación comercial y contratos internacionales de exportación de servicios. Todos nuestros presupuestos son en USD, cerrados y sin costos ocultos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué incluye el soporte y mantenimiento posterior?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entregamos garantía contra fallos post-lanzamiento y planes opcionales de mantenimiento mensual que cubren monitoreo, correcciones, hosting, base de datos y actualizaciones de seguridad.",
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
