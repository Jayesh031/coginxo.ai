"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Bot,
  Scan,
  Gauge,
  Rocket,
  Workflow,
} from "lucide-react";

export default function AISolutions() {
  const [isMounted, setIsMounted] = useState(false);
  const [bgIconPositions, setBgIconPositions] = useState([]);
  const [codePositions, setCodePositions] = useState([]);

  // ==================== BACKGROUND DATA (MATCHING HOME PAGE) ====================
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

  // Solutions Data
  const solutions = [
    {
      icon: Bot,
      title: "AI Chatbots & Automation",
      desc: "LLM-powered conversational bots trained on your data, enabling support, sales, HR, and workflow automation.",
    },
    {
      icon: Scan,
      title: "Computer Vision Systems",
      desc: "Visual inspection, quality control, face/object detection, OCR solutions, and video intelligence.",
    },
    {
      icon: Brain,
      title: "Custom LLM Development",
      desc: "Fine-tuned domain-specific models, RAG pipelines, embeddings, and vector DB knowledge systems.",
    },
    {
      icon: Gauge,
      title: "Predictive Analytics",
      desc: "Demand forecasting, sales predictions, risk scoring, customer analytics, and KPI trend modeling.",
    },
    {
      icon: Rocket,
      title: "AI/ML Deployment",
      desc: "MLOps, pipeline automation, cloud/on-prem deployments with GPU optimization and scalable architecture.",
    },
    {
      icon: Layers,
      title: "AI Integration for Apps",
      desc: "Integrate AI into mobile apps, SaaS tools, CRMs, ERPs, and enterprise systems seamlessly.",
    },
  ];

  // ==================== BACKGROUND LOGIC ====================
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

      const grid = Array(gridRows).fill().map(() => Array(gridCols).fill(false));
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
          if (Math.random() > 0.7) continue; // Random sparsity
          const pos = getRandomPos(r, c);
          const size = (vw < 640 ? 30 : vw < 1024 ? 50 : 70) + Math.random() * 20;
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
          {/* Icons */}
          {bgIconPositions.map((pos, i) => (
            <div
              key={`icon-${i}`}
              className={`absolute rounded-2xl bg-gradient-to-br ${pos.icon.color} backdrop-blur-sm flex items-center justify-center text-indigo-600/40 dark:text-indigo-300/30 animate-float-background opacity-20 dark:opacity-10`}
              style={{
                width: pos.size,
                height: pos.size,
                left: pos.x,
                top: pos.y,
                animationDelay: `${Math.random() * 5}s`
              }}
            >
              {pos.icon.icon}
            </div>
          ))}
          
          {/* Code Snippets */}
          {codePositions.map((pos, i) => (
            <div
              key={`code-${i}`}
              className="absolute text-[10px] sm:text-xs md:text-sm font-mono text-indigo-500/30 dark:text-indigo-300/30 animate-code-float select-none"
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
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-full px-4 py-2 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-700/50 shadow-sm mb-8">
          <Zap className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold tracking-wide uppercase">Enterprise Grade AI</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Intelligent Solutions for <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm">
            Future-Ready Business
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          We engineer scalable AI systems that automate complex workflows, predict market trends, and empower your workforce with next-gen intelligence.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="/contact" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
            <span className="relative z-10">Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a href="/services" className="px-8 py-4 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-white/80 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300">
            View Case Studies
          </a>
        </motion.div>

        {/* Stats / Trust */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm font-medium text-gray-500 dark:text-gray-400">
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
      <section className="relative z-10 px-6 md:px-16 py-20 max-w-7xl mx-auto">
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
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            From computer vision to predictive analytics, we provide end-to-end AI development tailored to your specific industry needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/50 dark:border-slate-700/50 p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all overflow-hidden"
              >
                {/* Card Gradient Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform cursor-pointer">
                    Explore Solution <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==================== CTA SECTION ==================== */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 shadow-2xl shadow-blue-900/40">
            {/* Overlay Patterns */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            <div className="absolute -left-20 -top-20 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl"></div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-10 text-center md:text-left">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Data?
                    </h2>
                    <p className="text-blue-100 text-lg max-w-xl">
                        Schedule a free consultation with our AI architects and discover how much time and revenue you can save.
                    </p>
                </div>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-full shadow-xl hover:shadow-2xl transition-all whitespace-nowrap"
                >
                    Book a Demo
                </motion.button>
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
          0%, 100% { opacity: 0.2; transform: translateY(0); }
          50% { opacity: 0.5; transform: translateY(-25px); }
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