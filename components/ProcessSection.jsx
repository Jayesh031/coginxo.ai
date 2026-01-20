"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Target, Lightbulb, Code, Rocket, Users, Shield, Activity, BarChart, CheckCircle } from "lucide-react"
import Link from "next/link"

// --- Background Logic (Matches Hero) ---
const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    setMounted(true)
    const icons = [
        { icon: <Target size={18} />, color: "text-rose-400" },
        { icon: <Lightbulb size={18} />, color: "text-amber-400" },
        { icon: <Code size={18} />, color: "text-blue-400" },
        { icon: <Rocket size={18} />, color: "text-orange-400" },
    ]
    
    const newItems = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10
    }))
    setItems(newItems)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.icon.color} opacity-20 dark:opacity-10`}
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: item.duration, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          {item.icon.icon}
        </motion.div>
      ))}
    </div>
  )
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])
  return isMobile
}

export default function ProcessSection() {
  const processRef = useRef(null)
  const processInView = useInView(processRef, { margin: "-100px", once: true })
  const whyChooseUsRef = useRef(null)
  const whyChooseUsInView = useInView(whyChooseUsRef, { margin: "-50px", once: true })
  const isMobile = useIsMobile()

  // Updated Content for Steps
  const steps = [
    { 
      icon: Target, 
      title: "Discovery & Audit", 
      description: "We conduct a deep-dive audit of your data infrastructure and business KPIs to identify high-impact AI opportunities.", 
      step: "01" 
    },
    { 
      icon: Lightbulb, 
      title: "Strategy Design", 
      description: "Our architects design a scalable roadmap, selecting optimal models (LLMs, CNNs) tailored to your specific use case.", 
      step: "02" 
    },
    { 
      icon: Code, 
      title: "Agile Development", 
      description: "We build and fine-tune your solution using state-of-the-art frameworks, ensuring code quality and security compliance.", 
      step: "03" 
    },
    { 
      icon: Rocket, 
      title: "Deployment & Scale", 
      description: "Seamless integration into your production stack with automated MLOps pipelines for continuous monitoring and retraining.", 
      step: "04" 
    },
  ]

  const reasons = [
    { icon: Target, title: "Precision-Driven", desc: "Every algorithm is fine-tuned to your specific industry constraints." },
    { icon: Rocket, title: "Future-Proof Tech", desc: "Built on modular architectures that adapt to new AI advancements." },
    { icon: Users, title: "Elite Engineering", desc: "Our team consists of researchers and engineers from top tech firms." },
  ]

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220] transition-colors duration-300">
      <BackgroundPattern />
      
      {/* ===== Process Section ===== */}
      <section ref={processRef} className="py-20 px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={processInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
              Our{' '}
              {/* EXACT HERO GRADIENT */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">
                Process
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A rigorous, science-backed methodology to deliver enterprise-grade AI.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  custom={i}
                  initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 30 : 0 }}
                  animate={processInView ? { opacity: 1, x: 0, y: 0 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="relative"
                >
                  <div className="h-full bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700 
                                  rounded-2xl p-8 relative hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-lg flex flex-col">
                    <div className="absolute top-4 right-4 text-5xl font-bold text-slate-200 dark:text-slate-700/50 select-none">
                      {step.step}
                    </div>
                    
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-md shadow-blue-500/20 shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{step.description}</p>
                  </div>

                  {/* Desktop Connector Line */}
                  {!isMobile && i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-slate-300 to-slate-200 dark:from-slate-600 dark:to-slate-700 -translate-y-1/2 z-0" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us Section ===== */}
      <section ref={whyChooseUsRef} className="py-20 px-4 md:px-6 relative z-10 border-t border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={whyChooseUsInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold mb-10 text-slate-900 dark:text-white">
              Why Choose{' '}
              {/* EXACT HERO GRADIENT */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">
                Us?
              </span>
            </h2>

            <div className="space-y-8">
              {reasons.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ x: -30, opacity: 0 }}
                  animate={whyChooseUsInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.5 }}
                  className="flex gap-4 group"
                >
                  <div className="w-12 h-12 flex-shrink-0 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-200 dark:border-slate-700 shadow-sm group-hover:border-blue-400 transition-colors">
                    <item.icon size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={whyChooseUsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="mt-10"
            >
              <Link href="/about">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all">
                  Learn More About Us
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual (Matches Hero 3D Card Style) */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={whyChooseUsInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[450px] w-full perspective-1000 hidden md:block"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-[60px]" />

            {/* Main Image Card */}
            <motion.div 
              className="absolute inset-x-8 inset-y-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 rounded-2xl p-3 shadow-2xl shadow-indigo-500/10 rotate-y-6 rotate-z-2"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                 {/* Placeholder for image - using a gradient div as fallback */}
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                    <img 
                      src="/port2.jpg" 
                      alt="Innovation" 
                      className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700" 
                    />
                 </div>
              </div>
            </motion.div>

            {/* Floating Widget 1: Security */}
            <motion.div
              className="absolute -top-0 right-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3 w-48"
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600 dark:text-emerald-400">
                <Shield size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Security</div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">Encrypted</div>
              </div>
              <div className="ml-auto">
                 <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>

            {/* Floating Widget 2: Performance */}
            <motion.div
              className="absolute bottom-12 -left-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 w-56"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
               <div className="flex items-center gap-3 mb-3">
                 <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg text-indigo-600 dark:text-indigo-400">
                   <Activity size={20} />
                 </div>
                 <div className="text-sm font-bold text-slate-900 dark:text-white">Performance</div>
                 <span className="ml-auto text-xs font-mono text-green-500">+124%</span>
               </div>
               <div className="space-y-1">
                 <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                   <div className="h-full w-[85%] bg-gradient-to-r from-indigo-500 to-purple-500" />
                 </div>
                 <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                   <div className="h-full w-[65%] bg-gradient-to-r from-indigo-500 to-purple-500 opacity-60" />
                 </div>
               </div>
            </motion.div>

             {/* Floating Widget 3: Accuracy (New) */}
             <motion.div
              className="absolute top-1/2 -right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg p-3 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-1"
              animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <div className="relative h-12 w-12 flex items-center justify-center">
                 <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path className="text-slate-200 dark:text-slate-700" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                    <path className="text-blue-500" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
                 </svg>
                 <span className="absolute text-[10px] font-bold text-slate-800 dark:text-white">98%</span>
              </div>
              <span className="text-[10px] font-bold text-slate-500">Accuracy</span>
            </motion.div>

          </motion.div>
        </div>
      </section>
    </div>
  )
}