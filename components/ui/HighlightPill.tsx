import { ReactNode } from 'react'

interface HighlightPillProps {
  children: ReactNode
  variant?: 'mint' | 'pink'
  className?: string
}

export default function HighlightPill({
  children,
  variant = 'mint',
  className = '',
}: HighlightPillProps) {
  const bg = variant === 'mint' ? 'bg-[#D4F0D4]' : 'bg-[#F9C5D5]'
  return (
    <span
      className={`inline-block px-4 py-0.5 rounded-full leading-tight ${bg} ${className}`}
    >
      {children}
    </span>
  )
}
