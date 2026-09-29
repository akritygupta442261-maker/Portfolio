import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { SKILLS } from '../data/portfolio.js'
export default function Skills() {
  return (<Section id="skills" title="My Technical Arsenal"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
    {SKILLS.map((c, i) => { const I = Icons[c.icon]; return (<Reveal key={c.name} delay={i * 0.08}><motion.div initial="rest" whileHover="hover" variants={{ hover: { y: -4, rotateX: 4 } }} style={{ transformPerspective: 800 }} className="glass h-full rounded-2xl p-6 transition-colors hover:border-violet-400/40">
      <motion.span variants={{ hover: { rotate: 12, scale: 1.2 } }} className="inline-block"><I className="text-cyan-300" /></motion.span><h3 className="mt-3 text-lg font-semibold">{c.name}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">{c.items.map((s) => <li key={s} className="rounded-full bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:-translate-y-0.5 hover:bg-violet-500/15 hover:text-white">{s}</li>)}</ul></motion.div></Reveal>) })}</div></Section>)
}
