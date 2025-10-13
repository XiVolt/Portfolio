import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Tristan Bras - Développeur Web & Fondateur VolturaCode",
  description:
    "Portfolio de Tristan Bras, étudiant en BUT Informatique et fondateur de VolturaCode. Développement web moderne, applications Java, administration système. Recherche alternance 18 mois.",
  keywords: "Tristan Bras, VolturaCode, BUT Informatique, alternance, développeur full-stack, React, Next.js, Java, web moderne, portfolio",
  authors: [{ name: "Tristan Bras" }],
  openGraph: {
    title: "Tristan Bras - Développeur Web & Fondateur VolturaCode",
    description: "Portfolio professionnel - Développement web moderne & VolturaCode",
    type: "website",
    locale: "fr_FR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
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
