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
      description="歷年的活動主視覺、社群行銷素材與印刷品設計，涵蓋數位與印刷兩種媒介。"
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
        <p>宣傳品的版面通常很小，讀者也只會看一眼。所以每一件都要先決定「這次只講一句話是哪一句」，其餘往後排。</p><p>這個習慣後來直接帶進介面設計：畫面上永遠要有一個最重要的東西，其他不能跟它搶。</p>
      </div>
    </ProjectLayout>
  )
}
