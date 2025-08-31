"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Code, Database, Bot, ExternalLink } from "lucide-react"
import Link from "next/link"

// Animation Variants
const headingVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
}

const cardVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: { delay: index * 0.2, duration: 0.8, ease: "easeOut" },
  }),
}

export default function ServicesSection() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { margin: "-100px", once: false }) // retriggers every time

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
    <section
      ref={servicesRef}
      id="services"
      aria-labelledby="services-heading"
      className="py-16 md:py-20 px-4 md:px-6 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={headingVariants}
          className="text-center mb-12 md:mb-20"
        >
          <h2 id="services-heading" className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Comprehensive AI solutions tailored to revolutionize your business operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-fr" role="list">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                role="listitem"
                aria-label={`${service.title}: ${service.description}`}
                custom={index}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={cardVariants}
                className="relative group flex"
              >
                <Link
                  href={service.href}
                  className="block w-full focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-2xl"
                >
                  <motion.div
                    className="flex flex-col justify-between bg-gradient-to-br from-white/80 to-gray-100/80 
                               backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-gray-200/50 
                               hover:border-cyan-400/50 transition-all duration-300 
                               h-full relative overflow-hidden cursor-pointer"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    {/* Background Hover Glow */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 
                                    to-indigo-600/10 rounded-2xl opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300"
                    />

                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${service.gradient} 
                                  rounded-xl flex items-center justify-center mb-4 md:mb-6 relative z-10`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon size={28} className="text-white md:w-8 md:h-8" aria-hidden="true" />
                    </motion.div>

                    {/* Title */}
                    <h3
                      className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-gray-900 
                                   group-hover:text-cyan-400 transition-colors relative z-10"
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed relative z-10 text-sm md:text-base mb-4 flex-grow">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <motion.div
                      className="flex items-center text-cyan-400 font-semibold text-sm md:text-base relative z-10 mt-auto"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ExternalLink size={16} className="ml-2 md:w-4 md:h-4" aria-hidden="true" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
