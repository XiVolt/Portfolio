"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

interface SuccessConfettiProps {
  show: boolean
}

export function SuccessConfetti({ show }: SuccessConfettiProps) {
  if (!show) return null

  const confettiColors = [
    "#10b981", // emerald-600
    "#14b8a6", // teal-600
    "#06b6d4", // cyan-600
    "#8b5cf6", // violet-600
    "#f59e0b", // amber-600
  ]

  const confettiCount = 50

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      {Array.from({ length: confettiCount }).map((_, i) => {
        const color = confettiColors[Math.floor(Math.random() * confettiColors.length)]
        const startX = Math.random() * 100
        const endX = startX + (Math.random() - 0.5) * 100
        const duration = 1 + Math.random() * 1.5
        const delay = Math.random() * 0.5
        const rotation = Math.random() * 720 - 360

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${startX}%`,
              top: "-10px",
              width: "10px",
              height: "10px",
              backgroundColor: color,
              borderRadius: Math.random() > 0.5 ? "50%" : "0",
            }}
            initial={{
              y: 0,
              x: 0,
              opacity: 1,
              rotate: 0,
            }}
            animate={{
              y: window.innerHeight + 100,
              x: endX - startX + "%",
              opacity: 0,
              rotate: rotation,
            }}
            transition={{
              duration,
              delay,
              ease: "easeOut",
            }}
          />
        )
      })}
    </div>
  )
}
