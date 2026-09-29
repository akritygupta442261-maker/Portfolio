import { motion } from 'framer-motion'
export default function Divider() {
  return <div aria-hidden="true" className="mx-auto max-w-6xl px-5 sm:px-8"><motion.div initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" /></div>
}
