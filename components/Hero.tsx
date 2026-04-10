'use client'
import { motion } from 'framer-motion'
import CircleImage from './ui/CircleImage'
import HighlightPill from './ui/HighlightPill'
import ScribbleUnderline from './ui/ScribbleUnderline'

const avatars = [
  { src: 'https://i.pravatar.cc/300?img=1',  size: 92,  x: '1%',   y: 60  },
  { src: 'https://i.pravatar.cc/300?img=2',  size: 128, x: '10%',  y: 30  },
  { src: 'https://i.pravatar.cc/300?img=3',  size: 162, x: '23%',  y: 55  },
  { src: 'https://i.pravatar.cc/300?img=4',  size: 128, x: '40%',  y: 90  },
  { src: 'https://i.pravatar.cc/300?img=5',  size: 96,  x: '51%',  y: 45  },
  { src: 'https://i.pravatar.cc/300?img=6',  size: 138, x: '61%',  y: 65  },
  { src: 'https://i.pravatar.cc/300?img=7',  size: 162, x: '74%',  y: 40  },
  { src: 'https://i.pravatar.cc/300?img=8',  size: 112, x: '87%',  y: 20  },
]

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
}

const avatarVariant = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 200, damping: 18 } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-0 overflow-hidden bg-white">
      {/* ── Left pink squiggly decoration ───────────────────── */}
      <div className="absolute left-0 top-[22%] pointer-events-none select-none" aria-hidden>
        <svg width="72" height="240" viewBox="0 0 72 240" fill="none">
          <path
            d="M60,12 C28,35 62,72 22,105 C4,122 44,158 18,190 C8,205 32,222 48,228"
            stroke="#F9C5D5" strokeWidth="3.5" strokeLinecap="round"
          />
          <path
            d="M44,6 C16,28 52,66 14,98 C0,114 36,150 12,182 C2,198 26,218 42,225"
            stroke="#FF6B5B" strokeWidth="2.5" strokeLinecap="round"
          />
        </svg>
      </div>

      {/* ── Purple comma/blob — right ────────────────────────── */}
      <div className="absolute right-12 top-[18%] pointer-events-none select-none hidden lg:block" aria-hidden>
        <svg width="80" height="108" viewBox="0 0 80 108" fill="none">
          <path
            d="M75,38 C75,18 62,4 40,4 C18,4 4,20 4,42 C4,64 18,82 36,92 C44,96 46,106 40,108"
            fill="#6B2FBF"
          />
        </svg>
      </div>

      {/* ── Headline ─────────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h1
          className="font-display font-bold text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.1] text-[#0A0A0A] tracking-tight"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          The{' '}
          <span className="relative inline-block">
            thinkers and
            <ScribbleUnderline delay={0.5} />
          </span>
          <br />
          doers were{' '}
          <HighlightPill variant="pink">changing</HighlightPill>
          <br />
          the{' '}
          <HighlightPill variant="mint">status</HighlightPill>
          {' '}Quo with
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-7 text-sm md:text-[15px] text-gray-400 max-w-[420px] mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
        >
          We are a team of strategists, designers communicators, researchers. Togeather,
          we belive that progress only hghappens when you refuse to play things safe.
        </motion.p>
      </div>

      {/* ── Scattered avatars (desktop) ──────────────────────── */}
      <motion.div
        className="relative hidden md:block mt-10"
        style={{ height: 260 }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {avatars.map((a, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{ left: a.x, bottom: a.y }}
            variants={avatarVariant}
          >
            <CircleImage src={a.src} alt={`Team member ${i + 1}`} size={a.size} />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Avatars (mobile — flex wrap) ─────────────────────── */}
      <motion.div
        className="md:hidden flex flex-wrap justify-center gap-3 px-4 mt-10 pb-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {avatars.map((a, i) => (
          <motion.div key={i} variants={avatarVariant}>
            <CircleImage src={a.src} alt={`Team member ${i + 1}`} size={78} />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Soft bottom gradient fade ────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none md:hidden" />
    </section>
  )
}
