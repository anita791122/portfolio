import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX 設計師' },
  { label: '類型', value: 'APP' },
  { label: '領域', value: '金融科技 / 市民服務' },
  { label: '工具', value: 'Figma' },
]

const otherProjects = [
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP｜UI/UX｜金融科技' },
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP｜UI/UX｜醫療' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web｜UI/UX + 前端切版｜公共服務' },
]

export default function LinepayCity() {
  return (
    <ProjectLayout
      title="LINE Pay 市民卡"
      description="把實體市民卡搬進 LINE Pay 的提案設計。PM 定的方向是把它放在「卡片／票證」底下，不放在付款流程裡，目標是讓人一看就知道這是證件、不是付款工具，趕時間時比較不會按錯。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(0,185,0,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>當時已有部分縣市推出虛擬市民卡。公司評估後決定把這項服務納入自家產品線，並準備向市政府提案，這份設計就是提案的一部分。</p>
        <p>實體卡和早期的數位版本有幾個麻煩：</p>
        <ul>
          <li>使用者需隨身攜帶實體卡片，遺失或忘帶的成本高</li>
          <li>查詢餘額與交易紀錄的流程分散，操作步驟多</li>
          <li>在趕時間的場景（如排隊、進出站）下，難以快速找到正確畫面出示</li>
          <li>系統要求使用者理解法規與專有名詞，學習門檻高</li>
        </ul>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-lppack.avif" alt="LINE Pay 市民卡提案：LINE Pay Money 啟動畫面與主畫面" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <HighlightCard title="放在卡片／票證底下">
              <p>市民卡放在「卡片／票證」底下，不放在付款流程裡，讓人直覺當成證件，目標是減少按錯。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="任務導向的功能分離">
              <p>分成三個功能：出示條碼／QR Code、查交易紀錄、看卡片資訊。一個畫面只做一件事。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="高對比低干擾設計">
              <p>條碼／QR Code 畫面採用克制的視覺元素，主要操作按鈕固定於底部，排除會干擾掃描的多餘資訊。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="可快速掃視的交易紀錄">
              <p>交易紀錄以顏色區分收支、清楚的時間與商家分類，預設顯示近期資料，掃一眼就看得懂，不用一行一行讀。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-lppack2.webp" alt="LINE Pay 市民卡：從 City Pass 入口到我的卡片、市民卡首頁、條碼、交易紀錄與個人資料" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">我的角色</h2>
        <p>把市民卡放進「卡片／票證」底下、不放在「支付」裡，是 PM 在需求規劃階段就定下的方向，背後的想法是：同一個功能放在不同的入口底下，使用者會用不同的方式理解它。我負責的是在這個方向下把流程與介面做出來，並在流程有疑慮時提出調整建議；元件則是參照 LINE 的設計規範延伸，完成後與對方共同確認。</p>
      </div>
    </ProjectLayout>
  )
}
