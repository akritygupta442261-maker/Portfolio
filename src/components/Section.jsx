import Reveal from './Reveal.jsx'
export default function Section({ id, title, sub, children, className = '' }) {
  return (<section id={id} aria-labelledby={`${id}-h`} className={`mx-auto max-w-6xl px-5 py-24 sm:px-8 ${className}`}>
    <Reveal><h2 id={`${id}-h`} className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>{sub && <p className="mt-3 text-slate-400">{sub}</p>}</Reveal>
    <div className="mt-12">{children}</div></section>)
}
