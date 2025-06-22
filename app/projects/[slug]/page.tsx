"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const projectsData = {
  biosymphonie: {
    title: "BioSymphonie - Site Web Écoresponsable",
    description:
      "Création complète d'un site web pour une entreprise d'événements écoresponsables dans le cadre de la SAE 1.5. Le projet incluait la conception, le développement et l'intégration de fonctionnalités avancées.",
    longDescription: `Ce projet consistait à créer un site web complet pour BioSymphonie, une entreprise fictive spécialisée dans l'organisation d'événements écoresponsables. 

Le site devait répondre aux besoins spécifiques du client avec une approche moderne et respectueuse de l'environnement. J'ai travaillé sur tous les aspects du développement, de la conception à la mise en ligne.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "RGPD"],
    category: "Web Development",
    images: ["/biosymphonie.png", "/biosymphonie-mobile.png"],
    features: [
      "Navigation multilingue (Français/Anglais)",
      "Design responsive adaptatif",
      "Carousel d'images interactif",
      "Formulaire de contact fonctionnel",
      "Conformité RGPD avec banner cookies",
      "Optimisation SEO",
      "Animations CSS fluides",
      "Structure HTML5 sémantique",
    ],
    challenges: [
      "Implémentation de la navigation multilingue",
      "Optimisation des performances sur mobile",
      "Respect des normes d'accessibilité WCAG",
      "Intégration des contraintes RGPD",
    ],
    results: [
      "Site 100% responsive sur tous appareils",
      "Temps de chargement optimisé < 2s",
      "Navigation fluide et intuitive",
      "Conformité légale complète",
    ],
    codeExamples: [
      {
        title: "Navigation Multilingue",
        code: `<!-- Système de navigation multilingue -->
<div class="langue">
  <a href="corrigé.html" title="Français">
    <img src="Images/france.png" alt="Français" class="flag">
  </a>
  <a href="anglais.html" title="English">
    <img src="Images/uk.png" alt="English" class="flag">
  </a>
</div>`,
      },
      {
        title: "Navigation Responsive",
        code: `// Navigation qui s'adapte au scroll
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const currentScrollY = window.scrollY;
  
  if (currentScrollY > lastScrollY) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }
  lastScrollY = currentScrollY;
});`,
      },
    ],
  },
  echecs: {
    title: "Jeu d'Échecs Interactif",
    description:
      "Application web de jeu d'échecs développée lors de la SAE 1.01 avec interface graphique complète et logique de jeu avancée.",
    longDescription: `Développement d'une application complète de jeu d'échecs avec interface web interactive. Le projet incluait la programmation de toute la logique de jeu, la gestion des règles d'échecs et une interface utilisateur intuitive.`,
    technologies: ["Java", "JavaFX", "Interface Web", "Logique de jeu"],
    category: "Game Development",
    images: ["/echecs.png"],
    features: [
      "Interface graphique complète",
      "Gestion des tours de jeu",
      "Système de promotion des pions",
      "Validation des mouvements",
      "Messages d'erreur appropriés",
      "Gestion du temps de jeu",
      "Interface web responsive",
    ],
    challenges: [
      "Implémentation des règles complexes d'échecs",
      "Gestion des cas spéciaux (roque, en passant)",
      "Optimisation de l'interface utilisateur",
      "Validation en temps réel des mouvements",
    ],
    results: [
      "Jeu d'échecs entièrement fonctionnel",
      "Interface intuitive et responsive",
      "Respect complet des règles officielles",
      "Performance optimisée",
    ],
  },
  bomberman: {
    title: "Bomberman - Jeu 2D JavaFX",
    description:
      "Développement d'un jeu Bomberman complet avec architecture MVC, animations fluides et système de jeu avancé.",
    longDescription: `Création d'un jeu Bomberman en JavaFX avec une architecture MVC robuste. Le projet incluait la gestion des personnages, des explosions, des animations et une interface utilisateur complète.`,
    technologies: ["JavaFX", "MVC Pattern", "Animation", "Observer Pattern"],
    category: "Game Development",
    images: ["/bomberman.png"],
    features: [
      "Architecture MVC complète",
      "Animations Timeline fluides",
      "Gestion des explosions",
      "Interface responsive",
      "Observer Pattern pour la réactivité",
      "Binding JavaFX avancé",
      "Thread-safety avec Platform.runLater",
    ],
    codeExamples: [
      {
        title: "Gestion des Explosions",
        code: `@Override
public void showExplosion(List<Tile> tiles) {
  Platform.runLater(() -> {
    for(Tile tile : tiles) {
      StackPane container = getTileContainer(tile.getRow(), tile.getColumn());
      if(container != null) {
        ImageView explosion = new ImageView(loadImage("/explosion.png", 48, 48));
        container.getChildren().add(explosion);
        
        // Animation avec timeline
        new Timeline(
          new KeyFrame(Duration.seconds(0.5),
            e -> container.getChildren().remove(explosion))
        ).play();
      }
    }
  });
}`,
      },
    ],
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug as keyof typeof projectsData]

  if (!project) {
    return <div>Projet non trouvé</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="inline-flex items-center text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au portfolio
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <Badge className="bg-emerald-600 text-white mb-4">{project.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{project.title}</h1>
          <p className="text-xl text-slate-600 mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech, idx) => (
              <Badge key={idx} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Images */}
        {project.images && (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {project.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${idx + 1}`}
                  className="w-full rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <Card className="p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Description du projet</h2>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line">{project.longDescription}</p>
            </Card>

            {/* Code Examples */}
            {project.codeExamples && (
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Extraits de code</h2>
                <div className="space-y-6">
                  {project.codeExamples.map((example, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-medium text-slate-900 mb-3">{example.title}</h3>
                      <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Challenges & Results */}
            {project.challenges && (
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Défis techniques</h3>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Résultats obtenus</h3>
                  <ul className="space-y-2">
                    {project.results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Fonctionnalités</h3>
              <ul className="space-y-2">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>

            <div className="space-y-3">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                <ExternalLink className="w-4 h-4 mr-2" />
                Voir le projet
              </Button>
              <Button variant="outline" className="w-full">
                <Github className="w-4 h-4 mr-2" />
                Code source
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
