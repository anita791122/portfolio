import { useEffect, useRef } from 'react'

export default function Hero() {
  const bgLayerRef = useRef(null)
  const gridRef = useRef(null)
  const photoRef = useRef(null)
  const statsRef = useRef([])

  useEffect(() => {
    const parallaxEls = document.querySelectorAll('[data-parallax-speed]')
    let ticking = false
    const updateParallax = () => {
      const scrollY = window.scrollY
      const viewH = window.innerHeight
      parallaxEls.forEach(el => {
        const speed = parseFloat(el.dataset.parallaxSpeed) || 0
        const rect = el.getBoundingClientRect()
        if (rect.bottom < -200 || rect.top > viewH + 200) return
        el.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`
      })
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) { requestAnimationFrame(updateParallax); ticking = true }
    }
    if (parallaxEls.length > 0) {
      window.addEventListener('scroll', onScroll, { passive: true })
      updateParallax()
    }
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]')
    counters.forEach(counter => {
      if (counter.dataset.animated) return
      const target = parseInt(counter.dataset.count, 10)
      const duration = 1600
      const start = performance.now()
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        counter.textContent = Math.round(target * eased)
        if (progress < 1) requestAnimationFrame(tick)
        else counter.textContent = target
      }
      counter.dataset.animated = 'true'
      requestAnimationFrame(tick)
    })
  }, [])

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg-layer" data-parallax-speed="0.3">
        <div className="hero-glow hero-glow--1"></div>
        <div className="hero-glow hero-glow--2"></div>
      </div>
      <div className="hero-grid-overlay" data-parallax-speed="0.15"></div>

      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center">
          <div className="col-lg-7">
            <p className="hero-tag mb-3 hero-animate">UI/UX Designer &amp; Web Designer</p>
            <h2 className="hero-title mb-4 hero-animate">
              以使用者為核心<br />
              <span className="accent">以商業目標為導向</span><br />
              打造有意義的產品體驗
            </h2>
            <p className="hero-subtitle mb-4 hero-animate" style={{ maxWidth: '680px' }}>
              我深信，設計的美不只在於外觀，<br />更藏在使用時的每一個「剛剛好」。<br />
              10+ 年跨產業設計經驗，擅長在既有產品限制下推動體驗優化，與 PM、工程師協作將商業需求轉化為可落地的設計方案。
            </p>
            <div className="hero-stats mb-4 hero-animate">
              <div className="hero-stat" data-parallax-speed="-0.05">
                <div className="stat-number" data-count="10">10</div>
                <div className="stat-label">年設計經驗</div>
                <div className="stat-plus">+</div>
              </div>
              <div className="hero-stat" data-parallax-speed="-0.08">
                <div className="stat-number" data-count="15">15</div>
                <div className="stat-label">產品專案</div>
                <div className="stat-plus">+</div>
              </div>
              <div className="hero-stat" data-parallax-speed="-0.1">
                <div className="stat-number" data-count="4">4</div>
                <div className="stat-label">產業領域</div>
              </div>
            </div>
            <a href="#projects" className="btn-hero hero-animate" onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}>
              查看精選專案 <span>↓</span>
            </a>
          </div>
          <div className="col-lg-5 d-none d-lg-flex justify-content-center hero-animate">
            <div className="hero-photo-wrapper" data-parallax-speed="-0.08">
              <img src="/img/img_photo.avif" alt="Anita — Product Designer" className="hero-photo" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
