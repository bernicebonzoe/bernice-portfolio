import { Link, useNavigate } from 'react-router-dom'

export default function ComingSoon() {
  const navigate = useNavigate()

  return (
    <div className="ph" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap" style={{ textAlign: 'center', width: '100%' }}>
        <p className="eyebrow">Project Status</p>
        <h1 style={{ fontSize: '3rem', marginBottom: '16px' }}>
          Live Demo <span>Coming Soon!</span>
        </h1>
        <p className="sub" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
          This project is currently running locally on my development machine or is in active preparation for deployment. A live interactive demo will be available here soon!
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            className="btn fill" 
            onClick={() => navigate(-1)}
            style={{ cursor: 'pointer' }}
          >
            ← Go Back
          </button>
          <Link className="btn ghost" to="/projects">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  )
}