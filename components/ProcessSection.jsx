"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Target,
  Lightbulb,
  Code,
  Rocket,
  Users,
  Zap,
  Sparkles,
  Shield,
} from "lucide-react";
import Link from "next/link";

// Detects mobile viewport
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768); // md breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return isMobile;
}

export default function ProcessSection() {
  const processRef = useRef(null);
  const processInView = useInView(processRef, { margin: "-100px" });
  const whyChooseUsRef = useRef(null);
  const whyChooseUsInView = useInView(whyChooseUsRef, {
    margin: "-50px",
    once: false,
  });
  const isMobile = useIsMobile();

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(processInView);
  }, [processInView]);

  // Data
  const steps = [
    {
      icon: Target,
      title: "Discovery & Analysis",
      description:
        "We analyze your business needs and identify AI opportunities.",
      step: "01",
    },
    {
      icon: Lightbulb,
      title: "Strategy Development",
      description: "Create a customized AI roadmap tailored to your goals.",
      step: "02",
    },
    {
      icon: Code,
      title: "Implementation",
      description: "Build and deploy cutting-edge AI solutions.",
      step: "03",
    },
    {
      icon: Rocket,
      title: "Optimization",
      description: "Continuous monitoring and improvement of AI systems.",
      step: "04",
    },
  ];

  const reasons = [
    {
      icon: Target,
      title: "Precision-Driven",
      desc: "Every solution is crafted with meticulous attention to your specific needs.",
    },
    {
      icon: Rocket,
      title: "Future-Ready",
      desc: "Stay ahead with cutting-edge AI technologies and methodologies.",
    },
    {
      icon: Users,
      title: "Expert Team",
      desc: "Work with seasoned AI professionals and industry veterans.",
    },
  ];

  // Animations
  const headingVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  // ✅ JS-only: remove TypeScript type annotation
  const cardVariant = {
    hidden: isMobile ? { y: -80, opacity: 0 } : { x: -80, opacity: 0 },
    visible: (i) => ({
      x: 0,
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.25, duration: 0.8, ease: "easeOut" },
    }),
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <>
      {/* ===== Process Section ===== */}
      <section
        ref={processRef}
        className="py-16 md:py-24 px-4 md:px-6 relative z-10"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial="hidden"
            animate={animate ? "visible" : "hidden"}
            variants={headingVariant}
            className="text-center mb-12 md:mb-20"
          >
            <h2
              id="process-heading"
              className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that delivers exceptional AI solutions.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            role="list"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.step}
                  role="listitem"
                  aria-label={`${step.title}: ${step.description}`}
                  className="flex relative"
                  custom={i}
                  initial="hidden"
                  animate={animate ? "visible" : "hidden"}
                  variants={cardVariant}
                >
                  <motion.div
                    className="bg-gradient-to-br from-white/80 to-gray-100/80 backdrop-blur-lg 
                               rounded-2xl p-6 md:p-8 border border-gray-200/50 
                               text-center flex flex-col h-full w-full relative overflow-hidden"
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    {/* Step Number */}
                    <div
                      className="absolute top-4 right-4 text-6xl md:text-7xl font-bold text-cyan-400/10"
                      aria-hidden="true"
                    >
                      {step.step}
                    </div>

                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-blue-500 
                                 rounded-xl flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon
                        size={28}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm md:text-base flex-grow">
                      {step.description}
                    </p>
                  </motion.div>

                  {/* Connector (desktop) */}
                  {!isMobile && i < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 
                                 bg-gradient-to-r from-cyan-400 to-blue-500 -translate-y-1/2"
                    />
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== Why Choose Us Section ===== */}
      <motion.section
        ref={whyChooseUsRef}
        id="why-choose-us"
        className="py-16 md:py-28 px-4 md:px-6 relative z-10"
        aria-labelledby="why-choose-heading"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={whyChooseUsInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2
              id="why-choose-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12"
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>

            <div className="space-y-6 md:space-y-8">
              {reasons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ x: -50, opacity: 0 }}
                    animate={whyChooseUsInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0}}
                    transition={{ delay: i * 0.2, duration: 0.6 }}
                    className="flex items-start gap-4 group"
                    whileHover={{ x: 10 }}
                  >
                    <motion.div
                      className="w-10 h-10 md:w-10 md:h-10 bg-gradient-to-r from-cyan-400 to-blue-500 
                                 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon
                        size={22}
                        className="text-white"
                        aria-hidden="true"
                      />
                    </motion.div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 text-gray-800 group-hover:text-cyan-500 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={whyChooseUsInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-8"
            >
              <Link href="/about" aria-label="Learn more about us">
                <motion.button
                  className="px-6 md:px-6 py-3 md:py-3 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 
                             rounded-full text-white font-semibold text-base md:text-lg hover:shadow-2xl 
                             hover:shadow-blue-500/25 relative overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Learn More About Us</span>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={whyChooseUsInView ? { x: 0, opacity: 1 } : {x: 100, opacity: 0}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Container with Floating Animation */}
            <motion.div
              className="w-full h-64 md:h-96 bg-gradient-to-br from-cyan-200/40 via-blue-200/40 to-indigo-200/40 
               rounded-3xl backdrop-blur-lg border border-gray-200 relative overflow-hidden"
              animate={floatingAnimation}
            >
              {/* Center Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/port2.jpg" // replace with your image path
                  alt="AI Innovation"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 
               rounded-full flex items-center justify-center"
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <Zap size={24} className="text-white" aria-hidden="true" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-pink-500 
               rounded-full flex items-center justify-center"
              animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Sparkles size={32} className="text-white" aria-hidden="true" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-3 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-green-400 to-blue-500 
               rounded-full flex items-center justify-center"
              animate={{ x: [0, 20, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Shield size={12} className="text-white" aria-hidden="true" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
