import { useEffect, useState } from 'react'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Skills from './pages/Skills.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import Project from './pages/Project.jsx'
import Contact from './pages/Contact.jsx'
import ComingSoon from './pages/ComingSoon.jsx'

function ScrollManager() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

const NAV = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function App() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <ScrollManager />
      <header>
        <div className="bar">
          <div className="logo">BB</div>
          <Link className="brand" to="/">Bernice Bonzoe</Link>
          <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}>
            <ul>
              {NAV.map((n) => (
                <li key={n.to}>
                  <NavLink to={n.to} end={n.to === '/'} className={({ isActive }) => (isActive ? 'active' : undefined)}>
                    {n.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link className="pill" to="/contact?talk=1">Let's talk</Link>
          <button className="menu" aria-label="Open menu" onClick={() => setOpen(!open)}>☰</button>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
      </main>

      <footer>
        <div className="wrap">
          <div className="frow">
            <div className="logo">BB</div>
            <div>
              <b className="fname">Bernice Bonzoe</b>
              <br />
              Computer engineering student
            </div>
          </div>
          <ul className="flinks">
            {NAV.map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
          </ul>
          © 2026 Bernice Bonzoe
        </div>
      </footer>
    </>
  )
}