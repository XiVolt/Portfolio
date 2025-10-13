"use client"

import { motion } from "framer-motion"

export function Logo() {
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 rounded-xl shadow-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
        <div className="relative w-full h-full flex items-center justify-center">
          <span className="text-white font-bold text-xl font-poppins tracking-tight">
            TB
          </span>
        </div>
      </div>
      <motion.div
        className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
