import { Link } from 'react-router-dom'

const FACTS = [
  { label: 'Name', title: 'Bernice Bonzoe', text: 'Computer engineering student' },
  { label: 'Focus', title: 'Software, apps and electronics', text: 'Coding · Embedded systems · Web and mobile' },
  { label: 'Approach', title: 'People first', text: "How can this make someone's life easier?" },
]

export default function AboutPage() {
  return (
    <>
      <div className="ph">
        <div className="wrap">
          <Link className="backbtn" to="/">← Back</Link>
          <p className="eyebrow">About me</p>
        </div>
      </div>

      <section className="block" style={{ paddingTop: 10 }}>
        <div className="wrap aboutbody">
          <div className="factlist">
            {FACTS.map((f, i) => (
              <div className="fcard" key={f.label}>
                <div className="fnum">{String(i + 1).padStart(2, '0')}</div>
                <div>
                  <small>{f.label}</small>
                  <b>{f.title}</b>
                  <span>{f.text}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="acard last" style={{ margin: '22px 0 0' }}>
            <p>Explore my projects, and let's build something great together.</p>
          </div>

          <div className="crow" style={{ marginTop: 28 }}>
            <Link className="btn fill" to="/projects">See my projects</Link>
            <Link className="btn ghost" to="/contact">Let's talk</Link>
          </div>
        </div>
      </section>
    </>
  )
}