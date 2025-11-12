"use client"

import { useState, useEffect } from "react"
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

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSectionClick = (section: string) => {
    onSectionClick(section)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden relative z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-cyan-600 transition-colors relative z-[60]"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[55]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Drawer */}
            <motion.div
              className="fixed top-16 right-0 w-64 bg-background border-l border-b border-border shadow-2xl z-[60] rounded-bl-lg"
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="p-4 flex flex-col">
                {/* Theme Toggle */}
                <div className="flex justify-between items-center pb-3 mb-3 border-b border-border">
                  <span className="text-sm font-medium text-muted-foreground">Thème</span>
                  <ThemeToggle />
                </div>

                {/* Navigation Links */}
                <nav className="space-y-1.5">
                  {sections.map((section, index) => (
                    <motion.button
                      key={section}
                      onClick={() => handleSectionClick(section)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all text-sm ${
                        activeSection === section
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg"
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
                  className="mt-3 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-full"
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
