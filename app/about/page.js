"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Users, 
  Sparkles, 
  Database, 
  Zap, 
  TrendingUp, 
  Shield, 
  Layers, 
  Globe, 
  Target,
  Heart,
  ArrowRight,
  Code,
  Braces,
  Terminal,
  Server,
  Cloud
} from 'lucide-react';

export default function AboutUs() {
  const [activeService, setActiveService] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [iconPositions, setIconPositions] = useState([]);

  const services = [
    {
      icon: Brain,
      title: "AI Agents & Cognitive Automation",
      description: "Building autonomous digital agents that think, learn, and act — enabling seamless automation of complex workflows."
    },
    {
      icon: Sparkles,
      title: "Generative AI & LLM Solutions",
      description: "Designing next-gen GenAI platforms using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) for dynamic text, image, and process generation."
    },
    {
      icon: TrendingUp,
      title: "Advanced Data Science & Analytics",
      description: "Transforming massive datasets into actionable insights through predictive modeling, statistical intelligence, and visualization."
    },
    {
      icon: Database,
      title: "Precision Data Annotation",
      description: "Delivering high-quality labeled datasets to train, validate, and scale AI systems with accuracy and speed."
    },
    {
      icon: Zap,
      title: "AI-Powered Workflow Intelligence",
      description: "Reimagining business operations with automated, adaptive, and data-driven process optimization."
    }
  ];

  const whyChoose = [
    {
      icon: Layers,
      title: "End-to-End Intelligence",
      description: "From data collection to model deployment — a unified AI ecosystem built around your goals."
    },
    {
      icon: Sparkles,
      title: "Cutting-Edge Innovation",
      description: "We leverage the latest in Generative AI, LLMs, and Machine Learning to craft future-ready solutions."
    },
    {
      icon: Shield,
      title: "Ethics & Trust",
      description: "Transparency, data security, and fairness are at the heart of every system we build."
    },
    {
      icon: TrendingUp,
      title: "Scalable Impact",
      description: "Our modular architecture ensures agility, adaptability, and growth at every stage of your AI journey."
    },
    {
      icon: Globe,
      title: "Global Vision, Local Insight",
      description: "We blend global expertise with domain-specific intelligence for lasting impact."
    }
  ];

  const techIcons = [
    { icon: <Code size={16} />, color: "from-blue-300/20 to-blue-400/20" },
    { icon: <Braces size={16} />, color: "from-purple-300/20 to-purple-400/20" },
    { icon: <Database size={16} />, color: "from-green-300/20 to-green-400/20" },
    { icon: <Terminal size={16} />, color: "from-slate-300/20 to-slate-400/20" },
    { icon: <Server size={16} />, color: "from-orange-300/20 to-orange-400/20" },
    { icon: <Cloud size={16} />, color: "from-sky-300/20 to-sky-400/20" },
    { icon: <Brain size={16} />, color: "from-indigo-300/20 to-indigo-400/20" },
    { icon: <Zap size={16} />, color: "from-amber-300/20 to-amber-400/20" },
  ];

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);

    const calculatePositions = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const gridCols = vw < 640 ? 3 : vw < 1024 ? 4 : 5;
      const gridRows = 2;
      const cellW = vw / gridCols;
      const cellH = (vh * 0.6) / gridRows;

      const icons = [];
      const maxIcons = vw < 640 ? 6 : vw < 1024 ? 10 : 12;

      for (let i = 0; i < maxIcons; i++) {
        const col = Math.floor(Math.random() * gridCols);
        const row = Math.floor(Math.random() * gridRows);
        const x = col * cellW + Math.random() * (cellW * 0.7);
        const y = row * cellH + Math.random() * (cellH * 0.7);
        const size = (vw < 640 ? 30 : vw < 1024 ? 40 : 50) + Math.random() * 15;
        icons.push({ x, y, size, icon: techIcons[Math.floor(Math.random() * techIcons.length)] });
      }
      setIconPositions(icons);
    };

    calculatePositions();
    window.addEventListener("resize", calculatePositions);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", calculatePositions);
    };
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/80 dark:to-[#0b1220] text-gray-900 dark:text-white overflow-hidden">
      
      {/* Hero Section - Compact */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24"
      >
        {/* Background Animated Icons */}
        {isMounted && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {iconPositions.map((pos, i) => (
              <motion.div
                key={`icon-${i}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0.2, 0.4, 0.2], scale: 1 }}
                transition={{ 
                  opacity: { duration: 3, repeat: Infinity, delay: i * 0.2 },
                  scale: { duration: 0.5, delay: i * 0.1 }
                }}
                className={`absolute rounded-lg bg-gradient-to-br ${pos.icon.color} backdrop-blur-sm flex items-center justify-center text-indigo-600/70 dark:text-indigo-300/70`}
                style={{ width: pos.size, height: pos.size, left: pos.x, top: pos.y }}
              >
                {pos.icon.icon}
              </motion.div>
            ))}
          </div>
        )}

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="p-3 sm:p-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-xl shadow-lg">
              <Brain className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 bg-clip-text text-transparent leading-tight"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are redefining the boundaries of intelligence. Our mission is to build a future powered by ethical, adaptive, and human-aligned Artificial Intelligence — transforming how businesses operate, innovate, and grow.
          </motion.p>
        </div>
      </motion.section>

      {/* Who We Are - Diagonal Split */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }} />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div variants={itemVariants} className="flex flex-col items-center mb-8 sm:mb-12">
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="p-3 sm:p-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-2xl shadow-xl mb-4"
            >
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100 text-center">Who We Are</h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-700/20 rounded-3xl blur-2xl" />
            <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md p-8 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border-2 border-blue-200/50 dark:border-blue-500/30 shadow-2xl">
              <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-slate-200 text-center leading-relaxed">
                We are a team of visionaries, data scientists, engineers, and innovators passionate about building intelligent systems that make a measurable difference. Our multidisciplinary expertise spans Machine Learning, Generative AI, Data Analytics, and Workflow Intelligence, empowering organizations to harness the full potential of data and automation.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What We Do - Hexagonal Layout */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={fadeInVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-gray-900 dark:text-slate-100"
          >
            What We Do
          </motion.h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-6 auto-rows-fr">
            {services.map((service, index) => {
              const Icon = service.icon;
              const layouts = [
                "md:col-span-3 md:row-span-1", // 0
                "md:col-span-3 md:row-span-1", // 1
                "md:col-span-2 md:row-span-1", // 2
                "md:col-span-2 md:row-span-1", // 3
                "md:col-span-2 md:row-span-1"  // 4
              ];
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`group relative ${layouts[index]}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-200/50 dark:border-slate-700/50 hover:border-blue-400/70 dark:hover:border-blue-500/70 transition-all duration-300 h-full shadow-xl flex flex-col">
                    <motion.div 
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className="p-3 sm:p-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-2xl inline-flex items-center justify-center mb-4 sm:mb-6 w-fit shadow-lg"
                    >
                      <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-slate-100">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 leading-relaxed flex-grow">{service.description}</p>
                    <motion.div 
                      className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <ArrowRight className="w-5 h-5 text-blue-500" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission - Side by Side Cards with Tilt */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10" style={{ clipPath: 'polygon(0 15%, 100% 0, 100% 100%, 0 100%)' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-stretch">
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div 
                animate={{ 
                  rotate: [0, 5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-transparent rounded-3xl blur-3xl" 
              />
              <div className="relative bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-900/80 backdrop-blur-xl p-8 sm:p-10 lg:p-12 rounded-3xl border-2 border-cyan-200/50 dark:border-cyan-500/30 shadow-2xl h-full transform transition-all duration-500 group-hover:shadow-cyan-500/50">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl shadow-xl"
                  >
                    <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100">Our Vision</h3>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6" />
                <p className="text-base sm:text-lg text-gray-700 dark:text-slate-200 leading-relaxed">
                  To create a world where AI and humans collaborate seamlessly, driving innovation, creativity, and progress across every domain. We envision AI not as a tool, but as a partner in human advancement.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.02, rotateY: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div 
                animate={{ 
                  rotate: [0, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="absolute -inset-6 bg-gradient-to-bl from-indigo-400/30 via-purple-500/20 to-transparent rounded-3xl blur-3xl" 
              />
              <div className="relative bg-gradient-to-bl from-white via-indigo-50/30 to-purple-50/30 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-900/80 backdrop-blur-xl p-8 sm:p-10 lg:p-12 rounded-3xl border-2 border-indigo-200/50 dark:border-indigo-500/30 shadow-2xl h-full transform transition-all duration-500 group-hover:shadow-indigo-500/50">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                    className="p-4 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-2xl shadow-xl"
                  >
                    <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-100">Our Mission</h3>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-6" />
                <p className="text-base sm:text-lg text-gray-700 dark:text-slate-200 leading-relaxed">
                  To democratize access to intelligent technology by developing ethical, scalable, and enterprise-grade AI solutions that deliver measurable business impact and long-term value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us - Masonry Style */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={fadeInVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 md:mb-20 text-gray-900 dark:text-slate-100"
          >
            Why Choose Us
          </motion.h2>

          {/* Masonry-inspired Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 auto-rows-auto">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              const layouts = [
                "md:col-span-7", // 0 - wider
                "md:col-span-5", // 1 - narrower
                "md:col-span-4", // 2
                "md:col-span-4", // 3
                "md:col-span-4", // 4
              ];
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  className={`group relative ${layouts[index]}`}
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-200/60 dark:border-slate-700/60 hover:border-blue-400/80 dark:hover:border-blue-500/80 transition-all duration-300 shadow-xl h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full" />
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="relative z-10 mb-4 sm:mb-5"
                    >
                      <div className="p-3 sm:p-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-2xl inline-flex shadow-lg">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 dark:text-slate-100 relative z-10">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 leading-relaxed relative z-10">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Our Promise */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            variants={fadeInVariants}
            className="mb-6 sm:mb-8"
          >
            <motion.div 
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="inline-block p-3 sm:p-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-xl sm:rounded-2xl shadow-lg"
            >
              <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
            </motion.div>
          </motion.div>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-gray-900 dark:text-slate-100"
          >
            Our Promise
          </motion.h2>

          <motion.div 
            variants={containerVariants}
            className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-300 mb-8 sm:mb-12"
          >
            <motion.p variants={itemVariants} className="leading-relaxed">
              To turn data into intelligence, and intelligence into opportunity.
            </motion.p>
            <motion.p variants={itemVariants} className="leading-relaxed">
              To transform challenges into solutions, and ideas into innovation.
            </motion.p>
            <motion.p variants={itemVariants} className="leading-relaxed">
              To build AI that works for people — not the other way around.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center gap-2 sm:gap-3 mx-auto hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              Start Your AI Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}