import ProjectLayout, { GalleryImg, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX 設計師' },
  { label: '交付物', value: 'APP + Web UI + 部分設計規範', colClass: 'col-6 col-md-3' },
  { label: '領域', value: '醫療科技 / 社區健康' },
  { label: '企業', value: '先進醫資' },
]

const otherProjects = [
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP｜UI/UX｜醫療' },
  { href: '/projects/ehis-redesign', title: 'eHIS 看診介面改版', desc: 'Web System｜UI/UX｜醫療資訊' },
  { href: '/projects/health-platform', title: '健康促進資訊整合平台', desc: 'Web｜Redesign｜公共衛生' },
]

const swatchStyle = { width: 56, height: 56, borderRadius: 8, marginBottom: '0.4rem', border: '1px solid rgba(255,255,255,0.08)' }
const specRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.88rem' }

export default function HealthStation() {
  return (
    <ProjectLayout
      title="智慧健康照護站"
      description="一套社區健康量測系統，包含實體量測機台、APP（iOS／Android）與網頁平台。設計前先畫 APP 的 User Flow，把互動路徑理清楚。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(123,194,53,0.28) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景</h2>
        <p>智慧健康照護站讓民眾在社區的量測機台量完，再用網頁或 APP 查看紀錄；志工也能用網頁追蹤個案。機台、網頁和 APP 的介面都是我設計的。</p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">產品架構</h2>
        <div className="row g-3">
          {[
            { icon: '🖥️', title: '量測機台', desc: '部署於社區的實體 IoT 設備，測量血壓、血氧、額溫、身高、體重，數據藍牙/Wi-Fi 即時上傳雲端', label: '實體接觸點' },
            { icon: '📱', title: '跨平台 APP', desc: 'iOS／Android 雙平台，民眾隨時查看健康數值、手動輸入、完成篩檢量表、連接藍牙量測設備', label: '日常使用介面' },
            { icon: '🌐', title: 'Web 管理平台', desc: 'PC 端儀表板，供民眾深度查看趨勢、志工管理個案、機構人員產出健康報告與政策彙整數據', label: '管理與服務介面' },
          ].map(p => (
            <div className="col-md-4" key={p.title}>
              <div className="highlight-card text-center" style={{ height: '100%' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{p.icon}</div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
                <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.5rem' }}>{p.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '0.75rem', paddingLeft: '0.1rem' }}>WEB UI</div>
        <GalleryImg src="/img/health-station-web1.webp" alt="智慧健康照護站 WEB UI：主面板、篩檢量表、衛教資訊" style={{ marginBottom: '1rem' }} />
        <GalleryImg src="/img/health-station-web2.webp" alt="智慧健康照護站 WEB UI：量表列印、志工專區" />
      </div>

      <div className="project-section">
        <h2 className="project-section-title">APP 功能設計</h2>
        <div className="row g-3">
          {[
            { title: '登入流程：降低首次使用門檻', body: '提供帳號密碼和 Facebook 兩種登入方式，註冊頁也能直接用 Facebook 註冊。', insight: '中高齡使用者常記不住密碼。用 Facebook 註冊之後，就能直接用 Facebook 登入，不用每次輸入密碼。' },
            { title: '主面板：最新數值放在第一頁', body: '一頁呈現所有量測指標的最新數值與狀態色，例如血壓 124/78 標橘色的「高血壓前期」。底部有五個分頁：記錄、動態、量表、個人、更多。', insight: '首屏的目標是讓使用者一眼看出最新的數值有沒有問題，所以卡片只放最新數值和狀態，趨勢與詳情放到下一層。' },
            { title: '手動新增與藍牙設備', body: '除了機台自動上傳，使用者也能手動輸入數值，或用藍牙連接自己的血壓計。配對流程是選機型、照說明配對、偵測，失敗時提示原因（例如藍牙沒開）。', insight: '支援個人設備之後，在家也能量，不一定要去社區站。' },
            { title: '數值紀錄：趨勢圖加參考值', body: '單一指標頁顯示歷史紀錄清單（每筆附時間戳）與趨勢折線圖，右上角的 i 可以打開參考值表，例如收縮壓 120～139 是高血壓前期。', insight: '每筆紀錄旁邊用顏色標出落在哪個範圍，點 i 可以看參考值表。使用者自己就能看出是不是偏高、要不要找醫生。' },
          ].map(f => (
            <div className="col-md-6" key={f.title}>
              <HighlightCard title={f.title}>
                <p>{f.body}</p>
                <p style={{ fontSize: '0.84rem', opacity: 0.7 }}><strong>為什麼這樣做：</strong>{f.insight}</p>
              </HighlightCard>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '0.75rem', paddingLeft: '0.1rem' }}>APP UI</div>
        <GalleryImg src="/img/health-station-app1.webp" alt="智慧健康照護站 APP UI：登入、主面板、手動新增" style={{ marginBottom: '1rem' }} />
        <GalleryImg src="/img/health-station-app2.webp" alt="智慧健康照護站 APP UI：數值紀錄、篩檢量表" />
      </div>

      <div className="project-section">
        <h2 className="project-section-title">User Flow：先把路徑畫出來</h2>
        <p>這個 APP 的互動比一般 App 複雜：兩種登入方式、藍牙設備配對、多種量測項目。所以設計前先畫 User Flow，把登入、新增紀錄、藍牙配對的主要路徑和錯誤狀態都畫出來。</p>
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '0.75rem' }}>User Flow</div>
          <GalleryImg src="/img/health-station-flow.webp" alt="智慧健康照護站 APP 的 User Flow：登入、主面板、新增紀錄與藍牙配對" />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">回顧</h2>
        <ul>
          <li><strong>數據連續性問題：</strong>使用者若只在覺得不舒服時才量測，歷史趨勢圖就失去預警價值。產品需要定期量測的推播提醒，量的次數夠多，趨勢圖才看得出變化。</li>
          <li><strong>藍牙配對太難：</strong>中高齡使用者很容易卡在配對。可以在配對失敗的畫面直接放影片教學，不要只給文字說明。</li>
          <li><strong>篩檢量表的醫療邊界：</strong>AD-8 是篩查工具，不是診斷工具。結果呈現的措辭要很小心：寫「建議諮詢醫師」，不能寫「您可能有失智症」。</li>
        </ul>
        <p className="mt-3">這個專案裡，我訂了色系和部分元件的規範。</p>
      </div>
    </ProjectLayout>
  )
}
