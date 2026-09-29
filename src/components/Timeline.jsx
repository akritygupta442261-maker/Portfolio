import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
export default function Timeline({ items }) {
  return (<div className="relative pl-8">
    <motion.span initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} style={{ originY: 0 }} className="absolute bottom-0 left-[7px] top-2 w-px bg-gradient-to-b from-violet-400 to-cyan-400" />
    <ol className="space-y-10">{items.map((it, i) => (<li key={it.title} className="relative">
      <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-[var(--bg-solid)] ring-2 ring-violet-400" />
      <Reveal delay={i * 0.08}><p className="text-xs uppercase tracking-widest text-cyan-300">{it.meta}</p><h3 className="mt-1 text-xl font-semibold">{it.title}</h3>{it.sub && <p className="text-sm text-slate-400">{it.sub}</p>}
        {it.points && <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-300">{it.points.map((p) => <li key={p}>{p}</li>)}</ul>}</Reveal></li>))}</ol></div>)
}
