'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Home',     href: '#home'      },
  { label: 'Studio',   href: '#studio'    },
  { label: 'Services', href: '#services'  },
  { label: 'Contact',  href: '#contact'   },
  { label: 'FAQs',     href: '#faqs'      },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-xl text-[#0A0A0A] tracking-tight"
          >
            Elementum
          </Link>

          {/* Desktop nav links — centered */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm text-[#0A0A0A]/80 hover:text-[#0A0A0A] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — always visible */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="relative z-50 flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer"
          >
            <span
              className={`block h-[2px] bg-[#0A0A0A] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : 'w-6'
              }`}
            />
            <span
              className={`block h-[2px] bg-[#0A0A0A] rounded-full transition-all duration-300 ${
                menuOpen ? 'opacity-0 w-0' : 'w-4'
              }`}
            />
            <span
              className={`block h-[2px] bg-[#0A0A0A] rounded-full transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : 'w-6'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Full-screen mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10"
          >
            {NAV_LINKS.map(({ label, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i, duration: 0.35 }}
              >
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display font-bold text-4xl sm:text-5xl text-[#0A0A0A] hover:text-[#6B2FBF] transition-colors"
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
