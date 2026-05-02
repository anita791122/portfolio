import { useEffect, useRef } from 'react'

const services = [
  {
    num: '01',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    title: 'UI / UX Design',
    subtitle: '以使用者為核心的介面與體驗設計',
    items: ['使用者研究與需求整理', '使用流程規劃（User Flow / IA）', 'Wireframe 與高保真 UI 設計', '設計系統與元件思維（Component-based design）'],
  },
  {
    num: '02',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Front-End Implementation',
    subtitle: '將設計轉化為可落地的前端畫面',
    items: ['HTML / CSS 切版（RWD、版面結構、樣式管理）', '設計還原與視覺細節調整', '與設計系統對齊的樣式實作', '基本互動與版面行為（hover、狀態、排版節奏）'],
  },
  {
    num: '03',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Design × Front-End Collaboration',
    subtitle: '設計與實作之間的溝通橋樑',
    items: ['設計可行性評估（避免過度設計）', '與工程師協作，降低溝通成本', '將設計規格轉為清楚的實作說明', '確保最終成品與設計初衷一致'],
  },
  {
    num: '04',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Tools & Skills',
    subtitle: '常用設計與開發工具',
    items: ['Figma（UI / Prototype / Design System）', 'HTML / CSS / Bootstrap', 'Illustrator（平面宣傳品設計）', 'Photoshop / VS Code / ChatGPT'],
  },
]

export default function ServicesSection() {
  const svcTrackRef = useRef(null)
  const svcSectionRef = useRef(null)

  useEffect(() => {
    const svcTrack = svcTrackRef.current
    const svcSection = svcSectionRef.current
    if (!svcTrack || !svcSection || !window.matchMedia('(min-width: 768px)').matches) return

    const updateSvcScroll = () => {
      const rect = svcSection.getBoundingClientRect()
      const sectionH = svcSection.offsetHeight
      const viewH = window.innerHeight
      const scrollable = sectionH - viewH
      if (scrollable <= 0) return
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable))
      const trackW = svcTrack.scrollWidth
      const viewW = window.innerWidth
      const maxShift = trackW - viewW + 60
      svcTrack.style.transform = `translate3d(${-progress * maxShift}px, 0, 0)`
    }

    const onScroll = () => requestAnimationFrame(updateSvcScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    updateSvcScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="svc-section position-relative" id="capabilities" ref={svcSectionRef}>
      <div className="svc-bg-pattern"></div>
      <div className="capabilities-glow capabilities-glow--1" data-parallax-speed="0.15"></div>
      <div className="capabilities-glow capabilities-glow--2" data-parallax-speed="-0.1"></div>

      <div className="svc-sticky-wrap">
        <div className="svc-sticky">
          <div className="container position-relative" style={{ zIndex: 2 }}>
            <div className="mb-4 fade-up">
              <h2 className="section-title">Services <span className="accent">&amp; Capabilities</span></h2>
            </div>
          </div>

          <div className="svc-track" id="svcTrack" ref={svcTrackRef}>
            {services.map(svc => (
              <div className="svc-card" key={svc.num}>
                <div className="svc-card-header">
                  <div className="svc-card-icon">{svc.icon}</div>
                  <div className="svc-card-num">{svc.num}</div>
                </div>
                <h3 className="svc-card-title">{svc.title}</h3>
                <p className="svc-card-subtitle">{svc.subtitle}</p>
                <ul className="svc-card-list">
                  {svc.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
