"use client"

import { useEffect, useState } from "react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface StatCardProps {
  value: number
  label: string
  suffix?: string
  icon: React.ReactNode
  duration?: number
}

function StatCard({ value, label, suffix = "", icon, duration = 2 }: StatCardProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * value))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <motion.div
      ref={ref}
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-lg rounded-2xl p-6 border-2 border-border group-hover:border-emerald-500 transition-all shadow-lg group-hover:shadow-emerald-500/20">
        {/* Icon */}
        <motion.div
          className="mb-4 text-emerald-600 dark:text-emerald-400"
          whileHover={{ rotate: 360, scale: 1.2 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>

        {/* Count */}
        <motion.div
          className="text-4xl font-bold font-poppins mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.5, delay: duration }}
        >
          {count}
          {suffix}
        </motion.div>

        {/* Label */}
        <div className="text-sm text-muted-foreground font-medium">{label}</div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/10 rounded-2xl transition-all duration-300" />
      </div>
    </motion.div>
  )
}

interface StatsGridProps {
  stats: {
    value: number
    label: string
    suffix?: string
    icon: React.ReactNode
  }[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 my-12">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} duration={1.5 + index * 0.2} />
      ))}
    </div>
  )
}
