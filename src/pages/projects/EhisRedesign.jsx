import ProjectLayout, { GalleryImg, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX Designer' },
  { label: '企業', value: '資拓宏宇' },
  { label: '系統類型', value: '電子病歷系統' },
  { label: '使用者', value: '醫師 / 護理師' },
]

const otherProjects = [
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP｜UI/UX｜醫療健康' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web｜UI/UX + 前端切版｜公共服務' },
  { href: '/projects/health-platform', title: '健康促進資訊整合平台', desc: 'Web｜UI/UX｜Redesign' },
]

const insightCardStyle = {
  problem: { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid #f87171', borderRadius: '12px', padding: '1.25rem 1.5rem', height: '100%' },
  solution: { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid #4ade80', borderRadius: '12px', padding: '1.25rem 1.5rem', height: '100%' },
  strategy: { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--accent)', borderRadius: '12px', padding: '1.25rem 1.5rem', height: '100%' },
  neutral: { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1.25rem 1.5rem', height: '100%' },
}
const pmCallout = { background: 'var(--accent-subtle)', border: '1px solid rgba(180,160,212,0.2)', borderRadius: '12px', padding: '1.25rem 1.5rem', margin: '1.5rem 0' }
const impactItem = { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1.25rem', textAlign: 'center' }

const baLabel = (type) => ({
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
  padding: '0.35rem 0.875rem', borderRadius: '9999px', marginBottom: '1rem',
  ...(type === 'before'
    ? { background: 'rgba(239,68,68,0.12)', color: '#f87171', border: '1px solid rgba(239,68,68,0.25)' }
    : { background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.25)' })
})

export default function EhisRedesign() {
  return (
    <ProjectLayout
      title="eHIS 醫療系統看診介面改版"
      description="重整醫師的看診介面：精簡患者資訊、把按鈕分出主次、壓縮版面、統一處方表單，讓醫師在單一視窗就能掌握看診所需的全部資訊，不必捲動頁面。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(99,179,237,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>eHIS（Electronic Health Information System）是醫院端的電子病歷資訊系統，看診頁面是醫師在診間最常用的工作畫面。<br />醫師每天要用這個畫面幾十次，介面多一步，就多幾十次。</p>
        <div style={pmCallout}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>使用情境</div>
          <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>醫師在看診時往往需要同時處理多件事：口頭問診、輸入主觀／客觀資料、查詢過去病史、開立處方。<br />同時要做這麼多事，時間又趕。畫面上多一個欄位、多一步操作，都會分掉注意力，也可能讓人出錯。</p>
        </div>
        <p>原本的介面有三個問題：</p>
        <div className="row g-3 mt-1">
          <div className="col-md-4">
            <div style={insightCardStyle.problem}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f87171', marginBottom: '0.5rem' }}>Problem 01</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>資訊過載，無視覺層級</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>患者基本資料顯示欄位過多，七個功能按鈕文字冗長且重要性未分級，醫師一眼看不出哪些資訊重要、該按哪個按鈕。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={insightCardStyle.problem}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f87171', marginBottom: '0.5rem' }}>Problem 02</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>空白太多，頁面太長</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>S/O/A 區塊右下方有一大片空白，頁面被拉長，要往下捲才看得到全部資訊。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={insightCardStyle.problem}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f87171', marginBottom: '0.5rem' }}>Problem 03</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>表單樣式不一致</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>處方（Plan）區塊的表格格式破版，欄位寬度不一、按鈕位置混亂，看起來凌亂、不專業。</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: '2.5rem 0' }}>
        <div style={baLabel('before')}>✕ &nbsp;Before：原始介面</div>
        <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>資訊過長，需往下滑才能看完全部資訊，對於需同時對照其他資訊時使用上不友善。</p>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: 'var(--bg-elevated)' }}>
          <GalleryImg src="/img/web-SOAP1.jpg" alt="eHIS 看診介面 Before" />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <p>從「醫師看診當下需要看到什麼」出發，針對上面三個問題做了四項調整：精簡患者資訊、按鈕分級、重排版面、統一表單。</p>
        <div className="row g-3 mt-1">
          {[
            { num: 'Strategy 01', title: '精簡患者資訊', body: '從「全部顯示」改為「看診確認所需」。保留姓名、身分證號、性別，以及身高、BMI、血壓、體重、體溫、脈搏等生理數值，移除在看診當下非必要的完整地址、電話等資訊，減少視覺雜訊。' },
            { num: 'Strategy 02', title: '按鈕重要性分級', body: '將七個同等視覺權重的按鈕，依使用頻率與重要性重新分級：常用的功能用主要按鈕，其他功能降成次要按鈕。' },
            { num: 'Strategy 03', title: '版面重構，實現零捲動', body: '將 S（Subjective）、O（Objective）縱向排列改為左右並排，A（Assessment）維持右側欄，讓整個看診必要資訊在同一視窗可見，無需捲動頁面。' },
            { num: 'Strategy 04', title: '表單一致性修正', body: '統一 Plan 處方區塊的欄位寬度比例、按鈕尺寸與位置規則，將刪除按鈕移至列首（減少誤觸），新增慢性處方箋快捷按鈕。' },
          ].map(s => (
            <div className="col-md-6" key={s.num}>
              <div style={insightCardStyle.strategy}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>{s.num}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</h4>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ ...pmCallout, marginTop: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>設計取捨</div>
          <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>這次最大的取捨是患者資訊要顯示多少。<br />放少一點才擠得進一個視窗，但有些工作還是需要完整資料，所以留了「基本資料編輯」入口，需要的醫師還是點得到。</p>
        </div>
      </div>

      <div style={{ margin: '2.5rem 0' }}>
        <div style={baLabel('after')}>✓ &nbsp;After：改版後介面</div>
        <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>僅保留醫生看診所需資訊，讓視窗維持不需捲動即可觀看到所有資訊。</p>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: 'var(--bg-elevated)' }}>
          <GalleryImg src="/img/web-SOAP2.jpg" alt="eHIS 看診介面 After" />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">改版重點</h2>
        <div style={{ ...pmCallout, marginTop: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>回顧</div>
          <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>醫療資訊系統的設計限制比消費性產品嚴格：系統需求複雜、利害關係人多、改動成本高。<br />這個案例讓我學會：不從零重做，先找出最卡的三個問題，只處理那三個。</p>
        </div>
      </div>
    </ProjectLayout>
  )
}
