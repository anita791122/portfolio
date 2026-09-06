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
      description="繳費是低頻、但一步都不能錯的任務。這個專案在 LINE App 既有的設計框架下，重整電費、停車費、健保費等多種繳費場景的資訊層級與功能入口。"
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
              <p>比較電費、停車費、健保費等場景的使用頻率與操作路徑，先處理最常被用到的那幾條。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="功能入口層級調整">
              <p>重整資訊層級，把繳費入口放到更容易被看見的位置，縮短使用者找到它的路徑。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="視覺模組化設計">
              <p>各種繳費類型共用同一套視覺元件，彼此長得一致，也不脫離 LINE 既有的品牌規範。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="降低認知負擔">
              <p>重新安排每一步要顯示什麼，讓使用者不必記住上一頁填了什麼才能繼續下一步。</p>
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
        <h2 className="project-section-title">這個專案的限制</h2>
        <p>能動的範圍很窄。功能長在 LINE App 裡面，元件樣式、互動模式與品牌規範都是既定的，我不能為了體驗去改動平台層級的東西。</p>
        <p>所以真正可以施力的只有兩件事：資訊怎麼排，以及入口放哪裡。這篇講的都是在這兩件事情上做的取捨。</p>
      </div>
    </ProjectLayout>
  )
}
