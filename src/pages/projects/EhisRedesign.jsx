import ProjectLayout, { GalleryImg, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX Designer' },
  { label: '企業', value: '資拓宏宇' },
  { label: '系統類型', value: '電子病歷系統' },
  { label: '使用者', value: '醫師 / 護理師' },
]

const otherProjects = [
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP — UI/UX — 醫療健康' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web — UI/UX + 前端 — 公共服務' },
  { href: '/projects/health-platform', title: '健康促進資訊整合平台', desc: 'Web — UI/UX — Redesign' },
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
      title="eHIS 醫療系統看診介面優化"
      description="以使用者情境出發，重構醫師看診工作介面——精煉資訊層級、重組功能按鈕、優化版面佈局，讓醫師在高壓看診環境中無需捲動頁面即可掌握所有關鍵資訊，專注於病患本身。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(99,179,237,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與挑戰</h2>
        <p>eHIS（Electronic Health Information System）是醫院端的電子病歷資訊系統，看診頁面是醫師在診間最頻繁使用的核心工作介面。<br />每位醫師每天可能面對數十位至上百位患者，介面的操作效率直接影響看診品質與醫師的工作壓力。</p>
        <div style={pmCallout}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>PM Insight — 使用者情境分析</div>
          <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>醫師在看診時往往需要同時處理多件事：口頭問診、輸入主觀/客觀資料、查詢過去病史、開立處方。<br />這是一個「高認知負荷 × 高時間壓力」的複合場景，任何多餘的資訊或操作步驟都會成為干擾，甚至提高醫療失誤的風險。</p>
        </div>
        <p>原始介面存在三個核心問題：</p>
        <div className="row g-3 mt-1">
          <div className="col-md-4">
            <div style={insightCardStyle.problem}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f87171', marginBottom: '0.5rem' }}>Problem 01</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>資訊過載，無視覺層級</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>患者基本資料顯示欄位過多，七個功能按鈕文字冗長且重要性未分級，醫師無法一眼辨識關鍵資訊與主要操作。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={insightCardStyle.problem}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f87171', marginBottom: '0.5rem' }}>Problem 02</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>空間利用低效</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>S/O/A 區塊右下方存在大面積空白，版面未有效運用，使整體頁面高度過長，需要捲動才能檢視完整資訊。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={insightCardStyle.problem}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#f87171', marginBottom: '0.5rem' }}>Problem 03</div>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>表單樣式不一致</h4>
              <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>處方（Plan）區塊的表格格式破版，欄位寬度不一、按鈕位置混亂，造成視覺凌亂感，降低使用者對系統的信賴感。</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ margin: '2.5rem 0' }}>
        <div style={baLabel('before')}>✕ &nbsp;Before — 原始介面</div>
        <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>資訊過長，需往下滑才能看完全部資訊，對於需同時對照其他資訊時使用上不友善。</p>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: 'var(--bg-elevated)' }}>
          <GalleryImg src="/img/web-SOAP1.jpg" alt="eHIS 看診介面 Before" />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">設計策略</h2>
        <p>以「醫師看診當下真正需要什麼」為出發點，採用資訊精煉、層級重組、版面壓縮三個方向同步進行優化：</p>
        <div className="row g-3 mt-1">
          {[
            { num: 'Strategy 01', title: '患者資訊精煉', body: '從「全部顯示」改為「看診確認所需」。保留姓名、身分證號、性別、身高、BMI、血壓、體重、體溫、脈搏等核心生理數值，移除在看診當下非必要的完整地址、電話等資訊，減少視覺雜訊。' },
            { num: 'Strategy 02', title: '按鈕重要性分級', body: '將七個同等視覺權重的按鈕，依使用頻率與重要性重新分級：高頻核心功能以 Primary 按鈕呈現，輔助功能降至次要視覺層級，縮短決策時間。' },
            { num: 'Strategy 03', title: '版面重構，實現零捲動', body: '將 S（Subjective）、O（Objective）縱向排列改為左右並排，A（Assessment）維持右側欄，讓整個看診必要資訊在同一視窗可見，無需捲動頁面。' },
            { num: 'Strategy 04', title: '表單一致性修正', body: '統一 Plan 處方區塊的欄位寬度比例、按鈕尺寸與位置規則，將刪除按鈕移至列首（減少誤觸），新增慢性處方箋快捷按鈕，強化操作可預期性與整體專業感。' },
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
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>PM Insight — 設計決策取捨</div>
          <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>此次優化最關鍵的取捨在於「患者資訊的顯示範圍」。<br />完整資訊的揭露對某些工作流程有其必要性，因此保留「基本資料編輯」入口，讓需要查看完整資料的醫師仍可快速切換，而非完全隱藏——這是在「單一視窗高效率」與「完整資訊可及性」之間的平衡點。</p>
        </div>
      </div>

      <div style={{ margin: '2.5rem 0' }}>
        <div style={baLabel('after')}>✓ &nbsp;After — 優化後介面</div>
        <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>僅保留醫生看診所需資訊，讓視窗維持不需捲動即可觀看到所有資訊。</p>
        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.06)', background: 'var(--bg-elevated)' }}>
          <GalleryImg src="/img/web-SOAP2.jpg" alt="eHIS 看診介面 After" />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">設計價值</h2>
        <div className="row g-3 mb-3">
          {[
            { val: '零捲動', label: '看診關鍵資訊單一視窗全覽' },
            { val: '↓ 認知負荷', label: '資訊欄位精煉減少視覺雜訊' },
            { val: '4 → 1', label: '按鈕分級設計主要功能一眼辨識' },
          ].map(i => (
            <div className="col-md-4" key={i.val}>
              <div style={impactItem}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent)', letterSpacing: '-0.02em', lineHeight: 1.1 }}>{i.val}</div>
                <div style={{ fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.375rem', lineHeight: 1.5 }}>{i.label}</div>
              </div>
            </div>
          ))}
        </div>
        <p>這個案例的核心價值不在於視覺美化，而是通過以使用者情境為基礎的設計決策，解決真實工作流中的效率瓶頸。</p>
        <div style={{ ...pmCallout, marginTop: '1.5rem' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>PM Reflection — 從這個專案學到的</div>
          <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.75, margin: 0 }}>醫療資訊系統的設計限制通常比消費性產品嚴格許多——系統需求複雜、利害關係人眾多、改動成本高。<br />這個案例讓我學會在有限的範圍內找到最大的改善槓桿點：不是從零開始重做，而是識別出造成最大痛點的三個關鍵問題，針對性地解決。</p>
        </div>
      </div>
    </ProjectLayout>
  )
}
