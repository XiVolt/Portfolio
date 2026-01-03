"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe } from 'lucide-react'
import { useLanguage } from './language-context'
import { Locale, localeNames, localeFlags } from '@/lib/translations'

export function LanguageSelector() {
  const { locale, setLocale } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages: Locale[] = ['fr', 'en', 'es', 'de']

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/80 border border-border/50 hover:bg-accent hover:border-cyan-500/50 transition-all duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Changer de langue"
      >
        <Globe className="w-4 h-4 text-cyan-600" />
        <span className="text-sm font-medium">{localeFlags[locale]}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay pour fermer le menu */}
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-40 bg-background border border-border rounded-lg shadow-xl z-50 overflow-hidden"
            >
              {languages.map((lang) => (
                <motion.button
                  key={lang}
                  onClick={() => {
                    setLocale(lang)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    locale === lang
                      ? 'bg-cyan-500/20 text-cyan-600 font-medium'
                      : 'hover:bg-accent text-foreground'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-lg">{localeFlags[lang]}</span>
                  <span>{localeNames[lang]}</span>
                  {locale === lang && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto text-cyan-500"
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

