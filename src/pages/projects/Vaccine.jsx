import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'
import { ip } from '../../utils/imgPath'

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
      description="疫苗預約網站的使用者涵蓋各個年齡層，多數人只會用一次。這個專案重整資訊架構與視覺層級，讓第一次進站的人也能直接完成預約。"
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
            <HighlightCard title="功能優先的視覺設計">
              <p>公共服務網站的重點是把事情講清楚，不是好看。視覺上不做多餘裝飾，優先確保文字與操作項目一眼可讀。</p>
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
        <h2 className="project-section-title">從設計做到切版</h2>
        <p>公共服務不能假設使用者熟悉網路操作，所以整份設計的判準是「沒用過的人能不能自己完成」。</p>
        <p>這個案子我從 UX 規劃一路做到前端切版。自己實作的好處是設計稿到畫面之間沒有翻譯落差；代價是會直接撞上技術限制，得當場調整。走完這一遍之後，我對什麼做得到、什麼會很貴，判斷比以前準。</p>
        <a href="https://anita791122.github.io/project_hccg/index.html" target="_blank" rel="noopener noreferrer" className="project-live-link">
          查看實作成果 ↗
          <img src={ip('/img/arrow.svg')} alt="" aria-hidden="true" className="project-live-link__icon" />
        </a>
      </div>
    </ProjectLayout>
  )
}
