"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Code, Database, Globe, Server, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "skills", "contact"]
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

  const projects = [
    {
      title: "BioSymphonie - Site Web Écoresponsable",
      slug: "biosymphonie",
      description:
        "Création d'un site web complet pour une entreprise d'événements écoresponsables avec navigation multilingue, carousel d'images et design responsive.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      category: "Web Development",
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
      image: "/bd.png",
      features: ["Modélisation hiérarchique", "Jointures optimisées", "Requêtes sécurisées", "Protection des données"],
    },
  ]

  const skills = [
    { name: "HTML5/CSS3/JavaScript", level: "Avancé", icon: <Globe className="w-5 h-5" /> },
    { name: "Java/Python", level: "Opérationnel", icon: <Code className="w-5 h-5" /> },
    { name: "Bases de données SQL", level: "Opérationnel", icon: <Database className="w-5 h-5" /> },
    { name: "Administration Système", level: "Opérationnel", icon: <Server className="w-5 h-5" /> },
    { name: "Algorithmique", level: "Opérationnel", icon: <Code className="w-5 h-5" /> },
    { name: "Travail d'équipe", level: "Avancé", icon: <Code className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl text-slate-800">Tristan Bras</div>
            <div className="hidden md:flex space-x-8">
              {["hero", "about", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-emerald-600 font-medium" : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {section === "hero"
                    ? "Accueil"
                    : section === "about"
                      ? "À propos"
                      : section === "projects"
                        ? "Projets"
                        : section === "skills"
                          ? "Compétences"
                          : "Contact"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white text-4xl font-bold">
                TB
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Tristan Bras</h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4">Étudiant en BUT Informatique</p>
            <p className="text-lg text-slate-500 mb-8 max-w-2xl mx-auto">
              Développeur passionné recherchant une alternance de 18 mois. Spécialisé en développement web, applications
              Java et administration système.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-lg"
              >
                Voir mes projets
              </Button>
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 text-lg"
                onClick={() => scrollToSection("contact")}
              >
                Me contacter
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://www.linkedin.com/in/tristan-bras-3434a82a6/"
                target="_blank"
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:tristanbras34@gmail.com"
                className="text-slate-600 hover:text-emerald-600 transition-colors"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="mt-16">
              <button
                onClick={() => scrollToSection("about")}
                className="animate-bounce text-slate-400 hover:text-slate-600 transition-colors"
              >
                <ChevronDown className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">À propos de moi</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Étudiant dynamique avec un excellent sens du contact, j'aime collaborer avec des interlocuteurs variés.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Mon parcours</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="font-semibold text-slate-900">BUT Informatique - En cours</h4>
                  <p className="text-slate-600">IUT De Lens - Depuis 2024</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Formation complète en développement, bases de données, réseaux et gestion de projet.
                  </p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="font-semibold text-slate-900">Baccalauréat SVT Physique-Chimie Maths</h4>
                  <p className="text-slate-600">Lycée St Paul - Lens (Mention Bien)</p>
                </div>
                <div className="border-l-4 border-emerald-500 pl-6">
                  <h4 className="font-semibold text-slate-900">Équipier polyvalent</h4>
                  <p className="text-slate-600">McDonald's - Courrières (Depuis 04/2024)</p>
                  <p className="text-sm text-slate-500 mt-2">
                    Gestion autonome, coordination d'équipe, service client.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">62110, Hénin-Beaumont</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">07 85 40 82 49</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <span className="text-slate-700">tristanbras34@gmail.com</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-slate-900 mb-4">Langues</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-700">Français</span>
                    <span className="text-slate-500">Langue maternelle</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-700">Anglais</span>
                    <span className="text-slate-500">Intermédiaire supérieur (B2)</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-slate-900 mb-4">Centres d'intérêt</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Formule 1</Badge>
                  <Badge variant="secondary">Tennis (5 ans)</Badge>
                  <Badge variant="secondary">Natation (4 ans)</Badge>
                  <Badge variant="secondary">Gymnastique (7 ans)</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mes Projets</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez une sélection de mes réalisations techniques, allant du développement web aux applications
              enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-emerald-600 text-white">{project.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-slate-900 mb-2">Fonctionnalités clés :</h4>
                    <ul className="text-xs text-slate-600 space-y-1">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Link href={`/projects/${project.slug}`} className="flex-1">
                      <Button size="sm" variant="outline" className="w-full text-xs">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Détails
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Compétences</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Un aperçu de mes compétences techniques et soft skills développées au cours de ma formation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-0 bg-slate-50">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600">{skill.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{skill.name}</h3>
                    <p className="text-sm text-slate-600">{skill.level}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">Certifications</h3>
            <div className="flex justify-center space-x-8">
              <Badge className="bg-emerald-600 text-white px-4 py-2 text-sm">PSC1</Badge>
              <Badge className="bg-emerald-600 text-white px-4 py-2 text-sm">PIX</Badge>
              <Badge className="bg-emerald-600 text-white px-4 py-2 text-sm">Permis B</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités d'alternance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Informations de contact</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-slate-300">tristanbras34@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-slate-300">07 85 40 82 49</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-emerald-600 rounded-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-slate-300">62110, Hénin-Beaumont</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
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
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h3>
              <form action="https://formspree.io/f/xovwkvdp" method="POST" className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Nom complet</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="votre@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Sujet</label>
                  <input
                    type="text"
                    name="subject"
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                    placeholder="Opportunité d'alternance"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3">
                  Envoyer le message
                </Button>
              </form>
            </div>
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
    </div>
  )
}
