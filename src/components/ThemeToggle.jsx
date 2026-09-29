import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme.js'
export default function ThemeToggle() {
  const [theme, toggle] = useTheme(), dark = theme === 'dark'
  return (<button onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} className="grid h-11 w-11 place-items-center rounded-full hover:bg-white/5">
    <AnimatePresence mode="wait" initial={false}><motion.span key={theme} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>{dark ? <Sun size={18} /> : <Moon size={18} />}</motion.span></AnimatePresence></button>)
}
