import ProjectLayout, { GalleryImg } from '../../components/ProjectLayout'
import { openLightbox } from '../../components/Lightbox'

const meta = [
  { label: '角色', value: 'Visual Designer' },
  { label: '類型', value: 'Visual Design' },
  { label: '領域', value: '品牌行銷' },
  { label: '工具', value: 'Illustrator / Photoshop' },
]

const otherProjects = [
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/ticket-design', title: '造型票卡設計', desc: 'Product Design — IP 授權' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web — UI/UX — 公共服務' },
]

const galleryImages = [
  { src: '/img/visual-design.webp', alt: '廣告宣傳品作品 1' },
  { src: '/img/visual-design2.webp', alt: '廣告宣傳品作品 2' },
  { src: '/img/visual-design3.webp', alt: '廣告宣傳品作品 3' },
  { src: '/img/visual-design4.webp', alt: '廣告宣傳品作品 4' },
  { src: '/img/visual-design5.webp', alt: '廣告宣傳品作品 5' },
  { src: '/img/visual-design6.webp', alt: '廣告宣傳品作品 6' },
  { src: '/img/visual-design7.webp', alt: '廣告宣傳品作品 7' },
  { src: '/img/visual-design8.webp', alt: '廣告宣傳品作品 8' },
]

export default function VisualDesign() {
  return (
    <ProjectLayout
      title="廣告宣傳品"
      description="涵蓋活動主視覺、社群行銷素材、印刷品設計等多元媒介的視覺設計作品，從概念發想到視覺執行，展現跨媒介的設計整合能力。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(180,160,212,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">設計作品</h2>
        <p>以下為歷年設計的廣告宣傳品作品，點擊圖片可放大檢視。</p>
        <div className="row g-3 mt-3">
          {galleryImages.map(img => (
            <div className="col-md-6" key={img.src}>
              <div className="gallery-item">
                <GalleryImg src={img.src} alt={img.alt} className="gallery-img" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">設計價值</h2>
        <p>廣告宣傳品設計不僅是視覺美感的展現，更是品牌訊息傳達的關鍵環節。<br />每一件作品都需要在有限的版面中精準傳達核心訊息，同時維持品牌一致性。這些跨媒介的設計經驗，讓我在數位介面設計中也能更敏銳地掌握視覺層級與資訊傳達的節奏。</p>
      </div>
    </ProjectLayout>
  )
}
