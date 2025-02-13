"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { questions } from "@/app/data/questions"

type ImageOption = { image: string; alt: string }

export default function QuizPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [questionId, setQuestionId] = useState(1)
  const [question, setQuestion] = useState(questions[0])
  const [selected, setSelected] = useState<string>("")

  useEffect(() => {
    const id = Number.parseInt(params.id)
    if (id >= 1 && id <= questions.length) {
      setQuestionId(id)
      setQuestion(questions[id - 1])
    } else {
      router.push("/")
    }
  }, [params.id, router])

  const handleNext = () => {
    if (questionId === questions.length) {
      router.push("/celebration")
    } else {
      router.push(`/quiz/${questionId + 1}`)
    }
  }

  const handleBack = () => {
    if (questionId > 1) {
      router.push(`/quiz/${questionId - 1}`)
    } else {
      router.push("/")
    }
  }

  if (!question) return null

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="w-full max-w-2xl">
        <motion.h2
          className="text-3xl neon-text mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Question {questionId}/{questions.length}
        </motion.h2>
        <motion.div
          className="bg-black bg-opacity-50 p-8 rounded-lg neon-box mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl text-cyan-400 mb-6 text-center">{question.question}</h3>
          <div className={`grid ${question.type === "image" ? "grid-cols-2" : "grid-cols-1"} gap-4`}>
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => setSelected(typeof option === "string" ? option : option.alt)}
                className={`p-4 rounded-lg text-lg transition-all duration-300
                          ${
                            selected === (typeof option === "string" ? option : option.alt)
                              ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                              : "bg-gray-800 text-cyan-400 hover:bg-gray-700"
                          }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {question.type === "image" ? (
                  <Image
                    src={(option as ImageOption).image || "/placeholder.svg"}
                    alt={(option as ImageOption).alt}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                ) : (
                  option
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
        <div className="flex justify-between">
          <motion.button
            onClick={handleBack}
            className="px-6 py-3 bg-gray-700 text-cyan-400 text-lg rounded-lg hover:bg-gray-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Back
          </motion.button>
          <motion.button
            onClick={handleNext}
            disabled={!selected}
            className={`px-6 py-3 text-lg rounded-lg transition-all duration-300
                      ${selected ? "neon-button" : "bg-gray-700 text-gray-400 cursor-not-allowed"}`}
            whileHover={selected ? { scale: 1.05 } : {}}
            whileTap={selected ? { scale: 0.95 } : {}}
          >
            {questionId === questions.length ? "Finish" : "Next"}
          </motion.button>
        </div>
      </div>
    </div>
  )
}

