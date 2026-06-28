import { useEffect } from 'react'

// Close on Escape and lock body scroll while a modal/overlay is open.
export function useModalDismiss(onClose) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])
}
