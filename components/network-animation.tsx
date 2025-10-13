"use client"

import { motion } from "framer-motion"
import { Shield, Lock, Key, Database, Server, Wifi, Terminal, Code } from "lucide-react"

const nodes = [
  { id: 1, icon: Shield, x: 20, y: 30, label: "Firewall" },
  { id: 2, icon: Lock, x: 50, y: 20, label: "Encryption" },
  { id: 3, icon: Server, x: 80, y: 30, label: "Server" },
  { id: 4, icon: Database, x: 35, y: 60, label: "Database" },
  { id: 5, icon: Wifi, x: 65, y: 60, label: "Network" },
  { id: 6, icon: Terminal, x: 50, y: 80, label: "Terminal" },
]

const connections = [
  [1, 2], [2, 3], [1, 4], [2, 5], [3, 5], [4, 6], [5, 6]
]

export function NetworkAnimation() {
  return (
    <div className="relative w-full h-[500px] my-16 rounded-2xl bg-gradient-to-br from-black/40 to-cyan-900/20 backdrop-blur-sm border border-cyan-500/20 overflow-hidden shadow-2xl shadow-cyan-500/10">
      <svg className="absolute inset-0 w-full h-full">
        {connections.map(([start, end], index) => {
          const startNode = nodes.find(n => n.id === start)
          const endNode = nodes.find(n => n.id === end)
          if (!startNode || !endNode) return null

          return (
            <g key={index}>
              <motion.line
                x1={`${startNode.x}%`}
                y1={`${startNode.y}%`}
                x2={`${endNode.x}%`}
                y2={`${endNode.y}%`}
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  delay: index * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              {/* Animated packet */}
              <motion.circle
                r="4"
                fill="#00d4ff"
                initial={{ 
                  cx: `${startNode.x}%`, 
                  cy: `${startNode.y}%` 
                }}
                animate={{
                  cx: [`${startNode.x}%`, `${endNode.x}%`, `${startNode.x}%`],
                  cy: [`${startNode.y}%`, `${endNode.y}%`, `${startNode.y}%`],
                }}
                transition={{
                  duration: 3,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </motion.circle>
            </g>
          )
        })}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0891b2" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{ 
            left: `${node.x}%`, 
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            delay: index * 0.15,
            type: "spring",
            stiffness: 200 
          }}
        >
          <motion.div
            className="relative group cursor-pointer"
            whileHover={{ scale: 1.2 }}
          >
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
            
            {/* Node */}
            <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/50">
              <node.icon className="w-8 h-8 text-white" />
            </div>

            {/* Label */}
            <motion.div
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 bg-black/80 rounded text-xs text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity border border-cyan-500/30"
            >
              {node.label}
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Scan line */}
      <motion.div
        className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        animate={{
          y: ["0%", "100%"],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
