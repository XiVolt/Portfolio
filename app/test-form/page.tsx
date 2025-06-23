"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6">Test Formspree</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Nom</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Votre nom"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="votre@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Message de test"
            />
          </div>

          <Button type="submit" className="w-full">
            Envoyer le test
          </Button>
        </form>

        {status && (
          <div className="mt-4 p-3 bg-gray-100 rounded-md">
            <p className="text-sm">{status}</p>
          </div>
        )}

        <div className="mt-6 text-sm text-gray-600">
          <p>
            <strong>ID Formspree :</strong> xovwkvdp
          </p>
          <p>
            <strong>URL :</strong> https://formspree.io/f/xovwkvdp
          </p>
        </div>
      </div>
    </div>
  )
}
