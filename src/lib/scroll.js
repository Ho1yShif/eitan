// Smooth-scroll to an in-page section, offsetting for the fixed header.
//
// Why this is hand-rolled instead of CSS `scroll-behavior: smooth` or
// scrollIntoView: the page lazy-loads images below the fold, so its height
// keeps growing while a scroll is in flight (e.g. #contact starts at ~8900px
// but ends near ~11000px once images load). A native smooth scroll locks onto
// the target's *initial* position and gets cancelled the moment that layout
// shifts, so it stalls a few hundred px down — the "menu clicks don't scroll"
// bug. We instead recompute the target every frame, so the scroll tracks the
// section as it moves and always lands on it.

const HEADER_OFFSET = 80 // matches the fixed header height (scroll-padding-top: 5rem)
const DURATION = 600

// easeInOutCubic
const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

export function scrollToHash(href) {
  const id = href.replace(/^#/, '')
  const el = id === 'top' ? null : document.getElementById(id)
  if (id !== 'top' && !el) return

  // Live target position — re-read each frame so layout shifts can't strand us.
  const targetY = () =>
    id === 'top'
      ? 0
      : Math.max(0, el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET)

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    // No animation, but keep snapping to the target for a short window so
    // lazy-loaded images shifting the layout can't leave us short of it.
    history.replaceState(null, '', href)
    let settleStart
    const settle = (now) => {
      if (settleStart === undefined) settleStart = now
      window.scrollTo(0, targetY())
      if (now - settleStart < 500) requestAnimationFrame(settle)
    }
    requestAnimationFrame(settle)
    return
  }

  let startTime
  let startY
  const step = (now) => {
    if (startTime === undefined) {
      startTime = now
      startY = window.scrollY
    }
    const t = Math.min((now - startTime) / DURATION, 1)
    // Interpolate from the start position toward the *current* target, so at
    // t=1 we land exactly on wherever the section now is. behavior:'auto' keeps
    // each frame an instant set — the easing is our smoothing.
    window.scrollTo({ top: startY + (targetY() - startY) * ease(t), behavior: 'auto' })
    if (t < 1) requestAnimationFrame(step)
    else history.replaceState(null, '', href)
  }
  requestAnimationFrame(step)
}
