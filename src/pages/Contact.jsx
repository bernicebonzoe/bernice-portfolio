import { useEffect, useRef, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import PageHead from '../components/PageHead.jsx'
import { PROJECT_TYPES, EMAIL, GITHUB } from '../data/projects.js'

// Get your free access key at https://web3forms.com (enter bonzoebernice@gmail.com)
const ACCESS_KEY = '5ecc7dd5-7b64-4c94-9a68-2ae72410375b'

const GITHUB_LABEL = GITHUB.replace('https://', '')
const HELLO_SUBJECT = encodeURIComponent('Hello Bernice, I saw your portfolio')

export default function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [params, setParams] = useSearchParams()
  const formRef = useRef(null)

  // The form only shows when "Let's talk" has been clicked (/contact?talk=1)
  const showForm = params.get('talk') === '1'

  useEffect(() => {
    if (showForm && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [showForm])

  async function submit(e) {
    e.preventDefault()
    const form = e.target
    const f = new FormData(form)
    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'Portfolio message: ' + f.get('idea'),
          from_name: f.get('name'),
          name: f.get('name'),
          email: f.get('email'),
          project_type: f.get('type'),
          project_or_idea: f.get('idea'),
          message: f.get('message'),
          botcheck: f.get('botcheck'),
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <PageHead
        eyebrow="Contact"
        line1="Let's build"
        line2="something great."
        sub="Liked my work? Reach out directly by email or GitHub, or click Let's talk to tell me about your idea."
      />
      <section className="block" style={{ paddingTop: 10 }}>
        <div className="wrap">
          <div className="contact-cards">
            <a className="contact-card" href={`mailto:${EMAIL}?subject=${HELLO_SUBJECT}`}>
              <span className="contact-icon" aria-hidden="true">✉</span>
              <h3>Email</h3>
              <p>Send me a message about a project, an idea or an opportunity.</p>
              <strong className="contact-label">{EMAIL}</strong>
              <span className="more">Send an email →</span>
            </a>
            <a className="contact-card" href={GITHUB} target="_blank" rel="noopener noreferrer">
              <span className="contact-icon" aria-hidden="true">⌥</span>
              <h3>GitHub</h3>
              <p>Browse my code and see what I am building.</p>
              <strong className="contact-label">{GITHUB_LABEL}</strong>
              <span className="more">Visit my GitHub →</span>
            </a>
          </div>

          {!showForm && (
            <div className="crow" style={{ marginTop: 28 }}>
              <button className="btn fill" type="button" onClick={() => setParams({ talk: '1' })}>
                Let's talk
              </button>
            </div>
          )}

          {showForm && (
            <form ref={formRef} onSubmit={submit} style={{ marginTop: 36 }}>
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

              {/* Hidden spam trap: real visitors never see or fill this */}
              <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

              <button className="btn submit" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send project enquiry'}
              </button>

              {status === 'sent' && (
                <p className="ok" role="status">Thank you! Your message has been sent. I will get back to you soon.</p>
              )}
              {status === 'error' && (
                <p role="alert" style={{ color: '#ff8a80', marginTop: 12 }}>
                  Sorry, something went wrong and your message was not sent. Please try again, or email me directly at {EMAIL}.
                </p>
              )}
            </form>
          )}

          <div className="crow" style={{ marginTop: 28 }}>
            <Link className="btn ghost" to="/">Back to home</Link>
            <Link className="btn fill" to="/projects">See my projects</Link>
          </div>
        </div>
      </section>
    </>
  )
}