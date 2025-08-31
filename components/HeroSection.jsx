"use client"
import { useState, useEffect } from "react"
import {
  Brain,
  Zap,
  Target,
  ArrowRight,
  CheckCircle,
  Code,
  Database,
  Braces,
  Terminal,
  Server,
  Cloud,
  Lock,
  LineChart,
  GitBranch,
  Settings,
  Shield,
  Coffee,
  Wifi,
  Layers,
  Github,
} from "lucide-react"

// Minimal motion mock (replaces framer-motion in environments where it's not available)
const motion = {
  div: ({ children, className = "", ...props }) => (
    <div className={`${className} animate-fade-in`} {...props}>
      {children}
    </div>
  ),
  h1: ({ children, className = "", ...props }) => (
    <h1 className={`${className} animate-slide-up`} {...props}>
      {children}
    </h1>
  ),
  p: ({ children, className = "", ...props }) => (
    <p className={`${className} animate-slide-up-delay`} {...props}>
      {children}
    </p>
  ),
  button: ({ children, className = "", ...props }) => (
    <button className={`${className} transition-all duration-300 hover:scale-105 active:scale-95`} {...props}>
      {children}
    </button>
  ),
}

const HeroSection = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [iconPositions, setIconPositions] = useState([])
  const [codePositions, setCodePositions] = useState([])

  // Tech icons with colors
  const techIcons = [
    { icon: <Code size={20} />, color: "from-blue-300/20 to-blue-400/20" },
    { icon: <Braces size={20} />, color: "from-purple-300/20 to-purple-400/20" },
    { icon: <Database size={20} />, color: "from-green-300/20 to-green-400/20" },
    { icon: <Terminal size={20} />, color: "from-slate-300/20 to-slate-400/20" },
    { icon: <Server size={20} />, color: "from-orange-300/20 to-orange-400/20" },
    { icon: <Cloud size={20} />, color: "from-sky-300/20 to-sky-400/20" },
    { icon: <LineChart size={20} />, color: "from-red-300/20 to-red-400/20" },
    { icon: <Lock size={20} />, color: "from-yellow-300/20 to-yellow-400/20" },
    { icon: <GitBranch size={20} />, color: "from-emerald-300/20 to-emerald-400/20" },
    { icon: <Settings size={20} />, color: "from-gray-300/20 to-gray-400/20" },
    { icon: <Shield size={20} />, color: "from-indigo-300/20 to-indigo-400/20" },
    { icon: <Zap size={20} />, color: "from-amber-300/20 to-amber-400/20" },
    { icon: <Coffee size={20} />, color: "from-orange-300/20 to-orange-400/20" },
    { icon: <Github size={20} />, color: "from-slate-300/20 to-slate-400/20" },
    { icon: <Wifi size={20} />, color: "from-cyan-300/20 to-cyan-400/20" },
    { icon: <Layers size={20} />, color: "from-pink-300/20 to-pink-400/20" },
  ]

  // AI and tech-related text snippets
  const codeShapes = [
    "{ }",
    "[ ]",
    "( )",
    "</>",
    "//",
    "def()",
    "=>",
    "function()",
    "import",
    "class",
    "const",
    "let",
    "var",
    "async",
    "await",
    "if()",
    "for()",
    "while()",
    ".then()",
    "useState",
    "useEffect",
    "API",
    "JSON",
    "export",
    "props",
    "callback",
    "git",
    "docker",
    "Pandas",
    "Numpy",
    "TensorFlow",
    "PyTorch",
    "OpenAI",
    "GPT",
    "LLM",
    "ML",
    "AI",
    "Deep Learning",
    "Neural Net",
    "Algorithm",
    "BigData",
    "Analytics",
    "Automation",
    "ChatBot",
    "NLP",
    "Computer Vision",
    "Scikit-learn",
    "Keras",
    "model.fit()",
    "predict()",
    "train()",
    "accuracy",
    "loss",
    "epoch",
    "batch",
    "gradient",
    "backprop",
    "transformer",
    "attention",
    "embedding",
    "tokenize",
    "fine-tune",
    "inference",
    "deployment",
    "MLOps",
    "pipeline",
    "feature",
    "dataset",
    "supervised",
    "unsupervised",
    "reinforcement",
    "classification",
    "regression",
    "clustering",
  ]

  useEffect(() => {
    setIsMounted(true)

    const calculatePositions = () => {
      const vw = window.innerWidth
      const vh = window.innerHeight

      const gridCols = vw < 640 ? 4 : vw < 1024 ? 5 : 6
      const gridRows = vh < 600 ? 4 : vh < 800 ? 5 : 6
      const cellW = vw / gridCols
      const cellH = vh / gridRows

      const grid = Array(gridRows)
        .fill()
        .map(() => Array(gridCols).fill(false))
      const icons = []
      const codes = []

      const maxIcons = vw < 640 ? 15 : vw < 1024 ? 22 : 30
      const maxCodes = vw < 640 ? 25 : vw < 1024 ? 35 : 50

      const getRandomPos = (row, col) => ({
        x: col * cellW + Math.random() * (cellW * 0.7),
        y: row * cellH + Math.random() * (cellH * 0.7),
      })

      let count = 0
      for (let r = 0; r < gridRows && count < maxIcons; r++) {
        for (let c = 0; c < gridCols && count < maxIcons; c++) {
          if (Math.random() > 0.4) continue
          const pos = getRandomPos(r, c)
          const size = (vw < 640 ? 35 : vw < 1024 ? 65 : 85) + Math.random() * 20
          icons.push({ ...pos, size, icon: techIcons[Math.floor(Math.random() * techIcons.length)] })
          grid[r][c] = true
          count++
        }
      }

      count = 0
      for (let r = 0; r < gridRows && count < maxCodes; r++) {
        for (let c = 0; c < gridCols && count < maxCodes; c++) {
          if (grid[r][c] || Math.random() > 0.5) continue
          const pos = getRandomPos(r, c)
          codes.push({ ...pos, text: codeShapes[Math.floor(Math.random() * codeShapes.length)] })
          count++
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
    <section className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/80 dark:to-[#0b1220] overflow-hidden pt-12 md:pt-20">
      {/* Background Animated Icons */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden">
          {iconPositions.map((pos, i) => (
            <div
              key={`icon-${i}`}
              className={`absolute rounded-lg bg-gradient-to-br ${pos.icon.color} backdrop-blur-sm flex items-center justify-center text-indigo-600/70 dark:text-indigo-300/70 animate-float-background`}
              style={{ width: pos.size, height: pos.size, left: pos.x, top: pos.y }}
            >
              {pos.icon.icon}
            </div>
          ))}
          {codePositions.map((pos, i) => (
            <div
              key={`code-${i}`}
              className="absolute text-xs sm:text-sm md:text-base font-mono text-indigo-600/50 dark:text-indigo-300/60 animate-code-float"
              style={{ left: pos.x, top: pos.y }}
            >
              {pos.text}
            </div>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left - AI Brain Graphic */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute inset-6 border border-cyan-400/40 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-12 border border-blue-400/30 rounded-full animate-spin-reverse"></div>
            <div className="absolute inset-20 border border-indigo-400/20 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 rounded-full flex items-center justify-center shadow-2xl">
                <Brain className="w-14 h-14 text-white animate-pulse" />
              </div>
            </div>
            {/* Floating Mini Icons */}
            <div className="absolute top-6 right-6 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float shadow-lg">
              <Target className="w-5 h-5 text-cyan-600" />
            </div>
            <div className="absolute bottom-6 left-6 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float-delay shadow-lg">
              <Zap className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="absolute top-1/2 -right-6 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float-delay-2 shadow-lg">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800/50 shadow-sm">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Innovation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-slate-100 leading-tight">
            Transform Your{" "}
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent">
              Business with AI
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Unlock the power of artificial intelligence with our cutting-edge solutions. Drive innovation, optimize
            operations, and stay ahead of the competition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="group bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 text-white px-8 py-3 rounded-full font-semibold flex items-center  justify-center space-x-2 hover:shadow-xl transition-all">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-blue-500 dark:border-blue-400 text-blue-600 dark:text-blue-300 px-8 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 bg-white/50 dark:bg-slate-800/60 backdrop-blur-sm hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white transition-all">
              {/* <Play className="w-5 h-5" /> */}
              <span>Our Services</span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
            {[{ text: "500+ Projects" }, { text: "98% Success Rate" }, { text: "24/7 Support" }].map((item, idx) => (
              <div key={idx} className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm sm:text-base text-gray-600 dark:text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
        @keyframes slide-up { from {opacity:0; transform:translateY(30px);} to {opacity:1; transform:translateY(0);} }
        @keyframes float {0%,100%{transform:translateY(0);}50%{transform:translateY(-10px);}}
        @keyframes float-background {0%,100%{opacity:0.3;}50%{opacity:0.2; transform:translateY(-20px);} }
        @keyframes code-float {0%,100%{opacity:0.3;}50%{opacity:0.5; transform:translateY(-25px);} }
        @keyframes spin-slow {from{transform:rotate(0);}to{transform:rotate(360deg);} }
        @keyframes spin-reverse {from{transform:rotate(360deg);}to{transform:rotate(0);} }
        .animate-fade-in{animation:fade-in 0.8s ease-out;}
        .animate-slide-up{animation:slide-up 0.8s ease-out;}
        .animate-slide-up-delay{animation:slide-up 0.8s ease-out 0.4s both;}
        .animate-float{animation:float 3s ease-in-out infinite;}
        .animate-float-delay{animation:float 3s ease-in-out infinite 1s;}
        .animate-float-delay-2{animation:float 3s ease-in-out infinite 2s;}
        .animate-float-background{animation:float-background 20s ease-in-out infinite;}
        .animate-code-float{animation:code-float 25s ease-in-out infinite;}
        .animate-spin-slow{animation:spin-slow 20s linear infinite;}
        .animate-spin-reverse{animation:spin-reverse 15s linear infinite;}
      `}</style>
    </section>
  )
}

export default HeroSection
