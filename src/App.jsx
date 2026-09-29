import { motion } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import ParticleField from './components/ParticleField.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import Divider from './components/Divider.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Certifications from './sections/Certifications.jsx'
import ResumeCta from './sections/ResumeCta.jsx'
import Contact from './sections/Contact.jsx'
export default function App() {
  return (<><ParticleField /><CursorGlow /><div aria-hidden="true"><div className="blob blob-a" /><div className="blob blob-b" /><div className="blob blob-c" /></div>
    <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:text-black">Skip to content</a>
    <Navbar /><motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <Hero /><About /><Divider /><Skills /><Divider /><Projects /><Divider /><Experience /><Divider /><Education /><Divider /><Certifications /><ResumeCta /><Contact /></motion.main><Footer /><BackToTop /></>)
}
