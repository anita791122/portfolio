import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX Designer' },
  { label: '類型', value: 'APP' },
  { label: '對象', value: '一般民眾' },
  { label: '領域', value: '醫療健康' },
]

const otherProjects = [
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/linepay-citizen', title: 'LINE Pay 市民卡', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/health-platform', title: '健康促進資訊整合平台', desc: 'Web — UI/UX — Redesign' },
]

export default function NhiCard() {
  return (
    <ProjectLayout
      title="虛擬健保卡就醫應用 APP"
      description="聚焦於「就醫當下的真實使用狀態」，透過單一任務導向、清楚的視覺層級與最短操作流程，幫助使用者在高壓與不適的情境中快速完成身分驗證。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(74,144,217,0.4) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>虛擬健保卡的使用情境非常特殊 — 使用者通常在身體不適、心理壓力較高的就醫情境下操作。<br />這代表設計必須考量：</p>
        <ul>
          <li>使用者在高壓情境下的注意力與耐心有限</li>
          <li>操作流程必須極度簡化，不容許任何額外的認知負擔</li>
          <li>QR Code 身分驗證是核心任務，必須在最短時間內完成</li>
          <li>介面需要傳達安全感與信任感，降低就醫焦慮</li>
        </ul>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-nhi-card.avif" alt="虛擬健保卡 — 主畫面與 QR Code 驗證流程" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <HighlightCard title="單一任務導向的資訊架構">
              <p>功能高度聚焦於「就醫驗證」這個主任務。首頁即為主要行動入口，減少多層導覽的複雜度，輔助資訊採次要視覺層級呈現。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="減少決策負擔">
              <p>每個畫面只需要使用者做一個決定，透過明確的視覺層級，凸顯 QR Code 出示為核心行為，讓操作路徑一目瞭然。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="醫療友善配色">
              <p>採用穩定、柔和的配色方案降低使用者的緊張感。避免高對比或警示性色彩，營造安心的使用氛圍。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="情境化視覺設計">
              <p>使用柔和插畫風格緩解就醫情境下的心理壓力，讓冰冷的數位工具多一分溫度與親和力。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-nhi-card2.avif" alt="虛擬健保卡 — UI 設計與互動細節" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計價值</h2>
        <p>這個專案的核心不是做出炫目的介面，而是在極端使用情境下提供最大的操作效率與心理安全感。<br />好的設計在這裡意味著「讓使用者幾乎感受不到設計的存在」— 打開 APP、出示 QR Code、完成驗證，整個過程自然到不需要思考。</p>
      </div>
    </ProjectLayout>
  )
}
