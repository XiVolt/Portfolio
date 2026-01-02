import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({ 
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
})

const siteUrl = "https://tristan-bras.dev"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tristan Bras - Développeur Web & Cybersécurité | VolturaCode",
    template: "%s | Tristan Bras Portfolio",
  },
  description:
    "Portfolio de Tristan Bras, étudiant en BUT Informatique spécialisé en cybersécurité et fondateur de VolturaCode. Développement web moderne (React, Next.js), applications Java, administration système Linux. Recherche alternance 18 mois en cybersécurité.",
  keywords: [
    "Tristan Bras",
    "VolturaCode",
    "BUT Informatique",
    "alternance cybersécurité",
    "développeur full-stack",
    "React",
    "Next.js",
    "Java",
    "TypeScript",
    "administration système",
    "Linux",
    "portfolio développeur",
    "Hénin-Beaumont",
  ],
  authors: [{ name: "Tristan Bras", url: siteUrl }],
  creator: "Tristan Bras",
  publisher: "VolturaCode",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Tristan Bras Portfolio",
    title: "Tristan Bras - Développeur Web & Cybersécurité",
    description: "Portfolio professionnel - Développement web moderne, cybersécurité & VolturaCode. Recherche alternance 18 mois.",
    images: [
      {
        url: "/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Tristan Bras - Portfolio Développeur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tristan Bras - Développeur Web & Cybersécurité",
    description: "Portfolio professionnel - Développement web moderne & VolturaCode",
    images: ["/portfolio.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
}

// Données structurées JSON-LD
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tristan Bras",
  url: siteUrl,
  image: `${siteUrl}/portfolio.png`,
  jobTitle: "Étudiant en BUT Informatique - Développeur Web",
  description: "Étudiant en BUT Informatique et fondateur de VolturaCode, spécialisé en développement web et cybersécurité.",
  email: "tristanbras34@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hénin-Beaumont",
    postalCode: "62110",
    addressCountry: "FR",
  },
  sameAs: [
    "https://www.linkedin.com/in/tristan-bras-3434a82a6/",
    "https://github.com/XiVolt",
  ],
  worksFor: {
    "@type": "Organization",
    name: "VolturaCode",
    url: "https://volturacode.com",
  },
  knowsAbout: [
    "Développement Web",
    "React",
    "Next.js",
    "TypeScript",
    "Java",
    "Cybersécurité",
    "Administration Système Linux",
    "Base de données SQL",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-600 focus:text-white focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
