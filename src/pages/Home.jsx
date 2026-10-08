import { Link } from 'react-router-dom'
import { HERO_IMAGE, SKILLS, PROJECTS } from '../data/projects.js'

const ABOUT_TEXT = [
  "I love turning ideas into technology that works in the real world. From a circuit on the workbench to an app in someone's hand, I enjoy every step of the journey.",
  "Coding, embedded systems, and app and web development are my playground, but people are my purpose. Every project I take on starts with one question: How can this make someone's life easier?",
  "I'm always learning, always building, and always on the lookout for the next problem worth solving.",
  "Explore my projects, and let's build something great together.",
]

// Base skills (Mobile & Web)
const SKILL_TITLES = ['Mobile', 'Web']

const ORDERED_SKILLS = SKILL_TITLES
  .map((t) => SKILLS.find((s) => s.title === t))
  .filter(Boolean)

// Specific Projects to feature instead of Electronics & Software
const FEATURED_PROJECT_TITLES = ['BerniceCare Pharma', 'ERA Web']

const FEATURED_PROJECTS = FEATURED_PROJECT_TITLES
  .map((title) =>
    PROJECTS.find((p) =>
      p.title.toLowerCase().includes(title.toLowerCase())
    )
  )
  .filter(Boolean)

// Contact details
const EMAIL = 'bonzoebernice@gmail.com'
const GITHUB = 'https://github.com/bernicebonzoe'

export default function Home() {
  const overlay = HERO_IMAGE
    ? `linear-gradient(180deg,rgba(8,19,23,.55),rgba(8,19,23,.88)),url(${HERO_IMAGE}),`
    : ''

  return (
    <>
      <section
        className="hero"
        id="home"
        style={{
          backgroundImage:
            overlay +
            'linear-gradient(180deg,#081317,#0d2429)',
        }}
      >
        <div className="wrap">
          <p className="hi">HI, I'M</p>

          <h1 className="name">Bernice Bonzoe</h1>

          <span className="tag">
            Computer engineering student
          </span>

          <p className="tagline">
            I build things that help people.
          </p>

          <p className="lead first">
            Great technology starts with caring about the people who use it.
          </p>

          <p className="lead">
            I'm a computer engineering student who is open to learning and
            building both sides of a product: the circuits and sensors that
            gather real-world data, and the mobile and web apps that turn it
            into something useful.
          </p>

          <div className="stack">
            <Link className="btn fill" to="/projects">
              See my projects
            </Link>

            <Link className="btn ghost" to="/contact">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="block homeabout">
        <div className="wrap">
          <p className="eyebrow">About me</p>

          <div className="hbig" role="heading" aria-level="2">
            Turning ideas
            <span>into technology.</span>
          </div>

          {ABOUT_TEXT.map((t, i) => (
            <div
              key={i}
              className={
                'acard' +
                (i === 0
                  ? ' first'
                  : i === ABOUT_TEXT.length - 1
                    ? ' last'
                    : '')
              }
            >
              <p>{t}</p>
            </div>
          ))}

          <div className="crow" style={{ marginTop: 28 }}>
            <Link className="btn fill" to="/projects">
              See my projects
            </Link>

            <Link className="btn ghost" to="/contact">
              Let's talk
            </Link>
          </div>
        </div>
      </section>

      <section className="block" id="skills">
        <div className="wrap">
          <p className="eyebrow">
            Skills & Featured Projects
          </p>

          <h2>Skills that ship.</h2>

          <p className="sub">
            From apps to circuits, here is what I build with.
          </p>

          <div className="scards">

            {/* Skill Cards (Mobile & Web) */}
            {ORDERED_SKILLS.map((s) => (
              <Link
                key={s.title}
                className="scard"
                to={`/projects?category=${s.title}&from=skills`}
              >
                <div
                  className="simg"
                  style={{
                    backgroundImage:
                      (s.img ? `url(${s.img}),` : '') + s.grad,
                  }}
                >
                  {!s.img && s.icon}
                </div>

                <div className="sbody">
                  <h3>{s.title}</h3>

                  <p>{s.text}</p>

                  <span className="more">
                    Explore skill →
                  </span>
                </div>
              </Link>
            ))}

            {/* Featured Project Cards (BerniceCare Pharma & ERA Web) */}
            {FEATURED_PROJECTS.map((p) => (
              <Link
                key={p.id || p.title}
                className="scard"
                to="/projects"
              >
                <div
                  className="simg"
                  style={{
                    backgroundImage: p.img
                      ? `url(${p.img})`
                      : p.grad ||
                        'linear-gradient(135deg, #0d2429, #13404a)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {!p.img && p.icon}
                </div>

                <div className="sbody">
                  <h3>{p.title}</h3>

                  <p>
                    {p.description || p.text || p.summary}
                  </p>

                  <span className="more">
                    View project →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Fully Responsive & High-Visibility Button */}
          <div
            className="crow"
            style={{
              marginTop: 32,
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Link
              className="btn ghost responsive-toolbox-btn"
              to="/projects"
              style={{
                display: 'inline-block',
                padding: '14px 28px',
                fontSize: '1rem',
                fontWeight: '600',
                textAlign: 'center',
                lineHeight: '1.4',
                maxWidth: '100%',
                wordBreak: 'break-word',
                boxShadow:
                  '0 4px 14px rgba(0, 0, 0, 0.25)',
              }}
            >
              See more of skills and the toolbox I work with
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Links */}
      <section className="block contact" id="contact">
        <div className="wrap">
          <h2>
            Have an idea or a problem to solve?
          </h2>

          <p className="sub">
            Tell me a little about it and I will get back to you.
          </p>

          <div
            className="crow"
            style={{
              marginTop: 28,
              display: 'flex',
              justifyContent: 'center',
              gap: 16,
              flexWrap: 'wrap',
            }}
          >
            {/* Gmail */}
            <a
              className="btn ghost"
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontSize: '20px',
                  lineHeight: 1,
                }}
              >
                ✉
              </span>

              Email
            </a>

            {/* GitHub */}
            <a
              className="btn ghost"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontSize: '20px',
                  lineHeight: 1,
                }}
              >
                ◉
              </span>

              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}