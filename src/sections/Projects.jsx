import { useState } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import * as Icons from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { PROJECTS } from '../data/portfolio.js'
function Card({ p, i }) {
  const [open, setOpen] = useState(false), rx = useMotionValue(0), ry = useMotionValue(0), I = Icons[p.icon]
  const rX = useSpring(useTransform(rx, [-.5, .5], [5, -5]), { stiffness: 150, damping: 15 }), rY = useSpring(useTransform(ry, [-.5, .5], [-5, 5]), { stiffness: 150, damping: 15 })
  const move = (e) => { const r = e.currentTarget.getBoundingClientRect(); ry.set((e.clientX - r.left) / r.width - .5); rx.set((e.clientY - r.top) / r.height - .5) }
  const links = [['Live Demo', p.live], ['GitHub', p.github]].filter(([, u]) => u)
  return (<Reveal delay={i * 0.1} className="[perspective:1000px]"><motion.article onMouseMove={move} onMouseLeave={() => { rx.set(0); ry.set(0) }} whileHover={{ y: -6 }} style={{ rotateX: rX, rotateY: rY }} className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-shadow hover:shadow-[0_0_40px_-12px_#8b5cf6]">
    <div aria-hidden="true" className={`relative grid h-40 place-items-center bg-gradient-to-br ${p.hue}`}><div className="absolute inset-0 grid-bg opacity-60" /><I size={48} className="relative text-white/80" strokeWidth={1.2} /></div>
    <div className="flex flex-1 flex-col p-6"><p className="text-xs uppercase tracking-widest text-cyan-300">{p.category}</p><h3 className="mt-2 text-xl font-semibold">{p.title}</h3>{p.duration && <p className="text-xs text-slate-500">{p.duration}</p>}
      <p className="mt-3 text-sm text-slate-300">{p.description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-md bg-violet-500/10 px-2 py-1 text-xs text-violet-200">{t}</li>)}</ul>
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="mt-5 min-h-11 self-start text-sm text-slate-300 hover:text-white">{open ? 'Hide details' : 'View details'}</button>
      <AnimatePresence>{open && <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="list-disc space-y-1 overflow-hidden pl-5 text-sm text-slate-400">{p.points.map((x) => <li key={x}>{x}</li>)}</motion.ul>}</AnimatePresence>
      {links.length > 0 && <div className="mt-auto flex flex-wrap gap-2 pt-5">{links.map(([l, u]) => <a key={l} href={u} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-sm hover:bg-white/5">{l}</a>)}</div>}</div></motion.article></Reveal>)
}
export default function Projects() { return <Section id="projects" title="Featured Projects" sub="A selection of projects I've developed."><div className="grid gap-6 lg:grid-cols-3">{PROJECTS.map((p, i) => <Card key={p.title} p={p} i={i} />)}</div></Section> }
