import { profile, sections, socials } from '../data/content'
import Reveal from './Reveal'
import Marquee from './Marquee'

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-curtain pt-24 sm:pt-32">
      <div className="spotlight pointer-events-none absolute inset-x-0 top-0 h-2/3" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Marquee className="mb-10" count={16} />

        <Reveal>
          <h2 className="font-display text-[clamp(2.6rem,8vw,5.5rem)] font-black leading-[0.95] tracking-tight text-cream">
            {sections.contact.heading.lead}
            <br />
            {sections.contact.heading.rest}
            <span className="text-brass">{sections.contact.heading.accent}</span>
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(sections.contact.emailSubject)}`}
            className="link-underline mt-10 inline-block font-display text-2xl text-cream sm:text-3xl"
          >
            {profile.email}
          </a>
          <div className="mt-3">
            <a
              href={`tel:${profile.phoneHref}`}
              className="link-underline text-lg text-cream/80"
            >
              {profile.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="border border-cream/25 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-brass hover:bg-brass hover:text-curtain-deep"
              >
                {s.label}
              </a>
            ))}
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="border border-cream/25 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:border-brass hover:bg-brass hover:text-curtain-deep"
            >
              {sections.contact.ctaResume}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative mt-20 border-t border-cream/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}</p>
          <p>{profile.roles.join(' · ')}</p>
        </div>
      </div>
    </footer>
  )
}
