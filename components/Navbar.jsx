"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Menu, X, Home, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import ThemeToggle from "./theme-toggle"

// --- Animation Variants ---
const navContainerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 60, damping: 20, duration: 1.2 },
  },
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.3, ease: "easeIn" },
  },
}

const mobileMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
}

const mobileItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
}

// --- Styles Constants ---
const GLASS_GRADIENT_SCROLLED =
  "linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(99, 102, 241, 0.2) 100%)"
const GLASS_GRADIENT_DEFAULT =
  "linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(99, 102, 241, 0.15) 100%)"
const MOBILE_MENU_BG =
  "linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(99, 102, 241, 0.3) 100%)"

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const servicesDropdownRef = useRef(null)

  // Optimized Scroll Handler
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrolled])

  // Body Scroll Lock
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  // Click Outside Handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Route Change Handler
  useEffect(() => {
    setIsMenuOpen(false)
    setIsServicesOpen(false)
    setIsMobileServicesOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/", icon: <Home size={16} /> },
    { name: "About Us", href: "/about" },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "AI Solutions", href: "/services/ai-solutions" },
        { name: "Data Services", href: "/services/data-services" },
        { name: "Consulting", href: "/services/consulting" },
      ],
    },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ]

  // Safe active check
  const isActive = (href) => {
    if (!pathname) return false;
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  // Helper to generate dynamic link classes
  const getLinkClasses = (active, isMobile = false) => {
    const base = isMobile
      ? "w-full px-3 sm:px-4 py-2.5 sm:py-3 text-left rounded-lg sm:rounded-xl flex items-center gap-2 transition-all duration-500 text-sm sm:text-base font-medium"
      : "relative px-3 xl:px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-500 flex items-center gap-1"

    if (active) {
      return isMobile
        ? `${base} bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 text-cyan-300 shadow-lg border border-cyan-400/30`
        : `${base} text-black bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-600/30 shadow-lg`
    }
    return isMobile
      ? `${base} text-black hover:bg-gradient-to-r hover:from-slate-700/60 hover:via-slate-600/60 hover:to-slate-700/60 hover:text-cyan-200 hover:shadow-md`
      : `${base} text-black hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-indigo-600/20`
  }

  const handleServicesClick = (e) => {
    if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
      e.preventDefault()
      setIsServicesOpen(!isServicesOpen)
    }
  }

  return (
    <header role="banner" className="w-full flex justify-center fixed top-0 z-50">
      <motion.nav
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
        className={`w-[90%] sm:w-[90%] md:w-[90%] lg:w-4/5 xl:w-3/4 2xl:w-2/3 max-w-7xl mx-1 sm:mx-2 md:mx-4 mt-1 sm:mt-2 md:mt-4 rounded-xl sm:rounded-2xl transition-all duration-700 ease-in-out relative ${
          scrolled
            ? "shadow-2xl backdrop-blur-xl"
            : "shadow-xl backdrop-blur-lg"
        }`}
        style={{
          background: scrolled ? GLASS_GRADIENT_SCROLLED : GLASS_GRADIENT_DEFAULT,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: scrolled
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
          <div className="flex items-center justify-between gap-2 sm:gap-3">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0 min-w-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Link
                href="/"
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 text-transparent bg-clip-text transition-all duration-500 truncate"
                aria-label="Cognixo.ai - AI Solutions Company Homepage"
              >
                <span className="hidden sm:inline">Cognixo.ai</span>
                <span className="sm:hidden text-2xl">Cognixo.ai</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 flex-1 justify-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  className="relative"
                  ref={item.hasDropdown ? servicesDropdownRef : null}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                >
                  {item.hasDropdown ? (
                    <motion.button
                      onClick={handleServicesClick}
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                      className={getLinkClasses(isActive(item.href))}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                    >
                      <span className="flex items-center gap-1">
                        {item.icon}
                        {item.name}
                        <motion.div
                          animate={{ rotate: isServicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      </span>
                      {isActive(item.href) && (
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full"
                          layoutId="activeDesktopUnderline"
                        />
                      )}
                    </motion.button>
                  ) : (
                    <Link href={item.href}>
                      <motion.div
                        className={getLinkClasses(isActive(item.href))}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-current={isActive(item.href) ? "page" : undefined}
                      >
                        <span className="flex items-center gap-1">
                          {item.icon}
                          {item.name}
                        </span>
                        {isActive(item.href) && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full"
                            layoutId="activeDesktopUnderline"
                          />
                        )}
                      </motion.div>
                    </Link>
                  )}

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && isServicesOpen && (
                      <motion.div
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-4 w-52 rounded-xl overflow-hidden shadow-2xl z-50"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(59, 130, 246, 0.25) 50%, rgba(99, 102, 241, 0.25) 100%)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                      >
                        <div className="py-2">
                          {item.dropdownItems.map((dropdownItem, dIndex) => (
                            <Link key={dropdownItem.href} href={dropdownItem.href}>
                              <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: dIndex * 0.08 }}
                                className={`block px-4 py-3 text-sm transition-all duration-300 ${
                                  isActive(dropdownItem.href)
                                    ? "bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-indigo-600/40 text-black font-medium border-l-4 border-cyan-400"
                                    : "text-black hover:bg-gradient-to-r hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-indigo-600/30"
                                }`}
                                whileHover={{ x: 5 }}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Mobile Toggle & Theme */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="order-2 lg:order-2">
                <ThemeToggle />
              </div>
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-lg text-black hover:bg-white/10 transition-all duration-300 order-2 lg:order-1"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
                aria-controls="mobile-menu"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {isMenuOpen ? (
                    <X size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <Menu size={20} className="w-5 h-5 sm:w-6 sm:h-6" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                id="mobile-menu"
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="lg:hidden overflow-hidden rounded-b-xl mt-5 sm:rounded-b-2xl"
                style={{
                  background: MOBILE_MENU_BG,
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                }}
              >
                <div className="border-t border-white/20 mt-2">
                  <div className="flex flex-col space-y-1 px-2 sm:px-4 py-3 sm:py-4 max-h-[calc(100vh-120px)] overflow-y-auto">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        custom={index}
                        variants={mobileItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {item.hasDropdown ? (
                          <div>
                            <motion.button
                              onClick={() =>
                                setIsMobileServicesOpen(!isMobileServicesOpen)
                              }
                              className={`w-full justify-between ${getLinkClasses(
                                isActive(item.href),
                                true
                              )}`}
                              whileHover={{ x: 3 }}
                              whileTap={{ scale: 0.98 }}
                              aria-expanded={isMobileServicesOpen}
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="flex-shrink-0">{item.icon}</span>
                                <span className="truncate">{item.name}</span>
                                {isActive(item.href) && (
                                  <motion.span
                                    className="ml-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 flex-shrink-0"
                                    layoutId="mobileActiveDot"
                                  />
                                )}
                              </div>
                              <motion.div
                                animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                                transition={{ duration: 0.6 }}
                              >
                                <ChevronDown size={16} />
                              </motion.div>
                            </motion.button>

                            <AnimatePresence>
                              {isMobileServicesOpen && (
                                <motion.div
                                  variants={mobileMenuVariants}
                                  initial="hidden"
                                  animate="visible"
                                  exit="exit"
                                  className="ml-4 sm:ml-6 mt-2 space-y-1 overflow-hidden"
                                >
                                  {item.dropdownItems.map((dItem, dIndex) => (
                                    <Link key={dItem.href} href={dItem.href}>
                                      <motion.div
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: dIndex * 0.1 }}
                                        className={`w-full px-3 sm:px-4 py-2 sm:py-2.5 text-left rounded-lg transition-all duration-400 text-xs sm:text-sm border-l-2 ${
                                          isActive(dItem.href)
                                            ? "bg-gradient-to-r from-slate-800/70 via-slate-700/70 to-slate-800/70 text-cyan-300 font-medium border-cyan-500 shadow-md"
                                            : "text-black hover:bg-gradient-to-r hover:from-slate-800/50 hover:via-slate-700/50 hover:to-slate-800/50 hover:text-cyan-200 border-cyan-600/50 hover:border-cyan-400"
                                        }`}
                                        whileHover={{ x: 4 }}
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <span className="truncate">{dItem.name}</span>
                                      </motion.div>
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <Link href={item.href}>
                            <motion.div
                              className={getLinkClasses(isActive(item.href), true)}
                              whileHover={{ x: 3 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => setIsMenuOpen(false)}
                              aria-current={isActive(item.href) ? "page" : undefined}
                            >
                              <span className="flex-shrink-0">{item.icon}</span>
                              <span className="truncate flex-1">{item.name}</span>
                              {isActive(item.href) && (
                                <motion.span
                                  className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 flex-shrink-0"
                                  layoutId="mobileActiveDot"
                                />
                              )}
                            </motion.div>
                          </Link>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </header>
  )
}