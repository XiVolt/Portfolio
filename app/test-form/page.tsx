"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ParticlesBackground } from "@/components/particles-background"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TestForm() {
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("Envoi en cours...")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/xovwkvdp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setStatus("✅ Message envoyé avec succès !")
        form.reset()
      } else {
        setStatus("❌ Erreur lors de l'envoi")
      }
    } catch (error) {
      setStatus("❌ Erreur réseau")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
      <ParticlesBackground id="tsparticles-test-form" />
      
      {/* Header */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-sm border-b border-border z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au portfolio
          </Link>
          <ThemeToggle />
        </div>
      </nav>
      
      <div className="min-h-screen flex items-center justify-center p-4 pt-24 relative z-10">
      <div className="bg-card p-8 rounded-lg shadow-lg max-w-md w-full border border-border">
        <h1 className="text-2xl font-bold mb-6">Test Formspree</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border border-input bg-background rounded-md"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-input bg-background rounded-md"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 border border-input bg-background rounded-md"
              placeholder="Message de test"
            />
          </div>

          <Button type="submit" className="w-full">
            Envoyer le test
          </Button>
        </form>

        {status && (
          <div className="mt-4 p-3 bg-muted rounded-md">
            <p className="text-sm">{status}</p>
          </div>
        )}

        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            <strong>ID Formspree :</strong> xovwkvdp
          </p>
          <p>
            <strong>URL :</strong> https://formspree.io/f/xovwkvdp
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
