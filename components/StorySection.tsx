'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import CircleImage from './ui/CircleImage'
import HighlightPill from './ui/HighlightPill'
import ScribbleUnderline from './ui/ScribbleUnderline'

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }
}

export default function StorySection() {
  const lineRef = useRef<SVGSVGElement>(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-100px' })

  return (
    <section id="studio" className="relative py-20 md:py-28 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* ── Row 1 ───────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — text */}
          <motion.div {...fadeUp(0)}>
            <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] leading-[1.15] text-[#0A0A0A] mb-5">
              Tomorrow should be better than{' '}
              <HighlightPill variant="mint">today</HighlightPill>
            </h2>
            {/* Yellow scribble under "Tomorrow" — via wrapper */}
            <style>{`
              .scribble-tomorrow { position: relative; display: inline-block; }
            `}</style>

            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-6">
              We are a team of strategists, designers communicators, researchers.
              Together, we belive that progress only happens when you refuse
              to play things safe.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#0A0A0A] font-medium group"
            >
              Read more
              <span className="inline-flex items-center gap-[2px] text-gray-300 group-hover:text-[#0A0A0A] transition-colors">
                {'· · · · · · · · ·'}
              </span>
              <span className="ml-1">→</span>
            </a>
          </motion.div>

          {/* Right — circle image + coral triangles */}
          <motion.div {...fadeUp(0.15)} className="relative flex justify-center md:justify-end">
            {/* Coral triangle behind */}
            <div className="absolute -top-6 right-4 pointer-events-none" aria-hidden>
              <svg width="60" height="65" viewBox="0 0 60 65">
                <polygon points="30,0 60,65 0,65" fill="#FF6B5B" />
              </svg>
            </div>
            <div className="absolute top-12 right-0 pointer-events-none" aria-hidden>
              <svg width="36" height="40" viewBox="0 0 36 40">
                <polygon points="18,0 36,40 0,40" fill="#FF6B5B" opacity="0.7" />
              </svg>
            </div>
            <CircleImage
              src="https://i.pravatar.cc/300?img=11"
              alt="Story image 1"
              size={300}
              className="shadow-lg"
            />
          </motion.div>
        </div>

        {/* ── Connecting red S-curve SVG ───────────────────────── */}
        <div className="relative h-32 md:h-40 my-0 pointer-events-none" aria-hidden>
          <svg
            ref={lineRef}
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1000 160"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M850,10 C750,10 650,60 580,80 C500,100 420,105 300,140"
              fill="none"
              stroke="#FF6B5B"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={lineInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: 'easeInOut', delay: 0.3 }}
            />
          </svg>
        </div>

        {/* ── Row 2 ───────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* Left — circle image + coral triangles */}
          <motion.div {...fadeUp(0)} className="relative flex justify-center md:justify-start order-2 md:order-1">
            {/* Coral triangles */}
            <div className="absolute -bottom-4 left-2 pointer-events-none" aria-hidden>
              <svg width="56" height="60" viewBox="0 0 56 60">
                <polygon points="28,0 56,60 0,60" fill="#FF6B5B" />
              </svg>
            </div>
            <div className="absolute bottom-10 -left-4 pointer-events-none" aria-hidden>
              <svg width="38" height="42" viewBox="0 0 38 42">
                <polygon points="19,0 38,42 0,42" fill="#FF6B5B" opacity="0.65" />
              </svg>
            </div>
            <CircleImage
              src="https://i.pravatar.cc/300?img=21"
              alt="Story image 2"
              size={280}
              className="shadow-lg"
            />
          </motion.div>

          {/* Right — text */}
          <motion.div {...fadeUp(0.15)} className="order-1 md:order-2">
            <h2 className="font-display font-bold text-[clamp(1.9rem,4vw,3rem)] leading-[1.15] text-[#0A0A0A] mb-5">
              <HighlightPill variant="mint">See</HighlightPill>
              {' '}how we can
              <br />
              help you{' '}
              <span className="relative inline-block">
                progress
                <ScribbleUnderline delay={0.3} />
              </span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-6">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[#0A0A0A] font-medium group"
            >
              Read more
              <span className="inline-flex items-center gap-[2px] text-gray-300 group-hover:text-[#0A0A0A] transition-colors">
                {'· · · · · · · · ·'}
              </span>
              <span className="ml-1">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
