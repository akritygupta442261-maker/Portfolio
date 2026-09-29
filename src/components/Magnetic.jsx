import { motion, useMotionValue, useSpring } from 'framer-motion'
export default function Magnetic({ children, className = '', ...p }) {
  const x = useMotionValue(0), y = useMotionValue(0), sx = useSpring(x, { stiffness: 200, damping: 15 }), sy = useSpring(y, { stiffness: 200, damping: 15 })
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX - r.left - r.width / 2) * 0.2); y.set((e.clientY - r.top - r.height / 2) * 0.2) }
  return <motion.a {...p} onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0) }} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} style={{ x: sx, y: sy }} className={`inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors ${className}`}>{children}</motion.a>
}
