import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX Designer' },
  { label: '類型', value: 'APP' },
  { label: '領域', value: '金融科技 / 市民服務' },
  { label: '工具', value: 'Figma' },
]

const otherProjects = [
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP — UI/UX — 醫療' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web — UI/UX — 公共服務' },
]

export default function LinepayCity() {
  return (
    <ProjectLayout
      title="LINE Pay 市民卡"
      description="將實體市民卡數位化，以「卡片/票證」脈絡取代支付流程思維，讓使用者直覺辨識為身分證件而非金融工具，降低操作錯誤，提升在時間緊迫場景下的使用效率。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(0,185,0,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>傳統市民卡在實體或早期數位化的脈絡下存在明顯的使用痛點：</p>
        <ul>
          <li>使用者需隨身攜帶實體卡片，遺失或忘帶的成本高</li>
          <li>查詢餘額與交易紀錄的流程分散，操作步驟多</li>
          <li>在趕時間的場景（如排隊、進出站）下，難以快速找到正確畫面出示</li>
          <li>系統要求使用者理解法規與專有名詞，學習門檻高</li>
        </ul>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-lppack.avif" alt="LINE Pay 市民卡 — 卡片入口與主畫面" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <HighlightCard title="卡片脈絡的功能入口">
              <p>將市民卡放在「卡片/票證」的脈絡中而非支付流程內，讓使用者直覺認知為身分證件，降低操作錯誤率。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="任務導向的功能分離">
              <p>清楚區分三大核心功能：條碼/QR Code 出示、交易紀錄查詢、個人卡片資訊。每個畫面聚焦完成一項任務。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="高對比低干擾設計">
              <p>條碼/QR Code 畫面採用克制的視覺元素，主要操作按鈕固定於底部，排除會干擾掃描的多餘資訊。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="可快速掃視的交易紀錄">
              <p>交易紀錄以顏色區分收支、清楚的時間與商家分類，預設顯示近期資料，支援快速掃視而非逐行閱讀。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-lppack2.webp" alt="LINE Pay 市民卡 — 交易紀錄與卡片資訊 UI" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計價值</h2>
        <p>這個專案的核心思維是「脈絡決定理解」— 同樣的功能放在不同的框架下，使用者的理解和操作方式會完全不同。<br />透過將市民卡從「支付工具」重新定位為「身分票證」，大幅降低了使用者的心智模型切換成本，讓數位化不只是把實體卡搬到手機上，而是真正改善了使用體驗。</p>
      </div>
    </ProjectLayout>
  )
}
