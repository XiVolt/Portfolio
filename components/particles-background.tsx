"use client"

import { useCallback, useState, useEffect } from "react"
import { useTheme } from "next-themes"

// Importation dynamique pour éviter les problèmes SSR
let Particles: any = null
let loadSlim: any = null

export function ParticlesBackground() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [particlesLoaded, setParticlesLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Chargement dynamique des modules particles
    Promise.all([
      import("react-tsparticles"),
      import("tsparticles-slim")
    ]).then(([particlesModule, slimModule]) => {
      Particles = particlesModule.default
      loadSlim = slimModule.loadSlim
      setParticlesLoaded(true)
    })
  }, [])

  const particlesInit = useCallback(async (engine: any) => {
    if (loadSlim) {
      await loadSlim(engine)
    }
  }, [])

  if (!mounted || !particlesLoaded || !Particles) {
    return null
  }

  const isDark = theme === "dark" || resolvedTheme === "dark"

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "grab",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            grab: {
              distance: 140,
              links: {
                opacity: 0.5,
              },
            },
          },
        },
        particles: {
          color: {
            value: isDark ? "#ffffff" : "#000000",
          },
          links: {
            color: isDark ? "#ffffff" : "#000000",
            distance: 150,
            enable: true,
            opacity: isDark ? 0.2 : 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: isDark ? 0.3 : 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  )
}
