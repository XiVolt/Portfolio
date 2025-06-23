import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tristan Bras - Portfolio Professionnel | Alternance BUT Informatique",
  description:
    "Portfolio de Tristan Bras, étudiant en BUT Informatique recherchant une alternance de 18 mois. Développement web, applications Java, administration système. Disponible septembre 2025.",
  keywords: "Tristan Bras, BUT Informatique, alternance, développeur, Java, web, portfolio, Lens, Hénin-Beaumont",
  openGraph: {
    title: "Tristan Bras - Développeur en recherche d'alternance",
    description: "Étudiant BUT Informatique recherchant alternance 18 mois - Développement web, Java, bases de données",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Suspense>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
