"use client"
import React from "react"
import { X, Linkedin, Twitter, Github } from "lucide-react"
import GsapModalWrapper from "./GsapModalWrapper"

const TeamModalContent = ({ handleClose }) => {
  const team = [
    {
      name: "Sarah Chen",
      post: "Founder & Architect",
      responsibility: "Leading the vision for Cognitive Automation.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "David Miller",
      post: "Head of AI Research",
      responsibility: "Spearheading LLM fine-tuning methodologies.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Elena Rodriguez",
      post: "Lead Data Scientist",
      responsibility: "Transforming raw data into predictive models.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "James Kim",
      post: "VP of Engineering",
      responsibility: "Architecting scalable cloud infrastructure.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="relative w-full max-h-[85vh] overflow-y-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-white/20 dark:border-slate-700 rounded-3xl shadow-2xl custom-scrollbar">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="sticky top-4 right-4 ml-auto block p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-slate-500 dark:text-slate-400 z-50 mb-2"
      >
        <X size={20} />
      </button>

      <div className="p-8 md:p-10 pt-0">
        {/* Header */}
        <div className="text-center mb-10 relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-3">
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Architects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            The visionaries designing the intelligence of tomorrow.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:bg-white/80 dark:hover:bg-slate-800/80 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="relative shrink-0">
                <div className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity`} />
                <img
                  src={member.image}
                  alt={member.name}
                  className="relative w-24 h-24 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-lg"
                />
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className={`text-sm font-bold bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-2`}>
                  {member.post}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {member.responsibility}
                </p>
                <div className="flex justify-center sm:justify-start gap-3">
                  {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <button key={i} className="p-1.5 rounded-lg text-slate-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all">
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Export Wrapper
export default function TeamModal({ isOpen, onClose }) {
  return (
    <GsapModalWrapper isOpen={isOpen} onClose={onClose}>
      <TeamModalContent />
    </GsapModalWrapper>
  )
}