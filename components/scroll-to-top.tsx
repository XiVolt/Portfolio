"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "lucide-react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 p-3 bg-gradient-to-br from-emerald-500 to-teal-600 text-white rounded-full shadow-2xl hover:shadow-emerald-500/50 transition-all group"
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <motion.div
            animate={{ y: [-2, 2, -2] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.div>
          
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-emerald-400"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
