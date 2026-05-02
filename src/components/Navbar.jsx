import { useEffect, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const nav = navRef.current
    if (!nav) return
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleAnchorClick = (e, hash) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    const collapse = document.getElementById('navContent')
    if (collapse && collapse.classList.contains('show')) {
      const bsCollapse = window.bootstrap?.Collapse?.getInstance(collapse)
      if (bsCollapse) bsCollapse.hide()
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top navbar-portfolio" id="mainNav" ref={navRef}>
      <div className="container">
        <Link className="navbar-brand" to="/">Anita</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navContent"
          aria-controls="navContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#projects" onClick={e => handleAnchorClick(e, '#projects')}>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={e => handleAnchorClick(e, '#about')}>About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={e => handleAnchorClick(e, '#contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
