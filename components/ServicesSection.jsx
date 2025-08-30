"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Database, Bot, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { once: true, margin: "-50px" })

  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "Transform your business with tailored AI strategies that drive innovation and growth.",
      gradient: "from-cyan-400 to-blue-500",
      href: "/services/ai-solutions",
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "Build cutting-edge AI solutions customized to your specific business needs.",
      gradient: "from-blue-500 to-indigo-600",
      href: "/services/ai-solutions",
    },
    {
      icon: Database,
      title: "Machine Learning Models",
      description: "Develop and deploy sophisticated ML models that learn and adapt to your data.",
      gradient: "from-indigo-600 to-purple-600",
      href: "/services/data-services",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Streamline operations with intelligent automation that works around the clock.",
      gradient: "from-purple-600 to-cyan-400",
      href: "/services/consulting",
    },
  ]

  return (
    <motion.section ref={servicesRef} id="services" className="py-16 md:py-32 px-4 md:px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={servicesInView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive AI solutions tailored to revolutionize your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div
                key={index}
                initial={{ y: 100, opacity: 0 }}
                animate={servicesInView ? { y: 0, opacity: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative group"
              >
                <Link href={service.href}>
                  <motion.div
                    className={`bg-gradient-to-br from-white/80 to-gray-100/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-200/50 hover:border-cyan-400/50 transition-all duration-300 h-full relative overflow-hidden cursor-pointer`}
                    whileHover={{ y: -10, scale: 1.02 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />

                    <motion.div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-4 md:mb-6 relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent size={24} className="text-white md:w-8 md:h-8" />
                    </motion.div>

                    <h3
                      className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 group-hover:text-cyan-400 transition-colors relative z-10"
                    >
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed relative z-10 text-sm md:text-base mb-4">
                      {service.description}
                    </p>

                    <motion.div
                      className="flex items-center text-cyan-400 font-semibold text-sm md:text-base relative z-10"
                      whileHover={{ x: 5 }}
                    >
                      Learn More <ExternalLink size={16} className="ml-2 md:w-4 md:h-4" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
