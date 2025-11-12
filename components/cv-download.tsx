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
    link.href = "/Tristan_Bras_CV_Alternance.pdf" 
    link.download = "CV-Tristan-Bras-BUT-Informatique.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } 

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
      <Button
        onClick={handleDownload}
        size="lg"
        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white shadow-lg w-full sm:w-auto"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
        >
          <Download className="w-5 h-5 mr-2" />
        </motion.div>
        <span className="hidden sm:inline">Télécharger mon CV</span>
        <span className="inline sm:hidden">Mon CV</span>
        <FileText className="w-4 h-4 ml-2" />
      </Button>
    </motion.div>
  )
}
