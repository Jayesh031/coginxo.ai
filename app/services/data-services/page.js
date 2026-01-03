"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Database,
  Zap,
  TrendingUp,
  Shield,
  Layers,
  ArrowRight,
  Code,
  Braces,
  Terminal,
  Server,
  Cloud,
} from "lucide-react";

export default function DataServices() {
  const [isMounted, setIsMounted] = useState(false);

  const services = [
    {
      icon: Database,
      title: "Data Management & Warehousing",
      description:
        "Centralize, structure, and optimize data storage to ensure efficient access and secure management.",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics & Insights",
      description:
        "Turn raw data into actionable intelligence through dashboards and predictive modeling.",
    },
    {
      icon: Zap,
      title: "ETL & Data Integration",
      description:
        "Extract, transform, and load data from multiple sources into a unified analytics ecosystem.",
    },
    {
      icon: Shield,
      title: "Data Governance & Security",
      description:
        "Maintain integrity, privacy, and compliance with enterprise-grade data protection.",
    },
    {
      icon: Layers,
      title: "Big Data & Cloud Solutions",
      description:
        "Leverage scalable cloud infrastructure and distributed computing for large-scale analytics.",
    },
  ];

  const floatingIcons = [
    { icon: <Code size={18} className="text-blue-400/70" /> },
    { icon: <Braces size={18} className="text-purple-400/70" /> },
    { icon: <Database size={18} className="text-green-400/70" /> },
    { icon: <Terminal size={18} className="text-slate-400/70" /> },
    { icon: <Server size={18} className="text-orange-400/70" /> },
    { icon: <Cloud size={18} className="text-sky-400/70" /> },
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
              top: `${20 + (index * 12) % 60}%`,
              left: `${10 + (index * 15) % 70}%`,
            }}
          >
            {icon.icon}
          </motion.div>
        ))}

      {/* HERO SECTION */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative min-h-[70vh] flex flex-col justify-center items-center px-6 py-24 text-center"
      >
        {/* Gradient Background Orbs */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r 
          from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl"
        />

        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 14, delay: 2, repeat: Infinity }}
          className="absolute bottom-28 right-24 w-64 h-64 bg-gradient-to-r 
          from-indigo-400/20 to-purple-500/20 rounded-full blur-3xl"
        />

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold bg-gradient-to-r 
          from-cyan-500 via-blue-500 to-indigo-500 bg-clip-text text-transparent"
        >
          Data Services
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-3xl text-lg md:text-xl text-slate-600 
          dark:text-slate-300 mt-6"
        >
          Powerful, scalable, and intelligent data systems engineered to help 
          enterprises unlock insights and accelerate growth.
        </motion.p>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="flex gap-10 mt-12 flex-wrap justify-center"
        >
          {[
            { value: "10TB+", label: "Data Processed" },
            { value: "30+", label: "Pipelines Built" },
            { value: "99.9%", label: "Data Accuracy" },
            { value: "20+", label: "Cloud Deployments" },
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

      {/* SERVICES GRID (Bento Style) */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="px-6 md:px-12 py-20 max-w-6xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl font-bold text-center mb-16"
        >
          What We Offer
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
          Schedule a Consultation
        </motion.button>
      </motion.section>
    </div>
  );
}

