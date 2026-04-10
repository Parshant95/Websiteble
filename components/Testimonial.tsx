'use client'
import { motion } from 'framer-motion'
import CircleImage from './ui/CircleImage'
import HighlightPill from './ui/HighlightPill'
import ScribbleUnderline from './ui/ScribbleUnderline'

// Scattered avatar positions [x%, y_from_top_px, size]
const leftAvatars = [
  { src: 'https://i.pravatar.cc/300?img=30', size: 90,  x: '2%',   y: '8%'  },
  { src: 'https://i.pravatar.cc/300?img=31', size: 138, x: '3%',   y: '38%' },
  { src: 'https://i.pravatar.cc/300?img=32', size: 80,  x: '8%',   y: '70%' },
]

const rightAvatars = [
  { src: 'https://i.pravatar.cc/300?img=40', size: 72,  x: '78%',  y: '5%'  },
  { src: 'https://i.pravatar.cc/300?img=41', size: 100, x: '80%',  y: '28%' },
  { src: 'https://i.pravatar.cc/300?img=42', size: 90,  x: '88%',  y: '10%' },
  { src: 'https://i.pravatar.cc/300?img=43', size: 160, x: '82%',  y: '55%' },
  { src: 'https://i.pravatar.cc/300?img=44', size: 72,  x: '72%',  y: '55%' },
]

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
}

const avatarItem = {
  hidden: { opacity: 0, scale: 0.75 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 180, damping: 16 } },
}

export default function Testimonial() {
  return (
    <section id="faqs" className="relative py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">

        {/* ── Heading ──────────────────────────────────────────── */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,3rem)] leading-[1.2] text-[#0A0A0A]">
            <HighlightPill variant="mint">What</HighlightPill>
            {' '}our customer
            <br />
            says{' '}
            <span className="relative inline-block">
              About Us
              <ScribbleUnderline delay={0.35} />
            </span>
          </h2>
        </motion.div>

        {/* ── Main area: avatars + quote card ─────────────────── */}
        <div className="relative min-h-[420px] md:min-h-[460px]">

          {/* Desktop scattered avatars — LEFT */}
          <motion.div
            className="hidden md:block"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {leftAvatars.map((a, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: a.x, top: a.y }}
                variants={avatarItem}
              >
                <CircleImage src={a.src} alt={`Customer ${i + 1}`} size={a.size} />
              </motion.div>
            ))}
          </motion.div>

          {/* Desktop scattered avatars — RIGHT */}
          <motion.div
            className="hidden md:block"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            {rightAvatars.map((a, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: a.x, top: a.y }}
                variants={avatarItem}
              >
                <CircleImage src={a.src} alt={`Customer ${i + 4}`} size={a.size} />
              </motion.div>
            ))}
          </motion.div>

          {/* ── Quote card ─────────────────────────────────────── */}
          <motion.div
            className="relative z-10 mx-auto md:w-[52%] bg-[#E8F5E8] rounded-3xl px-8 py-10 md:px-10 md:py-12 text-center shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Opening quote mark */}
            <div className="text-[#A8CDA8] text-7xl font-serif leading-none select-none mb-2 -mt-2">
              &ldquo;
            </div>
            <p className="text-sm md:text-[15px] text-[#0A0A0A]/75 leading-relaxed max-w-[320px] mx-auto">
              Elementum&nbsp; delivered the site with inthe timeline
              as they requested. Inthe end, the client found a 50%
              increase in traffic with in days since its launch. They
              also had an impressive ability to use technologies that
              the company hasnt used, which have also proved to
              be easy to use and reliable
            </p>
            {/* Closing quote mark */}
            <div className="text-[#A8CDA8] text-7xl font-serif leading-none select-none mt-2">
              &rdquo;
            </div>
          </motion.div>

          {/* Mobile avatars — simple row */}
          <motion.div
            className="md:hidden flex flex-wrap justify-center gap-3 mt-8"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...leftAvatars, ...rightAvatars.slice(0, 3)].map((a, i) => (
              <motion.div key={i} variants={avatarItem}>
                <CircleImage src={a.src} alt={`Customer ${i + 1}`} size={68} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
