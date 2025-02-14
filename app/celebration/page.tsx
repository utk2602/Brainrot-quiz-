"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"

export default function CelebrationPage() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    setShow(true)
    const duration = 15 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: any = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      )
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      )
    }, 250)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl emerald-text mb-8">CERTIFIED BRAINROT</h1>
        <div className="relative w-64 h-64 md:w-96 md:h-96 mb-8 mx-auto">
          <Image
            src="/emeraldcity.jpg"
            alt="Emerald City Rizzverse"
            fill
            className="object-contain"
          />
        </div>
        <motion.p
          className="text-2xl md:text-4xl neon-text mb-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          You are cordially invited to
        </motion.p>
        <motion.h2
          className="text-3xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          EMERALD CITY RIZZVERSE
        </motion.h2>
        <motion.div
          className="mt-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <p className="text-xl text-cyan-400 mb-4">Your Brainrot Level:</p>
          <div className="w-full bg-gray-700 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 h-4 rounded-full"
              style={{ width: "100%" }}
            ></div>
          </div>
          <p className="text-xl text-cyan-400 mt-2">100% - Ultimate Brainrot Achieved!</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
