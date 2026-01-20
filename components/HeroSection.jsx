"use client"
import { useState, useEffect } from "react"
import {
  ArrowRight,
  Code,
  Database,
  Braces,
  Terminal,
  Server,
  Cloud,
  Cpu,
  Bot,
  Zap,
  Activity,
} from "lucide-react"

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [iconPositions, setIconPositions] = useState([])
  const [codePositions, setCodePositions] = useState([])

  // 1. Updated Icons for Dark Mode Compatibility
  const techIcons = [
    { icon: <Code size={20} />, color: "from-blue-300/40 to-blue-400/40 dark:from-blue-500/20 dark:to-blue-600/20" },
    { icon: <Braces size={20} />, color: "from-purple-300/40 to-purple-400/40 dark:from-purple-500/20 dark:to-purple-600/20" },
    { icon: <Database size={20} />, color: "from-emerald-300/40 to-emerald-400/40 dark:from-emerald-500/20 dark:to-emerald-600/20" },
    { icon: <Terminal size={20} />, color: "from-slate-300/40 to-slate-400/40 dark:from-slate-500/20 dark:to-slate-600/20" },
    { icon: <Server size={20} />, color: "from-orange-300/40 to-orange-400/40 dark:from-orange-500/20 dark:to-orange-600/20" },
    { icon: <Cloud size={20} />, color: "from-sky-300/40 to-sky-400/40 dark:from-sky-500/20 dark:to-sky-600/20" },
    { icon: <Cpu size={20} />, color: "from-rose-300/40 to-rose-400/40 dark:from-rose-500/20 dark:to-rose-600/20" },
    { icon: <Bot size={20} />, color: "from-indigo-300/40 to-indigo-400/40 dark:from-indigo-500/20 dark:to-indigo-600/20" },
  ]

  const codeShapes = [
    "model.fit()", "await", "import", "export", "JSON", "API", "Auth",
    "git push", "docker", "k8s", "TensorFlow", "PyTorch", "LLM", "GPT-4",
    "Neural", "sudo", "npm i", "yarn", "deploy", "build", "404", "200 OK"
  ]

  useEffect(() => {
    setIsMounted(true)

    const calculatePositions = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight

      const gridCols = vw < 640 ? 4 : 8
      const gridRows = vh < 600 ? 4 : 8
      const cellW = vw / gridCols
      const cellH = vh / gridRows

      const icons = []
      const codes = []

      const getRandomPos = (row, col) => ({
        x: col * cellW + Math.random() * (cellW * 0.5),
        y: row * cellH + Math.random() * (cellH * 0.5),
      })

      // Generate Icons
      let count = 0
      for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
          if (Math.random() > 0.75) { 
            const pos = getRandomPos(r, c)
            icons.push({ ...pos, icon: techIcons[Math.floor(Math.random() * techIcons.length)] })
            count++
          }
        }
      }

      // Generate Code Snippets
      for (let r = 0; r < gridRows; r++) {
        for (let c = 0; c < gridCols; c++) {
          if (Math.random() > 0.6) { 
            const pos = getRandomPos(r, c)
            codes.push({ ...pos, text: codeShapes[Math.floor(Math.random() * codeShapes.length)] })
          }
        }
      }

      setIconPositions(icons)
      setCodePositions(codes)
    }

    calculatePositions()
    window.addEventListener("resize", calculatePositions)
    return () => window.removeEventListener("resize", calculatePositions)
  }, [])

  return (
    // 2. FIXED: Added 'dark:' classes to Background
    <section className="relative w-full min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220] overflow-hidden flex flex-col justify-center pt-20 pb-10 transition-colors duration-300">
      
      {/* Background Floating Elements */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {iconPositions.map((pos, i) => (
            <div
              key={`icon-${i}`}
              className={`absolute p-3 rounded-xl bg-gradient-to-br ${pos.icon.color} backdrop-blur-sm text-slate-600 dark:text-slate-300 animate-float-slow shadow-sm`}
              style={{ 
                left: pos.x, 
                top: pos.y, 
                animationDelay: `${i * 0.5}s`,
                opacity: 0.7
              }}
            >
              {pos.icon.icon}
            </div>
          ))}
          {codePositions.map((pos, i) => (
            <div
              key={`code-${i}`}
              className="absolute text-xs font-mono text-indigo-400/40 dark:text-indigo-300/30 font-bold tracking-widest animate-pulse-slow"
              style={{ left: pos.x, top: pos.y, animationDelay: `${i * 0.2}s` }}
            >
              {pos.text}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          
          {/* Badge: Added Dark Mode Styles */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-blue-200 dark:border-blue-700/50 text-blue-600 dark:text-blue-300 text-sm font-medium animate-fade-in shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            v2.0 Now Available
          </div> */}

          {/* Heading: Added Dark Mode Text Colors */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
            Intelligence <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">
              Without Limits.
            </span>
          </h1>

          {/* Subtext: Added Dark Mode Text Colors */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed font-medium">
            Deploy enterprise-grade AI agents that evolve with your business. 
            From predictive analytics to automated workflows, we build the nervous system of your future organization.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-bold rounded-xl overflow-hidden transition-all hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 active:scale-95">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                Start Building
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button className="px-8 py-4 bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold rounded-xl hover:bg-white dark:hover:bg-slate-700 hover:border-blue-300 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-sm backdrop-blur-sm">
              <Terminal className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              View Documentation
            </button>
          </div>

          {/* Metrics: Added Dark Mode Text Colors */}
          <div className="pt-8 w-full border-t border-slate-200/60 dark:border-slate-700/60 flex flex-wrap justify-center lg:justify-start gap-8">
            <div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white">99.9%</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white">50ms</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Latency</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white">10k+</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">Models Deployed</div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: 3D Visuals */}
        <div className="lg:col-span-5 relative perspective-container hidden md:block h-[500px]">
          <div className="relative w-full h-full animate-float-card">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-[60px]"></div>

            {/* Card 1: Main Interface - Dark Mode Support */}
            <div className="absolute top-10 left-6 w-[350px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/40 dark:border-slate-700 rounded-2xl p-6 shadow-2xl shadow-indigo-500/10 transform rotate-y-12 rotate-z-2 border-t-white/60 dark:border-t-slate-600 transition-colors duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs text-slate-400 font-mono">analysis.py</div>
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400">import</span>
                  <span className="text-slate-800 dark:text-slate-200">NeuralNet</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-purple-600 dark:text-purple-400">const</span>
                  <span className="text-blue-600 dark:text-blue-400">model</span>
                  <span className="text-slate-800 dark:text-slate-200">=</span>
                  <span className="text-orange-500">await</span>
                  <span className="text-slate-800 dark:text-slate-200">train()</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded mt-4 overflow-hidden border border-slate-200 dark:border-slate-700">
                  <div className="h-full bg-blue-500 w-[70%] animate-pulse"></div>
                </div>
                <div className="text-xs text-slate-400 mt-1">Training... 70%</div>
              </div>
            </div>

            {/* Card 2: Chat Bubble - Dark Mode Support */}
            <div className="absolute bottom-16 -right-2 w-[280px] bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/60 dark:border-slate-600 rounded-2xl p-4 shadow-xl shadow-blue-500/10 transform -rotate-y-12 translate-z-10 animate-float-delayed border-t-white dark:border-t-slate-500 transition-colors duration-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <Bot size={16} className="text-white" />
                </div>
                <div className="space-y-1">
                  <div className="text-xs text-indigo-500 dark:text-indigo-400 font-bold">AI Assistant</div>
                  <div className="text-sm text-slate-700 dark:text-slate-200 leading-snug font-medium">
                    Optimization complete. Revenue projected to increase by 24% next quarter.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Floating Icon Widget - Dark Mode Support */}
            <div className="absolute top-1/2 -left-8 w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-xl shadow-cyan-500/20 animate-bounce-slow border border-slate-100 dark:border-slate-700 transition-colors duration-300">
              <Zap className="text-cyan-500 w-8 h-8 fill-current" />
            </div>

            {/* Card 4: Server Status - Dark Mode Support */}
            <div className="absolute -top-4 -right-6 w-[200px] bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border border-white/60 dark:border-slate-600 rounded-xl p-4 shadow-lg shadow-emerald-500/10 transform rotate-y-6 rotate-z-3 animate-float-slow animation-delay-2000 transition-colors duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">System Status</span>
                <div className="relative flex h-2 w-2">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                   <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </div>
              </div>
              <div className="flex items-end gap-1 h-8 mt-2">
                 <div className="w-1/5 bg-emerald-100 dark:bg-emerald-900/50 h-[40%] rounded-sm"></div>
                 <div className="w-1/5 bg-emerald-200 dark:bg-emerald-800/50 h-[70%] rounded-sm"></div>
                 <div className="w-1/5 bg-emerald-300 dark:bg-emerald-700/50 h-[50%] rounded-sm"></div>
                 <div className="w-1/5 bg-emerald-400 dark:bg-emerald-600/50 h-[85%] rounded-sm"></div>
                 <div className="w-1/5 bg-emerald-500 dark:bg-emerald-500 h-[60%] rounded-sm"></div>
              </div>
              <div className="mt-2 text-xs text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                 <Activity size={12} /> All Systems Operational
              </div>
            </div>

          </div>
        </div>

      </div>

      <style jsx>{`
        .perspective-container {
          perspective: 1000px;
        }
        .rotate-y-12 {
          transform: rotateY(-12deg) rotateX(5deg);
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-float-card {
          animation: float-card 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-card 7s ease-in-out infinite 1s;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
      `}</style>
    </section>
  )
}

export default HeroSection