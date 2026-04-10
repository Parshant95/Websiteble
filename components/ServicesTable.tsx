'use client'
import { motion } from 'framer-motion'
import HighlightPill from './ui/HighlightPill'
import ScribbleUnderline from './ui/ScribbleUnderline'

const services = [
  {
    label: 'Office of multiple interest content',
    title: 'Colaborative & partnership',
  },
  {
    label: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
  },
  {
    label: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
    hasGraphic: true,
  },
]

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

export default function ServicesTable() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* ── Section heading ──────────────────────────────────── */}
        <div className="relative mb-16">
          {/* Red squiggle decoration — top right */}
          <div className="absolute top-0 right-0 pointer-events-none hidden md:block" aria-hidden>
            <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
              <path
                d="M10,90 C40,40 80,10 130,5 C150,3 168,12 175,30"
                stroke="#FF6B5B"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>

          <motion.h2
            className="font-rounded font-extrabold text-[clamp(2.6rem,6vw,5rem)] leading-[1.1] text-[#0A0A0A]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            What we{' '}
            <HighlightPill variant="mint" className="font-extrabold">can</HighlightPill>
            <br />
            <span className="relative inline-block">
              offer you!
              <ScribbleUnderline delay={0.4} />
            </span>
          </motion.h2>
        </div>

        {/* ── Table rows ───────────────────────────────────────── */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          {services.map((s, i) => (
            <motion.div
              key={i}
              {...fadeUp(i * 0.1)}
              className="group grid grid-cols-[1fr_2fr_auto] md:grid-cols-[200px_1fr_60px] gap-4 md:gap-8 items-center py-7 md:py-8 cursor-pointer hover:bg-gray-50/60 transition-colors px-2"
            >
              {/* Left: small label */}
              <p className="text-xs text-gray-400 leading-snug max-w-[180px]">
                {s.label}
              </p>

              {/* Center: large service title */}
              <div className="relative">
                <h3 className="font-mono font-bold text-[clamp(1.1rem,2.5vw,2rem)] text-[#0A0A0A] leading-tight">
                  {s.hasGraphic ? (
                    <>
                      Piloting digital{' '}
                      <span className="relative inline-block">
                        <span className="relative z-10">con</span>
                        {/* Colorful circular badge overlapping "confidence" */}
                        <span className="inline-block align-middle mx-0.5 relative z-20">
                          <svg width="44" height="44" viewBox="0 0 44 44">
                            <circle cx="22" cy="22" r="22" fill="#F5C842" />
                            <circle cx="22" cy="22" r="14" fill="#FF6B5B" />
                            <circle cx="22" cy="22" r="7" fill="#0A0A0A" />
                            <text x="22" y="26" textAnchor="middle" fontSize="7" fill="white" fontFamily="monospace" fontWeight="bold">ORG</text>
                          </svg>
                        </span>
                        <span className="relative z-10">fidence</span>
                      </span>
                    </>
                  ) : (
                    s.title
                  )}
                </h3>
              </div>

              {/* Right: arrow */}
              <span className="text-xl text-[#0A0A0A] group-hover:translate-x-1 transition-transform duration-200 flex items-center justify-end">
                →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
