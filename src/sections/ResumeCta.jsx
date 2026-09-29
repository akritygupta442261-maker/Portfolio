import { Download, Eye } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { RESUME } from '../data/portfolio.js'
export default function ResumeCta() {
  return (<section id="resume" aria-labelledby="resume-h" className="mx-auto max-w-6xl px-5 py-12 sm:px-8"><Reveal><div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-[var(--panel)] to-cyan-500/10 p-10 text-center sm:p-16">
    <h2 id="resume-h" className="text-3xl font-semibold sm:text-4xl">Let's Build Something Together</h2>
    <p className="mx-auto mt-3 max-w-lg text-slate-300">Explore my background, skills and projects.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-3"><Magnetic href={RESUME} target="_blank" rel="noreferrer" className="border border-white/15 hover:bg-white/5"><Eye size={16} /> View Resume</Magnetic><Magnetic href={RESUME} download className="btn-primary"><Download size={16} /> Download Resume</Magnetic></div></div></Reveal></section>)
}
