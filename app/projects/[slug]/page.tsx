"use client"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

type Project = {
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: string
  images: string[]
  features: string[]
  challenges?: string[]
  results?: string[]
  codeExamples?: { title: string; code: string }[]
}
const projectsData: Record<string, Project> = {
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
  procyon: {
    title: "Infrastructure Réseau Procyon",
    description:
      "Configuration complète d'une infrastructure réseau avec services DNS/Web, sécurisation et haute disponibilité dans le cadre de la SAE 2.03.",
    longDescription: `Ce projet consistait à configurer une infrastructure réseau complète pour l'entreprise fictive Procyon. 

L'objectif était de mettre en place une architecture réseau robuste avec des services DNS maître/esclave, des serveurs web Apache avec virtual hosts, et une sécurisation complète par zones.

J'ai travaillé sur la configuration des serveurs Linux, l'implémentation des services réseau et la sécurisation de l'ensemble de l'infrastructure.`,
    technologies: ["Linux", "DNS (BIND)", "Apache", "IPv4/IPv6", "Sécurité"],
    category: "System Administration",
    images: ["/setup.png"],
    features: [
      "Configuration DNS maître/esclave",
      "Virtual hosts Apache multiples",
      "Sécurisation par zones réseau",
      "Haute disponibilité des services",
      "Gestion des certificats SSL",
      "Monitoring des services",
      "Configuration IPv4/IPv6",
      "Pare-feu et règles de sécurité",
    ],
    challenges: [
      "Configuration complexe du DNS BIND",
      "Synchronisation maître/esclave",
      "Sécurisation des communications",
      "Gestion des certificats SSL",
    ],
    results: [
      "Infrastructure 100% opérationnelle",
      "Haute disponibilité garantie",
      "Sécurité renforcée",
      "Performance optimisée",
    ],
    codeExamples: [
      {
        title: "Configuration DNS BIND",
        code: `// Configuration zone DNS
zone "procyon.local" {
    type master;
    file "/etc/bind/db.procyon.local";
    allow-transfer { 192.168.1.11; };
};

// Fichier de zone
$TTL    604800
@       IN      SOA     ns1.procyon.local. admin.procyon.local. (
                        2024010101      ; Serial
                        604800          ; Refresh
                        86400           ; Retry
                        2419200         ; Expire
                        604800 )        ; Negative Cache TTL

@       IN      NS      ns1.procyon.local.
@       IN      A       192.168.1.10
www     IN      A       192.168.1.10`,
      },
    ],
  },
  "algorithmes-tri": {
    title: "Analyse d'Algorithmes de Tri - Optimisation Performance",
    description:
      "Projet d'analyse comparative de performance entre différents algorithmes de tri avec mesures de complexité temporelle et optimisations.",
    longDescription: `Ce projet consistait à implémenter et analyser les performances de différents algorithmes de tri : Tri Fusion, Tri Rapide, et Tri à Bulles.

L'objectif était de mesurer et comparer les performances de ces algorithmes sur différentes tailles de données, d'analyser leur complexité temporelle et spatiale, et d'optimiser leur implémentation.

J'ai développé un framework de test complet avec mesures de performance en temps réel et génération de rapports d'analyse.`,
    technologies: ["Java", "Algorithmique", "Analyse de Performance", "Tests Unitaires"],
    category: "Algorithm Analysis",
    images: ["/tri.png"],
    features: [
      "Implémentation Tri Fusion O(n log n)",
      "Tri Rapide avec pivot optimisé",
      "Mesures de performance temps réel",
      "Analyse comparative sur grandes données",
      "Génération de graphiques de performance",
      "Tests unitaires complets",
      "Optimisations mémoire",
      "Rapport d'analyse détaillé",
    ],
    challenges: [
      "Optimisation du Tri Rapide",
      "Gestion mémoire pour grandes données",
      "Mesures précises de performance",
      "Analyse statistique des résultats",
    ],
    results: [
      "Tri Fusion 40% plus rapide que l'implémentation standard",
      "Tri Rapide optimisé pour éviter le pire cas",
      "Framework de test réutilisable",
      "Documentation complète des performances",
    ],
    codeExamples: [
      {
        title: "Tri Fusion Optimisé",
        code: `public static void mergeSort(int[] arr, int left, int right) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        // Tri récursif des deux moitiés
        mergeSort(arr, left, mid);
        mergeSort(arr, mid + 1, right);
        
        // Fusion des deux moitiés triées
        merge(arr, left, mid, right);
    }
}

private static void merge(int[] arr, int left, int mid, int right) {
    int[] temp = new int[right - left + 1];
    int i = left, j = mid + 1, k = 0;
    
    while (i <= mid && j <= right) {
        temp[k++] = (arr[i] <= arr[j]) ? arr[i++] : arr[j++];
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    System.arraycopy(temp, 0, arr, left, temp.length);
}`,
      },
    ],
  },
  "base-de-donnees": {
    title: "Base de Données Démographique",
    description:
      "Conception et exploitation d'une base de données relationnelle complexe avec modélisation hiérarchique et requêtes optimisées.",
    longDescription: `Ce projet consistait à concevoir et implémenter une base de données relationnelle complète pour gérer des données démographiques complexes.

L'objectif était de créer un modèle de données hiérarchique avec des relations complexes, d'optimiser les requêtes pour de gros volumes de données, et d'assurer la sécurité et l'intégrité des données.

J'ai travaillé sur la modélisation conceptuelle, l'implémentation physique, et l'optimisation des performances avec PostgreSQL.`,
    technologies: ["SQL", "PostgreSQL", "Modélisation", "Optimisation"],
    category: "Database",
    images: ["/bd.png"],
    features: [
      "Modélisation hiérarchique complexe",
      "Jointures optimisées multi-tables",
      "Requêtes sécurisées avec paramètres",
      "Protection des données sensibles",
      "Index optimisés pour performance",
      "Procédures stockées avancées",
      "Triggers pour intégrité référentielle",
      "Sauvegarde et restauration automatisées",
    ],
    challenges: [
      "Modélisation de relations complexes",
      "Optimisation des requêtes lourdes",
      "Gestion de la sécurité des données",
      "Performance sur gros volumes",
    ],
    results: [
      "Base de données normalisée 3NF",
      "Requêtes optimisées < 100ms",
      "Sécurité renforcée des accès",
      "Intégrité des données garantie",
    ],
    codeExamples: [
      {
        title: "Requête Optimisée avec Jointures",
        code: `-- Requête optimisée pour récupérer les statistiques démographiques
SELECT 
    r.nom_region,
    d.nom_departement,
    c.nom_commune,
    p.annee,
    p.population_totale,
    p.population_masculine,
    p.population_feminine,
    ROUND((p.population_feminine::decimal / p.population_totale) * 100, 2) as pourcentage_femmes
FROM population p
INNER JOIN communes c ON p.id_commune = c.id_commune
INNER JOIN departements d ON c.id_departement = d.id_departement  
INNER JOIN regions r ON d.id_region = r.id_region
WHERE p.annee BETWEEN $1 AND $2
    AND r.nom_region = $3
ORDER BY p.population_totale DESC
LIMIT 20;

-- Index pour optimiser cette requête
CREATE INDEX idx_population_annee_region ON population(annee) 
WHERE annee BETWEEN 2010 AND 2024;`,
      },
    ],
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug as string
  const project = projectsData[slug]

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
            {project.technologies?.map((tech: string, idx: number) => (
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
              {project.images?.map((image: string, idx: number) => (
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
            {project.codeExamples?.length && project.codeExamples.length > 0 && (
              <Card className="p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Extraits de code</h2>
                <div className="space-y-6">
                  {project.codeExamples.map(
                    (example: { title: string; code: string }, idx: number) => (
                      <div key={idx}>
                        <h3 className="text-lg font-medium text-slate-900 mb-3">{example.title}</h3>
                        <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{example.code}</code>
                        </pre>
                      </div>
                    )
                  )}
                </div>
              </Card>
            )}

            {/* Challenges & Results */}
            {(project.challenges?.length || 0) > 0 || (project.results?.length || 0) > 0 ? (
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">Défis techniques</h3>
                  <ul className="space-y-2">
                    {project.challenges?.map((challenge: string, idx: number) => (
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
                    {project.results?.map((result: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-600 text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ) : null}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Fonctionnalités</h3>
              <ul className="space-y-2">
                {project.features?.map((feature: string, idx: number) => (
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
                {project.technologies?.map((tech: string, idx: number) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}