"use client"
import React, { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Brain, Users, Sparkles, Database, Zap, TrendingUp, Shield, Layers, Globe, Target, Heart, ArrowRight,
  Code, Braces, Terminal, Server, Cloud, Cpu, Bot, Fingerprint, CheckCircle2
} from "lucide-react"

// Import Modals (Ensure these paths match your project structure)
import DNAModal from "../../components/DNAModal"
import TeamModal from "../../components/TeamModal"
import Link from "next/link"

export default function AboutUs() {
  const [isMounted, setIsMounted] = useState(false)
  const [iconPositions, setIconPositions] = useState([])

  // Modal States
  const [isDNAModalOpen, setIsDNAModalOpen] = useState(false)
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false)

  const containerRef = useRef(null)

  // Scroll Parallax for Hero Text
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 200])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  // --- Scroll Locking Logic ---
  useEffect(() => {
    if (isDNAModalOpen || isTeamModalOpen) {
      document.body.style.overflow = "hidden" // Lock scroll
    } else {
      document.body.style.overflow = "unset" // Unlock scroll
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isDNAModalOpen, isTeamModalOpen])

  // --- Configuration ---
  const techIcons = [
    { icon: <Code size={20} />, color: "text-blue-400" },
    { icon: <Braces size={20} />, color: "text-purple-400" },
    { icon: <Database size={20} />, color: "text-emerald-400" },
    { icon: <Terminal size={20} />, color: "text-slate-400" },
    { icon: <Server size={20} />, color: "text-orange-400" },
    { icon: <Cloud size={20} />, color: "text-sky-400" },
    { icon: <Cpu size={20} />, color: "text-rose-400" },
    { icon: <Bot size={20} />, color: "text-indigo-400" },
  ]

  const services = [
    { icon: Brain, title: "AI Agents", description: "Autonomous digital agents that think, learn, and act." },
    { icon: Sparkles, title: "Generative AI", description: "Next-gen platforms using LLMs and RAG pipelines." },
    { icon: TrendingUp, title: "Data Science", description: "Predictive modeling and statistical intelligence." },
    { icon: Database, title: "Data Annotation", description: "High-quality labeled datasets for model training." },
    { icon: Zap, title: "Workflow Intel", description: "Automated, adaptive, and data-driven optimization." },
  ]

  const whyChoose = [
    { icon: Layers, title: "End-to-End Intelligence", description: "From data collection to model deployment — a unified AI ecosystem built around your goals." },
    { icon: Sparkles, title: "Cutting-Edge Innovation", description: "We leverage the latest in Generative AI, LLMs, and Machine Learning to craft future-ready solutions." },
    { icon: Shield, title: "Ethics & Trust", description: "Transparency, data security, and fairness are at the heart of every system we build." },
    { icon: TrendingUp, title: "Scalable Impact", description: "Our modular architecture ensures agility, adaptability, and growth at every stage." },
    { icon: Globe, title: "Global Vision", description: "We blend global expertise with domain-specific intelligence for lasting impact." },
    { icon: CheckCircle2, title: "Proven Reliability", description: "Enterprise-grade SLAs and rigorous testing ensure your AI systems never falter." },
  ]

  // --- Evenly Distributed Icon Logic ---
  useEffect(() => {
    setIsMounted(true)

    // Grid settings
    const rows = 6
    const cols = 4
    const totalIcons = rows * cols

    const icons = []

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Calculate grid cell base position (percentage)
        const baseX = (c / cols) * 100
        const baseY = (r / rows) * 100

        // Add "Jitter" (random offset within the cell)
        // We use slightly less than the full cell width/height to prevent overlap
        const jitterX = Math.random() * (100 / cols * 0.6)
        const jitterY = Math.random() * (100 / rows * 0.6)

        icons.push({
          id: `${r}-${c}`,
          x: baseX + jitterX + 5, // +5 to add a little margin from edge
          y: baseY + jitterY + 5,
          icon: techIcons[Math.floor(Math.random() * techIcons.length)],
          delay: Math.random() * 5,
          duration: 15 + Math.random() * 10,
        })
      }
    }

    // Optional: Shuffle the array so icons don't animate in a perfect line
    const shuffledIcons = icons.sort(() => Math.random() - 0.5)

    setIconPositions(shuffledIcons)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <div className="relative min-h-screen text-slate-900 dark:text-white overflow-hidden selection:bg-cyan-500/30">

      {/* GLOBAL CONSTANT BACKGROUND */}
      {/* UPDATED: Removed "Animated Orbs" and "Grid Overlay" here.
         This matches the cleaner aesthetic of your HeroSection.
      */}
      <div className="fixed inset-0 z-0 bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220]">

        {/* Evenly Spread Floating Tech Icons */}
        {isMounted &&
          iconPositions.map((pos) => (
            <motion.div
              key={pos.id}
              className={`absolute ${pos.icon.color} opacity-20 dark:opacity-10`}
              style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              animate={{ y: [0, -40, 0], rotate: [0, 10, -10, 0] }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
                ease: "easeInOut",
              }}
            >
              {pos.icon.icon}
            </motion.div>
          ))}
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-center pt-20 pb-10">
          <motion.div
            style={{ y: y1, opacity }}
            className="max-w-5xl mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/40 dark:bg-slate-800/40 border border-blue-200 dark:border-blue-700/50 backdrop-blur-md mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 tracking-wide">
                Redefining Machine Intelligence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight mb-8 leading-tight"
            >
              We Architect <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">
                Digital Minds.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
            >
              Pioneering the next generation of{" "}
              <span className="text-slate-900 dark:text-white font-bold">
                Ethical AI
              </span>{" "}
              and{" "}
              <span className="text-slate-900 dark:text-white font-bold">
                Cognitive Systems
              </span>{" "}
              to empower humanity's boldest ideas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <button onClick={() => setIsTeamModalOpen(true)} className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-bold rounded-xl overflow-hidden shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center gap-2">
                  Meet the Team{" "}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>

              <button
                onClick={() => setIsDNAModalOpen(true)}
                className="group px-8 py-4 bg-white/40 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-white dark:hover:bg-slate-700 hover:border-blue-300 transition-all active:scale-95 flex items-center gap-2 shadow-sm backdrop-blur-md"
              >
                <Fingerprint className="w-5 h-5 text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 transition-colors" />
                Our DNA
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* WHO WE ARE */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="px-6 py-20"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div variants={itemVariants} className="flex flex-col items-center mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-center">
                Who We Are
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="relative group">
              <div className="relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/50 dark:border-slate-700 shadow-xl">
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 text-center leading-relaxed font-medium">
                  We are a team of visionaries, data scientists, and engineers
                  passionate about building intelligent systems. Our
                  multidisciplinary expertise spans Machine Learning, Generative
                  AI, Data Analytics, and Workflow Intelligence.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* WHAT WE DO */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="px-6 py-20"
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-extrabold text-center mb-16"
            >
              What We Do
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon
                const layouts = [
                  "md:col-span-3",
                  "md:col-span-3",
                  "md:col-span-2",
                  "md:col-span-2",
                  "md:col-span-2",
                ]
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`group relative ${layouts[index]}`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md border border-slate-200 dark:border-slate-700 rounded-2xl p-6 hover:bg-white/60 dark:hover:bg-slate-800/60 hover:shadow-lg transition-all duration-300 flex flex-col">
                      <div className="w-12 h-12 bg-gradient-to-br from-white to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-600 shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* VISION & MISSION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="px-6 py-20"
        >
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              variants={itemVariants}
              className="relative h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-cyan-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-xl text-cyan-600 dark:text-cyan-400">
                  <Target size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To create a world where AI and humans collaborate seamlessly. We
                envision AI not as a tool, but as a partner in human
                advancement.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative h-full bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-indigo-400/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl text-indigo-600 dark:text-indigo-400">
                  <Heart size={24} />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To democratize access to intelligent technology by developing
                ethical, scalable, and enterprise-grade AI solutions.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* WHY CHOOSE US */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="px-6 py-20"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-extrabold text-center mb-16"
            >
              Why Choose Us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChoose.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:bg-white/60 dark:hover:bg-slate-800/60 transition-all duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </motion.section>

        {/* OUR PROMISE */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={containerVariants}
          className="px-6 py-24 text-center"
        >
          <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-block p-4 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl shadow-lg shadow-blue-500/30">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-extrabold mb-8"
            >
              Our Promise
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="space-y-4 text-lg text-slate-600 dark:text-slate-300 mb-12 font-medium"
            >
              <motion.p variants={itemVariants}>
                To turn data into intelligence, and intelligence into
                opportunity.
              </motion.p>
              <motion.p variants={itemVariants}>
                To transform challenges into solutions, and ideas into
                innovation.
              </motion.p>
              <motion.p variants={itemVariants}>
                To build AI that works for people — not the other way around.
              </motion.p>
            </motion.div>

            <Link href={'/contact'}>
              <motion.button
                variants={itemVariants}
                className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-transform flex items-center gap-2 mx-auto"
              >
                Start Your AI Journey <ArrowRight size={20} />
              </motion.button>

            </Link>
          </div>
        </motion.section>
      </div>

      {/* RENDER MODALS */}
      <AnimatePresence>
        {isDNAModalOpen && (
          <DNAModal
            isOpen={isDNAModalOpen}
            onClose={() => setIsDNAModalOpen(false)}
          />
        )}
        {isTeamModalOpen && (
          <TeamModal
            isOpen={isTeamModalOpen}
            onClose={() => setIsTeamModalOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}