"use client"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ParticlesBackground } from "@/components/particles-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/components/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <ParticlesBackground id="tsparticles-projects" />
      
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.projectDetails.backToProjects}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative z-10">
        <h1 className="text-4xl font-bold mb-8">{t.projects.title}</h1>
        {/* Liste complète des projets */}
      </div>
    </div>
  )
}
