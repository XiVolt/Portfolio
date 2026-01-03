"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { useLanguage } from "./language-context"

interface ProjectFilterProps {
  categories: string[]
  activeFilter: string
  onFilterChange: (filter: string) => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function ProjectFilter({
  categories,
  activeFilter,
  onFilterChange,
  searchQuery = "",
  onSearchChange
}: ProjectFilterProps) {
  const { t } = useLanguage()
  const allCategories = [t.projects.all, ...categories]
  const [localSearch, setLocalSearch] = useState(searchQuery)

  const handleSearchChange = (value: string) => {
    setLocalSearch(value)
    onSearchChange?.(value)
  }

  const clearSearch = () => {
    setLocalSearch("")
    onSearchChange?.("")
  }

  return (
    <div className="space-y-6 mb-12">
      {/* Barre de recherche */}
      {onSearchChange && (
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              type="search"
              placeholder={t.misc.searchProject}
              value={localSearch}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10 pr-10 py-3 bg-background border-2 border-border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 rounded-xl transition-all"
              aria-label={t.misc.searchProject}
            />
            {localSearch && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-muted transition-colors"
                aria-label={t.misc.clearSearch}
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </motion.button>
            )}
          </div>
        </motion.div>
      )}

      {/* Filtres par catégorie */}
      <div
        className="flex flex-wrap gap-3 justify-center"
        role="group"
        aria-label={t.misc.filterByCategory}
      >
        {allCategories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => onFilterChange(category)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 rounded-full"
            aria-pressed={activeFilter === category}
            aria-label={`${t.misc.filterBy} ${category}`}
          >
            <Badge
              className={`px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-muted text-muted-foreground hover:bg-cyan-100 dark:hover:bg-cyan-950 hover:text-cyan-700 dark:hover:text-cyan-300"
              }`}
            >
              {category}
              {activeFilter === category && (
                <motion.span
                  layoutId="activeFilterIndicator"
                  className="ml-2 w-2 h-2 rounded-full bg-white inline-block"
                  aria-hidden="true"
                />
              )}
            </Badge>
          </motion.button>
        ))}
      </div>

      {/* Indicateur de résultats */}
      {localSearch && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-sm text-muted-foreground"
          aria-live="polite"
        >
          {t.misc.search} : &quot;{localSearch}&quot;
        </motion.p>
      )}
    </div>
  )
}
