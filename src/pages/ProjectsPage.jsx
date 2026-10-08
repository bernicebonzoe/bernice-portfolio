import { useSearchParams, Link } from 'react-router-dom'
import { PROJECTS, CATEGORIES } from '../data/projects.js'

export default function ProjectsPage() {
  const [searchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'All') return true
    return p.category === activeCategory
  })

  return (
    <>
      <div className="ph">
        <div className="wrap">
          <div className="toprow">
            <Link className="backbtn" to="/skills">← Back to skills</Link>
            <div className="filters">
              {CATEGORIES.map((c) => (
                <Link
                  key={c}
                  className={`fbtn${activeCategory === c ? ' active' : ''}`}
                  to={c === 'All' ? '/projects' : `/projects?category=${c}`}
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>

          <p className="eyebrow">Portfolio</p>
          <h1>
            Featured <span>Projects.</span>
          </h1>
          <p className="sub">
            Real software, web applications, and electronics projects built from the ground up.
          </p>
        </div>
      </div>

      <section className="block" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="scards">
            {filteredProjects.map((p) => (
              <Link key={p.id} className="scard" to="/coming-soon">
                <div
                  className="simg"
                  style={{
                    backgroundImage: (p.cover ? `url(${p.cover}),` : '') + p.grad,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="sbody">
                  <span className="tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.short}</p>
                  <span className="more">View project →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}