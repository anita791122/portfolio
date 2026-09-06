import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFadeUp } from '../hooks/useFadeUp'
import { ip } from '../utils/imgPath'

const featuredProjects = [
  {
    href: '/projects/londonimg-system',
    image: '/img/londonimg-guide-overview.jpg',
    alt: '倫敦印象商品頁模組化系統與 AI 內容工具',
    tags: ['內部工具', '設計系統', 'AI 工作流'],
    title: '讓不懂語法的同事自己做出商品頁',
    desc: '一個人要顧 350 個商品頁，真正的瓶頸是產能。把商品頁拆成 13 種可複用積木，配線上手冊與同事可自行安裝的 AI 內容工具，並在工具裡內建護欄，避免 AI 產出不實宣稱。',
    meta: [
      { label: '角色', value: '產品設計師' },
      { label: '企業', value: '倫敦印象' },
      { label: '關鍵挑戰', value: '讓非專業使用者安全地用 AI' },
    ],
    reverse: false,
  },
  {
    href: '/projects/vaccine',
    image: '/img/web-hccg.avif',
    alt: '新竹市疫苗預約系統',
    tags: ['Web', '公共服務', '前端落地'],
    title: '新竹市疫苗預約系統',
    desc: '從 UX 設計到前端實作一手包辦，重新梳理公共衛生資訊架構，讓市民快速完成疫苗預約、查詢與接種站查詢。',
    meta: [
      { label: '角色', value: 'UI/UX + 前端' },
      { label: '身分', value: '自由接案' },
      { label: '關鍵挑戰', value: '降低公共系統認知負荷' },
    ],
    reverse: true,
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
    reverse: false,
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
    reverse: true,
  },
]

const moreProjects = [
  {
    href: '/projects/ehis-redesign',
    image: '/img/web-SOAP2.jpg',
    alt: 'eHIS 看診介面優化後——關鍵資訊單一視窗全覽',
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
    image: '/img/health-station-web1.webp',
    alt: '享健康智慧照護站——社區量測機台介面',
    tags: ['Web UI', '醫療科技', 'IoT'],
    title: '智慧健康照護站',
    desc: '打通社區量測機台到志工服務的完整照護旅程',
  },
  {
    href: '/projects/event-register',
    image: '/img/event-register-web.jpg',
    alt: '一卡通振興券活動登錄平台登入畫面',
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
    image: '/img/japanese-home.jpg',
    alt: '日文道場首頁——連勝天數、XP 與愛心等留存機制',
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
  const { href, image, alt, placeholderStyle, placeholderLabel, tags, title, desc, meta, reverse } = project
  return (
    <Link to={href} className={`pf-card fade-up${reverse ? ' pf-card--reverse' : ''}`}>
      <div className="pf-card__image">
        {image ? (
          <img src={ip(image)} alt={alt} loading="lazy" />
        ) : (
          <div
            className="placeholder-bg"
            role="img"
            aria-label={alt}
            style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', ...placeholderStyle }}
          >
            <span className="placeholder-label" style={{ fontSize: '1.4rem', textAlign: 'center', padding: '0 1rem', whiteSpace: 'pre-line' }}>
              {placeholderLabel}
            </span>
          </div>
        )}
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
            <img src={ip(image)} alt={alt} className="project-card-img" loading="lazy" />
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
          <p className="section-desc mt-2">每個案子的限制都不一樣：有的卡在平台規範，有的卡在法規，有的卡在只有我一個人。下面寫的是在各自的限制裡做了什麼取捨。</p>
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
