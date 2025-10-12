"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Sparkles, Rocket, Wrench, Smartphone, TrendingUp } from "lucide-react"
import Link from "next/link"

export function VolturaCodeSection() {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Création de sites vitrines",
      description: "Sites web modernes et professionnels pour présenter votre activité",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Refonte et modernisation",
      description: "Donnez une nouvelle vie à votre site existant",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Optimisation SEO & performance",
      description: "Améliorez votre visibilité et vitesse de chargement",
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Maintenance et mises à jour",
      description: "Gardez votre site à jour et sécurisé",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Intégration responsive mobile",
      description: "Sites parfaitement adaptés à tous les écrans",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Hébergement & déploiement",
      description: "Mise en ligne rapide et professionnelle",
    },
  ]

  return (
    <section id="volturacode" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Logo/Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-emerald-600 font-bold text-xl">VC</span>
            </div>
            <span className="text-white font-bold text-2xl">VolturaCode</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon entreprise de création de sites web
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">VolturaCode</strong> est ma micro-entreprise de création de sites
              web modernes, performants et adaptés à chaque besoin.
            </p>
            <p>
              J'accompagne les particuliers, indépendants et petites entreprises dans leur présence en ligne :
              conception, design, développement, optimisation SEO et maintenance.
            </p>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">
              Mon objectif : offrir des solutions sur mesure qui allient esthétique, performance et accessibilité.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg shadow-lg"
              >
                <a href="mailto:tristanbras34@gmail.com?subject=Demande de devis VolturaCode">
                  <Rocket className="w-5 h-5 mr-2" />
                  Demander un devis
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-950 px-8 py-6 text-lg"
              >
                <a href="mailto:tristanbras34@gmail.com">
                  Me contacter
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Mes services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-emerald-500">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mb-4 text-white">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Réalisations VolturaCode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <Card className="p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950 border-2 border-emerald-200 dark:border-emerald-800">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Mes réalisations VolturaCode</h3>
              <div className="flex justify-center mb-4">
                <Sparkles className="w-16 h-16 text-emerald-600" />
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                Projets clients en cours de développement
              </p>
              <Badge className="bg-emerald-600 text-white">Bientôt disponible</Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
