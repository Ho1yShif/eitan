import { motion, useReducedMotion } from 'framer-motion'
import { useIsMobile } from '../lib/useIsMobile'

// Scroll-triggered reveal. Respects prefers-reduced-motion (renders static).
export default function Reveal({
  as = 'div',
  children,
  delay = 0,
  y = 26,
  className = '',
  once = true,
  amount = 0.3,
}) {
  const reduce = useReducedMotion()
  const isMobile = useIsMobile()
  const MotionTag = motion[as] || motion.div

  if (reduce) {
    const Tag = as
    return <Tag className={className}>{children}</Tag>
  }

  // On mobile, fire as soon as any part enters the viewport. Tall blocks (bio,
  // footer heading) never reach the 30% threshold until scrolled far past, so
  // they'd otherwise pop/flash in late on short screens.
  const viewAmount = isMobile ? 'some' : amount

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: viewAmount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}

// Stagger container + item helpers for grouped reveals.
export const staggerParent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

export const staggerChild = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}
