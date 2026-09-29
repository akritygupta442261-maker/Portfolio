import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Code2, Loader2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Section from '../components/Section.jsx'
import { LINKS } from '../data/portfolio.js'
const empty = { name: '', email: '', subject: '', message: '' }
export default function Contact() {
  const [f, setF] = useState(empty), [err, setErr] = useState({}), [st, setSt] = useState('idle'), [msg, setMsg] = useState('')
  const env = import.meta.env, ok = env.VITE_EMAILJS_SERVICE_ID && env.VITE_EMAILJS_TEMPLATE_ID && env.VITE_EMAILJS_PUBLIC_KEY
  const submit = async (e) => {
    e.preventDefault(); const v = {}
    if (f.name.trim().length < 2) v.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) v.email = 'Please enter a valid email address.'
    if (f.subject.trim().length < 3) v.subject = 'Please add a subject.'
    if (f.message.trim().length < 10) v.message = 'Message should be at least 10 characters.'
    setErr(v); if (Object.keys(v).length) return
    if (!ok) { setSt('error'); setMsg(`The contact form isn't configured yet, so nothing was sent. Please email ${LINKS.email} directly.`); return }
    setSt('loading')
    try { await emailjs.send(env.VITE_EMAILJS_SERVICE_ID, env.VITE_EMAILJS_TEMPLATE_ID, { from_name: f.name, reply_to: f.email, subject: f.subject, message: f.message }, { publicKey: env.VITE_EMAILJS_PUBLIC_KEY }); setSt('success'); setMsg('Thanks! Your message has been sent.'); setF(empty) }
    catch { setSt('error'); setMsg('Something went wrong. Please try again or email me directly.') }
  }
  const fld = (k, label, type = 'text') => { const c = 'field mt-1 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3', p = { id: k, value: f[k], onChange: (e) => setF({ ...f, [k]: e.target.value }), 'aria-invalid': !!err[k], 'aria-describedby': `${k}-e`, required: true, className: c }
    return (<div><label htmlFor={k} className="text-sm text-slate-300">{label}</label>{k === 'message' ? <textarea rows={5} {...p} /> : <input type={type} {...p} />}<p id={`${k}-e`} className="mt-1 min-h-4 text-xs text-rose-300">{err[k]}</p></div>) }
  const soc = [[Mail, LINKS.email, `mailto:${LINKS.email}`], [Linkedin, 'LinkedIn', LINKS.linkedin], [Github, 'GitHub', LINKS.github], [Code2, 'LeetCode', LINKS.leetcode]]
  return (<Section id="contact" title="Let's Connect" sub="Have an opportunity or an idea? Let's connect."><div className="grid gap-10 lg:grid-cols-2">
    <ul className="space-y-3">{soc.map(([I, l, h]) => <li key={l}><a href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="glass flex min-h-14 items-center gap-3 rounded-xl px-5 py-4 hover:border-cyan-300/40"><I size={18} className="text-cyan-300" />{l}</a></li>)}</ul>
    <form onSubmit={submit} noValidate className="glass rounded-2xl p-6">{fld('name', 'Name')}{fld('email', 'Email', 'email')}{fld('subject', 'Subject')}{fld('message', 'Message')}
      <motion.button whileTap={{ scale: 0.97 }} disabled={st === 'loading'} className="flex min-h-11 items-center gap-2 rounded-full btn-primary px-6 py-3 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60">{st === 'loading' && <Loader2 size={16} className="animate-spin" />}{st === 'loading' ? 'Sending…' : 'Send Message'}</motion.button>
      <p role="status" aria-live="polite" className={`mt-4 text-sm ${st === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}>{msg}</p></form></div></Section>)
}
