"use client"
import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import gsap from "gsap"
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Plane,
  Code, Database, Braces, Terminal, Server, Cloud, Cpu, Bot 
} from "lucide-react"

export default function ContactPage() {
  const [isMounted, setIsMounted] = useState(false)
  const [iconPositions, setIconPositions] = useState([])
  
  // Form State
  const [formState, setFormState] = useState({ name: "", phone: "", email: "", description: "" })
  const [showPopup, setShowPopup] = useState(false)

  // GSAP Refs
  const buttonRef = useRef(null)
  const buttonTextRef = useRef(null)
  const neuralPathRef = useRef(null)
  const planeIconRef = useRef(null)
  const successTextRef = useRef(null)

  // --- Background Icons ---
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

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const tl = gsap.timeline()

    // 1. Hide Initial Text & Icon
    tl.to(buttonTextRef.current, { y: -20, opacity: 0, duration: 0.3, ease: "power2.in" })
    
    // 2. Animate the Neural Heartbeat Line (Draw stroke)
    // We set stroke-dasharray/offset in CSS, then animate offset to 0
    tl.to(neuralPathRef.current, { 
        strokeDashoffset: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power2.inOut" 
    })

    // 3. Heartbeat Throb (Scale Button) as line passes middle
    tl.to(buttonRef.current, { scale: 1.1, duration: 0.1, yoyo: true, repeat: 1 }, "-=0.6")

    // 4. Fade out Line
    tl.to(neuralPathRef.current, { opacity: 0, duration: 0.2 })

    // 5. Turn Green & Pop
    tl.to(buttonRef.current, { 
        backgroundColor: "#10b981", // Emerald 500
        borderColor: "#10b981",
        color: "#ffffff",
        scale: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)"
    })

    // 6. Plane Takes Off (Fly Up & Right)
    tl.fromTo(planeIconRef.current, 
        { x: -20, y: 20, opacity: 0, scale: 0.5 },
        { x: 50, y: -50, opacity: 1, scale: 1.5, duration: 0.8, ease: "power1.out" },
        "-=0.4"
    )
    // Fade out plane as it leaves
    tl.to(planeIconRef.current, { opacity: 0, duration: 0.2 }, "-=0.2")

    // 7. Show "Sent" Text
    tl.fromTo(successTextRef.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "back.out(1.7)" },
        "-=0.4"
    )

    // 8. Reset Logic
    setTimeout(() => {
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
            setFormState({ name: "", phone: "", email: "", description: "" })
            
            // Reset Animation
            const resetTl = gsap.timeline()
            resetTl.to(successTextRef.current, { opacity: 0, duration: 0.2 })
            resetTl.to(buttonRef.current, { backgroundColor: "", borderColor: "", scale: 1, duration: 0.4, clearProps: "all" })
            resetTl.set(neuralPathRef.current, { strokeDashoffset: 300, opacity: 0 }) // Reset line
            resetTl.to(buttonTextRef.current, { y: 0, opacity: 1, duration: 0.4 })
        }, 3000)
    }, 2500)
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220] text-slate-900 dark:text-white overflow-hidden selection:bg-cyan-500/30">
      
      {/* --- BACKGROUND ELEMENTS --- */}
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

      {/* --- SUCCESS POPUP --- */}
      <AnimatePresence>
        {showPopup && (
            <motion.div 
                initial={{ opacity: 0, y: -50, x: "-50%" }}
                animate={{ opacity: 1, y: 0, x: "-50%" }}
                exit={{ opacity: 0, y: -50, x: "-50%" }}
                className="fixed top-24 left-1/2 z-[100] px-6 py-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[320px]"
            >
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">Success!</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300">We will connect with you soon.</p>
                </div>
            </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT SIDE: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col h-full"
          >
            <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-300 text-sm font-bold mb-6 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    Contact Us
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-[1.1]">
                    Let's Build <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">
                        The Future.
                    </span>
                </h1>
                
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                    Ready to deploy your first autonomous agent? Reach out to our engineering team.
                </p>

                {/* Info Cards */}
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Email</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">hello@cognixo.ai</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/40 dark:bg-slate-800/40 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm">
                        <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                            <Phone size={24} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">Phone</p>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">+91 98765 43210</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map */}
            <div className="flex-grow min-h-[250px] w-full bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/50 dark:border-slate-700/50 rounded-3xl overflow-hidden shadow-lg p-2">
                <div className="relative w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 opacity-90 hover:opacity-100">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.1399575072555!2d73.8465182758596!3d18.522576469111716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c306f6c64b%3A0xb91b6926e45c787f!2sAIAdventures!5e0!3m2!1sen!2sin!4v1769232970360!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-2xl border border-white/50 dark:border-slate-700 rounded-3xl p-8 md:p-10 shadow-2xl h-full flex flex-col">
                
                <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white flex items-center gap-2">
                    Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">Started</span> <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6 flex-grow">
                    
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Full Name</label>
                            <input 
                                type="text" 
                                placeholder="John Doe"
                                value={formState.name}
                                onChange={(e) => setFormState({...formState, name: e.target.value})}
                                required
                                className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Phone Number</label>
                            <input 
                                type="tel" 
                                placeholder="+91 98765 43210"
                                value={formState.phone}
                                onChange={(e) => setFormState({...formState, phone: e.target.value})}
                                required
                                className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Email Address</label>
                        <input 
                            type="email" 
                            placeholder="john@company.com"
                            value={formState.email}
                            onChange={(e) => setFormState({...formState, email: e.target.value})}
                            required
                            className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 ml-1">Description</label>
                        <textarea 
                            placeholder="Tell us about your project requirements..."
                            rows={4}
                            value={formState.description}
                            onChange={(e) => setFormState({...formState, description: e.target.value})}
                            required
                            className="w-full px-5 py-4 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all font-medium text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                        />
                    </div>

                    {/* --- NEURAL BUTTON --- */}
                    <button 
                        ref={buttonRef}
                        type="submit"
                        className="group relative w-full h-[60px] bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl overflow-hidden shadow-lg mt-6 border border-transparent transition-all active:scale-95 flex items-center justify-center"
                    >
                        {/* 1. Initial Text */}
                        <span ref={buttonTextRef} className="absolute z-20 flex items-center justify-center gap-2">
                            Send Request <Send size={18} />
                        </span>

                        {/* 2. Success Text (Hidden initially) */}
                        <span ref={successTextRef} className="absolute z-20 flex items-center justify-center gap-2 opacity-0 text-white">
                            <CheckCircle2 size={20} /> Message Sent!
                        </span>

                        {/* 3. Neural Line SVG (Hidden initially) */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" preserveAspectRatio="none">
                            <path 
                                ref={neuralPathRef}
                                d="M0,30 L100,30 L120,10 L140,50 L160,30 L300,30 L320,10 L340,50 L360,30 L800,30" // Simple heartbeat zig-zag path
                                fill="none"
                                stroke="#0ea5e9" // Cyan-500
                                strokeWidth="3"
                                strokeDasharray="800"
                                strokeDashoffset="800"
                                className="opacity-0"
                                style={{ filter: "drop-shadow(0 0 5px #0ea5e9)" }}
                            />
                        </svg>

                        {/* 4. Plane Icon (Hidden) */}
                        <div ref={planeIconRef} className="absolute z-30 opacity-0 text-white">
                            <Plane size={24} />
                        </div>

                    </button>

                </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}