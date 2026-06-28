import Reveal from './Reveal'

// Eyebrow label + display heading used at the top of each section.
// `accent` colours the eyebrow; `tone` is 'light' for dark sections (cream
// heading) or 'dark' for the cream-background sections (ink heading default).
export default function SectionHeader({ label, heading, accent = 'brass', tone = 'light' }) {
  const eyebrow = accent === 'rouge' ? 'text-rouge' : 'text-brass'
  const headingTone = tone === 'dark' ? '' : 'text-cream'
  return (
    <Reveal>
      <p className={`mb-3 font-sans text-xs font-semibold uppercase tracking-marquee ${eyebrow}`}>
        {label}
      </p>
      <h2 className={`font-display text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight ${headingTone}`}>
        {heading}
      </h2>
    </Reveal>
  )
}
