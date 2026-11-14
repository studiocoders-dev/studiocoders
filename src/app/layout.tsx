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
  title: "Studio Coders | Tu software o Agente IA en producción en 14 días",
  description:
    "Estudio boutique de ingeniería de software e Inteligencia Artificial en Santiago de Chile. Entregamos tu primera versión real en producción en 14 días. Trato directo con desarrolladores senior.",
  metadataBase: new URL("https://studiocoders.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Studio Coders | Tu software o Agente IA en producción en 14 días",
    description:
      "No un mockup ni una demo: una versión real, desplegada, que tú y tu equipo pueden abrir y usar el día catorce.",
    url: "https://studiocoders.dev",
    siteName: "Studio Coders",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Coders | Software y Agentes IA en 14 Días",
    description:
      "Tu primera versión en producción en dos semanas. Trato directo con desarrolladores senior y arquitectura ágil asistida por IA.",
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
      "@type": "ProfessionalService",
      "@id": "https://studiocoders.dev/#organization",
      name: "Studio Coders",
      url: "https://studiocoders.dev",
      email: "studiocoders.dev@gmail.com",
      description:
        "Estudio boutique de ingeniería de software e Inteligencia Artificial. Entrega de software y agentes de IA en producción en 14 días.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Santiago",
        addressCountry: "CL",
      },
      areaServed: ["Chile", "Latinoamérica", "Estados Unidos", "España"],
      parentOrganization: {
        "@type": "Organization",
        name: "Jesús León Soluciones Informáticas",
      },
      priceRange: "$$$",
    },
    {
      "@type": "FAQPage",
      "@id": "https://studiocoders.dev/#faq",
      mainEntity: [
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
            text: "Operamos comercialmente bajo Jesús León Soluciones Informáticas en Chile con contratos internacionales de exportación de servicios y presupuestos cerrados en USD.",
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
