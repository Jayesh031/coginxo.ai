"use client"
import React from "react"
import { X, Dna, ShieldCheck, Zap, Microscope } from "lucide-react"
import GsapModalWrapper from "./GsapModalWrapper"

const DNAModalContent = ({ handleClose }) => {
  const dnaPillars = [
    {
      title: "Innovation",
      icon: <Microscope className="w-8 h-8 text-white" />,
      desc: "We don't just follow trends; we write the code that sets them.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "Ethics",
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      desc: "Intelligence without conscience is a glitch. We build responsible AI.",
      gradient: "from-emerald-400 to-green-500",
    },
    {
      title: "Agility",
      icon: <Zap className="w-8 h-8 text-white" />,
      desc: "Like a neural network, we adapt, learn, and optimize in real-time.",
      gradient: "from-purple-400 to-pink-500",
    },
    {
      title: "Precision",
      icon: <Dna className="w-8 h-8 text-white" />,
      desc: "Zero tolerance for error. Our code is as exact as biology itself.",
      gradient: "from-orange-400 to-red-500",
    },
  ]

  return (
    <div className="relative w-full max-w-4xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/20 dark:border-slate-700 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
      <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <button
        onClick={handleClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-500 dark:text-slate-400 z-10"
      >
        <X size={20} />
      </button>

      <div className="text-center mb-12 relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          The Cognixo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">DNA</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-lg">
          The 4 nucleotides that make up our digital genetic code.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {dnaPillars.map((item, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-2xl bg-slate-50/50 dark:bg-slate-800/50 p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${item.gradient} opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity`} />
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 shrink-0 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function DNAModal({ isOpen, onClose }) {
  return (
    <GsapModalWrapper isOpen={isOpen} onClose={onClose}>
      <DNAModalContent />
    </GsapModalWrapper>
  )
}