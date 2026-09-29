import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { NAV, RESUME } from '../data/portfolio.js'
import useActiveSection from '../hooks/useActiveSection.js'
const id = (n) => n.toLowerCase()
export default function Navbar() {
  const active = useActiveSection(NAV.map(id)), [open, setOpen] = useState(false), [sc, setSc] = useState(false)
  useEffect(() => { const on = () => setSc(window.scrollY > 24); on(); window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on) }, [])
  useEffect(() => { const k = (e) => e.key === 'Escape' && setOpen(false); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  return (<header className={`fixed inset-x-0 top-0 z-50 transition-all ${sc || open ? 'border-b border-white/5 bg-[var(--bg-solid)]/70 backdrop-blur-xl' : ''}`}>
    <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
      <a href="#home" className="font-display text-lg font-semibold">Akrity<span className="text-violet-400"> Gupta</span></a>
      <ul className="hidden items-center gap-5 xl:flex">{NAV.map((n) => (<li key={n}><a href={`#${id(n)}`} aria-current={active === id(n) ? 'true' : undefined} className={`nav-link relative py-2 text-sm ${active === id(n) ? 'text-white' : 'text-slate-400 hover:text-white'}`}>{n}{active === id(n) && <motion.span layoutId="nav-ul" className="absolute inset-x-0 -bottom-0.5 h-px bg-gradient-to-r from-violet-400 to-cyan-400" />}</a></li>))}</ul>
      <div className="flex items-center gap-2"><ThemeToggle />
        <a href={RESUME} download className="hidden rounded-full border border-white/15 px-4 py-1.5 text-sm hover:bg-white/5 xl:block">Resume</a>
        <button className="grid h-11 w-11 place-items-center xl:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></nav>
    <AnimatePresence>{open && (<motion.ul id="mobile-menu" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden px-5 pb-4 xl:hidden">
      {NAV.map((n) => <li key={n}><a onClick={() => setOpen(false)} href={`#${id(n)}`} className={`block py-3 ${active === id(n) ? 'text-violet-300' : 'text-slate-300'}`}>{n}</a></li>)}
      <li><a href={RESUME} download className="block py-3 text-cyan-300">Resume</a></li></motion.ul>)}</AnimatePresence></header>)
}
