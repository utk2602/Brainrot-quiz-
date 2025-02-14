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
      <h1 className="text-6xl md:text-8xl text-green-400 neon-text mb-12 text-center">BRAINROT</h1>
      <div className="relative w-64 h-64 md:w-96 md:h-96 mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6LehFbIA4oCPYMfd0Dw03eHSmqxny0.png"
          alt="Emerald City Rizzverse"
          fill
          className="object-contain"
        />
      </div>
      {!isPlaying && (
        <div className="flex items-center gap-2 mb-6 text-green-400 animate-pulse">
          <Volume2 className="w-6 h-6" />
          <span>Click START for full experience</span>
        </div>
      )}
      <button
        onClick={handleStart}
        className="px-8 py-4 bg-green-500 text-black text-xl rounded-lg neon-box 
                 hover:bg-green-400 transition-all duration-300 animate-pulse"
      >
        START QUIZ
      </button>
    </div>
  )
}

