"use client"
import React from "react"
import { motion } from "framer-motion"
import { X } from "lucide-react"

const DNAModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const dnaPillars = [
    {
      title: "Innovation",
      desc: "We don't just follow trends; we write the code that sets them.",
      gradient: "from-cyan-400 to-blue-500",
      letter: "I",
    },
    {
      title: "Ethics",
      desc: "Intelligence without conscience is a glitch. We build responsible AI.",
      gradient: "from-emerald-400 to-green-500",
      letter: "E",
    },
    {
      title: "Agility",
      desc: "Like a neural network, we adapt, learn, and optimize in real-time.",
      gradient: "from-purple-400 to-pink-500",
      letter: "A",
    },
    {
      title: "Precision",
      desc: "Zero tolerance for error. Our code is as exact as biology itself.",
      gradient: "from-orange-400 to-red-500",
      letter: "P",
    },
  ]

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
      />

      {/* Modal Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="relative w-full max-w-4xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/20 dark:border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500"
        >
          <X size={24} />
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            The Cognixo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              DNA
            </span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            The 4 nucleotides that make up our digital genetic code.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {dnaPillars.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`}
              />

              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                >
                  {item.letter}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default DNAModal