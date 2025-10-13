"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLoading ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => {
        if (!isLoading) {
          document.body.style.overflow = "unset"
        }
      }}
    >
      <div className="relative">
        {/* Logo animé */}
        <motion.div
          className="w-24 h-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl shadow-2xl flex items-center justify-center"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-white font-bold text-4xl font-poppins">TB</span>
        </motion.div>

        {/* Cercles animés */}
        <motion.div
          className="absolute inset-0 border-4 border-emerald-500 rounded-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        
        {/* Texte de chargement */}
        <motion.p
          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-sm font-medium text-muted-foreground whitespace-nowrap"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Chargement...
        </motion.p>
      </div>
    </motion.div>
  )
}
