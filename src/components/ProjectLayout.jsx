import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Lightbox, { openLightbox } from './Lightbox'
import BackToTop from './BackToTop'
import { ip } from '../utils/imgPath'

export function GalleryImg({ src, alt, style, className }) {
  const fullSrc = ip(src)
  return (
    <img
      src={fullSrc}
      alt={alt}
      className={`gallery-img${className ? ' ' + className : ''}`}
      loading="lazy"
      style={{ cursor: 'zoom-in', ...style }}
      onClick={() => openLightbox(fullSrc, alt)}
    />
  )
}

export function ProjectImageBlock({ children }) {
  return (
    <div className="project-image-block">
      {children}
    </div>
  )
}

export function HighlightCard({ title, children, style }) {
  return (
    <div className="highlight-card" style={style}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  )
}

export function OtherProjects({ projects }) {
  return (
    <div className="other-projects">
      <div className="container">
        <h3>其他專案</h3>
        <div className="row g-3">
          {projects.map(p => (
            <div className="col-md-4" key={p.href}>
              <Link to={p.href} className="other-project-card d-block">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function ProjectLayout({ title, description, glowStyle, meta, children, otherProjects }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    const sections = document.querySelectorAll('.project-section, .project-image-block, .other-projects')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.01 })

    sections.forEach((el, i) => {
      el.classList.add('fade-up')
      el.style.transitionDelay = `${i * 0.06}s`
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) el.classList.add('visible')
      else observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section className="project-hero-section">
        <div className="project-hero-glow" style={glowStyle}></div>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <Link to="/#projects" className="back-link mb-4 d-inline-flex">← 返回專案列表</Link>
          <h1 className="project-detail-title mb-3">{title}</h1>
          <p className="project-detail-desc mb-4" style={{ maxWidth: '720px' }}>{description}</p>
          {meta && (
            <div className="row g-3" style={{ maxWidth: '600px' }}>
              {meta.map(m => (
                <div key={m.label} className={m.colClass || 'col-6 col-md-3'}>
                  <div className="meta-label">{m.label}</div>
                  <div className="meta-value">{m.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="container" style={{ paddingBottom: '3rem' }}>
        {children}
      </div>

      {otherProjects && <OtherProjects projects={otherProjects} />}

      <Footer />
      <Lightbox />
      <BackToTop />
    </>
  )
}
