'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Newsletter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      ref={ref}
      className="relative bg-[#D4F0D4] overflow-hidden pt-16 pb-0"
    >
      {/* ── Purple half-circle decoration — right ────────────── */}
      <div className="absolute right-0 top-12 pointer-events-none hidden md:block" aria-hidden>
        <svg width="110" height="180" viewBox="0 0 110 180">
          <path d="M110,0 C50,0 10,40 10,90 C10,140 50,180 110,180" fill="#6B2FBF" />
        </svg>
      </div>

      {/* ── Red curved arrows pointing down ──────────────────── */}
      <div className="flex justify-center mb-0 pointer-events-none" aria-hidden>
        <svg width="140" height="72" viewBox="0 0 140 72" fill="none">
          {/* Left arrow */}
          <motion.path
            d="M30,10 C20,30 15,50 22,65"
            stroke="#FF6B5B" strokeWidth="2.5" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          />
          <motion.path
            d="M22,65 L16,58 M22,65 L28,56"
            stroke="#FF6B5B" strokeWidth="2.5" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 0.95 }}
          />
          {/* Center arrow */}
          <motion.path
            d="M70,5 C65,25 62,48 68,66"
            stroke="#FF6B5B" strokeWidth="2.5" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          />
          <motion.path
            d="M68,66 L62,58 M68,66 L74,57"
            stroke="#FF6B5B" strokeWidth="2.5" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 1.1 }}
          />
          {/* Right arrow */}
          <motion.path
            d="M110,12 C118,32 120,52 112,66"
            stroke="#FF6B5B" strokeWidth="2.5" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          />
          <motion.path
            d="M112,66 L106,58 M112,66 L118,57"
            stroke="#FF6B5B" strokeWidth="2.5" strokeLinecap="round" fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 0.3, ease: 'easeOut', delay: 1.25 }}
          />
        </svg>
      </div>

      {/* ── Content ──────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-6 text-center pb-16">
        <motion.h2
          className="font-rounded font-black text-[clamp(2.6rem,6vw,4.5rem)] leading-[1.1] text-[#0A0A0A] mb-4"
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          Subscribe to
          <br />
          our newsletter
        </motion.h2>

        <motion.p
          className="text-sm text-[#0A0A0A]/60 mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
        >
          To make your stay special and even more memorable
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
        >
          <button className="inline-flex items-center bg-[#0A0A0A] text-white text-sm font-semibold px-8 py-3 rounded-full hover:bg-black/80 active:scale-95 transition-all duration-200">
            Subscribe Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
