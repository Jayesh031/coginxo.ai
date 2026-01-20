"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Brain, Code, Database, Bot, ExternalLink, Braces, Terminal } from "lucide-react"
import Link from "next/link"

// --- Background Logic (Matches Hero exactly) ---
const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    setMounted(true)
    const icons = [
      { icon: <Code size={20} />, color: "text-blue-400" },
      { icon: <Braces size={20} />, color: "text-purple-400" },
      { icon: <Database size={20} />, color: "text-emerald-400" },
      { icon: <Terminal size={20} />, color: "text-slate-400" },
      { icon: <Bot size={20} />, color: "text-indigo-400" },
    ]
    
    const newItems = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      icon: icons[Math.floor(Math.random() * icons.length)],
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }))
    setItems(newItems)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {items.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.icon.color} opacity-20 dark:opacity-10`}
          style={{ left: `${item.x}%`, top: `${item.y}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: item.duration, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
        >
          {item.icon.icon}
        </motion.div>
      ))}
    </div>
  )
}

// --- Main Component ---
const headingVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
}

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (index) => ({
    y: 0,
    opacity: 1,
    transition: { delay: index * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

export default function ServicesSection() {
  const servicesRef = useRef(null)
  const servicesInView = useInView(servicesRef, { margin: "-50px", once: true })

  const services = [
    {
      icon: Brain,
      title: "AI Strategy Consulting",
      description: "We analyze your data infrastructure and business goals to build a roadmap for scalable AI adoption that drives tangible ROI.",
      href: "/services/ai-solutions",
    },
    {
      icon: Code,
      title: "Custom AI Development",
      description: "From natural language processing to computer vision, we build proprietary AI models tailored to your unique operational needs.",
      href: "/services/ai-solutions",
    },
    {
      icon: Database,
      title: "Machine Learning Ops",
      description: "End-to-end MLOps services to train, deploy, and monitor models, ensuring they remain accurate and efficient over time.",
      href: "/services/data-services",
    },
    {
      icon: Bot,
      title: "Intelligent Automation",
      description: "Deploy autonomous agents that handle complex workflows, reducing manual labor and increasing speed by up to 500%.",
      href: "/services/consulting",
    },
  ]

  return (
    <section
      ref={servicesRef}
      id="services"
      className="relative py-20 px-4 md:px-6 overflow-hidden bg-gradient-to-br from-white via-sky-50 to-indigo-100 dark:from-[#0b1220] dark:via-[#0b1220]/90 dark:to-[#0b1220] transition-colors duration-300"
    >
      <BackgroundPattern />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          animate={servicesInView ? "visible" : "hidden"}
          variants={headingVariants}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight">
            Our{' '}
            {/* EXACT HERO GRADIENT */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 dark:from-cyan-400 dark:via-blue-500 dark:to-indigo-500">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to revolutionize your business operations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                animate={servicesInView ? "visible" : "hidden"}
                variants={cardVariants}
                className="group relative"
              >
                <Link href={service.href} className="block h-full">
                  <div className="h-full flex flex-col justify-between p-8 rounded-2xl transition-all duration-300
                                  bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200 dark:border-slate-700
                                  hover:bg-white dark:hover:bg-slate-800 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                    
                    {/* Hover Gradient Overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div>
                      {/* Icon */}
                      <div className="w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-white to-slate-100 dark:from-slate-700 dark:to-slate-800 shadow-sm border border-slate-100 dark:border-slate-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="mt-8 flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ExternalLink size={14} className="ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}