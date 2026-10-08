import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PROJECTS, SKILLS, TOOLS, PROJECT_TYPES, HERO_IMAGE, EMAIL, GITHUB } from '../data/projects.js'

const ABOUT_TEXT = [
  "I love turning ideas into technology that works in the real world. From a circuit on the workbench to an app in someone's hand, I enjoy every step of the journey.",
  "Coding, embedded systems, and app and web development are my playground, but people are my purpose. Every project I take on starts with one question: how can this make someone's life easier?",
  "I'm always learning, always building, and always on the lookout for the next problem worth solving.",
  "Explore my projects below, and let's build something great together.",
]

export default function Home() {
  const [sent, setSent] = useState(false)
  const overlay = HERO_IMAGE
    ? `linear-gradient(180deg,rgba(8,19,23,.55),rgba(8,19,23,.88)),url(${HERO_IMAGE}),`
    : ''

  function submit(e) {
    e.preventDefault()
    const f = new FormData(e.target)
    const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\nType: ${f.get('type')}\nProject: ${f.get('idea')}\n\n${f.get('message')}`
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Portfolio message: ' + f.get('idea'))}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <section className="hero" id="home" style={{ backgroundImage: overlay + 'linear-gradient(180deg,#081317,#0d2429)' }}>
        <div className="wrap">
          <p className="hi">HI, I'M</p>
          <h1 className="name">Bernice Bonzoe</h1>
          <span className="tag">Computer engineering student</span>
          <p className="tagline">I build things that help people.</p>
          <p className="lead">From medical apps to electronic circuits, here is what I have built and how each project looks and works.</p>
          <div className="stack">
            <Link className="btn fill" to="/projects">See my projects</Link>
            <Link className="btn ghost" to="/contact">Get in touch</Link>
          </div>
        </div>
      </section>

      <section className="block about" id="about">
        <div className="wrap">
          <h2>About me</h2>
          {ABOUT_TEXT.map((t, i) => (
            <p key={i} className={i === 0 ? 'first' : i === ABOUT_TEXT.length - 1 ? 'last' : undefined}>{t}</p>
          ))}
          <div className="crow" style={{ marginTop: 28 }}>
            <Link className="btn fill" to="/projects">See my projects</Link>
            <Link className="btn ghost" to="/contact">Let's talk</Link>
          </div>
        </div>
      </section>

      <section className="block" id="projects" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>My projects</h2>
          <p className="sub">Tap a project to see its screens and how it works.</p>
          <div className="projects">
            {PROJECTS.map((p) => (
              <Link key={p.id} className="pcard" to={`/projects/${p.id}`}>
                <div className="cover" style={{ backgroundImage: (p.cover ? `url(${p.cover}),` : '') + p.grad }}>
                  <span className="tag">{p.tag}</span>
                  {!p.cover && p.title.charAt(0)}
                </div>
                <div className="pbody">
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                  <span className="more">View project →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="skills" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>Skills that ship.</h2>
          <p className="sub">From apps to circuits, here is what I build with.</p>
          <div className="scards">
            {SKILLS.map((s) => (
              <Link key={s.title} className="scard" to={s.to}>
                <div className="simg" style={{ backgroundImage: (s.img ? `url(${s.img}),` : '') + s.grad }}>
                  {!s.img && s.icon}
                </div>
                <div className="sbody">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                  <span className="more">Explore skill →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="tools" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>My toolbox.</h2>
          <p className="sub">The tools I reach for to build fast, reliable things.</p>
          <div className="tools">
            {TOOLS.map((t) => (
              <div className="tool" key={t.name}><i>{t.icon}</i>{t.name}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="block contact" id="contact">
        <div className="wrap">
          <h2>Have an idea or a problem to solve?</h2>
          <p className="sub">Tell me a little about it and I will get back to you.</p>
          <div className="crow" style={{ marginBottom: 28 }}>
            <a className="btn ghost" href={`mailto:${EMAIL}`}>Email</a>
            <a className="btn ghost" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <form onSubmit={submit}>
            <h3>Project details</h3>
            <p className="note">Fields marked with * are required.</p>
            <label htmlFor="name">Your name *</label>
            <input id="name" name="name" required placeholder="Your full name" />
            <label htmlFor="email">Email address *</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
            <label htmlFor="type">Project type *</label>
            <select id="type" name="type" required defaultValue="">
              <option value="" disabled>Choose a project type</option>
              {PROJECT_TYPES.map((t) => <option key={t}>{t}</option>)}
            </select>
            <label htmlFor="idea">Project or idea *</label>
            <input id="idea" name="idea" required placeholder="What is it called?" />
            <label htmlFor="message">What would you like to build? *</label>
            <textarea id="message" name="message" required placeholder="Tell me about the challenge, your goals and how I can help." />
            <button className="btn submit" type="submit">Send project enquiry</button>
            {sent && <p className="ok" role="status">Your email app is opening with your message. Just press send.</p>}
          </form>
        </div>
      </section>
    </>
  )
}