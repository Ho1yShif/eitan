import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { gallery, sections } from '../data/content'
import { staggerChild, staggerParent } from './Reveal'
import { useModalDismiss } from '../lib/useModalDismiss'
import SectionHeader from './SectionHeader'

function Lightbox({ photo, onClose }) {
  useModalDismiss(onClose)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[60] grid place-items-center bg-curtain-deep/90 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
    >
      <motion.figure
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-h-[88vh] max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="max-h-[80vh] w-auto border border-brass/30 object-contain shadow-2xl shadow-black/60"
        />
        <figcaption className="mt-3 text-center font-display text-lg italic text-cream">
          {photo.title}
        </figcaption>
      </motion.figure>
    </motion.div>
  )
}

export default function Gallery() {
  const [open, setOpen] = useState(null)

  return (
    <section id="gallery" className="grain relative bg-cream py-24 text-ink sm:py-32">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label={sections.gallery.label}
          heading={sections.gallery.heading}
          accent="rouge"
          tone="dark"
        />

        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5"
        >
          {gallery.map((photo) => (
            <motion.button
              key={photo.title}
              variants={staggerChild}
              onClick={() => setOpen(photo)}
              className="group relative block w-full overflow-hidden shadow-lg shadow-ink/15"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-curtain-deep/85 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="absolute bottom-0 left-0 right-0 p-4 text-left font-display text-lg font-semibold text-cream opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {photo.title}
              </span>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {open && <Lightbox photo={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  )
}
