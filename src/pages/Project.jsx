import { useSearchParams, Link } from 'react-router-dom'
import { PROJECTS, CATEGORIES } from '../data/projects.js'

// Target list of mobile projects
const MOBILE_PROJECT_TITLES = [
  'bernicecarepharma',
  'kudilink',
  'novaflix',
  'medicine inventory manager',
  'medication adherence app'
]

export default function Projects() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'

  // Filter logic
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'All') return true

    if (activeCategory === 'Mobile') {
      const titleLower = project.title.toLowerCase()
      // Matches if category is Mobile OR title matches one of the 5 requested projects
      return (
        project.category === 'Mobile' ||
        MOBILE_PROJECT_TITLES.some((title) => titleLower.includes(title))
      )
    }

    return project.category === activeCategory
  })

  // Limit to exactly 5 items when Mobile filter is active
  const displayedProjects =
    activeCategory === 'Mobile' ? filteredProjects.slice(0, 5) : filteredProjects

  return (
    <div className="ph">
      <div className="wrap">
        <div className="toprow">
          <Link className="backbtn" to="/skills">← Back to skills</Link>
          <div className="filters">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                className={`fbtn ${activeCategory === c ? 'active' : ''}`}
                onClick={() => setSearchParams(c === 'All' ? {} : { category: c })}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="eyebrow">Portfolio</p>
        <h1>
          Featured <span>Projects.</span>
        </h1>

        <div className="projects-grid" style={{ marginTop: 32 }}>
          {displayedProjects.length > 0 ? (
            displayedProjects.map((project) => (
              <div key={project.id || project.title} className="pcard">
                <div
                  className="pimg"
                  style={{
                    backgroundImage: project.img ? `url(${project.img})` : project.grad,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '200px'
                  }}
                />
                <div className="pbody">
                  <h3>{project.title}</h3>
                  <p>{project.description || project.text}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No projects found for this category.</p>
          )}
        </div>
      </div>
    </div>
  )
}