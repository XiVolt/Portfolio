"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Server } from "lucide-react"

const timelineData = [
  {
    period: "2024-2025 (S1-S2)",
    title: "BUT Informatique - 1ère année",
    institution: "IUT de Lens",
    status: "Fini",
    competences: ["Algorithmique", "Programmation Java", "Web (HTML/CSS/JS)", "Bases de données"],
    projets: ["BioSymphonie", "Jeu d'Échecs", "Base de données démographique"],
    icon: <Code className="w-5 h-5" />,
    color: "bg-emerald-500",
  },
  {
    period: "2025-2026 (S3-S4)",
    title: "BUT Informatique - 2ème année",
    institution: "IUT de Lens + Alternance",
    status: "En cours",
    competences: ["Développement avancé", "Architecture logicielle", "Gestion de projet", "DevOps", "etc"],
    projets: ["Projets en entreprise", "Applications métier", "Infrastructure cloud", "et autres projets a découvrir"],
    icon: <Server className="w-5 h-5" />,
    color: "bg-blue-500",
  },
  {
    period: "2026-2027 (S5-S6)",
    title: "BUT Informatique - 3ème année",
    institution: "IUT de Lens + Alternance",
    status: "À venir",
    competences: ["A découvir"],
    projets: ["Projet de fin d'études"],
    icon: <GraduationCap className="w-5 h-5" />,
    color: "bg-purple-500",
  },
]

export function FormationTimeline() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Parcours de formation</h3>
        <p className="text-slate-600 dark:text-slate-300">Timeline interactive de mon cursus BUT Informatique</p>
      </motion.div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative flex items-start mb-12"
          >
            {/* Timeline dot */}
            <div
              className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg z-10`}
            >
              {item.icon}
            </div> 

            {/* Content */}
            <Card className="ml-8 p-6 flex-1 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-slate-600 dark:text-slate-300">{item.institution}</p>
                </div>
                <div className="text-right">
                  <Badge variant={item.status === "En cours" ? "default" : "secondary"}>{item.status}</Badge>
                  <p className="text-sm text-slate-500 mt-1">{item.period}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-slate-900 dark:text-white mb-2">Compétences développées</h5>
                  <div className="flex flex-wrap gap-2">
                    {item.competences.map((comp, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {comp}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-medium text-slate-900 dark:text-white mb-2">Projets réalisés</h5>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    {item.projets.map((projet, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-2"></div>
                        {projet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
