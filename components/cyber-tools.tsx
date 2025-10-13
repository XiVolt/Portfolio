"use client"

import { motion } from "framer-motion"
import { Shield, Terminal, Network, Lock, Eye, Zap, Wifi, Database } from "lucide-react"
import { Card } from "@/components/ui/card"

const cyberTools = [
  { name: "Wireshark", icon: Network, category: "Network Analysis", color: "from-blue-500 to-cyan-500" },
  { name: "Metasploit", icon: Terminal, category: "Penetration Testing", color: "from-purple-500 to-pink-500" },
  { name: "Nmap", icon: Wifi, category: "Network Scanner", color: "from-cyan-500 to-teal-500" },
  { name: "Burp Suite", icon: Eye, category: "Web Security", color: "from-orange-500 to-red-500" },
  { name: "Kali Linux", icon: Shield, category: "Security OS", color: "from-green-500 to-emerald-500" },
  { name: "John the Ripper", icon: Lock, category: "Password Cracking", color: "from-yellow-500 to-orange-500" },
  { name: "Snort", icon: Zap, category: "IDS/IPS", color: "from-red-500 to-pink-500" },
  { name: "SQLMap", icon: Database, category: "SQL Injection", color: "from-indigo-500 to-purple-500" },
]

export function CyberToolsShowcase() {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 font-poppins">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Arsenal Cybersécurité
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrise des outils professionnels de sécurité informatique et d'analyse réseau
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {cyberTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="relative overflow-hidden p-6 bg-card border-2 border-border hover:border-cyan-500 transition-all group cursor-pointer h-full">
                {/* Gradient glow */}
                <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tool.color} p-3 shadow-lg`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <tool.icon className="w-full h-full text-white" />
                  </motion.div>

                  {/* Name */}
                  <h3 className="font-semibold text-lg font-poppins">{tool.name}</h3>

                  {/* Category */}
                  <span className="text-xs text-muted-foreground px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                    {tool.category}
                  </span>
                </div>

                {/* Scan line effect */}
                <motion.div
                  className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    y: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional certifications preview */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 font-poppins">Certifications Visées</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["CEH", "Security+", "OSCP", "CCNA", "Network+"].map((cert, index) => (
              <motion.div
                key={cert}
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 backdrop-blur-sm"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-semibold text-cyan-400 font-mono">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
