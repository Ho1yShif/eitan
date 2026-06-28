import { motion, useReducedMotion } from 'framer-motion'
import { profile, sections } from '../data/content'
import { scrollToHash } from '../lib/scroll'
import Marquee from './Marquee'

export default function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-curtain-deep pb-20 pt-32 sm:pt-40"
    >
      {/* spotlight wash */}
      <div className="spotlight pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* vertical curtain seams */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, #000 0 2px, transparent 2px 46px)',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Marquee className="mb-10" count={16} />

        <div className="grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-12">
          {/* Text column */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.p
              variants={item}
              className="mb-5 font-sans text-xs font-semibold uppercase tracking-marquee text-brass"
            >
              {sections.hero.nowPlaying} · {profile.location}
            </motion.p>

            <motion.h1
              variants={item}
              className="font-display text-[clamp(3.2rem,11vw,8rem)] font-black leading-[0.92] tracking-tight text-cream"
            >
              Eitan
              <br />
              <span className="text-brass">Hiller</span>
            </motion.h1>

            {/* roles as a flowing marquee strip */}
            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-base italic text-cream/85 sm:gap-x-3 sm:text-2xl md:text-3xl"
            >
              {profile.roles.map((role, i) => (
                <span key={role} className="flex items-center gap-2 sm:gap-3">
                  {role}
                  {i < profile.roles.length - 1 && (
                    <span className="text-brass/70" aria-hidden="true">
                      ✦
                    </span>
                  )}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
              <a
                href="#reels"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash('#reels')
                }}
                className="group inline-flex items-center gap-2 bg-brass px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-curtain-deep transition-colors duration-300 hover:bg-brass-light"
              >
                {sections.hero.ctaReels}
                <span>→</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToHash('#contact')
                }}
                className="inline-flex items-center border border-cream/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:border-brass hover:text-brass-light"
              >
                {sections.hero.ctaContact}
              </a>
            </motion.div>
          </motion.div>

          {/* Portrait column with framing + sweep */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-3 -rotate-2 border border-brass/40" aria-hidden="true" />
            <div className="relative overflow-hidden shadow-2xl shadow-black/50">
              <img
                src={profile.portraitPrimary}
                alt="Eitan Hiller, headshot"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
              {/* spotlight sweep */}
              {!reduce && (
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1/2 animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-curtain-deep/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
