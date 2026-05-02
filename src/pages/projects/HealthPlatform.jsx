import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'
import { ip } from '../../utils/imgPath'

const meta = [
  { label: '角色', value: 'UI/UX Designer' },
  { label: '類型', value: 'Web Redesign' },
  { label: '對象', value: '醫事機構' },
  { label: '領域', value: '醫療 / 公共服務' },
]

const otherProjects = [
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web — UI/UX — 公共服務' },
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/ticket-design', title: '造型票卡設計', desc: 'Product Design — IP 授權' },
]

export default function HealthPlatform() {
  return (
    <ProjectLayout
      title="健康促進資訊整合平台"
      description="針對原平台資訊層級混亂、操作指引不明、視覺過時三大問題，進行系統性的 Redesign，重建認知順序與任務流程，提升平台的專業可信度與使用效率。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(6,182,212,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>原平台存在三個顯著的使用者體驗問題：</p>
        <ul>
          <li><strong>資訊層級混亂：</strong>任務、課程、公告、使用者狀態同時堆疊在畫面上，使用者無法快速判斷下一步該做什麼</li>
          <li><strong>操作指引不明：</strong>關鍵功能缺乏清楚的視覺導引，使用者需要靠閱讀而非直覺來找到操作路徑</li>
          <li><strong>視覺過時：</strong>介面的不一致性與缺乏清晰度，削弱了平台作為健康服務的專業可信度</li>
        </ul>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/web-hpa.avif" alt="健康促進平台 — Before / After 對比" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <HighlightCard title="認知重排策略">
              <p>重新設計首頁，依序回答三個基本問題：登入後我是誰、現在最該做什麼、完成後的回饋。將主要行動與輔助資訊分離，降低認知負擔。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="資訊架構重整">
              <p>依據使用頻率與任務流程重新組織功能。重要任務維持可掃描性，次要資訊延遲呈現，減少決策干擾。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="視覺層級與行為引導">
              <p>透過主次按鈕的差異化設計、模組化卡片系統、策略性的留白，建立隱性的導覽線索引導使用者操作。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="專業且親和的視覺風格">
              <p>色彩調性朝向健康、安心、穩定的方向精煉，移除裝飾性元素，建立可複用的設計模式並保持結構彈性。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/web-hpa2.webp" alt="健康促進平台 — 重設計後的功能頁面" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計價值</h2>
        <p>Redesign 不只是「讓介面變好看」，更重要的是重新建立使用者與系統之間的信任關係。<br />這個專案透過系統性的資訊架構重整和認知負擔的降低，讓一個功能複雜的公共平台變得可理解、可操作、可信賴。設計過程中建立的模組化元件系統，也為未來的功能擴充提供了可擴展的基礎。</p>
        <a href="https://hpdcs.hpa.gov.tw/index.aspx" target="_blank" rel="noopener noreferrer" className="project-live-link">
          瀏覽網頁
          <img src={ip('/img/arrow.svg')} alt="" aria-hidden="true" className="project-live-link__icon" />
        </a>
      </div>
    </ProjectLayout>
  )
}
