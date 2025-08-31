"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeToggle({ className = "" }) {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return <div className={`h-9 w-16 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`} />
  }

  const isDark = (theme === "system" ? resolvedTheme : theme) === "dark"

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group relative inline-flex h-9 w-16 items-center rounded-full border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800 transition-colors ${className}`}
    >
      <motion.span
        className="absolute inset-0 rounded-full bg-blue-50 dark:bg-blue-900/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }} // slower background overlay fade
      />
      <span className="absolute inset-[2px] rounded-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-800 dark:to-gray-900" />
      <motion.span
        className="relative z-10 ml-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-white dark:bg-gray-700 shadow-sm"
        layout
        transition={{
          type: "spring",
          stiffness: 80, // softer spring
          damping: 28, // smoother settling
          mass: 1.6,
          rotate: { duration: 0.9, ease: "easeInOut" }, // slower rotate
        }}
        animate={{ x: isDark ? 28 : 0, rotate: isDark ? 360 : 0 }}
      >
        <AnimatePresence initial={false} mode="popLayout">
          {isDark ? (
            <motion.svg
              key="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="text-blue-200"
              initial={{ scale: 0.6, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.6, opacity: 0, rotate: 45 }}
              transition={{ duration: 0.7, ease: "easeOut" }} // slower icon transition
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="currentColor"
              className="text-amber-500"
              initial={{ scale: 0.6, opacity: 0, rotate: 45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.6, opacity: 0, rotate: -45 }}
              transition={{ duration: 0.7, ease: "easeOut" }} // slower icon transition
            >
              <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zM1 13h3v-2H1v2zm10 10h2v-3h-2v3zm9-10v-2h-3v2h3zm-3.05-7.95l1.79-1.8-1.41-1.41-1.8 1.79 1.42 1.42zM12 6a6 6 0 100 12A6 6 0 0012 6zM4.22 18.36l-1.8 1.79 1.41 1.41 1.79-1.8-1.4-1.4zM17.24 19.16l1.42 1.42 1.79-1.8-1.41-1.41-1.8 1.79z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.span>
    </button>
  )
}
