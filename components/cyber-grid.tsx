"use client"

import { motion } from "framer-motion"

export function CyberGrid() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Horizontal lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 md:opacity-20 dark:md:opacity-30 dark:opacity-15">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-cyan-500"
            />
          </pattern>
          
          <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Animated scan lines - désactivé sur mobile */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent h-32 hidden md:block"
        animate={{
          y: ["-10%", "110%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Corner brackets - top left - plus petits sur mobile */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 w-8 h-8 md:w-16 md:h-16 border-t-2 border-l-2 border-cyan-500/50" />
      {/* Corner brackets - top right */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 w-8 h-8 md:w-16 md:h-16 border-t-2 border-r-2 border-cyan-500/50" />
      {/* Corner brackets - bottom left */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-8 h-8 md:w-16 md:h-16 border-b-2 border-l-2 border-cyan-500/50" />
      {/* Corner brackets - bottom right */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-8 h-8 md:w-16 md:h-16 border-b-2 border-r-2 border-cyan-500/50" />

      {/* Floating hexagons - masqués sur mobile */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-24 h-24 hidden md:block"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <polygon
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-500"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-32 h-32 hidden md:block"
        animate={{
          rotate: -360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <polygon
            points="50 1 95 25 95 75 50 99 5 75 5 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-cyan-500"
          />
        </svg>
      </motion.div>
    </div>
  )
}
