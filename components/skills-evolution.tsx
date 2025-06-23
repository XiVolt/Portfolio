"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const skillsData = [
  {
    category: "Développement Web",
    skills: [
      { name: "HTML/CSS", level: 90, evolution: "+30% cette année" },
      { name: "JavaScript", level: 75, evolution: "+45% cette année" },
      { name: "React/Next.js", level: 60, evolution: "Nouveau cette année" },
    ],
  },
  {
    category: "Programmation",
    skills: [
      { name: "Java", level: 80, evolution: "+25% cette année" },
      { name: "Python", level: 65, evolution: "+20% cette année" },
      { name: "Algorithmique", level: 85, evolution: "+35% cette année" },
    ],
  },
  {
    category: "Bases de données",
    skills: [
      { name: "SQL", level: 75, evolution: "+40% cette année" },
      { name: "PostgreSQL", level: 70, evolution: "Nouveau cette année" },
      { name: "Modélisation", level: 80, evolution: "+30% cette année" },
    ],
  },
  {
    category: "Système & Réseau",
    skills: [
      { name: "Linux", level: 70, evolution: "+50% cette année" },
      { name: "Administration", level: 65, evolution: "+35% cette année" },
      { name: "DNS/Apache", level: 75, evolution: "Nouveau cette année" },
    ],
  },
]

export function SkillsEvolution() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Évolution de mes compétences</h3>
        <p className="text-slate-600 dark:text-slate-300">Progression technique au cours de ma formation BUT</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <Card className="p-6 h-full">
              <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{category.category}</h4>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                      >
                        {skill.evolution}
                      </Badge>
                    </div>

                    <div className="relative">
                      <Progress value={skill.level} className="h-2" />
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1, duration: 1 }}
                        className="absolute top-0 left-0 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                      />
                    </div>

                    <div className="text-right">
                      <span className="text-xs text-slate-500">{skill.level}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
