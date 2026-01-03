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
} from "lucide-react";

export default function ConsultingPage() {
  const [isMounted, setIsMounted] = useState(false);

  const services = [
    {
      icon: Brain,
      title: "AI Strategy & Roadmap",
      description:
        "Define a long-term AI adoption plan that delivers measurable business outcomes.",
    },
    {
      icon: Sparkles,
      title: "Digital Transformation",
      description:
        "Modernize products, workflows, and operations using intelligent automation and AI systems.",
    },
    {
      icon: Zap,
      title: "Process Optimization",
      description:
        "Reduce operational inefficiencies using predictive intelligence and automated insights.",
    },
    {
      icon: Layers,
      title: "Technology Advisory",
      description:
        "Choose the right AI, cloud, and data technologies for scalable enterprise needs.",
    },
    {
      icon: TrendingUp,
      title: "Impact Measurement",
      description:
        "Evaluate the performance of AI initiatives and enhance ROI through continuous improvement.",
    },
  ];

  const floatingIcons = [
    { icon: <Users size={18} className="text-blue-400/70" /> },
    { icon: <Globe size={18} className="text-green-400/70" /> },
    { icon: <Target size={18} className="text-red-400/70" /> },
    { icon: <Shield size={18} className="text-purple-400/70" /> },
    { icon: <Zap size={18} className="text-orange-400/70" /> },
  ];

  useEffect(() => setIsMounted(true), []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-indigo-100 
    dark:from-[#0b1220] dark:via-[#0b1220]/80 dark:to-[#0b1220] overflow-hidden">

      {/* Floating Icons */}
      {isMounted &&
        floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className="absolute"
            animate={{ y: [0, 20, 0], x: [0, 10, 0], rotate: [0, 360] }}
            transition={{
              duration: 12 + index * 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              top: `${25 + (index * 12) % 50}%`,
              left: `${15 + (index * 14) % 70}%`,
            }}
          >
            {icon.icon}
          </motion.div>
        ))}

      {/* HERO */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-[70vh] flex flex-col justify-center items-center px-6 py-24 text-center"
      >
        {/* Gradient Orbs */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r 
          from-blue-400/20 to-purple-500/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -70, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-28 right-24 w-64 h-64 bg-gradient-to-r 
          from-indigo-400/20 to-blue-500/20 rounded-full blur-3xl"
        />

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 
          via-blue-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Consulting Services
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-6"
        >
          Partner with our experts to design, implement, and scale AI-driven 
          innovation across your entire organization.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex gap-10 mt-12 flex-wrap justify-center"
        >
          {[
            { value: "40+", label: "AI Deployments" },
            { value: "15+", label: "Industries Served" },
            { value: "95%", label: "Efficiency Boost" },
            { value: "24/7", label: "Expert Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold bg-gradient-to-r 
              from-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* SERVICES GRID */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.3 }}
        className="px-6 md:px-12 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-16"
        >
          How We Help
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-fr">
          {services.map((service, index) => {
            const Icon = service.icon;

            const layouts = [
              "md:col-span-3",
              "md:col-span-3",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-2",
            ];

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className={`relative bg-white/80 dark:bg-slate-800/60 
                backdrop-blur-md p-6 rounded-xl border dark:border-slate-700 shadow-lg ${layouts[index]}`}
              >
                <div className="p-3 mb-4 bg-gradient-to-br 
                from-cyan-400 via-blue-500 to-indigo-700 rounded-xl w-fit shadow-md">
                  <Icon className="text-white w-6 h-6" />
                </div>

                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>

                <ArrowRight className="w-4 h-4 text-blue-500 mt-3" />
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={itemVariants}
        className="text-center px-6 py-24"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-10 py-4 rounded-full text-lg font-semibold
          bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white shadow-lg"
        >
          Book a Strategy Call
        </motion.button>
      </motion.section>
    </div>
  );
}
