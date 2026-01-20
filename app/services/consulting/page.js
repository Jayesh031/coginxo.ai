"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Sparkles,
  Zap,
  Layers,
  TrendingUp,
  ArrowRight,
  Users,
  Globe,
  Target,
  Shield,
  Briefcase,
  Lightbulb,
  Presentation,
  CheckCircle,
  PieChart,
  Award,
  BookOpen,
  Activity
} from "lucide-react";

export default function ConsultingPage() {
  const [isMounted, setIsMounted] = useState(false);
  const [bgIconPositions, setBgIconPositions] = useState([]);
  const [codePositions, setCodePositions] = useState([]);

  // ==================== 1. BACKGROUND DATA ====================
  const techIcons = [
    { icon: <Briefcase size={24} />, color: "from-white to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40" },
    { icon: <Lightbulb size={24} />, color: "from-white to-slate-50 dark:from-gray-800/40 dark:to-gray-900/40" },
    { icon: <Target size={24} />, color: "from-white to-slate-50 dark:from-zinc-800/40 dark:to-zinc-900/40" },
    { icon: <Presentation size={24} />, color: "from-white to-slate-50 dark:from-neutral-800/40 dark:to-neutral-900/40" },
    { icon: <Users size={24} />, color: "from-white to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40" },
    { icon: <PieChart size={24} />, color: "from-white to-slate-50 dark:from-gray-800/40 dark:to-gray-900/40" },
    { icon: <TrendingUp size={24} />, color: "from-white to-slate-50 dark:from-zinc-800/40 dark:to-zinc-900/40" },
    { icon: <Globe size={24} />, color: "from-white to-slate-50 dark:from-neutral-800/40 dark:to-neutral-900/40" },
    { icon: <Award size={24} />, color: "from-white to-slate-50 dark:from-slate-800/40 dark:to-slate-900/40" },
    { icon: <BookOpen size={24} />, color: "from-white to-slate-50 dark:from-gray-800/40 dark:to-gray-900/40" },
    { icon: <Shield size={24} />, color: "from-white to-slate-50 dark:from-zinc-800/40 dark:to-zinc-900/40" },
    { icon: <Activity size={24} />, color: "from-white to-slate-50 dark:from-neutral-800/40 dark:to-neutral-900/40" },
  ];

  const codeShapes = [
    "Strategy.init()", "KPIs", "ROI > 200%", "Growth", "Scale",
    "Agile", "Scrum", "Q1_Forecast", "Q2_Goals", "Audit",
    "Compliance", "Risk_Mgmt", "Optimization", "Workflow",
    "Automation", "Digital_Tx", "Roadmap", "Milestone",
    "Stakeholders", "Budget", "Cost_Benefit", "Analysis",
    "Synergy", "Innovation", "Market_Fit", "User_Persona",
    "Launch()", "Deploy()", "Review()", "Iterate"
  ];

  // ==================== 2. SERVICES DATA ====================
  // Note: Added 'color' and 'tags' to match the layout requirements
  const services = [
    {
      icon: Brain,
      color: "from-blue-500 to-cyan-400",
      title: "AI Strategy & Roadmap",
      desc: "Define a long-term AI adoption plan that delivers measurable business outcomes and competitive advantage.",
      tags: ["Roadmap", "Feasibility", "Audit"]
    },
    {
      icon: Sparkles,
      color: "from-purple-500 to-pink-400",
      title: "Digital Transformation",
      desc: "Modernize legacy workflows and operations using intelligent automation and next-gen software ecosystems.",
      tags: ["Modernization", "Automation", "Cloud"]
    },
    {
      icon: Zap,
      color: "from-orange-500 to-red-400",
      title: "Process Optimization",
      desc: "Reduce operational inefficiencies and bottlenecks using predictive intelligence and automated insights.",
      tags: ["Efficiency", "Cost-Reduction", "Speed"]
    },
    {
      icon: Layers,
      color: "from-emerald-500 to-green-400",
      title: "Technology Advisory",
      desc: "Expert guidance on choosing the right AI, cloud, and data stack for your scalable enterprise needs.",
      tags: ["Tech Stack", "Vendor Selection", "Architecture"]
    },
    {
      icon: TrendingUp,
      color: "from-indigo-500 to-blue-600",
      title: "Impact Measurement",
      desc: "Evaluate the performance of AI initiatives with strict KPI tracking to ensure maximum ROI.",
      tags: ["Analytics", "Reporting", "KPIs"]
    },
    {
      icon: Users,
      color: "from-cyan-500 to-blue-500",
      title: "Team Enablement",
      desc: "Upskill your workforce to effectively use new AI tools and maintain a culture of innovation.",
      tags: ["Training", "Workshops", "Culture"]
    },
  ];

  // ==================== 3. BACKGROUND LOGIC ====================
  useEffect(() => {
    setIsMounted(true);

    const calculatePositions = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;

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
          if (Math.random() > 0.65) continue; 
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
          
          {/* --- GLOWING BUBBLES --- */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/30 dark:bg-blue-600/10 rounded-full blur-[60px] -z-10"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-400/30 dark:bg-indigo-600/10 rounded-full blur-[60px] -z-10"></div>

          {/* Icons */}
          {bgIconPositions.map((pos, i) => (
            <div
              key={`icon-${i}`}
              className={`absolute rounded-2xl bg-gradient-to-br ${pos.icon.color} backdrop-blur-[2px] border border-slate-200/50 dark:border-white/5 flex items-center justify-center text-slate-500/50 dark:text-slate-400/30 animate-float-background shadow-sm`}
              style={{
                width: pos.size,
                height: pos.size,
                left: pos.x,
                top: pos.y,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.6 
              }}
            >
              {pos.icon.icon}
            </div>
          ))}
          
          {/* Code Snippets */}
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
        <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Strategic Innovation for <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent drop-shadow-sm">
            Scalable Growth
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-700 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
          Partner with our experts to design, implement, and scale AI-driven initiatives that modernize your operations and boost efficiency.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a href="/contact" className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-700 text-white font-bold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden">
            <span className="relative z-10">Book Strategy Call</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
          
          <a href="/about" className="px-8 py-4 rounded-full bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white font-semibold shadow-md hover:bg-white/90 dark:hover:bg-slate-700 hover:scale-105 transition-all duration-300">
            About Our Team
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-12 text-sm font-bold text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" /> 40+ AI Deployments
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500" /> 15+ Industries
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500" /> 24/7 Expert Support
          </div>
        </motion.div>
      </motion.section>

      {/* ==================== STANDARD GRID (UNIFORM LAYOUT) ==================== */}
      <section className="relative z-10 px-6 md:px-12 py-20 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
            How We Help
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
             Comprehensive advisory services to guide your transformation journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((item, index) => {
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
                    View Details 
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
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Unsure where to start?</h2>
              <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                Schedule a discovery call to identify the highest-impact opportunities for your organization.
              </p>
              <button className="px-10 py-4 bg-white text-blue-700 font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Book a Discovery Call
              </button>
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