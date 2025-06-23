"use client"

import { motion } from "framer-motion"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CVDownload() {
  const handleDownload = () => {
    if (typeof window !== "undefined" && window.trackCVDownload) {
      window.trackCVDownload()
    }

    const link = document.createElement("a")
    link.href = "/Tristan_Bras_CV.pdf" 
    link.download = "CV-Tristan-Bras-BUT-Informatique.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } 

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        onClick={handleDownload}
        size="lg"
        className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        >
          <Download className="w-5 h-5 mr-2" />
        </motion.div>
        Télécharger mon CV
        <FileText className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  )
}
