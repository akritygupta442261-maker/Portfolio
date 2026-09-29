import { useEffect, useRef } from 'react'
export default function CursorGlow() {
  const ref = useRef(null)
  useEffect(() => {
    if (!matchMedia('(pointer: fine)').matches || matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf; const el = ref.current
    const mv = (e) => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { el.style.transform = `translate3d(${e.clientX - 200}px,${e.clientY - 200}px,0)`; el.style.opacity = 1 }) }
    window.addEventListener('pointermove', mv, { passive: true })
    return () => { window.removeEventListener('pointermove', mv); cancelAnimationFrame(raf) }
  }, [])
  return <div ref={ref} aria-hidden="true" className="cursor-glow" />
}
