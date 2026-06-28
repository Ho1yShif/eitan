export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Reels', href: '#reels' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Press', href: '#press' },
  { label: 'Contact', href: '#contact' },
]

// Per-section UI copy (eyebrow labels, headings, CTA + control text).
// Presentational markup (<br>, accent spans) stays in the components — only text lives here.
export const sections = {
  hero: {
    nowPlaying: 'Now Playing', // rendered as `${nowPlaying} · ${profile.location}`
    ctaReels: 'Watch reels',
    ctaContact: 'Get in touch',
  },
  about: {
    label: 'About',
    heading: { line1: 'A theatre kid who', line2: 'never grew out of it.' },
    skillsLabel: 'Special Skills',
    ctaResume: 'Resume',
    ctaActorsAccess: 'Actors Access',
  },
  reels: {
    label: 'Reels',
    heading: 'Roll the tape.',
    close: 'Close ✕',
  },
  gallery: { label: 'Gallery', heading: 'On stage.' },
  press: { label: 'Press', heading: 'Read all about it.' },
  contact: {
    heading: { lead: "Let's make", rest: 'something ', accent: 'memorable.' },
    ctaResume: 'Resume',
    // Pre-filled subject line for the footer email link.
    emailSubject: "Let's work together",
  },
}
