import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX Designer' },
  { label: '類型', value: 'APP' },
  { label: '對象', value: '一般民眾' },
  { label: '領域', value: '醫療健康' },
]

const otherProjects = [
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP｜UI/UX｜金融科技' },
  { href: '/projects/linepay-citizen', title: 'LINE Pay 市民卡', desc: 'APP｜UI/UX｜金融科技' },
  { href: '/projects/health-platform', title: '健康促進資訊整合平台', desc: 'Web｜UI/UX｜Redesign' },
]

export default function NhiCard() {
  return (
    <ProjectLayout
      title="虛擬健保卡就醫應用 APP"
      description="設計鎖定就醫當下：使用者身體不舒服、壓力大，要能用最少的步驟完成身分驗證。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(74,144,217,0.4) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>虛擬健保卡的使用情境很特殊：使用者通常是在身體不適、心理壓力較高的狀態下操作。<br />這代表設計必須考量：</p>
        <ul>
          <li>使用者在高壓情境下的注意力與耐心有限</li>
          <li>操作流程要盡量短，多一個步驟都是負擔</li>
          <li>QR Code 身分驗證是核心任務，必須在最短時間內完成</li>
          <li>畫面要讓人放心，不要讓本來就緊張的人更緊張</li>
        </ul>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-nhi-card.avif" alt="虛擬健保卡：掛號、綁定健保卡與掛號紀錄畫面" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <div className="row g-3">
          <div className="col-md-6">
            <HighlightCard title="單一任務導向的資訊架構">
              <p>第一個分頁就是健保卡，掛號、報到、處方紀錄放在底部的其他分頁。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="減少決策負擔">
              <p>QR Code 的按鈕在畫面上最顯眼，一看就知道下一步按哪裡。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="醫療友善配色">
              <p>整體用柔和的藍色系，紅色只留給報到前的提醒。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="情境化視覺設計">
              <p>用柔和的插畫，讓畫面不那麼冰冷。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-nhi-card2.avif" alt="虛擬健保卡：處方紀錄、報到與藥品醫囑畫面" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">這個專案的判準</h2>
        <p>使用者身體不舒服、心理壓力高，注意力和耐心都有限。這種情境下衡量設計好壞的標準只有一個：打開 APP 到出示 QR Code 要幾步。</p>
        <p>所以視覺上我刻意做得安靜：柔和的藍色系、紅色只用在必要的提醒、用插畫不用照片。介面在這裡不需要被看見，需要的是不擋路。</p>
      </div>
    </ProjectLayout>
  )
}
