"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import type React from "react" // Added import for React

const AudioContext = createContext<{
  isPlaying: boolean
  toggleAudio: () => void
}>({
  isPlaying: false,
  toggleAudio: () => {},
})

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audioElement = new Audio(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brrr_skibidi_dop_dop-02DEHQR7Qp4kwB8c5oMvvMWHXtXD5h.mp3",
    )
    audioElement.loop = true
    setAudio(audioElement)

    return () => {
      audioElement.pause()
      audioElement.src = ""
    }
  }, [])

  const toggleAudio = () => {
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <AudioContext.Provider value={{ isPlaying, toggleAudio }}>
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleAudio}
          className="bg-green-500 p-3 rounded-full neon-box hover:bg-green-400 transition-all duration-300"
        >
          {isPlaying ? <Volume2 className="w-6 h-6 text-black" /> : <VolumeX className="w-6 h-6 text-black" />}
        </button>
      </div>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => useContext(AudioContext)

