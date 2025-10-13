"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  CircuitBoard,
} from "lucide-react";

export default function AboutUs() {
  const [activeService, setActiveService] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [iconPositions, setIconPositions] = useState([]);

  const services = [
    {
      icon: Brain,
      title: "AI Agents & Cognitive Automation",
      description:
        "Building autonomous digital agents that think, learn, and act — enabling seamless automation of complex workflows.",
    },
    {
      icon: Sparkles,
      title: "Generative AI & LLM Solutions",
      description:
        "Designing next-gen GenAI platforms using Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) for dynamic text, image, and process generation.",
    },
    {
      icon: TrendingUp,
      title: "Advanced Data Science & Analytics",
      description:
        "Transforming massive datasets into actionable insights through predictive modeling, statistical intelligence, and visualization.",
    },
    {
      icon: Database,
      title: "Precision Data Annotation",
      description:
        "Delivering high-quality labeled datasets to train, validate, and scale AI systems with accuracy and speed.",
    },
    {
      icon: Zap,
      title: "AI-Powered Workflow Intelligence",
      description:
        "Reimagining business operations with automated, adaptive, and data-driven process optimization.",
    },
  ];

  const whyChoose = [
    {
      icon: Layers,
      title: "End-to-End Intelligence",
      description:
        "From data collection to model deployment — a unified AI ecosystem built around your goals.",
    },
    {
      icon: Sparkles,
      title: "Cutting-Edge Innovation",
      description:
        "We leverage the latest in Generative AI, LLMs, and Machine Learning to craft future-ready solutions.",
    },
    {
      icon: Shield,
      title: "Ethics & Trust",
      description:
        "Transparency, data security, and fairness are at the heart of every system we build.",
    },
    {
      icon: TrendingUp,
      title: "Scalable Impact",
      description:
        "Our modular architecture ensures agility, adaptability, and growth at every stage of your AI journey.",
    },
    {
      icon: Globe,
      title: "Global Vision, Local Insight",
      description:
        "We blend global expertise with domain-specific intelligence for lasting impact.",
    },
  ];

  const techIcons = [
    { icon: <Code size={14} />, color: "from-blue-300/20 to-blue-400/20" },
    {
      icon: <Braces size={14} />,
      color: "from-purple-300/20 to-purple-400/20",
    },
    {
      icon: <Database size={14} />,
      color: "from-green-300/20 to-green-400/20",
    },
    {
      icon: <Terminal size={14} />,
      color: "from-slate-300/20 to-slate-400/20",
    },
    {
      icon: <Server size={14} />,
      color: "from-orange-300/20 to-orange-400/20",
    },
    { icon: <Cloud size={14} />, color: "from-sky-300/20 to-sky-400/20" },
    { icon: <Brain size={14} />, color: "from-indigo-300/20 to-indigo-400/20" },
    { icon: <Zap size={14} />, color: "from-amber-300/20 to-amber-400/20" },
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
        const size = (vw < 640 ? 24 : vw < 1024 ? 32 : 40) + Math.random() * 12;
        icons.push({
          x,
          y,
          size,
          icon: techIcons[Math.floor(Math.random() * techIcons.length)],
        });
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
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/80 dark:to-[#0b1220] text-gray-900 dark:text-white overflow-hidden md:mt-8">
      {/* Hero Section - Compact */}
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
              ease: "linear",
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
              delay: 2,
            }}
            className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-purple-500/15 rounded-full blur-3xl"
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
          </div>

          {/* Floating Tech Icons */}
          {isMounted &&
            techIcons.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: 1,
                  y: [0, -20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 8 + index * 2,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
                className={`absolute p-3 rounded-2xl bg-gradient-to-br ${tech.color} backdrop-blur-sm border border-white/10`}
                style={{
                  left: `${20 + ((index * 12) % 60)}%`,
                  top: `${30 + ((index * 8) % 40)}%`,
                }}
              >
                {tech.icon}
              </motion.div>
            ))}
        </div>       

        <div className="max-w-6xl mx-auto text-center relative z-10">

          {/* Main Heading */}
          <motion.div
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
              We build{" "}
              <span className="font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                ethical AI systems
              </span>{" "}
              that transform businesses, empower innovation, and shape the
              future of human-machine collaboration.
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
              { number: "24/7", label: "Support" },
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
        </div>
      </motion.section>

      {/* Who We Are - Diagonal Split */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="relative px-4 sm:px-6 lg:px-8 py-10 sm:py-14 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-500/10 dark:to-indigo-500/10"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center mb-6 sm:mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-2 sm:p-3 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-xl shadow-lg mb-3"
            >
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-slate-100 text-center">
              Who We Are
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-indigo-700/20 rounded-2xl blur-xl" />
            <div className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-md p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-blue-200/50 dark:border-blue-500/30 shadow-lg">
              <p className="text-sm sm:text-base text-gray-700 dark:text-slate-200 text-center leading-relaxed">
                We are a team of visionaries, data scientists, engineers, and
                innovators passionate about building intelligent systems that
                make a measurable difference. Our multidisciplinary expertise
                spans Machine Learning, Generative AI, Data Analytics, and
                Workflow Intelligence, empowering organizations to harness the
                full potential of data and automation.
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
        className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-slate-100"
          >
            What We Do
          </motion.h2>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-3 sm:gap-4 auto-rows-fr">
            {services.map((service, index) => {
              const Icon = service.icon;
              const layouts = [
                "md:col-span-3 md:row-span-1",
                "md:col-span-3 md:row-span-1",
                "md:col-span-2 md:row-span-1",
                "md:col-span-2 md:row-span-1",
                "md:col-span-2 md:row-span-1",
              ];

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    rotate: index % 2 === 0 ? 0.5 : -0.5,
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className={`group relative ${layouts[index]}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative bg-white/80 dark:bg-slate-800/50 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-gray-200/50 dark:border-slate-700/50 hover:border-blue-400/70 dark:hover:border-blue-500/70 transition-all duration-300 h-full shadow-lg flex flex-col">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      className="p-2 sm:p-3 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-xl inline-flex items-center justify-center mb-3 sm:mb-4 w-fit shadow-md"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 dark:text-slate-100">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <motion.div
                      className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 3 }}
                    >
                      <ArrowRight className="w-4 h-4 text-blue-500" />
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
        className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-gradient-to-tl from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10"
          style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-stretch">
            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.01, rotateY: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{
                  rotate: [0, 2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -inset-4 bg-gradient-to-br from-cyan-400/20 via-blue-500/15 to-transparent rounded-2xl blur-2xl"
              />
              <div className="relative bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-900/80 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-cyan-200/50 dark:border-cyan-500/30 shadow-xl h-full transform transition-all duration-500 group-hover:shadow-cyan-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-xl shadow-lg"
                  >
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100">
                    Our Vision
                  </h3>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-4" />
                <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed">
                  To create a world where AI and humans collaborate seamlessly,
                  driving innovation, creativity, and progress across every
                  domain. We envision AI not as a tool, but as a partner in
                  human advancement.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ scale: 1.01, rotateY: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{
                  rotate: [0, -2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3,
                }}
                className="absolute -inset-4 bg-gradient-to-bl from-indigo-400/20 via-purple-500/15 to-transparent rounded-2xl blur-2xl"
              />
              <div className="relative bg-gradient-to-bl from-white via-indigo-50/30 to-purple-50/30 dark:from-slate-800/80 dark:via-slate-800/60 dark:to-slate-900/80 backdrop-blur-xl p-6 sm:p-7 rounded-2xl border border-indigo-200/50 dark:border-indigo-500/30 shadow-xl h-full transform transition-all duration-500 group-hover:shadow-indigo-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-xl shadow-lg"
                  >
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-slate-100">
                    Our Mission
                  </h3>
                </div>
                <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mb-4" />
                <p className="text-sm text-gray-700 dark:text-slate-200 leading-relaxed">
                  To democratize access to intelligent technology by developing
                  ethical, scalable, and enterprise-grade AI solutions that
                  deliver measurable business impact and long-term value.
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
        className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeInVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-slate-100"
          >
            Why Choose Us
          </motion.h2>

          {/* Masonry-inspired Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 auto-rows-auto">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              const layouts = [
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-4",
              ];

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className={`group relative ${layouts[index]}`}
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/15 via-blue-500/15 to-indigo-600/15 rounded-xl blur-md group-hover:blur-lg transition-all duration-300" />
                  <div className="relative bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800/90 dark:to-slate-900/90 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-gray-200/60 dark:border-slate-700/60 hover:border-blue-400/80 dark:hover:border-blue-500/80 transition-all duration-300 shadow-lg h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400/10 to-transparent rounded-bl-full" />
                    <motion.div
                      transition={{ duration: 0.4 }}
                      className="relative z-10 mb-3"
                    >
                      <div className="p-2 sm:p-3 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-xl inline-flex shadow-md">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </motion.div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-gray-900 dark:text-slate-100 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed relative z-10">
                      {item.description}
                    </p>
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
        className="px-4 sm:px-6 lg:px-8 py-10 sm:py-14 bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 dark:from-blue-900/10 dark:via-indigo-900/10 dark:to-purple-900/10 backdrop-blur-sm"
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.div variants={fadeInVariants} className="mb-4 sm:mb-6">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="inline-block p-2 sm:p-3 bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-700 rounded-lg shadow-lg"
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </motion.div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-slate-100"
          >
            Our Promise
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-6 sm:mb-8"
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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-base flex items-center gap-2 sm:gap-2 mx-auto hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
            >
              Start Your AI Journey
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
