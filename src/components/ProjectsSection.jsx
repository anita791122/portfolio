import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFadeUp } from '../hooks/useFadeUp'

const featuredProjects = [
  {
    href: '/projects/vaccine',
    image: '/img/web-hccg.avif',
    alt: '新竹市疫苗預約系統',
    tags: ['Web', '公共服務', '前端落地'],
    title: '新竹市疫苗預約系統',
    desc: '從 UX 設計到前端實作一手包辦，重新梳理公共衛生資訊架構，讓市民快速完成疫苗預約、查詢與接種站查詢。',
    meta: [
      { label: '角色', value: 'UI/UX + 前端' },
      { label: '企業', value: '資拓宏宇' },
      { label: '關鍵挑戰', value: '降低公共系統認知負荷' },
    ],
    reverse: false,
  },
  {
    href: '/projects/nhi-card',
    image: '/img/app-nhi-card3.avif',
    alt: '虛擬健保卡就醫應用 APP',
    tags: ['APP', '醫療科技', 'UI/UX'],
    title: '虛擬健保卡就醫應用 APP',
    desc: '設計虛擬健保卡的核心就醫流程，讓複雜的醫療資訊在手機介面中清晰可用，降低民眾就醫數位門檻。',
    meta: [
      { label: '角色', value: 'UI/UX 設計師' },
      { label: '企業', value: '資拓宏宇' },
      { label: '關鍵挑戰', value: '醫療×科技跨域設計' },
    ],
    reverse: true,
  },
  {
    href: '/projects/linepay-bill',
    image: '/img/app-lp1.avif',
    alt: 'LINE Pay 生活繳費',
    tags: ['APP', '金融科技', '商業產品'],
    title: 'LINE Pay 生活繳費',
    desc: '在既有 LINE App 設計框架限制下，重新梳理繳費流程的資訊層級與功能入口，降低操作認知負擔，提升使用效率與安心感。',
    meta: [
      { label: '角色', value: 'UI/UX 設計師' },
      { label: '企業', value: '一卡通票證' },
      { label: '關鍵挑戰', value: '平台限制下的 UX 平衡' },
    ],
    reverse: false,
  },
]

const moreProjects = [
  {
    href: '/projects/ehis-redesign',
    image: null,
    placeholderStyle: { background: 'linear-gradient(135deg,#1a4a6e 0%,#0d2d45 100%)' },
    placeholderLabel: 'eHIS',
    tags: ['Web System', '醫療資訊'],
    title: 'eHIS 醫療系統優化',
    desc: '重構看診介面，實現零捲動工作流',
  },
  {
    href: '/projects/health-platform',
    image: '/img/web-hpa.avif',
    alt: '健康促進平台',
    tags: ['Web', 'Redesign'],
    title: '健康促進資訊整合平台',
    desc: '系統性 Redesign 公共衛生平台',
  },
  {
    href: '/projects/linepay-citizen',
    image: '/img/app-lppack.avif',
    alt: 'LINE Pay 市民卡',
    tags: ['APP', '金融科技'],
    title: 'LINE Pay 市民卡',
    desc: '以「身分票證」脈絡取代支付思維',
  },
  {
    href: '/projects/health-station',
    image: null,
    placeholderStyle: { background: 'linear-gradient(135deg,#0a3d20 0%,#166534 50%,#14532d 100%)', display: 'flex' },
    placeholderLabel: '智慧健康\n照護站',
    placeholderLabelStyle: { fontSize: '1.4rem', textAlign: 'center', padding: '0 1rem' },
    tags: ['Web UI', '醫療科技', 'IoT'],
    title: '智慧健康照護站',
    desc: '打通社區量測機台到志工服務的完整照護旅程',
  },
  {
    href: '/projects/event-register',
    image: null,
    placeholderStyle: { background: 'linear-gradient(135deg,#0a2a5e 0%,#1a4a8e 50%,#0d3060 100%)', display: 'flex' },
    placeholderLabel: '一卡通\n振興券登錄',
    placeholderLabelStyle: { fontSize: '1.4rem', textAlign: 'center', padding: '0 1rem' },
    tags: ['Web', '金融科技', '政策落地'],
    title: '振興券活動登錄平台',
    desc: '法規合規與 UX 的三方利益協調設計',
  },
  {
    href: '/projects/ticket-design',
    image: '/img/product-design.avif',
    alt: '造型票卡設計',
    tags: ['Product Design', 'IP 授權'],
    title: '造型票卡設計',
    desc: '跨越數位與實體的產品設計全流程',
  },
  {
    href: '/projects/japanese',
    image: null,
    placeholderStyle: { background: 'linear-gradient(135deg,#003549 0%,#004D67 50%,#0F1316 100%)', display: 'flex' },
    placeholderLabel: '🥋 日文道場',
    placeholderLabelStyle: { fontSize: '1.4rem', textAlign: 'center', padding: '0 1rem' },
    tags: ['Side Project', 'PM × 前端'],
    title: '日文道場',
    desc: '用遊戲化留存機制解決自學者流失問題，一人完成設計、開發與上線',
  },
  {
    href: '/projects/visual-design',
    image: '/img/visual-design.webp',
    alt: '廣告宣傳品',
    tags: ['Visual Design'],
    title: '廣告宣傳品',
    desc: '品牌視覺與行銷素材設計',
  },
]

function FeaturedCard({ project }) {
  const { href, image, alt, tags, title, desc, meta, reverse } = project
  return (
    <Link to={href} className={`pf-card fade-up${reverse ? ' pf-card--reverse' : ''}`}>
      <div className="pf-card__image">
        <img src={image} alt={alt} loading="lazy" />
      </div>
      <div className="pf-card__info">
        <div className="pf-card__tags">
          {tags.map(t => <span key={t} className="tag">{t}</span>)}
        </div>
        <h3 className="pf-card__title">{title}</h3>
        <p className="pf-card__desc">{desc}</p>
        <div className="pf-card__meta">
          {meta.map(m => (
            <div key={m.label} className="pf-card__meta-item">
              <span className="pf-card__meta-label">{m.label}</span>
              <span className="pf-card__meta-value">{m.value}</span>
            </div>
          ))}
        </div>
        <span className="pf-card__cta">閱讀 Case Study <span>→</span></span>
      </div>
    </Link>
  )
}

function MoreCard({ project, index }) {
  const staggerClass = `stagger-${(index % 7) + 1}`
  const { href, image, alt, placeholderStyle, placeholderLabel, placeholderLabelStyle, tags, title, desc } = project

  const handleTilt = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-6px)`
  }
  const handleTiltLeave = (e) => { e.currentTarget.style.transform = '' }

  return (
    <div className={`col-lg-4 col-md-6 fade-up ${staggerClass}`}>
      <Link
        to={href}
        className="project-card d-block h-100"
        onMouseMove={handleTilt}
        onMouseLeave={handleTiltLeave}
      >
        <div className="project-card-image">
          {image ? (
            <img src={image} alt={alt} className="project-card-img" loading="lazy" />
          ) : (
            <div className="placeholder-bg" style={placeholderStyle}>
              <span className="placeholder-label" style={placeholderLabelStyle}>
                {placeholderLabel}
              </span>
            </div>
          )}
          <div className="project-card-overlay"><span className="overlay-btn">查看案例 →</span></div>
        </div>
        <div className="project-card-body">
          <div>{tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
          <h3 className="project-card-title">{title}</h3>
          <p className="project-card-desc">{desc}</p>
        </div>
      </Link>
    </div>
  )
}

export default function ProjectsSection() {
  const sectionRef = useRef(null)
  useFadeUp(sectionRef)

  return (
    <section className="section-padding bg-surface" id="projects" ref={sectionRef}>
      <div className="container">
        <div className="mb-5 fade-up">
          <h2 className="section-title">Selected <span className="accent">Projects</span></h2>
          <p className="section-desc mt-2">每個專案都是一次在限制中尋找最佳解的練習——理解使用者、對齊商業目標、用設計推動產品前進。</p>
        </div>

        <div className="pf-featured-list">
          {featuredProjects.map((p, i) => (
            <FeaturedCard key={p.href} project={p} />
          ))}
        </div>

        <p className="pf-more-title fade-up">更多專案</p>
        <div className="row g-4">
          {moreProjects.map((p, i) => (
            <MoreCard key={p.href} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
