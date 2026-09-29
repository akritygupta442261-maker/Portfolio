import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { ABOUT, ABOUT_HIGHLIGHTS } from '../data/portfolio.js'
export default function About() {
  const r = useRef(null), { scrollYProgress } = useScroll({ target: r, offset: ['start end', 'end start'] }), rot = useTransform(scrollYProgress, [0, 1], [-15, 15]), py = useTransform(scrollYProgress, [0, 1], [30, -30])
  return (<Section id="about" title="About Me"><div ref={r} className="grid items-center gap-10 lg:grid-cols-[320px_1fr]">
    <Reveal><motion.div whileHover={{ scale: 1.03 }} role="img" aria-label="Abstract geometric AG monogram" className="glass relative grid aspect-square place-items-center overflow-hidden rounded-3xl">
      <motion.div style={{ rotate: rot }} className="absolute h-3/4 w-3/4 rounded-3xl border border-violet-400/30" /><motion.div style={{ rotate: rot }} className="absolute h-1/2 w-1/2 rotate-45 border border-cyan-300/30" />
      <motion.span style={{ y: py }} animate={{ rotate: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 9 }} className="absolute right-8 top-8 h-6 w-6 rounded-full bg-violet-400/40 blur-[1px]" />
      <span className="relative bg-gradient-to-br from-violet-400 to-cyan-300 bg-clip-text font-display text-7xl font-bold text-transparent">AG</span></motion.div></Reveal>
    <div><Reveal><p className="text-lg leading-relaxed text-slate-300">{ABOUT}</p></Reveal>
      <ul className="mt-8 grid gap-3 sm:grid-cols-3">{ABOUT_HIGHLIGHTS.map(([k, v], i) => <Reveal key={k} delay={i * 0.1}><li className="glass h-full rounded-xl p-4 transition-colors hover:border-violet-400/40"><p className="text-xs uppercase tracking-widest text-violet-300">{k}</p><p className="mt-1 text-sm text-slate-200">{v}</p></li></Reveal>)}</ul></div></div></Section>)
}
