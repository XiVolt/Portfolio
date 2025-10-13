"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Shield, Zap, AlertTriangle, CheckCircle } from "lucide-react"

interface Attack {
  id: number
  x: number
  type: "malware" | "ddos" | "phishing"
  speed: number
}

const attackTypes = {
  malware: { icon: "🦠", color: "from-red-500 to-pink-500", name: "Malware" },
  ddos: { icon: "⚡", color: "from-yellow-500 to-orange-500", name: "DDoS" },
  phishing: { icon: "🎣", color: "from-purple-500 to-pink-500", name: "Phishing" },
}

export function FirewallDefenseGame() {
  const [attacks, setAttacks] = useState<Attack[]>([])
  const [score, setScore] = useState(0)
  const [blocked, setBlocked] = useState(0)
  const [missed, setMissed] = useState(0)
  const [gameActive, setGameActive] = useState(false)
  const [lastBlock, setLastBlock] = useState<string | null>(null)

  useEffect(() => {
    if (!gameActive) return

    const spawnInterval = setInterval(() => {
      const newAttack: Attack = {
        id: Date.now(),
        x: Math.random() * 80 + 10, // 10-90%
        type: ["malware", "ddos", "phishing"][Math.floor(Math.random() * 3)] as Attack["type"],
        speed: 3 + Math.random() * 2, // 3-5 seconds
      }
      setAttacks(prev => [...prev, newAttack])
    }, 1500)

    return () => clearInterval(spawnInterval)
  }, [gameActive])

  useEffect(() => {
    if (!gameActive) return

    const checkInterval = setInterval(() => {
      setAttacks(prev => {
        const filtered = prev.filter(attack => {
          const element = document.getElementById(`attack-${attack.id}`)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.bottom >= window.innerHeight - 100) {
              setMissed(m => m + 1)
              return false
            }
          }
          return true
        })
        return filtered
      })
    }, 100)

    return () => clearInterval(checkInterval)
  }, [gameActive])

  const blockAttack = (attack: Attack) => {
    setAttacks(prev => prev.filter(a => a.id !== attack.id))
    setBlocked(b => b + 1)
    setScore(s => s + 10)
    setLastBlock(attackTypes[attack.type].name)
    setTimeout(() => setLastBlock(null), 1000)
  }

  const startGame = () => {
    setGameActive(true)
    setScore(0)
    setBlocked(0)
    setMissed(0)
    setAttacks([])
  }

  const stopGame = () => {
    setGameActive(false)
    setAttacks([])
  }

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto mt-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
    >
      {/* Game Header */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 backdrop-blur-sm rounded-t-lg border border-cyan-500/30 border-b-0 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="w-6 h-6 text-cyan-400" />
            <h3 className="font-poppins font-bold text-lg text-cyan-400">🛡️ Firewall Defense</h3>
          </div>
          
          {!gameActive ? (
            <motion.button
              onClick={startGame}
              className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ▶ Démarrer
            </motion.button>
          ) : (
            <motion.button
              onClick={stopGame}
              className="px-6 py-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-lg font-semibold shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ⏸ Stop
            </motion.button>
          )}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-black/40 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-cyan-400">{score}</div>
            <div className="text-xs text-gray-400">Score</div>
          </div>
          <div className="bg-black/40 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-green-400">{blocked}</div>
            <div className="text-xs text-gray-400">Bloquées</div>
          </div>
          <div className="bg-black/40 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-red-400">{missed}</div>
            <div className="text-xs text-gray-400">Passées</div>
          </div>
        </div>
      </div>

      {/* Game Area */}
      <div className="relative h-96 bg-black/90 backdrop-blur-sm rounded-b-lg border border-cyan-500/30 border-t-0 overflow-hidden">
        {!gameActive && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Shield className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
              <p className="text-cyan-400 font-semibold text-lg mb-2">Protégez le réseau !</p>
              <p className="text-gray-400 text-sm">Cliquez sur les attaques pour les bloquer</p>
            </div>
          </div>
        )}

        {/* Firewall line at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ backgroundSize: "200% 100%" }}
        />

        {/* Attacks */}
        <AnimatePresence>
          {attacks.map(attack => {
            const attackStyle = attackTypes[attack.type]
            return (
              <motion.button
                key={attack.id}
                id={`attack-${attack.id}`}
                className={`absolute cursor-pointer hover:scale-110 transition-transform`}
                style={{ left: `${attack.x}%`, top: 0 }}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 350, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{
                  duration: attack.speed,
                  ease: "linear",
                }}
                onClick={() => blockAttack(attack)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <motion.div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${attackStyle.color} flex items-center justify-center text-2xl shadow-lg`}
                  animate={{
                    boxShadow: [
                      `0 0 10px rgba(239, 68, 68, 0.5)`,
                      `0 0 20px rgba(239, 68, 68, 0.8)`,
                      `0 0 10px rgba(239, 68, 68, 0.5)`,
                    ],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  {attackStyle.icon}
                </motion.div>
              </motion.button>
            )
          })}
        </AnimatePresence>

        {/* Last Block Notification */}
        <AnimatePresence>
          {lastBlock && (
            <motion.div
              className="absolute top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg z-50"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              <CheckCircle className="w-5 h-5 inline mr-2" />
              {lastBlock} Bloqué !
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Instructions */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>🎯 Cliquez sur les attaques avant qu'elles n'atteignent le firewall</p>
      </div>
    </motion.div>
  )
}
