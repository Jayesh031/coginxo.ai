"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Brain,
  Zap,
  Cpu,
  Cloud,
  Bot,
  MessageSquare,
  Star,
  Code,
  Database,
  Rocket,
  ArrowRight,
  Server,
  Workflow,
  Terminal,
  Gauge,
  Scan,
  Layers,
} from "lucide-react";

export default function AISolutions() {
  const [isMounted, setIsMounted] = useState(false);
  const [iconPositions, setIconPositions] = useState([]);

  // Solutions List
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

  // Floating Icons Setup
  const floatingIcons = [
    { icon: <Code size={16} />, color: "from-blue-300/20 to-blue-500/30" },
    { icon: <Cpu size={16} />, color: "from-indigo-300/20 to-indigo-500/30" },
    { icon: <Cloud size={16} />, color: "from-sky-300/20 to-sky-500/30" },
    { icon: <Database size={16} />, color: "from-green-300/20 to-green-500/30" },
    { icon: <Zap size={16} />, color: "from-yellow-300/20 to-yellow-500/30" },
    { icon: <Terminal size={16} />, color: "from-slate-300/20 to-slate-500/30" },
    { icon: <Workflow size={16} />, color: "from-purple-300/20 to-purple-500/30" },
    { icon: <Bot size={16} />, color: "from-pink-300/20 to-pink-500/30" },
  ];

  useEffect(() => {
    setIsMounted(true);

    const placeIcons = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight * 0.8;
      const count = vw < 640 ? 6 : vw < 1024 ? 10 : 14;

      const newIcons = Array.from({ length: count }).map(() => ({
        x: Math.random() * vw,
        y: Math.random() * vh,
        size: vw < 640 ? 30 : vw < 1024 ? 40 : 50,
        icon: floatingIcons[Math.floor(Math.random() * floatingIcons.length)],
      }));

      setIconPositions(newIcons);
    };

    placeIcons();
    window.addEventListener("resize", placeIcons);
    return () => window.removeEventListener("resize", placeIcons);
  }, []);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/80 dark:to-[#0b1220] overflow-hidden text-gray-900 dark:text-white">

      {/* ===================== HERO SECTION ===================== */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative min-h-[90vh] flex items-center justify-center px-6 py-24 overflow-hidden"
      >

        {/* Floating Random Icons */}
        {isMounted &&
          iconPositions.map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.4, 0.85, 0.4],
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute p-3 rounded-2xl bg-gradient-to-br ${pos.icon.color} backdrop-blur-md border border-white/10`}
              style={{
                left: pos.x,
                top: pos.y,
                width: pos.size,
                height: pos.size,
              }}
            >
              {pos.icon.icon}
            </motion.div>
          ))}

        {/* Gradient Blobs */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-r from-cyan-300/25 to-blue-500/25 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -70, 0], y: [0, 50, 0] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-r from-indigo-300/25 to-purple-500/25 rounded-full blur-3xl"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:55px_55px] [mask-image:radial-gradient(circle_70%_70%_at_50%_50%,black,transparent)]" />
        </div>

        {/* Main Heading */}
        <div className="relative z-10 text-center max-w-4xl">
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            We build intelligent, scalable, and enterprise-grade AI systems that automate workflows, enhance efficiency, and accelerate business growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition"
            >
              Build With AI
            </motion.a>

            <motion.a
              href="/services"
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-full bg-white/70 dark:bg-slate-800/60 backdrop-blur-sm text-gray-800 dark:text-gray-200 border border-gray-300/40 dark:border-gray-600/40 font-semibold text-lg shadow-lg"
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* ===================== SOLUTIONS GRID ===================== */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="px-6 md:px-16 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          What We Build
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {solutions.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 rounded-2xl border border-gray-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Glow */}
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-700/20 rounded-3xl blur-xl opacity-70" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-md inline-flex mb-5">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <motion.div
                    whileHover={{ x: 6 }}
                    className="mt-4 flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* ===================== CTA SECTION ===================== */}
      <section className="px-6 md:px-20 py-20 text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900/40 dark:to-slate-900/70 backdrop-blur-xl">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
          Need a Custom AI Solution?
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Let’s build intelligent systems tailored to your business goals — from automation to predictive models to fully autonomous AI agents.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:scale-105 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}