import { useRef } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const approachSteps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    number: '01', name: 'Research', desc: '使用者研究與需求整理',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    number: '02', name: 'Define', desc: '問題定義與策略規劃',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
      </svg>
    ),
    number: '03', name: 'Design', desc: '介面設計與原型驗證',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    number: '04', name: 'Deliver', desc: '設計交付與迭代優化',
  },
]

export default function AboutSection() {
  const sectionRef = useRef(null)
  useFadeUp(sectionRef)

  return (
    <section className="section-padding" id="about" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title fade-up">About <span className="accent">Me</span></h2>

        <div className="row g-5 align-items-start mb-5">
          <div className="col-lg-5 fade-up">
            <p className="about-tagline">不只做設計，<br />更思考設計的為什麼。</p>
          </div>
          <div className="col-lg-7 fade-up">
            <p className="about-greeting">我是 Anita，</p>
            <p className="about-body">一位相信設計應該為產品目標服務的產品設計師。<br />過去 10 年多，我在金融支付（一卡通）、醫療科技（先進醫資）與政府公共服務（資拓宏宇）等不同領域累積設計實戰經驗。</p>
            <p className="about-body">
              我習慣在限制中找到最佳解。<br />無論是既有平台的設計框架、跨部門的利益協調、還是技術可行性的取捨，皆能站在使用者和商業目標的交叉點上思考，讓設計不只停留在好看的稿件，而是能真正被落地、被使用、被驗證的產品體驗。
            </p>
            <p className="about-body">同時，我也具備部分前端開發能力（HTML/CSS/Bootstrap），能夠自己將設計從 Figma 到瀏覽器走完全程，這讓我在與工程師溝通時更能理解技術限制，降低來回成本。</p>
          </div>
        </div>

        <div className="fade-up">
          <p className="about-how-label">— How I Work</p>
          <div className="row g-3">
            {approachSteps.map(step => (
              <div key={step.number} className="col-6 col-md-3">
                <div className="approach-card text-center">
                  <div className="approach-icon">{step.icon}</div>
                  <div className="approach-number">{step.number}</div>
                  <div className="approach-name">{step.name}</div>
                  <div className="approach-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
