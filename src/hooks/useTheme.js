import { useState, useCallback } from 'react'
// index.html sets data-theme before first paint (saved choice, else system preference)
export default function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const toggle = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark', r = document.documentElement
    r.classList.add('theme-anim'); r.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch {}
    setTheme(next); setTimeout(() => r.classList.remove('theme-anim'), 400)
  }, [theme])
  return [theme, toggle]
}
