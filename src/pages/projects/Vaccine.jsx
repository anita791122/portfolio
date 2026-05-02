import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX + 前端切版' },
  { label: '類型', value: 'Web' },
  { label: '對象', value: '新竹市民' },
  { label: '領域', value: '公共服務' },
]

const otherProjects = [
  { href: '/projects/health-platform', title: '健康促進資訊整合平台', desc: 'Web — UI/UX — Redesign' },
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP — UI/UX — 醫療' },
]

export default function Vaccine() {
  return (
    <ProjectLayout
      title="新竹市疫苗預約系統"
      description="為新竹市民打造高效的疫苗預約公共服務網站，透過資訊架構重整與視覺層級優化，降低首次使用者的認知負擔與操作門檻。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(45,90,142,0.4) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>疫苗預約系統作為公共服務網站，服務對象涵蓋各年齡層市民。在分析原系統後發現幾個關鍵的 UX 問題：</p>
        <ul>
          <li>首次進站時資訊量偏高，閱讀順序不夠明確</li>
          <li>主要內容與次要內容的視覺層級模糊，使用者難以快速抓住重點</li>
          <li>對不熟悉網站操作的使用者來說，理解成本高，增加認知負擔</li>
          <li>需要同時滿足預約登記、查詢紀錄、查找接種站點等多種任務</li>
        </ul>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/web-hccg.avif" alt="新竹市疫苗預約系統 — 首頁設計" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <p>核心策略是透過降低認知負擔，讓各年齡層使用者都能快速完成預約任務：</p>
        <div className="row g-3">
          <div className="col-md-6">
            <HighlightCard title="內容重組與閱讀動線">
              <p>依照自然閱讀模式重新編排內容順序，將最重要的行動入口（預約）放在最顯眼的位置，次要資訊逐層遞減。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="視覺層級強化">
              <p>透過字體大小、留白、色彩等手段建立清晰的視覺層級，讓使用者能快速掃視並定位目標功能。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="快速掃描優先">
              <p>資訊呈現方式優先考慮「可掃描性」，讓使用者不需逐字閱讀也能理解頁面結構與功能位置。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="客制的視覺設計">
              <p>公共服務網站強調功能性而非裝飾性，採用客制的視覺風格，確保資訊傳達的準確性與效率。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/web-hccg2.avif" alt="新竹市疫苗預約系統 — 預約流程與查詢頁面" />
      </ProjectImageBlock>

      <ProjectImageBlock>
        <GalleryImg src="/img/web-hccg3.avif" alt="新竹市疫苗預約系統 — 預約流程與查詢頁面" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計價值</h2>
        <p>公共服務設計的核心是「包容性」— 不能假設所有使用者都熟悉網路操作。<br />這個專案不僅完成了 UI/UX 設計，同時也負責前端切版實作，確保設計意圖能精確還原到最終產品中。<br />從設計到開發的端到端參與，讓我對設計的可行性與工程限制有更深刻的理解。</p>
        <a href="https://anita791122.github.io/project_hccg/index.html" target="_blank" rel="noopener noreferrer" className="project-live-link">
          查看實作成果 ↗
          <img src="/img/arrow.svg" alt="" aria-hidden="true" className="project-live-link__icon" />
        </a>
      </div>
    </ProjectLayout>
  )
}
