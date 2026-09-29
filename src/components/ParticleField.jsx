import { useEffect, useRef } from 'react'
// Lightweight canvas particles: paused when the tab is hidden, off for reduced motion.
export default function ParticleField() {
  const ref = useRef(null)
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const c = ref.current, x = c.getContext('2d'); let w, h, raf
    const ps = Array.from({ length: innerWidth < 768 ? 25 : 55 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + 0.4, vx: (Math.random() - 0.5) * 6e-5, vy: (Math.random() - 0.5) * 6e-5 }))
    const rs = () => { const d = Math.min(devicePixelRatio, 1.5); w = c.width = innerWidth * d; h = c.height = innerHeight * d }
    const tick = () => {
      x.clearRect(0, 0, w, h); x.fillStyle = document.documentElement.dataset.theme === 'light' ? 'rgba(109,40,217,.35)' : 'rgba(165,180,252,.5)'
      for (const p of ps) { p.x = (p.x + p.vx * 16 + 1) % 1; p.y = (p.y + p.vy * 16 + 1) % 1; x.beginPath(); x.arc(p.x * w, p.y * h, p.r * (w / innerWidth), 0, 7); x.fill() }
      raf = requestAnimationFrame(tick)
    }
    const vis = () => { cancelAnimationFrame(raf); if (!document.hidden) tick() }
    rs(); tick(); addEventListener('resize', rs); document.addEventListener('visibilitychange', vis)
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', rs); document.removeEventListener('visibilitychange', vis) }
  }, [])
  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 h-full w-full" />
}
