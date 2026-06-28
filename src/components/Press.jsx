import { motion } from 'framer-motion'
import { press, sections } from '../data/content'
import Reveal, { staggerChild, staggerParent } from './Reveal'

export default function Press() {
  return (
    <section id="press" className="relative bg-curtain-deep py-24 sm:py-32">
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-marquee text-brass">
            {sections.press.label}
          </p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight text-cream">
            {sections.press.heading}
          </h2>
        </Reveal>

        <motion.ul
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 divide-y divide-cream/10 border-y border-cream/10"
        >
          {press.map((item, i) => {
            const Wrapper = item.href ? 'a' : 'div'
            const wrapperProps = item.href
              ? { href: item.href, target: '_blank', rel: 'noreferrer' }
              : {}
            return (
              <motion.li key={i} variants={staggerChild}>
                <Wrapper
                  {...wrapperProps}
                  className={`group flex flex-col gap-2 py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${
                    item.href ? 'cursor-pointer' : ''
                  }`}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm tabular-nums text-brass">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-xl font-semibold leading-snug text-cream transition-colors group-hover:text-brass-light sm:text-2xl">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 pl-8 sm:pl-0">
                    <span className="text-sm font-medium uppercase tracking-[0.14em] text-cream/55">
                      {item.outlet}
                    </span>
                    {item.href && (
                      <span className="text-brass">↗</span>
                    )}
                  </div>
                </Wrapper>
              </motion.li>
            )
          })}
        </motion.ul>
      </div>
    </section>
  )
}
