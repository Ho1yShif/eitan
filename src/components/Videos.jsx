import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { sections, videoCategories } from '../data/content'
import Reveal, { staggerChild, staggerParent } from './Reveal'

function PlayIcon() {
  return (
    <span className="grid h-14 w-14 place-items-center rounded-full bg-brass/95 text-curtain-deep shadow-lg shadow-black/40">
      <svg width="20" height="22" viewBox="0 0 20 22" fill="currentColor" aria-hidden="true">
        <path d="M0 1.7C0 .9.9.4 1.6.8l17 9.3a1 1 0 0 1 0 1.8l-17 9.3A1 1 0 0 1 0 20.3V1.7Z" />
      </svg>
    </span>
  )
}

function VideoCard({ video, onPlay }) {
  return (
    <motion.button
      variants={staggerChild}
      onClick={() => onPlay(video)}
      className="group relative block overflow-hidden border border-cream/10 bg-curtain text-left shadow-lg shadow-black/30 transition-colors duration-300 group-hover:border-brass/40 hover:border-brass/40"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={`https://i.ytimg.com/vi/${video.yt}/mqdefault.jpg`}
          alt={`${video.title} — ${video.sub}`}
          loading="lazy"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-curtain-deep/90 via-curtain-deep/10 to-transparent" />
        <div className="absolute inset-0 grid place-items-center opacity-90 transition-opacity group-hover:opacity-100">
          <PlayIcon />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-xl font-semibold leading-tight text-cream transition-colors group-hover:text-brass-light">
          {video.title}
        </h3>
        <p className="mt-0.5 text-sm font-medium uppercase tracking-wide text-brass-light/90">
          {video.sub}
        </p>
        {video.note && <p className="mt-2 text-sm text-cream/60">{video.note}</p>}
      </div>
    </motion.button>
  )
}

function PlayerModal({ video, onClose }) {
  // Close on Escape + lock scroll while open.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] grid place-items-center bg-curtain-deep/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${video.title} video player`}
    >
      <motion.div
        initial={{ scale: 0.94, y: 12 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.96, y: 8 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-11 right-0 flex items-center gap-1.5 text-sm font-medium uppercase tracking-[0.18em] text-cream/80 transition-colors hover:text-brass-light"
          aria-label="Close video"
        >
          {sections.reels.close}
        </button>
        <div className="aspect-video overflow-hidden border border-brass/30 shadow-2xl shadow-black/60">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${video.yt}?autoplay=1&rel=0`}
            title={`${video.title} — ${video.sub}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="mt-3 text-center font-display text-lg text-cream">
          {video.title} <span className="text-brass-light">· {video.sub}</span>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function Videos() {
  const [activeCat, setActiveCat] = useState(videoCategories[0].key)
  const [playing, setPlaying] = useState(null)

  const current = videoCategories.find((c) => c.key === activeCat)
  // Largest category (Six13) — used as an invisible sizer so the section
  // height stays constant and never jumps when switching tabs.
  const sizer = videoCategories.reduce((a, b) =>
    b.videos.length > a.videos.length ? b : a,
  )

  return (
    <section id="reels" className="relative bg-curtain-deep py-24 sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-marquee text-brass">
            {sections.reels.label}
          </p>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[0.95] tracking-tight text-cream">
            {sections.reels.heading}
          </h2>
        </Reveal>

        {/* Category tabs */}
        <Reveal delay={0.05}>
          <div className="mt-9 flex flex-wrap gap-2">
            {videoCategories.map((cat) => {
              const isActive = cat.key === activeCat
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCat(cat.key)}
                  className={`relative px-5 py-2 text-sm font-semibold uppercase tracking-[0.12em] transition-colors ${
                    isActive ? 'text-curtain-deep' : 'text-cream/70 hover:text-brass-light'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="cat-pill"
                      className="absolute inset-0 bg-brass"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              )
            })}
          </div>
        </Reveal>

        {/* Grid — height locked to the largest category so tabs never resize the section */}
        <div className="relative mt-10">
          {/* Invisible sizer: reserves the height of the tallest tab (Six13). */}
          <div
            aria-hidden="true"
            className="invisible grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {sizer.videos.map((v) => (
              <VideoCard key={v.yt} video={v} onPlay={() => {}} />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              variants={staggerParent}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="absolute inset-x-0 top-0 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {current.videos.map((v) => (
                <VideoCard key={v.yt} video={v} onPlay={setPlaying} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {playing && <PlayerModal video={playing} onClose={() => setPlaying(null)} />}
      </AnimatePresence>
    </section>
  )
}
