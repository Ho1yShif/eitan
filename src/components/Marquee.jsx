// A decorative row of marquee bulbs. Purely ornamental.
export default function Marquee({ count = 14, className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="bulb animate-flicker"
          style={{ animationDelay: `${(i % 5) * 0.4}s` }}
        />
      ))}
    </div>
  )
}
