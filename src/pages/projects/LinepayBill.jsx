import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX Designer' },
  { label: '類型', value: 'APP' },
  { label: '領域', value: '金融科技' },
  { label: '工具', value: 'Figma' },
]

const otherProjects = [
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP — UI/UX — 醫療' },
  { href: '/projects/linepay-citizen', title: 'LINE Pay 市民卡', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web — UI/UX — 公共服務' },
]

export default function LinepayBill() {
  return (
    <ProjectLayout
      title="LINE Pay 生活繳費"
      description="本專案以 LINE Pay 生活繳費情境為核心，針對使用者在低頻但高準確需求的操作流程中，重新梳理介面結構與互動體驗，降低操作時的認知負擔，提升使用效率與安心感。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(0,185,0,0.4) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>LINE Pay 生活繳費功能整合於 LINE App 生態系中，使用者需在多功能場景下快速找到繳費入口並完成流程。<br />然而，繳費屬於低頻但高準確性的任務，使用者容易在多功能環境中產生迷失或誤觸。</p>
        <p>主要挑戰包括：</p>
        <ul>
          <li>使用者需在複雜的 LINE 生態系中快速定位繳費功能</li>
          <li>繳費流程涉及電費、停車費、健保費等多種場景，資訊架構需要清晰</li>
          <li>在不增加學習成本的前提下優化操作體驗</li>
          <li>需維持 LINE 品牌一致性與視覺規範</li>
        </ul>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-lp1.avif" alt="LINE Pay 生活繳費 — 入口與流程示意" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <p>在既有產品限制下進行 UX 思考與 UI 優化，在設計自由度與使用體驗之間取得平衡：</p>
        <div className="row g-3">
          <div className="col-md-6">
            <HighlightCard title="使用情境分析與流程優化">
              <p>深入分析不同繳費場景（電費、停車費、健保費等）的使用頻率與操作路徑，針對性優化高頻流程。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="功能入口層級調整">
              <p>透過資訊層級的重新梳理，提升繳費功能的可發現性，讓使用者在最短路徑內找到目標功能。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="視覺模組化設計">
              <p>採用模組化的視覺元件設計，確保不同繳費類型間的一致性，同時維持品牌整體風格。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="降低認知負擔">
              <p>重新設計資訊呈現方式，讓使用者在操作過程中不需額外記憶或理解，提升操作信心。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-lp12.avif" alt="LINE Pay 生活繳費 — 繳費流程 UI 設計" />
      </ProjectImageBlock>
      <ProjectImageBlock>
        <GalleryImg src="/img/app-lp13.avif" alt="LINE Pay 生活繳費 — 繳費流程 UI 設計" />
      </ProjectImageBlock>
      <ProjectImageBlock>
        <GalleryImg src="/img/app-lp14.avif" alt="LINE Pay 生活繳費 — 繳費流程 UI 設計" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計價值</h2>
        <p>本專案展現了在既有產品限制下進行 UX 思考與 UI 優化的能力，在商業產品中取得設計自由度與使用體驗之間的平衡。<br />透過系統性的資訊架構調整和視覺層級優化，讓低頻使用的繳費功能也能提供流暢、安心的操作體驗。</p>
      </div>
    </ProjectLayout>
  )
}
