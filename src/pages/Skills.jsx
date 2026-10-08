import { Link } from 'react-router-dom'
import { SKILLS, TOOLS, CATEGORIES } from '../data/projects.js'

const ORDER = ['Mobile', 'Web', 'Electronics', 'Software']
const ORDERED = ORDER.map((t) => SKILLS.find((s) => s.title === t)).filter(Boolean)

export default function Skills() {
  return (
    <>
      <div className="ph">
        <div className="wrap">
          <div className="toprow">
            {/* Updated back button text */}
            <Link className="backbtn" to="/">← Back to homepage</Link>
            <div className="filters">
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  className="fbtn"
                  to={c === 'All' ? '/projects?from=skills' : `/projects?category=${c}&from=skills`}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>

          <p className="eyebrow">Skills and toolbox</p>
          <h1>
            Skills
            <span>that ship.</span>
          </h1>
          <p className="sub">From apps to circuits, here is what I build with and the tools I reach for.</p>
        </div>
      </div>

      <section className="block" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="scards">
            {ORDERED.map((s) => (
              <Link key={s.title} className="scard" to={`/projects?category=${s.title}&from=skills`}>
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

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <h2>My toolbox.</h2>
          <p className="sub">Reliable tools for fast, dependable work.</p>
          <div className="tools">
            {TOOLS.map((t) => (
              <div className="tool" key={t.name}><i>{t.icon}</i>{t.name}</div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}