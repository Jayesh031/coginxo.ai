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
  Cloud,
  Cpu,
  Network,
  CircuitBoard
} from 'lucide-react';

export default function AboutUs() {
  const [activeService, setActiveService] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const services = [
    // ... (keep your existing services array)
  ];

  const whyChoose = [
    // ... (keep your existing whyChoose array)
  ];

  const techIcons = [
    { icon: <Code size={16} />, color: "from-blue-500/20 to-cyan-500/20" },
    { icon: <Braces size={16} />, color: "from-purple-500/20 to-pink-500/20" },
    { icon: <Database size={16} />, color: "from-emerald-500/20 to-green-500/20" },
    { icon: <Terminal size={16} />, color: "from-orange-500/20 to-red-500/20" },
    { icon: <Server size={16} />, color: "from-amber-500/20 to-yellow-500/20" },
    { icon: <Cloud size={16} />, color: "from-sky-500/20 to-blue-500/20" },
    { icon: <Brain size={16} />, color: "from-indigo-500/20 to-purple-500/20" },
    { icon: <Zap size={16} />, color: "from-cyan-500/20 to-teal-500/20" },
  ];

  useEffect(() => {
    setIsMounted(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220] text-gray-900 dark:text-white overflow-hidden">
      
      {/* New Hero Section Design */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              delay: 2
            }}
            className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"
          />
          
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
          </div>

          {/* Floating Tech Icons */}
          {isMounted && techIcons.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: 1,
                y: [0, -20, 0],
                x: [0, 10, 0]
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                delay: index * 0.5,
                ease: "easeInOut"
              }}
              className={`absolute p-3 rounded-2xl bg-gradient-to-br ${tech.color} backdrop-blur-sm border border-white/10`}
              style={{
                left: `${20 + (index * 12) % 60}%`,
                top: `${30 + (index * 8) % 40}%`,
              }}
            >
              {tech.icon}
            </motion.div>
          ))}
        </div>

        {/* Mouse Follow Gradient */}
        <motion.div
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Badge */}
          <motion.div
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md px-6 py-3 rounded-full border border-gray-200/50 dark:border-slate-700/50 shadow-lg mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            />
            <span className="text-sm font-medium bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">
              Pioneering the Future of Artificial Intelligence
            </span>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
                Intelligent
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Innovation
              </span>
              <br />
              <span className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 dark:from-slate-300 dark:via-slate-200 dark:to-slate-300 bg-clip-text text-transparent">
                Redefined
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light"
            >
              We build <span className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">ethical AI systems</span> that transform businesses, empower innovation, and shape the future of human-machine collaboration.
            </motion.p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 mb-12"
          >
            {[
              { number: "50+", label: "AI Projects" },
              { number: "15+", label: "Industries" },
              { number: "99%", label: "Accuracy" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Start Your AI Journey
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="group-hover:translate-x-1 transition-transform duration-300"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 backdrop-blur-md border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <CircuitBoard className="w-5 h-5" />
              View Our Work
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-slate-400/50 dark:border-slate-600/50 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-slate-400/50 dark:bg-slate-600/50 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Rest of your existing sections remain the same */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-14 overflow-hidden"
      >
        {/* ... rest of your existing Who We Are section ... */}
      </motion.section>

      {/* ... other sections remain unchanged ... */}
    </div>
  );
}