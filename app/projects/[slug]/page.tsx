"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { ParticlesBackground } from "@/components/particles-background"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/components/language-context"
import { getProjectBySlug } from "@/lib/projects-data"

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug as string
  const { t, locale } = useLanguage()
  const project = getProjectBySlug(slug, locale)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">{t.projectDetails.projectNotFound}</h1>
          <p className="text-muted-foreground mb-4">{t.projectDetails.projectNotFoundDesc}</p>
          <Link href="/#projects" className="text-cyan-600 hover:underline">
            {t.projectDetails.viewAllProjects}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <ParticlesBackground id="tsparticles-project-detail" />
      
      {/* Header */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-40" role="navigation" aria-label="Navigation projet">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link
            href="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg px-2 py-1"
            aria-label="Retour à la liste des projets"
          >
            <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
            {t.projectDetails.backToProjects}
          </Link>
          <div className="flex items-center gap-3">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-24 relative z-10">
        {/* Hero Section */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-1.5">
              {project.category}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            {project.description}
          </p>

          {/* Technologies - style amélioré */}
          <div className="flex flex-wrap gap-2 mb-8" role="list" aria-label="Technologies utilisées">
            {project.technologies?.map((tech: string, idx: number) => (
              <Badge
                key={idx}
                variant="secondary"
                className="px-3 py-1.5 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                role="listitem"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        {/* Images */}
        {project.images && project.images.length > 0 && (
          <section className="mb-12" aria-label="Captures d'écran du projet">
            <div className="grid md:grid-cols-2 gap-6">
              {project.images?.map((image: string, idx: number) => (
                <figure key={idx} className="overflow-hidden rounded-xl shadow-lg border border-border">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Capture d'écran ${idx + 1} du projet ${project.title}`}
                    className="w-full object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </section>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <Card className="p-8 border-2 hover:border-cyan-500/50 transition-colors">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" aria-hidden="true"></span>
                {t.projectDetails.projectDescription}
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                {project.longDescription}
              </p>
            </Card>

            {/* Défis & Résultats - Design amélioré */}
            {((project.challenges?.length || 0) > 0 || (project.results?.length || 0) > 0) && (
              <div className="grid md:grid-cols-2 gap-6">
                {(project.challenges?.length || 0) > 0 && (
                  <Card className="p-6 border-2 border-red-500/20 bg-red-500/5">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-red-600 dark:text-red-400">
                      <span className="w-3 h-3 bg-red-500 rounded-full" aria-hidden="true"></span>
                      {t.projectDetails.technicalChallenges}
                    </h3>
                    <ul className="space-y-3" role="list">
                      {project.challenges?.map((challenge: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-red-500 mt-0.5 font-bold" aria-hidden="true">→</span>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}

                {(project.results?.length || 0) > 0 && (
                  <Card className="p-6 border-2 border-emerald-500/20 bg-emerald-500/5">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
                      <span className="w-3 h-3 bg-emerald-500 rounded-full" aria-hidden="true"></span>
                      {t.projectDetails.resultsObtained}
                    </h3>
                    <ul className="space-y-3" role="list">
                      {project.results?.map((result: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-emerald-500 mt-0.5 font-bold" aria-hidden="true">✓</span>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                )}
              </div>
            )}

            {/* Code Examples */}
            {project.codeExamples?.length && project.codeExamples.length > 0 && (
              <Card className="p-8 border-2">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-gradient-to-b from-cyan-500 to-blue-500 rounded-full" aria-hidden="true"></span>
                  {t.projectDetails.codeExamples}
                </h2>
                <div className="space-y-6">
                  {project.codeExamples.map(
                    (example: { title: string; code: string }, idx: number) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold mb-3 text-cyan-600 dark:text-cyan-400">
                          {example.title}
                        </h3>
                        <pre className="bg-slate-900 text-slate-100 dark:bg-slate-950 dark:text-slate-50 p-4 rounded-xl overflow-x-auto text-sm border border-slate-700">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    )
                  )}
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Fonctionnalités */}
            <Card className="p-6 border-2 sticky top-24">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full" aria-hidden="true"></span>
                {t.projectDetails.features}
              </h3>
              <ul className="space-y-2" role="list">
                {project.features?.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-cyan-500 mt-0.5" aria-hidden="true">✓</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Technologies - version compacte sidebar */}
            <Card className="p-6 border-2">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true"></span>
                {t.projectDetails.techStack}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech: string, idx: number) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-xs px-2 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* CTA Retour */}
            <Link
              href="/#projects"
              className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              {t.projectDetails.viewAllProjects}
            </Link>
          </aside>
        </div>
      </main>
    </div>
  )
}
