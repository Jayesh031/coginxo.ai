"use client"
import React, { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Share2, Code, Database, Braces, Terminal, Server, Cloud, Cpu, Bot } from "lucide-react"

export default function BlogPostUI({ post }) {
  const [isMounted, setIsMounted] = useState(false)
  const [iconPositions, setIconPositions] = useState([])

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // --- Consistent Icons & Colors ---
  const techIcons = [
    { icon: <Code size={20} />, color: "from-blue-400/20 to-blue-500/20 text-blue-600 dark:text-blue-400" },
    { icon: <Braces size={20} />, color: "from-purple-400/20 to-purple-500/20 text-purple-600 dark:text-purple-400" },
    { icon: <Database size={20} />, color: "from-emerald-400/20 to-emerald-500/20 text-emerald-600 dark:text-emerald-400" },
    { icon: <Terminal size={20} />, color: "from-slate-400/20 to-slate-500/20 text-slate-600 dark:text-slate-400" },
    { icon: <Server size={20} />, color: "from-orange-400/20 to-orange-500/20 text-orange-600 dark:text-orange-400" },
    { icon: <Cloud size={20} />, color: "from-sky-400/20 to-sky-500/20 text-sky-600 dark:text-sky-400" },
    { icon: <Cpu size={20} />, color: "from-rose-400/20 to-rose-500/20 text-rose-600 dark:text-rose-400" },
    { icon: <Bot size={20} />, color: "from-indigo-400/20 to-indigo-500/20 text-indigo-600 dark:text-indigo-400" },
  ]

  useEffect(() => {
    setIsMounted(true)
    const icons = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: techIcons[Math.floor(Math.random() * techIcons.length)],
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }))
    setIconPositions(icons)
  }, [])

  return (
    // 1. Matched Background Theme
    <div className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220] text-slate-900 dark:text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 origin-left z-[100]" style={{ scaleX }} />

      {/* Floating Background Elements (No Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[100px]" />

        {isMounted && iconPositions.map((pos) => (
          <motion.div
            key={pos.id}
            className={`absolute p-3 rounded-xl bg-gradient-to-br ${pos.icon.color} backdrop-blur-sm shadow-sm border border-white/20 dark:border-white/5`}
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{ y: [0, -50, 0], opacity: [0.6, 0.8, 0.6] }}
            transition={{ duration: pos.duration, repeat: Infinity, delay: pos.delay, ease: "easeInOut" }}
          >
            {pos.icon.icon}
          </motion.div>
        ))}
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 pt-24 pb-32 px-4 md:px-6">
        
        {/* Glass Card */}
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/80 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700/50 rounded-3xl shadow-2xl overflow-hidden"
        >
          {/* Header Image Area */}
          <div className="relative h-64 md:h-96 w-full group">
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
             <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-700 "
             />
             
             {/* Title Overlay */}
             <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow-lg">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-6 text-slate-200 text-sm font-medium">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 p-[2px]">
                                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-xs text-white font-bold">
                                    {post.author ? post.author.charAt(0) : "A"}
                                </div>
                            </div>
                            <span>{post.author}</span>
                        </div>
                        <span className="flex items-center gap-2"><Calendar size={14} className="text-cyan-400" /> {post.date}</span>
                        <span className="flex items-center gap-2"><Clock size={14} className="text-cyan-400" /> {post.readTime}</span>
                    </div>
                </motion.div>
             </div>
          </div>

          {/* Content Body */}
          <div className="p-8 md:p-16">
            <div className="prose dark:prose-invert prose-lg max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-p:leading-relaxed
                prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline
                prose-blockquote:border-l-blue-500 prose-blockquote:bg-blue-50 dark:prose-blockquote:bg-blue-900/20 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                prose-code:text-indigo-600 dark:prose-code:text-indigo-300 prose-code:bg-slate-100 dark:prose-code:bg-slate-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-slate-900 dark:prose-pre:bg-[#0f172a] prose-pre:border prose-pre:border-slate-700 prose-pre:shadow-xl
                prose-img:rounded-2xl prose-img:shadow-lg prose-img:border prose-img:border-slate-200 dark:prose-img:border-slate-700"
            >
                {post.content}
            </div>

            {/* Footer */}
            <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                <p className="text-slate-500 dark:text-slate-400 text-xl font-medium">Thanks for reading!</p>
                <button className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                    <Share2 size={18} />
                </button>
            </div>
          </div>

        </motion.article>
      </div>

      {/* Floating Back Button */}
      <Link 
        href="/blogs"
        className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-14 h-14 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-full shadow-2xl backdrop-blur-md border border-slate-200 dark:border-slate-700 hover:scale-110 hover:border-blue-500 transition-all duration-300"
      >
        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
      </Link>

    </div>
  )
}