'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface CircleImageProps {
  src: string
  alt: string
  size: number
  className?: string
}

export default function CircleImage({ src, alt, size, className = '' }: CircleImageProps) {
  return (
    <motion.div
      className={`relative rounded-full overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.04 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <Image src={src} alt={alt} fill sizes={`${size}px`} className="object-cover" />
    </motion.div>
  )
}
