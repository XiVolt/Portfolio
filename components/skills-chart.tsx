"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Skill {
  name: string
  level: number // 0-100
  category: string
}

interface SkillsChartProps {
  skills: Skill[]
}

export function SkillsChart({ skills }: SkillsChartProps) {
  // Group skills by category
  const categories = Array.from(new Set(skills.map(s => s.category)))
  
  const skillsByCategory = categories.reduce((acc, category) => {
    acc[category] = skills.filter(s => s.category === category)
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <div className="space-y-8">
      {categories.map((category, categoryIdx) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: categoryIdx * 0.1 }}
        >
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Badge className="bg-emerald-600">{category}</Badge>
              </h3>
              <div className="space-y-4">
                {skillsByCategory[category].map((skill, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
