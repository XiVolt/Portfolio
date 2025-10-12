"use client"

import { useCallback, useEffect, useState } from "react"
import type { Container, Engine } from "tsparticles-engine"
import { useTheme } from "next-themes"

export function ParticlesBackground() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    const { loadSlim } = await import("tsparticles-slim")
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log("Particles loaded successfully!", container)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === "dark" || resolvedTheme === "dark"

  // Import dynamique du composant Particles
  const ParticlesComponent = require("react-tsparticles").default

  return (
    <ParticlesComponent
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
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
        fpsLimit: 120,
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
