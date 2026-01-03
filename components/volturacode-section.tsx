"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Sparkles, Rocket, Wrench, Smartphone, TrendingUp } from "lucide-react"
import { useLanguage } from "./language-context"

export function VolturaCodeSection() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: t.volturacode.services.showcase,
      description: t.volturacode.services.showcaseDesc,
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t.volturacode.services.redesign,
      description: t.volturacode.services.redesignDesc,
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t.volturacode.services.seo,
      description: t.volturacode.services.seoDesc,
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: t.volturacode.services.maintenance,
      description: t.volturacode.services.maintenanceDesc,
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: t.volturacode.services.responsive,
      description: t.volturacode.services.responsiveDesc,
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: t.volturacode.services.hosting,
      description: t.volturacode.services.hostingDesc,
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
            className="mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <img 
              src="/Voltura.png" 
              alt="VolturaCode Logo" 
              className="h-24 mx-auto"
            />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.volturacode.title}
          </h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">VolturaCode</strong> {t.volturacode.description1}
            </p>
            <p>
              {t.volturacode.description2}
            </p>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium">
              {t.volturacode.objective}
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center items-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-10 py-7 text-xl shadow-xl"
              >
                <a href="https://voltura-code-site-u1zs.vercel.app" target="_blank" rel="noopener noreferrer">
                  <Rocket className="w-6 h-6 mr-2" />
                  {t.volturacode.discover}
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
          <h3 className="text-2xl font-bold text-center mb-8">{t.volturacode.myServices}</h3>
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
              <h3 className="text-2xl font-bold mb-4">{t.volturacode.myAchievements}</h3>
              <div className="flex justify-center mb-4">
                <Sparkles className="w-16 h-16 text-emerald-600" />
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                {t.volturacode.projectsInDevelopment}
              </p>
              <Badge className="bg-emerald-600 text-white">{t.volturacode.comingSoon}</Badge>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
