"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ProjectFilterProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function ProjectFilter({ categories, activeFilter, onFilterChange }: ProjectFilterProps) {
  const allCategories = ["Tous", ...categories]

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {allCategories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onFilterChange(category)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Badge
            className={`px-6 py-2 text-sm cursor-pointer transition-all ${
              activeFilter === category
                ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg"
                : "bg-muted text-muted-foreground hover:bg-emerald-100 dark:hover:bg-emerald-950"
            }`}
          >
            {category}
          </Badge>
        </motion.button>
      ))}
    </div>
  )
}
