"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Zap,
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
  Bot,
  Scan,
  Gauge,
  Rocket,
  Workflow
} from "lucide-react";
import Link from "next/link";

export default function AISolutions() {
  const [isMounted, setIsMounted] = useState(false);
  const [bgIconPositions, setBgIconPositions] = useState([]);
  const [codePositions, setCodePositions] = useState([]);

  // ==================== 1. BACKGROUND DATA ====================
  const techIcons = [
    { icon: <Code size={24} />, color: "from-white to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40" },
    { icon: <Braces size={24} />, color: "from-white to-slate-50 dark:from-gray-800/40 dark:to-gray-900/40" },
    { icon: <Database size={24} />, color: "from-white to-slate-50 dark:from-zinc-800/40 dark:to-zinc-900/40" },
    { icon: <Terminal size={24} />, color: "from-white to-slate-50 dark:from-neutral-800/40 dark:to-neutral-900/40" },
    { icon: <Server size={24} />, color: "from-white to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40" },
    { icon: <Cloud size={24} />, color: "from-white to-slate-50 dark:from-gray-800/40 dark:to-gray-900/40" },
    { icon: <LineChart size={24} />, color: "from-white to-slate-50 dark:from-zinc-800/40 dark:to-zinc-900/40" },
    { icon: <Lock size={24} />, color: "from-white to-slate-50 dark:from-neutral-800/40 dark:to-neutral-900/40" },
    { icon: <GitBranch size={24} />, color: "from-white to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40" },
    { icon: <Settings size={24} />, color: "from-white to-slate-50 dark:from-gray-800/40 dark:to-gray-900/40" },
    { icon: <Shield size={24} />, color: "from-white to-slate-50 dark:from-zinc-800/40 dark:to-zinc-900/40" },
    { icon: <Zap size={24} />, color: "from-white to-slate-50 dark:from-neutral-800/40 dark:to-neutral-900/40" },
    { icon: <Coffee size={24} />, color: "from-white to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40" },
    { icon: <Github size={24} />, color: "from-white to-slate-50 dark:from-gray-800/40 dark:to-gray-900/40" },
    { icon: <Wifi size={24} />, color: "from-white to-slate-50 dark:from-zinc-800/40 dark:to-zinc-900/40" },
    { icon: <Layers size={24} />, color: "from-white to-slate-50 dark:from-neutral-800/40 dark:to-neutral-900/40" },
  ];

  const codeShapes = [
    "{ }", "[ ]", "( )", "</>", "//", "def()", "=>", "function()", "import",
    "class", "const", "let", "var", "async", "await", "if()", "for()",
    "while()", ".then()", "useState", "useEffect", "API", "JSON", "export",
    "props", "callback", "git", "docker", "Pandas", "Numpy", "TensorFlow",
    "PyTorch", "OpenAI", "GPT", "LLM", "ML", "AI", "Deep Learning",
    "Neural Net", "Algorithm", "BigData", "Analytics", "Automation",
    "ChatBot", "NLP", "Computer Vision", "model.fit()", "predict()",
    "train()", "accuracy", "loss", "epoch", "batch"
  ];

  // ==================== 2. SOLUTIONS DATA ====================
  const solutions = [
    {
      icon: Bot,
      color: "from-blue-500 to-cyan-400",
      title: "AI Chatbots & Automation",
      desc: "Deploy intelligent agents that handle support tickets, qualify leads, and automate internal workflows 24/7.",
      tags: ["NLP", "Llama 3", "24/7 Support"]
    },
    {
      icon: Scan,
      color: "from-purple-500 to-pink-400",
      title: "Computer Vision",
      desc: "Automate quality control and security with systems that can see, identify, and track objects in real-time.",
      tags: ["Object Detection", "OCR", "Face ID"]
    },
    {
      icon: Brain,
      color: "from-orange-500 to-red-400",
      title: "Custom LLM Training",
      desc: "Fine-tune open-source models on your proprietary data to create a secure, domain-specific intelligence.",
      tags: ["Fine-tuning", "RAG", "Data Privacy"]
    },
    {
      icon: Gauge,
      color: "from-emerald-500 to-green-400",
      title: "Predictive Analytics",
      desc: "Turn historical data into future insights. Forecast demand, churn, and market trends with high precision.",
      tags: ["Forecasting", "Risk Scoring", "Trends"]
    },
    {
      icon: Workflow,
      color: "from-indigo-500 to-blue-600",
      title: "Intelligent Workflows",
      desc: "Connect your existing software stack with AI glue layers that autonomously move data and trigger actions.",
      tags: ["Integration", "Zapier Alt", "API"]
    },
    {
      icon: Rocket,
      color: "from-cyan-500 to-blue-500",
      title: "MLOps & Deployment",
      desc: "End-to-end infrastructure management to ensure your AI models scale from prototype to production seamlessly.",
      tags: ["Kubernetes", "Docker", "Scalability"]
    },
  ];

  // ==================== 3. BACKGROUND LOGIC ====================
  useEffect(() => {
    setIsMounted(true);

    const calculatePositions = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

      // Denser grid for a "filled" look
      const gridCols = vw < 640 ? 4 : vw < 1024 ? 6 : 8;
      const gridRows = vh < 600 ? 4 : vh < 800 ? 6 : 8;
      const cellW = vw / gridCols;
      const cellH = vh / gridRows;

      const grid = Array(gridRows).fill(null).map(() => Array(gridCols).fill(false));
      const icons = [];
      const codes = [];

      const maxIcons = vw < 640 ? 12 : vw < 1024 ? 18 : 24;
      const maxCodes = vw < 640 ? 20 : vw < 1024 ? 30 : 40;

      const getRandomPos = (row, col) => ({
        x: col * cellW + Math.random() * (cellW * 0.6),
        y: row * cellH + Math.random() * (cellH * 0.6),
      });

      // Place Icons
      let count = 0;
      for (let r = 0; r < gridRows && count < maxIcons; r++) {
        for (let c = 0; c < gridCols && count < maxIcons; c++) {
          if (Math.random() > 0.65) continue; // Slightly less sparse
          const pos = getRandomPos(r, c);
          const size = (vw < 640 ? 40 : vw < 1024 ? 60 : 80) + Math.random() * 20; 
          icons.push({ ...pos, size, icon: techIcons[Math.floor(Math.random() * techIcons.length)] });
          grid[r][c] = true;
          count++;
        }
      }

      // Place Code Snippets
      count = 0;
      for (let r = 0; r < gridRows && count < maxCodes; r++) {
        for (let c = 0; c < gridCols && count < maxCodes; c++) {
          if (grid[r][c] || Math.random() > 0.5) continue;
          const pos = getRandomPos(r, c);
          codes.push({ ...pos, text: codeShapes[Math.floor(Math.random() * codeShapes.length)] });
          count++;
        }
      }

      setBgIconPositions(icons);
      setCodePositions(codes);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    return () => window.removeEventListener("resize", calculatePositions);
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220] overflow-hidden text-gray-900 dark:text-white pt-20">
      
      {/* ==================== BACKGROUND ANIMATION LAYERS ==================== */}
      {isMounted && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          
          {/* --- NEW GLOWING BUBBLES --- */}
          {/* Top Left Glow */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/30 dark:bg-blue-600/10 rounded-full blur-[60px] -z-10"></div>
          
          {/* Bottom Right Glow */}
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/30 dark:bg-indigo-600/10 rounded-full blur-[60px] -z-10"></div>
          {/* --------------------------- */}


          {/* Icons - UPDATED STYLING FOR DARK/FLOATING LOOK */}
          {bgIconPositions.map((pos, i) => (
            <div
              key={`icon-${i}`}
              // FIX: Added 'border-slate-200' for light mode visibility and 'dark:border-white/5' for dark mode
              className={`absolute rounded-2xl bg-gradient-to-br ${pos.icon.color} backdrop-blur-[2px] border border-slate-200/50 dark:border-white/5 flex items-center justify-center text-slate-500/50 dark:text-slate-400/30 animate-float-background shadow-sm`}
              style={{
                width: pos.size,
                height: pos.size,
                left: pos.x,
                top: pos.y,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.6 // Subtle opacity
              }}
            >
              {pos.icon.icon}
            </div>
          ))}
          
          {/* Code Snippets - INCREASED VISIBILITY HERE */}
          {codePositions.map((pos, i) => (
            <div
              key={`code-${i}`}
              className="absolute text-[10px] sm:text-xs md:text-sm font-mono text-indigo-600/50 dark:text-indigo-300/40 animate-code-float select-none font-semibold"
              style={{
                left: pos.x,
                top: pos.y,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {pos.text}
            </div>
          ))}
        </div>
      )}

      {/* ==================== HERO SECTION ==================== */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 px-6 lg:px-20 py-16 lg:py-24 max-w-7xl mx-auto flex flex-col items-center text-center"
      >
        {/* Badge */}
        {/* <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-full px-4 py-2 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700/50 shadow-sm mb-8">
          <Zap className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold tracking-wide uppercase">Enterprise Grade AI</span>
        </motion.div> */}

        {/* Heading */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Intelligent Solutions for <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm">
            Future-Ready Business
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          We engineer scalable AI systems that automate complex workflows, predict market trends, and empower your workforce with next-gen intelligence.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="/contact" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a href="/about" className="px-8 py-4 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-white/90 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300">
            Know more about us
          </a>
        </motion.div>

        {/* Stats / Trust */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-bold text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" /> 98% Accuracy Models
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500" /> Seamless Integration
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500" /> 24/7 Monitoring
          </div>
        </motion.div>
      </motion.section>

      {/* ==================== SOLUTIONS GRID ==================== */}
      <section className="relative z-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            Our Capabilities
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
             Tailored solutions that drive efficiency, scalability, and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-white/90 dark:bg-slate-800/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 shadow-xl dark:shadow-2xl transition-all duration-300"
              >
                {/* Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Container */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white w-7 h-7" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="px-3 py-1 text-xs font-medium rounded-md bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 cursor-pointer group/link">
                    Explore Solution 
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-indigo-600 to-blue-600 rounded-[2.5rem] p-12 md:p-20 text-center text-white shadow-2xl overflow-hidden relative">
            {/* Decorative Circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform?</h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Let's discuss how we can integrate these solutions into your existing infrastructure today.
              </p>
              <Link href={'/contact'} className="px-10 py-4 bg-white text-blue-700 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Book a Free Consultation
              </Link>
            </div>
        </div>
      </section>

      {/* ==================== STYLES FOR ANIMATIONS ==================== */}
      <style jsx>{`
        @keyframes float-background {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes code-float {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 0.8; transform: translateY(-25px); }
        }
        .animate-float-background {
          animation: float-background 15s ease-in-out infinite;
        }
        .animate-code-float {
          animation: code-float 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}