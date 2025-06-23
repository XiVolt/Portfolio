import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] }) 

export const metadata: Metadata = {
  title: "Tristan Bras - Portfolio Professionnel",
  description:
    "Portfolio de Tristan Bras, étudiant en BUT Informatique recherchant une alternance. Développement web, applications Java, administration système.",
  keywords: "Tristan Bras, BUT Informatique, alternance, développeur, Java, web, portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
