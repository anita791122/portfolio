import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX Designer' },
  { label: '類型', value: 'APP' },
  { label: '領域', value: '金融科技' },
  { label: '工具', value: 'Figma' },
]

const otherProjects = [
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP｜UI/UX｜醫療' },
  { href: '/projects/linepay-citizen', title: 'LINE Pay 市民卡', desc: 'APP｜UI/UX｜金融科技' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web｜UI/UX + 前端切版｜公共服務' },
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
        <p>生活繳費放在 LINE 錢包裡，旁邊還有很多其他功能。<br />在這麼多功能的畫面裡，很容易找不到入口，或按錯。</p>
        <p>主要挑戰包括：</p>
        <ul>
          <li>要在功能很多的 LINE App 裡找到繳費入口</li>
          <li>繳費流程涉及電費、停車費、健保費等多種場景，資訊架構需要清晰</li>
          <li>改善操作，但不能讓使用者重學一套</li>
          <li>需維持 LINE 品牌一致性與視覺規範</li>
        </ul>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-lp1.avif" alt="LINE Pay 生活繳費：LINE 錢包裡的繳費入口，與待設計的繳費首頁" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
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
            <HighlightCard title="不用記上一頁填了什麼">
              <p>重新安排每一步要顯示什麼，讓使用者不必記住上一頁填了什麼才能繼續下一步。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/app-lp12.avif" alt="LINE Pay 生活繳費：我的任務、專案行動與繳費首頁" />
      </ProjectImageBlock>
      <ProjectImageBlock>
        <GalleryImg src="/img/app-lp13.avif" alt="LINE Pay 生活繳費：繳費首頁的四個區塊（選城市、快捷功能、繳費項目、廣告）" />
      </ProjectImageBlock>
      <ProjectImageBlock>
        <GalleryImg src="/img/app-lp14.avif" alt="LINE Pay 生活繳費：付款再確認、選擇單據與確認繳費" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">這個專案的限制</h2>
        <p>能動的範圍很窄。功能長在 LINE App 裡面，元件樣式、互動模式與品牌規範都是既定的，我不能為了體驗去改動平台層級的東西。</p>
        <p>所以能動的主要是兩件事：資訊怎麼排，以及入口放哪裡。這篇講的大多是這兩件事上的取捨。</p>
      </div>
    </ProjectLayout>
  )
}
