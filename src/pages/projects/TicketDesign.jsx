import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'Product Designer' },
  { label: '類型', value: 'Product Design' },
  { label: '領域', value: 'IP 授權 / 實體商品' },
  { label: '工具', value: 'Illustrator' },
]

const otherProjects = [
  { href: '/projects/linepay-citizen', title: 'LINE Pay 市民卡', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP — UI/UX — 醫療' },
  { href: '/projects/health-platform', title: '健康促進資訊整合平台', desc: 'Web — UI/UX — Redesign' },
]

export default function TicketDesign() {
  return (
    <ProjectLayout
      title="造型票卡設計"
      description="結合 IP 授權素材與實體產品設計，從主題選定、造型規劃、打樣驗證到量產出貨的完整產品設計流程，將數位設計能力延伸至實體商品領域。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(244,63,94,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">設計流程</h2>
        <p>造型票卡設計是一個從概念到量產的完整產品設計專案，涵蓋以下階段：</p>
        <div className="row g-3">
          <div className="col-md-6">
            <HighlightCard title="01 — 素材挑選">
              <p>從 IP 授權素材庫中挑選符合該次設計主題的圖素，確保素材的授權合規性與視覺適配性。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="02 — 造型與材質決策">
              <p>根據挑選的素材搭配適合的呈現方式。例如選擇 Q 版角色搭配泡泡卡造型，透過立體效果增加可愛度與收藏價值。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="03 — 設計開發">
              <p>設計卡面風格、配件造型與包裝設計，確保整體視覺的一致性與商品的完成度。</p>
            </HighlightCard>
          </div>
          <div className="col-md-6">
            <HighlightCard title="04 — 打樣驗證與量產">
              <p>將設計提交製卡廠商進行打樣，驗證實際成品的色彩還原度與造型效果，確認無誤後決定銷售數量並下單生產。</p>
            </HighlightCard>
          </div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/product-design2.avif" alt="造型票卡 — 設計成品展示" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">設計價值</h2>
        <p>這個專案展現了設計能力不僅限於數位介面，也能延伸到實體產品領域。<br />從 IP 素材的篩選判斷、造型與材質的搭配決策、到打樣驗證與量產管理，每個環節都需要同時考量美學品質與商業可行性。這種「設計 x 商業」的思維，正是產品設計師在跨領域合作中的核心價值。</p>
      </div>
    </ProjectLayout>
  )
}
