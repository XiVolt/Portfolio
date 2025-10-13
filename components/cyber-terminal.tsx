"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal as TerminalIcon } from "lucide-react"

const commands = [
  { cmd: "$ whoami", output: "tristan_bras@cybersec" },
  { cmd: "$ ls -la /skills", output: "drwxr-xr-x  cybersecurity  networks  pentest" },
  { cmd: "$ cat specializations.txt", output: "Cybersécurité • Réseaux • Pentest" },
  { cmd: "$ nmap -sV localhost", output: "Open ports: 22/SSH, 80/HTTP, 443/HTTPS, 3306/MySQL" },
  { cmd: "$ cat motto.txt", output: "Secure by design, Protected by code 🔐" },
]

export function CyberTerminal() {
  const [currentLine, setCurrentLine] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    if (currentLine < commands.length) {
      const timer = setTimeout(() => {
        setIsTyping(false)
        setTimeout(() => {
          if (currentLine < commands.length - 1) {
            setCurrentLine(currentLine + 1)
            setIsTyping(true)
          }
        }, 1500)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  return (
    <motion.div
      className="w-full max-w-2xl mx-auto mt-8 bg-black/90 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-b border-cyan-500/30">
        <TerminalIcon className="w-4 h-4 text-cyan-400" />
        <span className="text-xs text-cyan-400 font-mono">terminal@cyber-portfolio</span>
        <div className="ml-auto flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-4 font-mono text-sm space-y-2 h-48 overflow-y-auto">
        {commands.slice(0, currentLine + 1).map((line, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">{line.cmd}</span>
              {index === currentLine && isTyping && (
                <motion.span
                  className="inline-block w-2 h-4 bg-cyan-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              )}
            </div>
            {(!isTyping || index < currentLine) && (
              <motion.div
                className="text-gray-400 pl-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {line.output}
              </motion.div>
            )}
          </div>
        ))}
        {currentLine === commands.length - 1 && !isTyping && (
          <motion.div
            className="flex items-center gap-2 text-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            $ <motion.span
              className="inline-block w-2 h-4 bg-cyan-400"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
