"use client"
import React, { useEffect, useRef } from "react"
import gsap from "gsap"

const GsapModalWrapper = ({ children, isOpen, onClose }) => {
  const overlayRef = useRef(null)
  const contentRef = useRef(null)

  // 1. Handle Scroll Locking
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // 2. Handle GSAP Animations
  useEffect(() => {
    if (isOpen) {
      const tl = gsap.timeline()
      
      // Animate Backdrop
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      })
      
      // Animate Content (Scale Up + Fade In)
      tl.fromTo(
        contentRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.2"
      )
    }
  }, [isOpen])

  // 3. Handle Close Animation manually before unmounting
  const handleClose = () => {
    const tl = gsap.timeline({
      onComplete: onClose, // Trigger state change after animation
    })

    tl.to(contentRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 50,
      duration: 0.3,
      ease: "power2.in",
    })
    tl.to(
      overlayRef.current,
      { opacity: 0, duration: 0.2 },
      "-=0.2"
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        ref={overlayRef}
        onClick={handleClose}
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-md opacity-0 cursor-pointer"
      />
      {/* Content Container */}
      <div ref={contentRef} className="relative w-full max-w-5xl opacity-0">
        {React.cloneElement(children, { handleClose })}
      </div>
    </div>
  )
}

export default GsapModalWrapper