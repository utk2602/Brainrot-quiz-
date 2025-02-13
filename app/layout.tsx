"use client"

import { Press_Start_2P } from "next/font/google"
import "./globals.css"
import type React from "react"

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
})



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.className} bg-gradient-to-br from-purple-900 via-black to-indigo-900 min-h-screen`}
      >
        <style jsx global>{`
          .neon-text {
            color: #fff;
            text-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff;
          }
          .neon-box {
            box-shadow: 0 0 5px #ff00ff, 0 0 10px #ff00ff, 0 0 15px #ff00ff, 0 0 20px #ff00ff;
          }
          .emerald-text {
            color: #50C878;
            text-shadow: 0 0 5px #50C878, 0 0 10px #50C878, 0 0 15px #50C878, 0 0 20px #50C878;
          }
          .neon-button {
            background: linear-gradient(45deg, #ff00ff, #00ffff);
            color: #000;
            transition: all 0.3s ease;
          }
          .neon-button:hover {
            background: linear-gradient(45deg, #00ffff, #ff00ff);
            box-shadow: 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff;
          }
        `}</style>
        {children}
      </body>
    </html>
  )
}



import './globals.css'