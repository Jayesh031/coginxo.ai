"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Target, Lightbulb, Code, Rocket } from "lucide-react"

export default function ProcessSection() {
  const processRef = useRef(null)
  const processInView = useInView(processRef, { once: true, margin: "-50px" })

  const process = [
    {
      icon: Target,
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify AI opportunities",
      step: "01",
    },
    {
      icon: Lightbulb,
      title: "Strategy Development",
      description: "Create a customized AI roadmap tailored to your goals",
      step: "02",
    },
    {
      icon: Code,
      title: "Implementation",
      description: "Build and deploy cutting-edge AI solutions",
      step: "03",
    },
    {
      icon: Rocket,
      title: "Optimization",
      description: "Continuous monitoring and improvement of AI systems",
      step: "04",
    },
  ]

  return (
    <motion.section ref={processRef} className="py-16 md:py-32 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={processInView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Our Process
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            A proven methodology that delivers exceptional AI solutions
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {process.map((step, index) => {
            const IconComponent = step.icon
            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={processInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative"
              >
                <motion.div
                  className="bg-gradient-to-br from-white/80 to-gray-100/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-200/50 text-center relative overflow-hidden"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  {/* Step Number (background text) */}
                  <div className="absolute top-4 right-4 text-6xl md:text-8xl font-bold text-cyan-400/10">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 md:mb-6 relative z-10"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <IconComponent size={24} className="text-white md:w-8 md:h-8" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-gray-900 relative z-10">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base relative z-10">
                    {step.description}
                  </p>
                </motion.div>

                {/* Arrow Line (for large screens) */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform -translate-y-1/2 z-0" />
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
