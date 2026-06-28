import { bio, profile, sections, skills, socials } from '../data/content'
import Reveal from './Reveal'

const actorsAccess = socials.find((s) => s.label === 'Actors Access')

export default function About() {
  return (
    <section id="about" className="grain relative bg-cream py-24 text-ink sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-marquee text-rouge">
            {sections.about.label}
          </p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight">
            {sections.about.heading.line1}
            <br className="hidden sm:block" /> {sections.about.heading.line2}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          {/* Portrait */}
          <Reveal delay={0.05}>
            <div className="relative">
              <div className="absolute -inset-2 rotate-2 bg-curtain/10" aria-hidden="true" />
              <img
                src={profile.portraitSecondary}
                alt="Eitan Hiller, second portrait"
                className="relative w-full object-cover shadow-xl shadow-ink/15"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Bio */}
          <Reveal delay={0.1} className="space-y-6">
            {bio.map((para, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed text-ink-soft ${
                  i === 0
                    ? 'first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:font-black first-letter:leading-[0.8] first-letter:text-curtain'
                    : ''
                }`}
              >
                {para}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 bg-curtain px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors duration-300 hover:bg-curtain-soft"
              >
                {sections.about.ctaResume}
                <span>↓</span>
              </a>
              {actorsAccess && (
                <a
                  href={actorsAccess.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center border border-ink/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:border-curtain hover:text-curtain"
                >
                  {sections.about.ctaActorsAccess}
                </a>
              )}
            </div>

            <div className="border-t border-ink/10 pt-8">
              <p className="mb-5 font-sans text-sm font-semibold uppercase tracking-marquee text-curtain">
                {sections.about.skillsLabel}
              </p>
              <div className="space-y-5">
                {skills.map((cat) => (
                  <div key={cat.group}>
                    <p className="mb-2 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-soft/70">
                      {cat.group}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="whitespace-nowrap border border-ink/15 px-2 py-1 text-center text-sm text-ink-soft"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
