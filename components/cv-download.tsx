"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, FileText, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"

type CVLanguage = "fr" | "en"

const cvFiles: Record<CVLanguage, { file: string; name: string; label: string }> = {
  fr: {
    file: "/Tristan_Bras_CV_Alternance.pdf",
    name: "CV-Tristan-Bras-FR.pdf",
    label: "🇫🇷 Français",
  },
  en: {
    file: "/Tristan_Bras.pdf",
    name: "CV-Tristan-Bras-EN.pdf",
    label: "🇬🇧 English",
  },
}

export function CVDownload() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useLanguage()

  const handleDownload = (lang: CVLanguage) => {
    if (typeof window !== "undefined" && window.trackCVDownload) {
      window.trackCVDownload()
    }

    const cv = cvFiles[lang]
    const link = document.createElement("a")
    link.href = cv.file
    link.download = cv.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setIsOpen(false)
  }

  return (
    <div className="relative w-full sm:w-auto">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg w-full sm:w-auto group"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label={t.misc.downloadCV}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
          >
            <Download className="w-5 h-5 mr-2" aria-hidden="true" />
          </motion.div>
          <span className="hidden sm:inline">{t.misc.downloadCV}</span>
          <span className="inline sm:hidden">{t.misc.cv}</span>
          <ChevronDown
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay pour fermer le menu */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full left-0 right-0 sm:left-auto sm:right-0 mt-2 w-full sm:w-48 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden"
              role="listbox"
              aria-label="Choisir la langue du CV"
            >
              {(Object.keys(cvFiles) as CVLanguage[]).map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => handleDownload(lang)}
                  className="w-full px-4 py-3 text-left hover:bg-accent flex items-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
                  whileHover={{ x: 5 }}
                  role="option"
                >
                  <Globe className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  <span className="font-medium">{cvFiles[lang].label}</span>
                  <FileText className="w-4 h-4 ml-auto text-muted-foreground" aria-hidden="true" />
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
