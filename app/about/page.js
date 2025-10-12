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

      {/* Who We Are */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
            <Users className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-slate-100">Who We Are</h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-slate-300 text-center max-w-4xl mx-auto leading-relaxed"
          >
            We are a team of visionaries, data scientists, engineers, and innovators passionate about building intelligent systems that make a measurable difference. Our multidisciplinary expertise spans Machine Learning, Generative AI, Data Analytics, and Workflow Intelligence, empowering organizations to harness the full potential of data and automation.
          </motion.p>
        </div>
      </motion.section>

      {/* What We Do */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 dark:text-slate-100"
          >
            What We Do
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl sm:rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                  <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full shadow-lg">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="p-2 sm:p-3 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-lg sm:rounded-xl inline-block mb-3 sm:mb-4"
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-slate-100">{service.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 backdrop-blur-sm"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl sm:rounded-3xl blur-2xl" 
              />
              <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg h-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 sm:p-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg sm:rounded-xl"
                  >
                    <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100">Our Vision</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  To create a world where AI and humans collaborate seamlessly, driving innovation, creativity, and progress across every domain. We envision AI not as a tool, but as a partner in human advancement.
                </p>
              </div>
            </motion.div>

            <motion.div 
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative"
            >
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-2xl sm:rounded-3xl blur-2xl" 
              />
              <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-sm p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-slate-700 hover:border-indigo-500/50 transition-all duration-300 shadow-lg h-full">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="p-2 sm:p-3 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg sm:rounded-xl"
                  >
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100">Our Mission</h3>
                </div>
                <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 leading-relaxed">
                  To democratize access to intelligent technology by developing ethical, scalable, and enterprise-grade AI solutions that deliver measurable business impact and long-term value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 text-gray-900 dark:text-slate-100"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gradient-to-br from-white to-sky-50 dark:from-slate-800/80 dark:to-slate-900/80 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-500/50 transition-all duration-300 shadow-lg h-full">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mb-3 sm:mb-4" />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-slate-100">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
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