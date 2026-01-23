"use client"
import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { 
  Calendar, Clock, ChevronRight, 
  Code, Database, Braces, Terminal, Server, Cloud, Cpu, Bot 
} from "lucide-react"
import { POST_CONTENT } from "../../data/blogData"

export default function BlogPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [iconPositions, setIconPositions] = useState([])

  // --- Transform Data ---
  const blogPosts = Object.entries(POST_CONTENT)
    .filter(([slug]) => slug !== "default")
    .map(([slug, data]) => ({
      slug,
      ...data,
      excerpt: data.excerpt || "Read this article to learn more about the latest developments in AI and Engineering."
    }))

  // --- 1. Updated Icons to match HeroSection Theme ---
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
    // 2. Exact Match Background from HeroSection
    <div className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220] overflow-hidden selection:bg-cyan-500/30 transition-colors duration-300">
      
      {/* Background Floating Elements (No Grid) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Glow Orbs */}
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

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Header */}
          <div className="text-center mb-20">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-extrabold mb-4 text-slate-900 dark:text-white"
            >
                Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">Intelligence</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium"
            >
                Exploring the frontiers of Artificial Intelligence, Machine Learning, and the technology shaping our future.
            </motion.p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
                <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group h-full"
                >
                    <Link href={`/blogs/${post.slug}`} className="flex flex-col h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/50 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/50 dark:hover:border-blue-500/50 transition-all duration-300">
                        
                        {/* Image Area */}
                        <div className="relative h-56 overflow-hidden bg-slate-200 dark:bg-slate-800">
                            {post.image ? (
                                <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400">
                                    <Cloud size={48} />
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3 font-medium">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full" />
                                <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                            </div>

                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                                {post.title}
                            </h2>

                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-200/60 dark:border-slate-700/60">
                                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                                        {post.author ? post.author.charAt(0) : "A"}
                                    </div>
                                    {post.author}
                                </div>
                                <div className="text-blue-600 dark:text-blue-400 flex items-center gap-1 text-sm font-bold group-hover:translate-x-1 transition-transform">
                                    Read Article <ChevronRight size={16} />
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.article>
            ))}
          </div>

          {blogPosts.length === 0 && (
             <div className="text-center py-20 opacity-50 text-slate-600 dark:text-slate-400">
                <p>No posts found.</p>
             </div>
          )}

        </div>
      </div>
    </div>
  )
}