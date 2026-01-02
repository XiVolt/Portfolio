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
import { SuccessConfetti } from "@/components/success-confetti"
import { MobileMenu } from "@/components/mobile-menu"
import { ScrollToTop } from "@/components/scroll-to-top"
import { StatsGrid } from "@/components/stats-grid"
import { MatrixRain } from "@/components/matrix-rain"
import { CyberGrid } from "@/components/cyber-grid"
import { FirewallDefenseGame } from "@/components/firewall-game"
import { NetworkAnimation } from "@/components/network-animation"
import { CyberToolsShowcase } from "@/components/cyber-tools"
import { Analytics } from "@vercel/analytics/next"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")
  const [formStatus, setFormStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [projectFilter, setProjectFilter] = useState("Tous")
  const [projectSearch, setProjectSearch] = useState("")
  const [showConfetti, setShowConfetti] = useState(false)

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
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
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
    github: "https://github.com/XiVolt/Bomberman",
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
      github: "https://github.com/XiVolt/Portfolio",
    },
    {
      title: "VolturaCode - Site d'entreprise",
      slug: "volturacode-website",
      description:
        "Développement du site vitrine de mon entreprise VolturaCode, spécialisée dans le développement web et la cybersécurité.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      category: "Web Development",
      projectType: "Projets personnels",
      semester: "Projet Personnel",
      image: "/Voltura.png",
      features: ["Design moderne", "Site vitrine responsive", "Présentation des services", "Portfolio client"],
      github: "https://github.com/XiVolt/voltura-code-site",
    },
    {
      title: "Jeu en C - Développement bas niveau",
      slug: "jeu-c",
      description:
        "Développement d'un jeu en langage C avec gestion de la mémoire, programmation bas niveau et interface console.",
      technologies: ["C", "Gestion mémoire", "Algorithmique"],
      category: "Game Development",
      projectType: "Projets personnels",
      semester: "Projet Personnel",
      image: "/placeholder.png",
      features: ["Programmation bas niveau", "Gestion de la mémoire", "Interface console", "Logique de jeu"],
      github: "https://github.com/XiVolt/Fracture-UP",
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
    {
      title: "LenSymphony - Synthétiseur Musical Java",
      slug: "lensymphony-java",
      description:
        "Développement d'un synthétiseur musical fonctionnel en Java avec lecture de partitions XML et génération de sons en temps réel.",
      technologies: ["Java", "XML", "Algorithmique musicale"],
      category: "Software Development",
      projectType: "Projets étudiants",
      semester: "S3 - 2025",
      image: "/Lensymphony2.png",
      features: [
        "Synthétiseur musical complet",
        "Lecture de partitions XML",
        "Génération de sons en temps réel",
        "Interface utilisateur Java",
      ],github: "https://gitlab.univ-artois.fr/leo_regniez1/lensymphony-groupe-b-4-regniez-leo-bras-tristan-plouvin-nathan-strobbe-theo",
    },
    {
      title: "LenSymphony - Site Web PHP",
      slug: "lensymphony-php",
      description:
        "Développement d'un site web en PHP pour présenter et jouer les musiques créées avec le synthétiseur LenSymphony.",
      technologies: ["PHP", "Sqlite", "CSS3", "JavaScript"],
      category: "Web Development",
      projectType: "Projets étudiants",
      semester: "S3 - 2025",
      image: "/Lensymphony.png",
      features: [
        "Galerie de musiques",
        "Lecteur audio intégré",
        "Interface de présentation",
        "Base de données MySQL",
      ],
        github: "https://gitlab.univ-artois.fr/nathan_plouvin/leo-tristan-theo-nathan-lensymphony-web",
    },
    {
      title: "Marathon du Web - Blog Musical Blues",
      slug: "marathon-web-blues",
      description:
        "Développement d'un site blog dédié au blues lors d'un marathon du web, avec articles, playlists et découverte d'artistes.",
      technologies: ["PHP", "Sqlite", "CSS3", "JavaScript", "Responsive Design"],
      category: "Web Development",
      projectType: "Projets étudiants",
      semester: "S3 - 2025",
      image: "/Marathon.png",
      features: [
        "Blog musical thématique",
        "Articles sur le blues",
        "Playlists et découvertes",
        "Design responsive",
      ],
        github: "https://gitlab.univ-artois.fr/nathan_plouvin/code-marathon-2025-groupe-10",
    },
  ]

  const skillsData = [
    // Cybersécurité
    { name: "Analyse de vulnérabilités", level: 5, category: "Cybersécurité" },
    { name: "Tests d'intrusion (Pentest)", level: 0, category: "Cybersécurité" },
    { name: "Cryptographie", level: 25, category: "Cybersécurité" },
    { name: "Sécurité des réseaux", level: 10, category: "Cybersécurité" },
    { name: "SIEM & Monitoring", level: 0, category: "Cybersécurité" },
    
    // Réseaux & Infrastructure
    { name: "TCP/IP, DNS, DHCP", level: 55, category: "Réseaux" },
    { name: "Configuration Routeurs/Switch", level: 65, category: "Réseaux" },
    { name: "Firewall & IDS/IPS", level: 10, category: "Réseaux" },
    { name: "VPN & VLANs", level: 15, category: "Réseaux" },
    { name: "Analyse réseau (Wireshark)", level: 20, category: "Réseaux" },
    
    // Outils Cyber & Langages
    { name: "Python (Scripts Sécu)", level: 75, category: "Outils" },
    { name: "Bash/PowerShell", level: 80, category: "Outils" },
    { name: "Nmap, Metasploit, Burp Suite", level: 70, category: "Outils" },
    { name: "Linux Administration", level: 85, category: "Outils" },
    { name: "Docker & Virtualisation", level: 10, category: "Outils" },
    { name: "Git / GitHub", level: 80, category: "Outils" },
    
    // Soft Skills
    { name: "Analyse & Résolution", level: 75, category: "Soft Skills" },
    { name: "Veille technologique", level: 80, category: "Soft Skills" },
    { name: "Rigueur & Méthode", level: 90, category: "Soft Skills" },
    { name: "Travail d'équipe", level: 95, category: "Soft Skills" },
  ]

  // Get unique project types for filtering
  const projectTypes = Array.from(new Set(projects.map(p => p.projectType)))
  
  // Filter projects based on selected filter AND search query
  const filteredProjects = projects.filter(p => {
    // Filtre par type
    const matchesType = projectFilter === "Tous" || p.projectType === projectFilter

    // Filtre par recherche (titre, description, technologies)
    const searchLower = projectSearch.toLowerCase().trim()
    const matchesSearch = !searchLower ||
      p.title.toLowerCase().includes(searchLower) ||
      p.description.toLowerCase().includes(searchLower) ||
      p.technologies.some(tech => tech.toLowerCase().includes(searchLower)) ||
      p.category.toLowerCase().includes(searchLower)

    return matchesType && matchesSearch
  })

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

  // Ordre des semestres : S1, S2, S3, puis Projets Personnels à la fin
  const semesterOrder = ["S1 - 2024", "S2 - 2025", "S3 - 2025", "Projet Personnel"]
  const sortedSemesters = Object.keys(projectsBySemester).sort((a, b) => {
    const indexA = semesterOrder.indexOf(a)
    const indexB = semesterOrder.indexOf(b)
    // Si pas dans la liste, mettre à la fin
    const orderA = indexA === -1 ? semesterOrder.length : indexA
    const orderB = indexB === -1 ? semesterOrder.length : indexB
    return orderA - orderB
  })

  return (
    <div id="main-content" className="min-h-screen bg-background text-foreground transition-colors duration-300 relative" role="main">
      {/* Page Loader */}
      <PageLoader />
      
      {/* Cyber Effects */}
      <MatrixRain />
      <CyberGrid />
      
      {/* Particles Background - Single instance covering entire page */}
      <ParticlesBackground id="tsparticles-main" />
      
      {/* Floating Contact Button */}
      <FloatingContactButton />
      
      {/* Scroll To Top Button */}
      <ScrollToTop />
      
      {/* Success Confetti */}
      <SuccessConfetti show={showConfetti} />
      
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 transform-origin-0 z-[70]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border/50 z-[60] shadow-sm">
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
            <div className="flex items-center gap-4">
              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8 items-center">
                {["hero", "volturacode", "alternance", "about", "projects", "skills", "contact"].map((section) => (
                  <motion.button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors ${
                      activeSection === section
                        ? "text-cyan-600 font-medium"
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

              {/* Mobile Menu */}
              <MobileMenu
                sections={["hero", "volturacode", "alternance", "about", "projects", "skills", "contact"]}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative z-10 overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 z-0">
          <motion.div
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center">
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <motion.div
                className="transform scale-150 sm:scale-[2] md:scale-[2.5]"
                whileHover={{ scale: 2.7, rotate: 360 }}
                transition={{ duration: 0.8, type: "spring" }}
              >
                <Logo />
              </motion.div>
            </motion.div>

            <motion.h1
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 bg-gradient-to-r from-cyan-600 via-blue-500 to-cyan-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                backgroundImage: 'linear-gradient(90deg, #10b981, #14b8a6, #06b6d4, #14b8a6, #10b981)',
                backgroundSize: '200% auto',
                animation: 'gradient 4s linear infinite',
              }}
            >
              Tristan Bras
            </motion.h1>

            <motion.div
              className="text-lg sm:text-xl md:text-2xl mb-6 min-h-[60px] sm:min-h-[80px] flex items-center justify-center flex-wrap gap-2 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-muted-foreground">Je suis</span>
              <Typewriter 
                words={[
                  "Passioné par la Cybersécurité",
                  "Administrateur Réseaux",
                  "Étudiant en BUT Informatique",
                  "Fondateur de VolturaCode",
                  "Pentester en devenir",
                ]}
                typingSpeed={80}
                deletingSpeed={40}
              />
            </motion.div>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Étudiant en BUT Informatique & fondateur de{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">VolturaCode</span>
            </motion.p>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Futur expert en cybersécurité et réseaux recherchant une alternance de 18 mois. Spécialisé en sécurité informatique, administration système et infrastructure réseau.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div 
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(16, 185, 129, 0.5)" }} 
                whileTap={{ scale: 0.95 }}
                className="relative w-full sm:w-auto"
              >
                <Button
                  onClick={() => scrollToSection("projects")}
                  className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg group w-full"
                >
                  <span className="relative z-10">Voir mes projets</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>

              <CVDownload />

              <motion.div 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto"
              >
                <Button
                  variant="outline"
                  className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg transition-all duration-300 w-full"
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
              <motion.div 
                whileHover={{ scale: 1.3, rotate: 360, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="https://www.linkedin.com/in/tristan-bras-3434a82a6/"
                  target="_blank"
                  className="block p-3 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg hover:shadow-blue-500/50 transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.3, rotate: 360, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="mailto:tristanbras34@gmail.com"
                  className="block p-3 rounded-full bg-gradient-to-br from-red-500 to-pink-600 text-white shadow-lg hover:shadow-red-500/50 transition-all"
                >
                  <Mail className="w-6 h-6" />
                </Link>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.3, rotate: 360, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="https://github.com/XiVolt"
                  target="_blank"
                  className="block p-3 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-lg hover:shadow-gray-700/50 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Firewall Defense Game */}
            <FirewallDefenseGame />

            <motion.div
              className="mt-16"
              animate={{ 
                y: [0, 15, 0],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut"
              }}
            >
              <motion.button
                onClick={() => scrollToSection("alternance")}
                className="relative group"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <ChevronDown className="w-10 h-10 text-cyan-600 relative z-10 group-hover:text-cyan-500 transition-colors" />
              </motion.button>
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
      <section id="about" className="py-20 relative z-10 overflow-hidden">
        {/* Decorative background elements */}
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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

          {/* Stats Grid */}
          <StatsGrid
            stats={[
              {
                value: 3,
                label: "Années d'études",
                suffix: "",
                icon: <Code className="w-8 h-8" />,
              },
              {
                value: 15,
                label: "Projets réalisés",
                suffix: "+",
                icon: <Database className="w-8 h-8" />,
              },
              {
                value: 10,
                label: "Technologies maîtrisées",
                suffix: "+",
                icon: <Server className="w-8 h-8" />,
              },
              {
                value: 1,
                label: "Entreprise fondée",
                suffix: "",
                icon: <Globe className="w-8 h-8" />,
              },
            ]}
          />

          {/* Network Visualization */}
          <NetworkAnimation />

          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <FormationTimeline />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-semibold mb-6">Informations</h3>
              <div className="space-y-4 mb-8">
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <MapPin className="w-5 h-5 text-cyan-600" />
                  <span>62110, Hénin-Beaumont</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <Phone className="w-5 h-5 text-cyan-600" />
                  <span>07 85 40 82 49</span>
                </motion.div>
                <motion.div className="flex items-center space-x-3" whileHover={{ x: 5 }}>
                  <Mail className="w-5 h-5 text-cyan-600" />
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
      <section id="projects" className="py-20 relative z-10 overflow-hidden">
        {/* Decorative elements */}
        <motion.div
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              Mes Projets
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez mes réalisations organisées par semestre et compétences développées.
            </p>
          </motion.div>

          {/* Project Filter with Search */}
          <ProjectFilter
            categories={projectTypes}
            activeFilter={projectFilter}
            onFilterChange={setProjectFilter}
            searchQuery={projectSearch}
            onSearchChange={setProjectSearch}
          />

          {/* Message si aucun résultat */}
          {sortedSemesters.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-muted-foreground mb-4">
                Aucun projet trouvé pour cette recherche.
              </p>
              <Button
                variant="outline"
                onClick={() => { setProjectSearch(""); setProjectFilter("Tous"); }}
                className="mt-4"
              >
                Réinitialiser les filtres
              </Button>
            </motion.div>
          )}

          {/* Projects organized by semester */}
          {sortedSemesters.map((semester, semesterIndex) => (
      <motion.div
      key={semester}
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: semesterIndex * 0.1 }}
      role="region"
      aria-label={`Projets du ${semester}`}
      >
      <div className="flex items-center mb-8">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-border"></div>
        <Badge variant="outline" className="mx-4 px-6 py-2.5 text-sm font-bold border-2 border-cyan-500/50 bg-cyan-500/10">
          {semester}
        </Badge>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsBySemester[semester].map((project, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className="h-full"
          >
            <Card className="group hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-500 transition-all duration-300 border-2 bg-card h-full flex flex-col overflow-hidden focus-within:ring-2 focus-within:ring-cyan-500">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Image avec overlay */}
                <div className="relative overflow-hidden rounded-xl mb-4 group/image">
                  <img
                    src={project.image}
                    alt={`Capture d'écran du projet ${project.title}`}
                    loading="lazy"
                    className="w-full h-44 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Badge catégorie */}
                  <Badge
                    className="absolute top-3 left-3 bg-black/70 text-white text-xs backdrop-blur-sm"
                    aria-label={`Catégorie: ${project.category}`}
                  >
                    {project.category}
                  </Badge>
                  {/* Overlay au hover */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center pb-4 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    <span className="text-white font-bold text-lg flex items-center gap-2">
                      <ExternalLink className="w-5 h-5" aria-hidden="true" />
                      Voir le projet
                    </span>
                  </div>
                </div>

                {/* Titre avec style amélioré */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Description courte */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies - style amélioré */}
                <div className="flex flex-wrap gap-1.5 mb-4" role="list" aria-label="Technologies utilisées">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20"
                      role="listitem"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs px-2 py-1">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>

                {/* Fonctionnalités clés - version compacte */}
                <ul className="mb-4 space-y-1 text-xs text-muted-foreground" aria-label="Fonctionnalités clés">
                  {project.features?.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-500 mt-0.5" aria-hidden="true">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Boutons CTA - style amélioré */}
                <div className="mt-auto pt-4 flex flex-wrap gap-3 border-t border-border/50">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-sm font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-cyan-500/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    aria-label={`Voir les détails du projet ${project.title}`}
                  >
                    Voir détails
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                  </Link>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      aria-label={`Voir le code source sur GitHub pour ${project.title}`}
                    >
                      <Github className="w-4 h-4" aria-hidden="true" />
                      <span className="sr-only sm:not-sr-only">Code</span>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.article>
        ))}
      </div>
      </motion.div>
      ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10 overflow-hidden">
        {/* Animated background */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
              <motion.div 
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 text-base shadow-lg cursor-pointer">
                  🏥 PSC1
                </Badge>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-base shadow-lg cursor-pointer">
                  💻 PIX
                </Badge>
              </motion.div>
              <motion.div 
                whileHover={{ 
                  scale: 1.2,
                  rotate: [0, -5, 5, -5, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 text-base shadow-lg cursor-pointer">
                  🚗 Permis B
                </Badge>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cyber Tools Section */}
      <CyberToolsShowcase />

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
                <motion.div 
                  className="flex items-center space-x-4 group cursor-pointer" 
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(16, 185, 129, 0.3)",
                        "0 0 30px rgba(16, 185, 129, 0.5)",
                        "0 0 20px rgba(16, 185, 129, 0.3)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Mail className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground group-hover:text-cyan-600 transition-colors">tristanbras34@gmail.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 group cursor-pointer" 
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Phone className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-muted-foreground group-hover:text-cyan-600 transition-colors">07 85 40 82 49</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 group cursor-pointer" 
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg shadow-lg"
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-muted-foreground group-hover:text-cyan-600 transition-colors">62110, Hénin-Beaumont</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-4 group cursor-pointer" 
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <Link
                      href="https://www.linkedin.com/in/tristan-bras-3434a82a6/"
                      target="_blank"
                      className="text-cyan-600 hover:text-cyan-500 transition-colors font-medium"
                    >
                      Voir mon profil →
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white disabled:opacity-50 transition-all"
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white disabled:opacity-50 transition-all"
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white disabled:opacity-50 transition-all"
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
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white resize-none disabled:opacity-50 transition-all"
                    placeholder="Votre message..."
                    whileFocus={{ scale: 1.02 }}
                  ></motion.textarea>
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 disabled:opacity-50"
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
            <p>&copy; 2026 Tristan Bras. Tous droits réservés.</p>
            <p className="mt-2 text-sm">Étudiant en BUT Informatique - Recherche alternance 18 mois</p>
          </div>
        </div>
      </footer>
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  )
}

