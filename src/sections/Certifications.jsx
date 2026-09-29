import { motion } from 'framer-motion'
import { Award, Heart, ExternalLink } from 'lucide-react'
import Section from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import { CERTS, ACTIVITY } from '../data/portfolio.js'
export default function Certifications() {
  return (<><Section id="certifications" title="Certifications" className="pb-8"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{CERTS.map((c, i) => <Reveal key={c.title} delay={i * 0.08}><motion.div initial="rest" whileHover="hover" variants={{ hover: { y: -4, rotateX: 4 } }} style={{ transformPerspective: 800 }} className="glass h-full rounded-2xl p-5 transition-colors hover:border-violet-400/40"><motion.span variants={{ hover: { rotate: -12, scale: 1.2 } }} className="inline-block"><Award className="text-violet-300" /></motion.span><h3 className="mt-3 font-medium">{c.title}</h3><p className="text-sm text-slate-400">{c.issuer}</p>{c.url && <a href={c.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-sm text-cyan-300">View credential <ExternalLink size={14} /></a>}</motion.div></Reveal>)}</div></Section>
    <section aria-labelledby="beyond-h" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8"><Reveal><div className="glass flex items-start gap-4 rounded-2xl p-6"><motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ repeat: Infinity, duration: 2.4 }}><Heart className="text-cyan-300" /></motion.div><div><h2 id="beyond-h" className="text-xl font-semibold">Beyond Coding</h2><p className="mt-1 text-slate-300">{ACTIVITY}</p></div></div></Reveal></section></>)
}
