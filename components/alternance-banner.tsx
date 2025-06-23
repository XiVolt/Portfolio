"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, MapPin, GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AlternanceBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <Card className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-8 border-0 shadow-2xl">
        <div className="text-center mb-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-4"
          >
            <GraduationCap className="w-5 h-5 mr-2" />
            <span className="font-semibold">RECHERCHE ALTERNANCE</span>
          </motion.div> 
          <h2 className="text-3xl font-bold mb-2">Alternance BUT Informatique - 18 mois</h2>
          <p className="text-emerald-100 text-lg">Étudiant motivé recherche entreprise pour alternance longue durée</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <Calendar className="w-8 h-8 mb-2 text-emerald-200" />
            <h3 className="font-semibold mb-1">Disponibilité</h3>
            <p className="text-emerald-100 text-sm">fin Janvier 2026 - Juin/Juillet  2027</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center"
          >
            <Clock className="w-8 h-8 mb-2 text-emerald-200" />
            <h3 className="font-semibold mb-1">Rythme</h3>
            <p className="text-emerald-100 text-sm">1 ou 2 semaine en entreprise / 1 ou 2 semaine école  (le caldendrier de formation sera transmis par l'école )</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col items-center"
          >
            <MapPin className="w-8 h-8 mb-2 text-emerald-200" />
            <h3 className="font-semibold mb-1">Zone géographique</h3>
            <p className="text-emerald-100 text-sm">Lens, Lille, Arras et environs</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-emerald-100 text-sm">
            💼 Recherche dans les domaines : Réseau, Cybersécurité (Obligation d'avois du code/Development durant l'alternance a la demande de l'école)
          </p>
        </motion.div>
      </Card>
    </motion.div>
  )
}
