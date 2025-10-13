"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"
import { useState } from "react"

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={scrollToContact}
        className="group relative w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-full shadow-2xl flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            "0 10px 30px rgba(16, 185, 129, 0.3)",
            "0 10px 40px rgba(16, 185, 129, 0.5)",
            "0 10px 30px rgba(16, 185, 129, 0.3)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <MessageCircle className="w-7 h-7" />
        
        {/* Tooltip */}
        <motion.div
          className="absolute right-full mr-4 px-4 py-2 bg-background border border-border rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: 10 }}
          whileHover={{ x: 0 }}
        >
          <span className="text-sm font-medium">Contactez-moi !</span>
        </motion.div>

        {/* Ping effect */}
        <motion.span
          className="absolute inset-0 rounded-full bg-emerald-500"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.button>
    </div>
  )
}
