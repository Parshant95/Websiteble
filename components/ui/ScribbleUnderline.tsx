'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ScribbleUnderlineProps {
  className?: string
  color?: string
  delay?: number
}

export default function ScribbleUnderline({
  className = '',
  color = '#F5C842',
  delay = 0.4,
}: ScribbleUnderlineProps) {
  const ref = useRef<SVGSVGElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <svg
      ref={ref}
      viewBox="0 0 220 12"
      className={`absolute bottom-[-6px] left-0 w-full h-[10px] ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        d="M2,9 C18,3 38,13 60,7 C80,2 98,12 120,6 C140,1 162,11 185,5 C197,2 210,8 218,7"
        fill="none"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeInOut', delay }}
      />
    </svg>
  )
}
