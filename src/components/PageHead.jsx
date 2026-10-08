import { Link } from 'react-router-dom'

export default function PageHead({ eyebrow, line1, line2, sub, backTo = '/', backLabel = '← Back' }) {
  return (
    <div className="ph">
      <div className="wrap">
        <Link className="backbtn" to={backTo}>{backLabel}</Link>
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {line1}
          <span>{line2}</span>
        </h1>
        {sub && <p className="sub">{sub}</p>}
      </div>
    </div>
  )
}