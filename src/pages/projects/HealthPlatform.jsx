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
      description="原平台有三個問題：資訊層級混亂、操作指引不明、視覺過時。這次 Redesign 重建了登入後的認知順序與任務流程。"
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
              <p>主要按鈕與次要按鈕做出明顯差距，功能收進統一的卡片，再用留白把區塊分開，讓使用者不必讀說明也知道先點哪裡。</p>
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
        <h2 className="project-section-title">這次 Redesign 改了什麼</h2>
        <p>原平台把任務、課程、公告、使用者狀態全部堆在同一個畫面上。改版後首頁依序回答三件事：我是誰、現在該做什麼、做完之後會怎樣，其餘資訊往後放。</p>
        <p>過程中整理出一套可複用的卡片與按鈕元件，之後新增功能可以直接沿用，不必每次重畫。</p>
        <a href="https://hpdcs.hpa.gov.tw/index.aspx" target="_blank" rel="noopener noreferrer" className="project-live-link">
          瀏覽網頁
          <img src={ip('/img/arrow.svg')} alt="" aria-hidden="true" className="project-live-link__icon" />
        </a>
      </div>
    </ProjectLayout>
  )
}
