// Single source of truth. Content taken from resume_august.pdf.
export const LINKS = { email:'akritygupta442261@gmail.com', linkedin:'https://linkedin.com/in/akrity-gupta-6a1928314', github:'https://github.com/akritygupta442261-maker', leetcode:'https://leetcode.com/u/aktity/' }
export const RESUME = '/resume-august.pdf'
export const NAV = ['Home','About','Skills','Projects','Experience','Education','Certifications','Contact']
export const ABOUT = 'I am an aspiring Software Engineer pursuing a Master of Computer Applications at KIET Group of Institutions, Ghaziabad. With a background in Mathematics, I have a strong interest in web development, data structures and algorithms, and building responsive applications. I enjoy solving problems, learning new technologies, and improving application performance.'
export const ABOUT_HIGHLIGHTS = [['MCA Student','KIET Ghaziabad'],['Background','B.Sc. Mathematics'],['Focus','Web Development and Problem Solving']]
export const SKILLS = [
  { name:'Programming', icon:'Terminal', items:['C','Java','Object-Oriented Programming (OOP)'] },
  { name:'Web Development', icon:'Globe', items:['HTML','CSS','JavaScript'] },
  { name:'Database', icon:'Database', items:['SQL','MySQL'] },
  { name:'Core Concepts', icon:'Brain', items:['Data Structures','Problem Solving','System Analysis'] },
  { name:'Tools', icon:'Wrench', items:['Git','VS Code','MS Office','Eclipse'] },
]
// Add real URLs in `live` / `github` to enable buttons. null = hidden ("Link coming soon").
export const PROJECTS = [
  { title:'First Flight Travels', category:'Online Travel Booking Website', duration:'September 2025 – January 2026', icon:'Plane', hue:'from-violet-500/30 to-blue-500/10',
    description:'Developed a responsive online travel booking website with user-friendly interfaces, backend API integration, input validation and improved usability.',
    tags:['Responsive UI','API Integration','Input Validation'],
    points:['Responsive user interfaces.','Backend API integration.','Input validation.','Improved responsiveness and user experience.'], live:null, github:null },
  { title:'Edu-Connect ERP Portal', category:'ERP Portal', duration:'', icon:'Database', hue:'from-cyan-500/30 to-blue-500/10',
    description:'Developed an ERP portal using HTML, CSS, JavaScript and Firebase Realtime Database.',
    tags:['HTML','CSS','JavaScript','Firebase Realtime Database'],
    points:['Real-time data synchronization.','Efficient data handling.','Collaborative module development.','Improved system responsiveness and reliability.'], live:null, github:null },
  { title:'AI Career Copilot', category:'AI-Powered Resume Evaluation System', duration:'', icon:'Sparkles', hue:'from-fuchsia-500/25 to-violet-500/10',
    description:'Built an AI-based system to evaluate resumes against job descriptions using RAG and LLM-powered feedback.',
    tags:['RAG','LLM','ATS Validation'],
    points:['Resume evaluation using RAG.','ATS validation.','Skill matching.','Automated interview question generation.'], live:null, github:null },
]
export const EXPERIENCE = [{ title:'AICTE – Microsoft Elevate Internship', sub:'Internship', meta:'01 January 2026 – 12 February 2026',
  points:['Analyzed cloud systems and provided analytical support for Azure-based solutions.','Collaborated on AI and Machine Learning project tasks.','Performed cloud deployment and facilitated system implementation.','Identified risks and developed recommendations to improve system performance.'] }]
export const EDUCATION = [
  { title:'Master of Computer Applications', sub:'KIET Group of Institutions, Ghaziabad', meta:'2025 – Present' },
  { title:'Bachelor of Science (Mathematics)', sub:'Jananayak Chandrashekhar University, Ballia', meta:'2020 – 2023' },
  { title:'Class XII', sub:'CBSE', meta:'2018 – 2020' },
  { title:'Class X', sub:'CBSE', meta:'2016 – 2018' },
]
// Add `url` to show a credential link.
export const CERTS = [{ title:'Computer Networks Certification', issuer:'Cisco' },{ title:'Java', issuer:'Infosys Springboard' },{ title:'Web Development', issuer:'Infosys Springboard' },{ title:'Prompt Engineering', issuer:'Infosys Springboard' }]
export const ACTIVITY = 'Volunteered in the Ek Bharat Shreshtha Bharat initiative, supporting student engagement activities.'
