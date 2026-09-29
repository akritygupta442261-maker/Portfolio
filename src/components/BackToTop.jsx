import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
export default function BackToTop() {
  const [v, setV] = useState(false)
  useEffect(() => { const on = () => setV(window.scrollY > 600); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on) }, [])
  return <AnimatePresence>{v && <motion.button initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="glass fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full"><ArrowUp size={18} /></motion.button>}</AnimatePresence>
}
