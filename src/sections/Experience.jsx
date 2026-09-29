import Section from '../components/Section.jsx'
import Timeline from '../components/Timeline.jsx'
import { EXPERIENCE } from '../data/portfolio.js'
export default function Experience() { return <Section id="experience" title="Experience"><Timeline items={EXPERIENCE} /></Section> }
