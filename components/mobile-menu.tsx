"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

interface MobileMenuProps {
  sections: string[]
  activeSection: string
  onSectionClick: (section: string) => void
}

export function MobileMenu({ sections, activeSection, onSectionClick }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sectionNames: Record<string, string> = {
    hero: "Accueil",
    volturacode: "VolturaCode",
    alternance: "Alternance",
    about: "À propos",
    projects: "Projets",
    skills: "Compétences",
    contact: "Contact",
  }

  const handleSectionClick = (section: string) => {
    onSectionClick(section)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-emerald-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Drawer */}
            <motion.div
              className="fixed top-16 right-0 bottom-0 w-64 bg-background border-l border-border shadow-2xl z-50 overflow-y-auto"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-6 space-y-6">
                {/* Theme Toggle */}
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-sm font-medium text-muted-foreground">Thème</span>
                  <ThemeToggle />
                </div>

                {/* Navigation Links */}
                <nav className="space-y-2">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section}
                      onClick={() => handleSectionClick(section)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                        activeSection === section
                          ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg"
                          : "text-muted-foreground hover:bg-accent hover:text-foreground"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {sectionNames[section]}
                    </motion.button>
                  ))}
                </nav>

                {/* Decorative Element */}
                <motion.div
                  className="absolute bottom-6 left-6 right-6 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 rounded-full"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 100%",
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
