import { Github, Linkedin, Code2 } from 'lucide-react'
import { LINKS } from '../data/portfolio.js'
export default function Footer() {
  const s = [[Linkedin, 'LinkedIn', LINKS.linkedin], [Github, 'GitHub', LINKS.github], [Code2, 'LeetCode', LINKS.leetcode]]
  return (<footer className="border-t border-white/5 px-5 py-10 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
    <div><p className="font-display font-semibold">Akrity Gupta</p><p className="text-sm text-slate-500">Aspiring Software Engineer</p></div>
    <div className="flex gap-2">{s.map(([I, l, h]) => <a key={l} href={h} target="_blank" rel="noreferrer" aria-label={l} className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/5"><I size={18} /></a>)}</div>
    <div className="text-center text-xs text-slate-500 sm:text-right"><p>© 2026 Akrity Gupta. All rights reserved.</p><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="mt-1 min-h-8 underline-offset-4 hover:underline">Back to top</button></div></div></footer>)
}
