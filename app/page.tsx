"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"

export default function StartPage() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <motion.h1
        className="text-6xl md:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        BRAINROT
      </motion.h1>
      <motion.div
        className="relative w-64 h-64 md:w-96 md:h-96 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6LehFbIA4oCPYMfd0Dw03eHSmqxny0.png"
          alt="Emerald City Rizzverse"
          fill
          className="object-contain"
        />
      </motion.div>
      <motion.button
        onClick={() => router.push("/quiz/1")}
        className="px-8 py-4 text-xl rounded-lg neon-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        START QUIZ
      </motion.button>
    </div>
  )
}

