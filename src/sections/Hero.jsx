import { lazy, Suspense } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Code2, ChevronDown } from 'lucide-react'
import Magnetic from '../components/Magnetic.jsx'
import useLite from '../hooks/useLite.js'
import { LINKS, RESUME } from '../data/portfolio.js'
const Hero3D = lazy(() => import('../components/Hero3D.jsx'))
export default function Hero() {
  const still = useReducedMotion(), { lite, compact } = useLite()
  const w = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } }, it = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18 } } }
  const soc = [[Github, 'GitHub', LINKS.github], [Linkedin, 'LinkedIn', LINKS.linkedin], [Code2, 'LeetCode', LINKS.leetcode]]
  return (<section id="home" className="relative flex min-h-screen items-center overflow-hidden">
    <div className="grid-bg absolute inset-0" />
    <div className="relative mx-auto grid w-full max-w-6xl items-center gap-2 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-2 lg:gap-8">
      <motion.div variants={w} initial="hidden" animate="show">
        <motion.p variants={it} className="text-sm tracking-[0.3em] text-cyan-300">HELLO, I'M</motion.p>
        <motion.h1 variants={it} className="mt-3 text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl xl:text-7xl">AKRITY GUPTA<span className="mt-3 block bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-2xl normal-case text-transparent sm:text-4xl">Aspiring Software Engineer</span></motion.h1>
        <motion.p variants={it} className="mt-6 max-w-md text-base text-slate-300 sm:text-lg">Building responsive web applications and intelligent solutions through code.</motion.p>
        <motion.ul variants={it} className="mt-5 flex flex-wrap gap-2 text-xs text-slate-300">{['MCA Student', 'Web Developer', 'Problem Solver'].map((l) => <li key={l} className="glass rounded-full px-3 py-1">{l}</li>)}</motion.ul>
        <motion.div variants={it} className="mt-8 flex flex-wrap items-center gap-3">
          <Magnetic href="#projects" className="btn-primary">Explore My Work <ArrowRight size={16} /></Magnetic>
          <Magnetic href={RESUME} download className="border border-white/15 hover:bg-white/5">Download Resume <Download size={16} /></Magnetic>
          <Magnetic href="#contact" className="text-slate-300 hover:text-white">Contact Me</Magnetic></motion.div>
        <motion.div variants={it} className="mt-6 flex gap-1">{soc.map(([I, l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="grid h-11 w-11 place-items-center rounded-full text-slate-400 transition-all hover:-translate-y-0.5 hover:bg-white/5 hover:text-white"><I size={18} /></a>)}</motion.div>
      </motion.div>
      <motion.div aria-hidden="true" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.4 }} className="relative h-72 sm:h-96 lg:h-[32rem]">
        {lite ? <motion.div animate={still ? {} : { y: [0, -14, 0], rotate: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 8 }} className="absolute inset-[15%] rounded-full bg-gradient-to-br from-violet-500/40 to-cyan-400/20 blur-2xl" /> : <Suspense fallback={null}><Hero3D still={still} compact={compact} /></Suspense>}
      </motion.div></div>
    <a href="#about" aria-label="Scroll to About" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 text-slate-500 lg:block"><ChevronDown /></a></section>)
}
