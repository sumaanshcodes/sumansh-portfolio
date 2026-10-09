import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  Sun, Moon, Code2, ExternalLink, GraduationCap, Trophy, Users, MapPin,
  Terminal, Database, ShieldCheck, Boxes, Sparkles, BriefcaseBusiness, Check, Download
} from 'lucide-react'

const profile = {
  name: 'Sumansh Yadav',
  email: 'sumanshyadav.1807@gmail.com',
  github: 'https://github.com/sumaanshcodes',
  linkedin: 'https://www.linkedin.com/',
  location: 'Mathura, Uttar Pradesh · Open to relocate',
}
const projects = [
  {
    id: '01', slug: 'medistock', name: 'MediStock',
    category: 'PRODUCT ENGINEERING',
    summary: 'Medicine inventory and management system built around everyday pharmacy workflows.',
    description: 'A full-stack medicine management product focused on making inventory, expiry tracking, and pharmacy operations easier to manage.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'OCR'],
    features: ['Inventory and expiry tracking', 'Billing and bill generation', 'OCR and barcode-based medicine identification', 'Voice search and automated reorder workflows'],
    icon: '✳', accent: 'green', github: 'https://github.com/sumaanshcodes',
    visual: 'inventory'
  },
  {
    id: '02', slug: 'coachcode', name: 'CoachCode.ai',
    category: 'LEARNING PLATFORM',
    summary: 'A placement preparation platform with role-based experiences for students, faculty, and admins.',
    description: 'A full-stack platform for organizing placement preparation workflows, coding practice, assessments, and learning materials.',
    stack: ['React', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT'],
    features: ['JWT authentication and role-based authorization', 'Coding practice and mock tests', 'Study materials and smart notes', 'Validated file uploads and responsive UI'],
    icon: '⌘', accent: 'violet', github: 'https://github.com/sumaanshcodes',
    visual: 'learning'
  },
  {
    id: '03', slug: 'incident-system', name: 'Incident Management',
    category: 'JAVA BACKEND',
    summary: 'A secure incident reporting and tracking application using Spring Boot and React.',
    description: 'A full-stack system where users can report incidents and administrators can track, update, and manage them.',
    stack: ['Java', 'Spring Boot', 'Spring Security', 'React', 'MySQL', 'JWT'],
    features: ['JWT-based authentication and authorization', 'Incident creation and tracking REST APIs', 'Admin and user workflows', 'Persistent storage with MySQL'],
    icon: '◈', accent: 'blue', github: 'https://github.com/sumaanshcodes',
    visual: 'incident'
  }
]
const skills = [
  { title: 'Backend & APIs', icon: Terminal, items: ['Java', 'Spring Boot', 'Spring Security', 'Node.js', 'Express.js', 'REST APIs', 'JWT'] },
  { title: 'Frontend', icon: Code2, items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI', 'Component Architecture'] },
  { title: 'Data', icon: Database, items: ['MySQL', 'MongoDB', 'Sequelize', 'SQL', 'DBMS'] },
  { title: 'Tools & Foundations', icon: Boxes, items: ['Git', 'GitHub', 'Postman', 'OOP', 'DSA', 'Operating Systems', 'Computer Networks'] }
]
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [pathname])
  return null
}
function Header({ light, setLight }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  const nav = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Contact', '/contact']]
  return <header className="header">
    <div className="nav-shell">
      <Link to="/" className="brand" aria-label="Sumansh Yadav home"><img className="brand-avatar" src="/sumansh-avatar.png" alt=""/><span className="brand-name">SUMANSH YADAV<small>SOFTWARE ENGINEER IN THE MAKING</small></span></Link>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {nav.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}
        <Link className="nav-cta" to="/contact">Let's talk <ArrowUpRight size={15}/></Link>
      </nav>
      <div className="nav-actions">
        <button className="icon-button theme-toggle" aria-label="Toggle color theme" onClick={() => setLight(!light)}>{light ? <Moon size={17}/> : <Sun size={17}/>}</button>
        <button className="icon-button mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </div>
  </header>
}
function Reveal({ children, delay = 0, className = '' }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: .65, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>
}
function OrbitalArt() {
  return <div className="orbital-stage" aria-label="Abstract 3D geometric artwork">
    <div className="art-grid"/>
    <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
    <motion.div className="geo geo-main" animate={{ rotateY: [0, 14, 0], rotateX: [0, -8, 0], y: [0, -10, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}>
      <div className="geo-face face-front"/><div className="geo-face face-side"/><div className="geo-face face-top"/>
    </motion.div>
    <motion.div className="geo geo-small" animate={{ rotate: [0, 360], y: [0, -12, 0] }} transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}/>
    <motion.div className="geo geo-shard" animate={{ rotate: [18, 28, 18], y: [0, 12, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}/>
    <div className="art-label label-top"><span className="live-dot"/> SYSTEMS / IDEAS / IMPACT</div>
    <div className="art-label label-bottom">FIG. 001 — BUILDING IN PUBLIC</div>
    <div className="code-float"><div className="code-head"><span/><span/><span/> <b>developer.js</b></div><code><i>const</i> developer = {'{'}<br/>&nbsp; focus: <em>"backend"</em>,<br/>&nbsp; build: <em>"useful things"</em>,<br/>&nbsp; mindset: <em>"keep learning"</em><br/>{'}'}</code></div>
    <div className="art-index">01<br/><span>ENGINEERING</span></div>
  </div>
}
function HeroAvatar() {
  return <div className="avatar-stage" aria-label="Cinematic developer avatar of Sumansh Yadav">
    <div className="avatar-grid" />
    <div className="avatar-orbit avatar-orbit-a" />
    <div className="avatar-orbit avatar-orbit-b" />
    <motion.div className="avatar-image-frame" initial={{ opacity: 0, scale: .94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .9, delay: .15, ease: [.22, 1, .36, 1] }}>
      <img src="/sumansh-avatar.png" alt="Sumansh Yadav — cinematic developer avatar" fetchPriority="high" />
      <div className="avatar-image-shade" />
      <div className="avatar-corner avatar-corner-tl" /><div className="avatar-corner avatar-corner-br" />
    </motion.div>
    <motion.div className="avatar-float avatar-float-top" animate={{ y: [0, -7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}><span className="live-dot"/> JAVA / SPRING BOOT</motion.div>
    <motion.div className="avatar-float avatar-float-bottom" animate={{ y: [0, 7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}><Code2 size={15}/><span><b>BUILDING THE BACKEND</b><small>ONE API AT A TIME</small></span></motion.div>
    <div className="avatar-index"><span>SY</span><i>01 / DEVELOPER</i></div>
  </div>
}

function ProjectVisual({ project }) {
  return <div className={`project-visual visual-${project.visual}`}>
    <div className="mock-window">
      <div className="mock-top"><div className="mock-dots"><i/><i/><i/></div><span>{project.name}</span><span className="mock-status">● LIVE CONCEPT</span></div>
      {project.visual === 'inventory' && <div className="mock-body">
        <aside><b>MEDI<span>STOCK</span></b>{['Overview','Inventory','Billing','Expiry alerts','Reports'].map((x,i)=><small className={i===0?'selected':''} key={x}>{x}</small>)}</aside>
        <div className="mock-content"><div className="mock-welcome">Inventory overview <small>PHARMACY OPERATIONS</small></div><div className="metric-row"><div><small>Total medicines</small><b>1,240</b></div><div><small>Low stock</small><b>45</b></div><div><small>Expiring soon</small><b>28</b></div></div><div className="mock-chart"><div className="chart-bars">{[32,48,40,72,52,83,64,92,61,78,47,70].map((h,i)=><i style={{height:`${h}%`}} key={i}/>)}</div><small>STOCK MOVEMENT · LAST 30 DAYS</small></div></div>
      </div>}
      {project.visual === 'learning' && <div className="mock-body">
        <aside><b>COACH<span>CODE</span></b>{['Dashboard','My courses','Practice','Mock tests','Smart notes'].map((x,i)=><small className={i===0?'selected':''} key={x}>{x}</small>)}</aside>
        <div className="mock-content"><div className="mock-welcome">Welcome back, developer <small>YOUR NEXT CHAPTER STARTS HERE</small></div><div className="metric-row"><div><small>Mock tests</small><b>12</b></div><div><small>Topics covered</small><b>08</b></div><div><small>Progress</small><b>72%</b></div></div><div className="course-row"><div><small>CONTINUE LEARNING</small><b>Data Structures & Algorithms</b><span className="progress"><i/></span></div><div><small>UP NEXT</small><b>Backend fundamentals</b><span className="progress"><i/></span></div></div></div>
      </div>}
      {project.visual === 'incident' && <div className="mock-body">
        <aside><b>INCIDENT<span>DESK</span></b>{['Dashboard','Report incident','All incidents','Users','Analytics'].map((x,i)=><small className={i===0?'selected':''} key={x}>{x}</small>)}</aside>
        <div className="mock-content"><div className="mock-welcome">Incident overview <small>OPERATIONS CONTROL CENTER</small></div><div className="metric-row"><div><small>Total incidents</small><b>124</b></div><div><small>Open</small><b>32</b></div><div><small>Resolved</small><b>64</b></div></div><div className="incident-table"><div><b>Recent incidents</b><small>STATUS</small></div>{[['Network outage','Open'],['Equipment issue','In progress'],['Access request','Resolved']].map(([x,y])=><div key={x}><span>{x}</span><small className={'pill-status '+y.toLowerCase().replace(' ','-')}>{y}</small></div>)}</div></div>
      </div>}
    </div>
    <div className="visual-glow"/>
  </div>
}
function ProjectCard({ project, index }) {
  return <Reveal delay={index * .08}><article className={`project-card accent-${project.accent}`}>
    <div className="project-card-top"><span className="eyebrow">{project.id} / {project.category}</span><Link to={`/projects/${project.slug}`} className="round-link" aria-label={`View ${project.name}`}><ArrowUpRight size={18}/></Link></div>
    <Link to={`/projects/${project.slug}`} className="visual-link"><ProjectVisual project={project}/></Link>
    <div className="project-info"><div className="project-title-row"><span className="project-glyph">{project.icon}</span><h3>{project.name}</h3></div><p>{project.summary}</p><div className="tag-row">{project.stack.slice(0,5).map(tag=><span className="tag" key={tag}>{tag}</span>)}</div><Link to={`/projects/${project.slug}`} className="text-link">Explore case study <ArrowRight size={15}/></Link></div>
  </article></Reveal>
}
function SectionHeading({ kicker, title, accent, copy }) {
  return <div className="section-heading"><div><span className="eyebrow"><span className="mini-line"/> {kicker}</span><h2>{title} <span>{accent}</span></h2></div>{copy && <p>{copy}</p>}</div>
}
function Footer() {
  return <footer className="footer"><div className="footer-top"><Link to="/" className="brand footer-brand" aria-label="Sumansh Yadav home"><img className="brand-avatar" src="/sumansh-avatar.png" alt=""/></Link><p>Curious by default. Building with intent.</p><Link to="/contact" className="footer-contact">Have a project in mind? <ArrowUpRight size={16}/></Link></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Sumansh Yadav</span><span>DESIGNED & BUILT WITH REACT</span><a href="#top" onClick={e=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>Back to top ↑</a></div></footer>
}
function Home() {
  const { scrollY } = useScroll()
  const artY = useTransform(scrollY, [0, 700], [0, 100])
  return <>
    <main id="top">
      <section className="hero container">
        <motion.div className="hero-copy" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
          <div className="availability"><span className="live-dot"/> OPEN TO INTERNSHIP OPPORTUNITIES</div>
          <p className="hero-overline">SOFTWARE ENGINEERING / 2024—28</p>
          <h1 className="hero-name">SUMANSH<br/><span className="gradient-text">YADAV<span className="name-period">.</span></span></h1>
          <div className="hero-role"><span className="role-line"/> BACKEND-FOCUSED FULL-STACK DEVELOPER</div>
          <p className="hero-description">I turn ideas into useful digital products — building robust backends, clean APIs, and interfaces that feel alive.</p>
          <div className="hero-actions"><Link to="/projects" className="button button-primary">Explore my work <ArrowUpRight size={17}/></Link><a href="/resume.pdf" className="button button-secondary resume-button" download="Sumansh-Yadav-Resume.pdf"><Download size={17}/> <span>Download Resume</span></a></div>
          <div className="tech-strip"><span className="eyebrow">TOOLS I BUILD WITH</span><div className="tech-list">{['Java','Spring Boot','React','Node.js','MySQL'].map((x,i)=><span key={x}><i className={`tech-dot t${i}`}/>{x}</span>)}</div></div>
        </motion.div>
        <motion.div className="hero-art-wrap avatar-art-wrap" style={{ y: artY }}><HeroAvatar/></motion.div>
        <div className="hero-bottomline"><span>BASED IN MATHURA, INDIA</span><span>SCROLL TO EXPLORE <ArrowDownRight size={14}/></span></div>
      </section>
      <div className="energy-ticker" aria-label="Java, Spring Boot, React, Node.js, and product engineering"><div className="ticker-track">{Array.from({length:2}).map((_,i)=><span className="ticker-set" key={i}>JAVA <b>✳</b> SPRING BOOT <b>✳</b> REACT <b>✳</b> NODE.JS <b>✳</b> PRODUCT ENGINEERING <b>✳</b> REST APIS <b>✳</b></span>)}</div></div>
      <section className="quick-facts"><div className="container fact-grid">
        <div><GraduationCap/><span><b>B.Tech CSE</b><small>GLA University · 2024–2028</small></span></div>
        <div><Users/><span><b>Technical Team Lead</b><small>Hack4Tech Club</small></span></div>
        <div><Trophy/><span><b>7th Position</b><small>VisionX 8-hour hackathon</small></span></div>
        <div><MapPin/><span><b>Mathura, India</b><small>Open to relocate</small></span></div>
      </div></section>
      <section className="section container work-section">
        <SectionHeading kicker="SELECTED WORK / 01—03" title="Ideas turned into" accent="products." copy="A few practical products where I explored real workflows, full-stack architecture, and problem-solving."/>
        <div className="projects-grid">{projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div>
        <div className="center-link"><Link className="button button-secondary" to="/projects">View all projects <ArrowRight size={16}/></Link></div>
      </section>
      <section className="statement-section"><div className="container statement-inner"><Reveal><span className="eyebrow"><Sparkles size={14}/> MY APPROACH</span><h2>Good software is more than code.<br/><span>It makes something difficult feel simple.</span></h2><Link to="/about" className="text-link">A little more about me <ArrowRight size={15}/></Link></Reveal><div className="statement-stamp">BUILD<br/>WITH<br/><b>INTENT.</b></div></div></section>
      <section className="section container closing-cta"><div><span className="eyebrow">HAVE SOMETHING IN MIND?</span><h2>Let's make it<br/><span>work beautifully.</span></h2></div><Link to="/contact" className="big-arrow" aria-label="Contact Sumansh"><ArrowUpRight size={30}/></Link></section>
    </main>
  </>
}
function PageIntro({ number, kicker, title, accent, copy }) {
  return <section className="page-intro container"><span className="eyebrow"><span className="mini-line"/> {number} / {kicker}</span><h1>{title}<br/><span className="gradient-text">{accent}</span></h1><p>{copy}</p></section>
}
function About() {
  const timeline = [
    ['JUN 2026 — AUG 2026','Java Developer Intern · Virtual Internship','Infosys Springboard · Remote','Worked on MediStock, a full-stack medicine inventory and management system. Built REST APIs with Java, Spring Boot, Spring Security and JWT; integrated PostgreSQL persistence and role-based workflows for inventory, billing and alerts.'],
    ['SUMMER 2026 · SELECTED','Summer Intern · Selected Participant','VLED Lab, IIT Ropar · Remote','Selected for the Vicharanashala Summer Internship 2026 program focused on open-source software projects addressing India-centric challenges, collaborative engineering, and practical full-stack problem-solving.'],
    ['2026 — PRESENT','Technical Team Lead','Hack4Tech Club · GLA University','Supporting club technology initiatives, responsive web experiences, team coordination, and Git/GitHub collaboration.'],
    ['2024 — 2028','B.Tech — Computer Science & Engineering','GLA University, Mathura','Building a foundation in software engineering, databases, algorithms, operating systems, and networks.'],
  ]
  const certs = ['Java (Basic) — HackerRank','SQL (Basic) — HackerRank','Software Engineering — NPTEL','AI and Cybersecurity Awareness — TCS iON']
  return <main className="container inner-page">
    <PageIntro number="01" kicker="THE PERSON BEHIND THE CODE" title="Engineer in progress." accent="Builder by instinct." copy="I'm a Computer Science student who enjoys turning practical problems into usable software — with a particular interest in backend engineering and full-stack product development."/>
    <section className="about-feature"><Reveal className="about-note"><span className="eyebrow">A NOTE ON HOW I WORK</span><h2>Curious enough to explore.<br/><span>Practical enough to ship.</span></h2><p>My projects span inventory operations, placement preparation, and incident tracking. Across them, I enjoy connecting the interface to reliable APIs, meaningful data models, and workflows people can actually use.</p><p>I'm continuing to deepen my Java and Spring Boot skills while building on my experience with React, Node.js, REST APIs, and SQL databases.</p><Link to="/projects" className="text-link">See what I've built <ArrowRight size={15}/></Link></Reveal>
      <Reveal delay={.12} className="about-visual"><div className="about-orbit"><div className="about-core">SY<span>.</span></div><div className="orbit-tag tag-java">JAVA</div><div className="orbit-tag tag-react">REACT</div><div className="orbit-tag tag-api">REST APIs</div><div className="orbit-tag tag-db">SQL</div></div><span className="eyebrow">LEARN / BUILD / ITERATE</span></Reveal></section>
    <section className="section"><SectionHeading kicker="MY TOOLKIT" title="Tools for turning" accent="ideas into software."/><div className="skills-grid">{skills.map((s,i)=><Reveal key={s.title} delay={i*.06}><article className="skill-card"><div className="skill-card-head"><s.icon size={21}/><span>0{i+1}</span></div><h3>{s.title}</h3><div className="tag-row">{s.items.map(x=><span className="tag" key={x}>{x}</span>)}</div></article></Reveal>)}</div></section>
    <section className="section timeline-section"><SectionHeading kicker="EXPERIENCE & EDUCATION" title="Learning by building," accent="growing through experience."/><div className="timeline">{timeline.map((t,i)=><Reveal key={t[1]}><div className="timeline-item"><div className="timeline-date">{t[0]}</div><div className="timeline-marker"/><div className="timeline-content"><h3>{t[1]}</h3><span>{t[2]}</span><p>{t[3]}</p></div></div></Reveal>)}</div></section>
    <section className="section cert-section"><SectionHeading kicker="ALWAYS LEARNING" title="Certifications &" accent="milestones."/><div className="cert-list">{certs.map((c,i)=><div className="cert-row" key={c}><span className="cert-num">0{i+1}</span><span>{c}</span><Check size={17}/></div>)}<div className="cert-row"><span className="cert-num">05</span><span>7th Position — VisionX 8-Hour Hackathon</span><Trophy size={17}/></div><div className="cert-row"><span className="cert-num">06</span><span>Selected Participant — Ideathon Prometeo'26, IIT Jodhpur</span><Check size={17}/></div></div></section>
    <section className="closing-banner"><span className="eyebrow">NEXT CHAPTER</span><h2>Let's build something<br/><span>useful together.</span></h2><Link to="/contact" className="button button-primary">Get in touch <ArrowUpRight size={16}/></Link></section>
  </main>
}
function Projects() {
  return <main className="container inner-page">
    <PageIntro number="02" kicker="SELECTED WORK" title="Built to solve." accent="Made to be useful." copy="A closer look at full-stack projects exploring business workflows, authentication, data, and product interfaces."/>
    <div className="project-filter-note"><span className="live-dot"/> 03 FEATURED PROJECTS <span>PERSONAL & ACADEMIC WORK</span></div>
    <div className="projects-grid projects-page-grid">{projects.map((p,i)=><ProjectCard key={p.id} project={p} index={i}/>)}</div>
    <section className="section"><SectionHeading kicker="WHAT CONNECTS THEM" title="From interface to" accent="infrastructure."/><div className="principle-grid"><div><Code2/><h3>Product thinking</h3><p>Interfaces designed around tasks and workflows, not just visual decoration.</p></div><div><ShieldCheck/><h3>Secure by design</h3><p>Role-aware workflows and token-based authentication where appropriate.</p></div><div><Database/><h3>Data that matters</h3><p>Structured persistence and APIs connecting user actions to useful outcomes.</p></div></div></section>
    <section className="closing-banner"><span className="eyebrow">COLLABORATION</span><h2>Have a challenge<br/><span>worth solving?</span></h2><Link to="/contact" className="button button-primary">Let's talk <ArrowUpRight size={16}/></Link></section>
  </main>
}
function ProjectDetail() {
  const { pathname } = useLocation()
  const slug = pathname.split('/').filter(Boolean).pop()
  const p = projects.find(x=>x.slug===slug)
  if (!p) return <main className="container not-found"><span className="eyebrow">404 / NOT FOUND</span><h1>That page isn't here.</h1><Link to="/projects" className="text-link">Back to projects <ArrowRight size={15}/></Link></main>
  return <main className="container inner-page detail-page">
    <Link to="/projects" className="back-link"><ArrowRight size={15}/> All projects</Link>
    <PageIntro number={p.id} kicker={p.category} title={p.name} accent="Case study." copy={p.description}/>
    <ProjectVisual project={p}/>
    <div className="detail-grid"><section><span className="eyebrow">THE IDEA</span><h2>Built around a real workflow.</h2><p>{p.summary} The goal was to connect a clear frontend experience with structured backend logic and data-driven functionality.</p><span className="eyebrow detail-subhead">KEY FEATURES</span><ul className="feature-list">{p.features.map(f=><li key={f}><Check size={16}/>{f}</li>)}</ul></section><aside className="detail-sidebar"><span className="eyebrow">TECH STACK</span><div className="tag-row">{p.stack.map(t=><span className="tag" key={t}>{t}</span>)}</div><div className="detail-rule"/><span className="eyebrow">SOURCE CODE</span><p>Explore the project repository and implementation.</p><a href={p.github} target="_blank" rel="noreferrer" className="button button-secondary">View on GitHub <Github size={16}/></a><small className="muted">Replace the repository link with the specific project URL before publishing.</small></aside></div>
    <div className="detail-next"><span className="eyebrow">KEEP EXPLORING</span><Link to="/projects">More selected work <ArrowRight size={17}/></Link></div>
  </main>
}
function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(()=>setCopied(false),1800) }
    catch { window.location.href = `mailto:${profile.email}` }
  }
  return <main className="container inner-page contact-page">
    <PageIntro number="03" kicker="LET'S CONNECT" title="Have a good" accent="problem to solve?" copy="I'm open to internship opportunities, collaborations, and conversations about building useful software. The best place to start is a simple hello."/>
    <section className="contact-layout"><div className="contact-main"><span className="eyebrow">YOUR NEXT MESSAGE</span><h2>Let's make<br/><span>something matter.</span></h2><button className="email-copy" onClick={copyEmail}><Mail size={19}/><span>{profile.email}</span>{copied ? <Check size={17}/> : <ArrowUpRight size={18}/>}</button><p className="copy-feedback">{copied ? 'Email copied to clipboard.' : 'Click to copy my email address.'}</p><a className="button button-primary" href={`mailto:${profile.email}?subject=Portfolio%20inquiry`}>Start a conversation <ArrowUpRight size={17}/></a></div>
      <div className="contact-side"><div className="contact-orbit"><div className="contact-orbit-core">SY<span>.</span></div><div className="contact-orbit-ring"/></div><span className="eyebrow">ELSEWHERE ON THE INTERNET</span><a href={profile.github} target="_blank" rel="noreferrer" className="social-row"><span><Github size={18}/> GitHub</span><ArrowUpRight size={17}/></a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="social-row"><span><Linkedin size={18}/> LinkedIn</span><ArrowUpRight size={17}/></a><div className="social-row static-row"><span><MapPin size={18}/> {profile.location}</span></div></div></section>
    <section className="contact-bottom"><span className="eyebrow">NO PRESSURE, JUST GOOD CONVERSATIONS.</span><p>Whether it's an internship, an idea, or a technical challenge — I'd be glad to hear from you.</p></section>
  </main>
}
function App() {
  const [light, setLight] = useState(false)
  const location = useLocation()
  useEffect(() => { document.documentElement.classList.toggle('light-theme', light) }, [light])
  useEffect(() => { document.title = `${location.pathname === '/' ? 'Home' : location.pathname.split('/').filter(Boolean).pop()?.replace(/-/g,' ').replace(/\b\w/g,c=>c.toUpperCase())} — Sumansh Yadav` }, [location.pathname])
  return <div className={light ? 'app light-app' : 'app'}><ScrollToTop/><Header light={light} setLight={setLight}/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetail/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<main className="container not-found"><span className="eyebrow">404 / NOT FOUND</span><h1>Lost in the system?</h1><Link to="/" className="text-link">Back home <ArrowRight size={15}/></Link></main>}/></Routes><Footer/></div>
}
export default App
