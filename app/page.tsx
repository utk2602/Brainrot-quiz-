"use client"

import { useRouter } from "next/navigation"
import Image from "next/image"
import { useAudio } from "@/components/audio-provider"
import { Volume2 } from "lucide-react"

export default function StartPage() {
  const router = useRouter()
  const { isPlaying, toggleAudio } = useAudio()

  const handleStart = () => {
    if (!isPlaying) {
      toggleAudio()
    }
    router.push("/quiz/1")
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-4">
      {/* Title */}
      <h1 className="text-4xl sm:text-6xl md:text-8xl text-green-400 neon-text mb-6 sm:mb-8 md:mb-12 text-center">
        BRAINROT
      </h1>

      {/* Image */}
      <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 mb-6 sm:mb-8 md:mb-12">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6LehFbIA4oCPYMfd0Dw03eHSmqxny0.png"
          alt="Emerald City Rizzverse"
          fill
          className="object-contain"
        />
      </div>

      {/* Volume Icon */}
      {!isPlaying && (
        <div className="flex items-center gap-2 mb-4 sm:mb-6 text-green-400 animate-pulse">
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-sm sm:text-base">Click START for full experience</span>
        </div>
      )}

      {/* Start Quiz Button */}
      <button
        onClick={handleStart}
        className="px-6 py-3 sm:px-8 sm:py-4 bg-green-500 text-black text-lg sm:text-xl rounded-lg neon-box 
                 hover:bg-green-400 transition-all duration-300 animate-pulse"
      >
        START QUIZ
      </button>
    </div>
  )
}
