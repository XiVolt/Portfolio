"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Code, Database, Globe, Server, Linkedin, Mail, Phone, MapPin, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { AlternanceBanner } from "@/components/alternance-banner"
import { FormationTimeline } from "@/components/formation-timeline"
import { CVDownload } from "@/components/cv-download"
import { ParticlesBackground } from "@/components/particles-background"
import { VolturaCodeSection } from "@/components/volturacode-section"
import { SkillsChart } from "@/components/skills-chart"
import { ProjectFilter } from "@/components/project-filter"
import { Logo } from "@/components/logo"
import { Typewriter } from "@/components/typewriter"
import { FloatingContactButton } from "@/components/floating-contact"
import { PageLoader } from "@/components/page-loader"
import { Analytics } from "@vercel/analytics/next"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [formStatus, setFormStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [projectFilter, setProjectFilter] = useState("Tous")

  console.log("Portfolio loaded - Version 3.0 with VolturaCode")

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "volturacode", "alternance", "about", "projects", "skills", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus("Envoi en cours...")

    // Track form submission
    if (typeof window !== "undefined" && window.trackContactSubmission) {
      window.trackContactSubmission()
    }

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xovwkvdp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormStatus("✅ Message envoyé avec succès ! Je vous répondrai rapidement.")
        form.reset()
      } else {
        const data = await response.json()
        setFormStatus("❌ Erreur lors de l'envoi. Veuillez réessayer.")
        console.error("Erreur Formspree:", data)
      }
    } catch (error) {
      setFormStatus("❌ Erreur réseau. Veuillez vérifier votre connexion.")
      console.error("Erreur:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const projects = [
    {
      title: "BioSymphonie - Site Web Écoresponsable",
      slug: "biosymphonie",
      description:
        "Création d'un site web complet pour une entreprise d'événements écoresponsables avec navigation multilingue, carousel d'images et design responsive.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "Web Development",
      projectType: "Projets étudiants",
      semester: "S1 - 2024",
      image: "/biosymphonie.png",
      features: ["Navigation multilingue", "Design responsive", "Carousel interactif", "Conformité RGPD"],
    },
    {
      title: "Jeu d'Échecs Interactif",
      slug: "echecs",
      description:
        "Application web de jeu d'échecs en ligne avec interface graphique complète, gestion des tours et système de promotion des pions.",
      technologies: ["Java", "JavaFX", "Interface Web", "Logique de jeu"],
      category: "Game Development",
      projectType: "Projets étudiants",
      semester: "S1 - 2024",
      image: "/echecs.png",
      features: ["Interface graphique", "Gestion des tours", "Promotion des pions", "Validation des mouvements"],
    },
    {
      title: "Bomberman - Jeu 2D JavaFX",
      slug: "bomberman",
      description:
        "Développement d'un jeu Bomberman complet avec architecture MVC, animations fluides et gestion des explosions.",
      technologies: ["JavaFX", "MVC Pattern", "Animation", "Observer Pattern"],
      category: "Game Development",
      projectType: "Projets étudiants",
      semester: "S2 - 2025",
      image: "/bomberman.png",
      features: ["Architecture MVC", "Animations Timeline", "Gestion des explosions", "Interface responsive"],
    },
    {
      title: "Infrastructure Réseau Procyon",
      slug: "procyon",
      description:
        "Configuration complète d'une infrastructure réseau avec services DNS/Web, sécurisation et haute disponibilité.",
      technologies: ["Linux", "DNS (BIND)", "Apache", "IPv4/IPv6", "Sécurité"],
      category: "System Administration",
      projectType: "Projets étudiants",
      semester: "S2 - 2025",
      image: "/setup.png",
      features: [
        "Configuration DNS maître/esclave",
        "Virtual hosts Apache",
        "Sécurisation par zones",
        "Haute disponibilité",
      ],
    },
    {
      title: "Analyse d'Algorithmes de Tri - Optimisation Performance",
      slug: "algorithmes-tri",
      description:
        "Projet d'analyse comparative de performance entre différents algorithmes de tri (Tri Fusion, Tri Rapide, Tri à Bulles) avec mesures de complexité temporelle et optimisations.",
      technologies: ["Java", "Algorithmique", "Analyse de Performance", "Tests Unitaires"],
      category: "Algorithm Analysis",
      projectType: "Projets étudiants",
      semester: "S1 - 2024",
      image: "/tri.png",
      features: [
        "Implémentation Tri Fusion O(n log n)",
        "Tri Rapide avec pivot optimisé",
        "Mesures de performance temps réel",
        "Analyse comparative sur grandes données",
      ],
    },
    {
      title: "Base de Données Démographique",
      slug: "base-de-donnees",
      description:
        "Conception et exploitation d'une base de données relationnelle complexe avec modélisation hiérarchique et requêtes optimisées.",
      technologies: ["SQL", "PostgreSQL", "Modélisation", "Optimisation"],
      category: "Database",
      projectType: "Projets étudiants",
      semester: "S2 - 2025",
      image: "/bd.png",
      features: ["Modélisation hiérarchique", "Jointures optimisées", "Requêtes sécurisées", "Protection des données"],
    },
    
    {
      title: "Portfolio Personnel - Next.js",
      slug: "portfolio-nextjs",
      description:
        "Développement de ce portfolio avec Next.js, animations Framer Motion, mode sombre/clair et optimisations performance.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      projectType: "Projets personnels",
      semester: "Projet Personnel",
      image: "/portfolio.png",
      features: ["Mode sombre/clair", "Animations fluides", "Performance optimisée", "SEO avancé"],
    },
    {
      title: "OnlyFoot - Réseau social football",
      slug: "onlyfoot",
      description:
        "Site web communautaire sur le football : partage de photos, profils utilisateurs, commentaires, likes et base de données PostgreSQL.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL", "SQL", "Cloudinary"],
      category: "Web Development",
      projectType: "Projets personnels",
      semester: "Projet Personnel",
      image: "/onlyfoot.png",
      features: [
        "Création de profils utilisateurs",
        "Publication de photos de football",
        "Commentaires et likes sur les posts",
        "Base de données relationnelle PostgreSQL",
        "API Node.js sécurisée",
        "Gestion des images avec Cloudinary"
      ],
    },
  ]

  const skillsData = [
    // Langages
    { name: "HTML/CSS/JavaScript", level: 90, category: "Langages" },
    { name: "TypeScript", level: 75, category: "Langages" },
    { name: "Java", level: 70, category: "Langages" },
    { name: "Python", level: 65, category: "Langages" },
    { name: "PHP", level: 55, category: "Langages" },
    { name: "SQL", level: 80, category: "Langages" },
    
    // Frameworks & Bibliothèques
    { name: "React / Next.js", level: 70, category: "Frameworks" },
    { name: "Node.js / Express", level: 65, category: "Frameworks" },
    { name: "Laravel", level: 40, category: "Frameworks" },
    { name: "Tailwind CSS", level: 65, category: "Frameworks" },
    { name: "Framer Motion", level: 35, category: "Frameworks" },
    
    // Outils & Technologies
    { name: "Git / GitHub", level: 80, category: "Outils" },
    { name: "Docker", level: 10, category: "Outils" },
    { name: "Linux Administration", level: 65, category: "Outils" },
    { name: "PostgreSQL / MySQL", level: 70, category: "Outils" },
    { name: "Vercel / Netlify", level: 85, category: "Outils" },
    
    // Soft Skills
    { name: "Travail d'équipe", level: 95, category: "Soft Skills" },
    { name: "Communication", level: 90, category: "Soft Skills" },
    { name: "Résolution de problèmes", level: 90, category: "Soft Skills" },
    { name: "Autonomie", level: 95, category: "Soft Skills" },
  ]

  const skills = [
    { name: "HTML5/CSS3/JavaScript", level: "Avancé", icon: <Globe className="w-5 h-5" /> },
    { name: "Java/Python", level: "Opérationnel", icon: <Code className="w-5 h-5" /> },
    { name: "Bases de données SQL", level: "Opérationnel", icon: <Database className="w-5 h-5" /> },
    { name: "Administration Système", level: "Opérationnel", icon: <Server className="w-5 h-5" /> },
    { name: "Git/GitHub", level: "Opérationnel", icon: <Code className="w-5 h-5" /> },
    { name: "UI/UX Design", level: "Opérationnel", icon: <Globe className="w-5 h-5" /> },
    { name: "PHP/Laravel", level: "Avancé", icon: <Globe className="w-5 h-5" /> },
    { name: "Algorithmique", level: "Opérationnel", icon: <Code className="w-5 h-5" /> },
    { name: "Travail d'équipe", level: "Avancé", icon: <Code className="w-5 h-5" /> },
  ]

  // Get unique project types for filtering
  const projectTypes = Array.from(new Set(projects.map(p => p.projectType)))
  
  // Filter projects based on selected filter
  const filteredProjects = projectFilter === "Tous" 
    ? projects 
    : projects.filter(p => p.projectType === projectFilter)

  // Group projects by semester
  const projectsBySemester = filteredProjects.reduce(
    (acc, project) => {
      const semester = project.semester
      if (!acc[semester]) {
        acc[semester] = []
      }
      acc[semester].push(project)
      return acc
    },
    {} as Record<string, typeof projects>,
  )

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      {/* Page Loader */}
      <PageLoader />
      
      {/* Particles Background - Single instance covering entire page */}
      <ParticlesBackground id="tsparticles-main" />
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 transform-origin-0 z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-3">
              <Logo />
              <motion.span 
                className="font-poppins font-bold text-xl hidden sm:block"
                whileHover={{ scale: 1.05 }}
              >
                Tristan Bras
              </motion.span>
            </Link>
            <div className="hidden md:flex space-x-8 items-center">
              {["hero", "volturacode", "alternance", "about", "projects", "skills", "contact"].map((section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? "text-emerald-600 font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section === "hero"
                    ? "Accueil"
                    : section === "volturacode"
                      ? "VolturaCode"
                      : section === "alternance"
                        ? "Alternance"
                        : section === "about"
                          ? "À propos"
                          : section === "projects"
                            ? "Projets"
                            : section === "skills"
                              ? "Compétences"
                              : "Contact"}
                </motion.button>
              ))}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <motion.div
              className="mb-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="w-40 h-40 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-emerald-400 via-teal-500 to-emerald-600 flex items-center justify-center text-white text-5xl font-poppins font-bold shadow-2xl transform hover:rotate-3 transition-transform">
                TB
              </div>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-poppins font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Tristan Bras
            </motion.h1>

            <motion.div
              className="text-2xl md:text-3xl mb-6 h-20 flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-muted-foreground">Je suis </span>
              <Typewriter 
                words={[
                  "Développeur Web",
                  "Étudiant en BUT Informatique",
                  "Fondateur de VolturaCode",
                  "Passionné de Code",
                ]}
              />
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Étudiant en BUT Informatique & fondateur de{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">VolturaCode</span>
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Développeur passionné recherchant une alternance de 18 mois. Spécialisé en développement web, applications
              Java et administration système.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
                >
                  Voir mes projets
                </Button>
              </motion.div>

              <CVDownload />

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-3 text-lg"
                  onClick={() => scrollToSection("contact")}
                >
                  Me contacter
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
                <Link
                  href="https://www.linkedin.com/in/tristan-bras-3434a82a6/"
                  target="_blank"
                  className="text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
                <Link
                  href="mailto:tristanbras34@gmail.com"
                  className="text-muted-foreground hover:text-emerald-600 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.2, rotate: -8 }}>
                <Link
                  href="https://github.com/XiVolt"
                  target="_blank"
                  className="text-muted-foreground hover:text-emerald-600 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-16"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <button
                onClick={() => scrollToSection("alternance")}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Alternance Section - NOUVELLE SECTION */}
      <section id="alternance" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AlternanceBanner />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">À propos de moi</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Étudiant dynamique avec un excellent sens du contact, j'aime collaborer avec des interlocuteurs variés.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <FormationTimeline />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold mb-6">Informations</h3>
              <div className="space-y-4 mb-8">
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span>62110, Hénin-Beaumont</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span>07 85 40 82 49</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span>tristanbras34@gmail.com</span>
                </motion.div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold mb-4">Langues</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Français</span>
                    <span className="text-muted-foreground">Langue maternelle</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Anglais</span>
                    <span className="text-muted-foreground">Intermédiaire supérieur (B2)</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Centres d'intérêt</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Formule 1</Badge>
                  <Badge variant="secondary">Tennis (5 ans)</Badge>
                  <Badge variant="secondary">Natation (4 ans)</Badge>
                  <Badge variant="secondary">Gymnastique (7 ans)</Badge>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VolturaCode Section - MON ENTREPRISE */}
      <VolturaCodeSection />

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Mes Projets</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez mes réalisations organisées par semestre et compétences développées.
            </p>
          </motion.div>

          {/* Project Filter */}
          <ProjectFilter 
            categories={projectTypes}
            activeFilter={projectFilter}
            onFilterChange={setProjectFilter}
          />

          {/* Projects organized by semester */}
          {Object.entries(projectsBySemester).map(([semester, semesterProjects], semesterIndex) => (
      <motion.div
      key={semester}
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: semesterIndex * 0.1 }}
      >
      <div className="flex items-center mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border"></div>
        <Badge variant="outline" className="mx-4 px-4 py-2 text-sm font-semibold">
          {semester}
        </Badge>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {semesterProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <Card className="group hover:shadow-2xl hover:border-emerald-500 transition-all duration-300 border-2 bg-card h-full flex flex-col overflow-hidden">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                {/* Fonctionnalités clés */}
                <ul className="mb-4 list-disc list-inside text-xs text-foreground/80">
                  {project.features?.slice(0, 4).map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {/* Bouton Détails */}
                <div className="mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}

                    className="inline-block mt-2 px-4 py-2 rounded bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition"
                  >
                    Détails
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      </motion.div>
      ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Compétences</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un aperçu de mes compétences techniques et soft skills développées au cours de ma formation.
            </p>
          </motion.div>

          {/* Skills Chart with categories */}
          <SkillsChart skills={skillsData} />

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
            <div className="flex justify-center space-x-8">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Badge className="bg-emerald-600 text-white px-4 py-2 text-sm">PSC1</Badge>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Badge className="bg-emerald-600 text-white px-4 py-2 text-sm">PIX</Badge>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }}>
                <Badge className="bg-emerald-600 text-white px-4 py-2 text-sm">Permis B</Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités d'alternance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-300">tristanbras34@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-slate-300">07 85 40 82 49</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-slate-300">62110, Hénin-Beaumont</p>
                  </div>
                </motion.div>
                <motion.div className="flex items-center space-x-4" whileHover={{ x: 5 }}>
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <Link
                      href="https://www.linkedin.com/in/tristan-bras-3434a82a6/"
                      target="_blank"
                      className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Voir mon profil
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <motion.input
                    type="text"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white disabled:opacity-50 transition-all"
                    placeholder="Votre nom"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <motion.input
                    type="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white disabled:opacity-50 transition-all"
                    placeholder="votre@email.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <motion.input
                    type="text"
                    name="subject"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white disabled:opacity-50 transition-all"
                    placeholder="Opportunité d'alternance"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <motion.textarea
                    name="message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white resize-none disabled:opacity-50 transition-all"
                    placeholder="Votre message..."
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 disabled:opacity-50"
                  >
                    {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </motion.div>

                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`mt-4 p-3 rounded-lg text-sm ${
                      formStatus.includes("✅")
                        ? "bg-green-900/50 text-green-200 border border-green-700"
                        : "bg-red-900/50 text-red-200 border border-red-700"
                    }`}
                  >
                    {formStatus}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 Tristan Bras. Tous droits réservés.</p>
            <p className="mt-2 text-sm">Étudiant en BUT Informatique - Recherche alternance 18 mois</p>
          </div>
        </div>
      </footer>
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  )
}
