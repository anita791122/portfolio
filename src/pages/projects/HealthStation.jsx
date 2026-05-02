import ProjectLayout, { GalleryImg, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX 設計師' },
  { label: '交付物', value: 'APP + Web UI + 設計系統', colClass: 'col-6 col-md-3' },
  { label: '領域', value: '醫療科技 / 社區健康' },
  { label: '企業', value: '先進醫資' },
]

const otherProjects = [
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP — UI/UX — 醫療科技' },
  { href: '/projects/ehis-redesign', title: 'eHIS 醫療系統優化', desc: 'Web System — 醫療資訊' },
  { href: '/projects/health-platform', title: '健康促進資訊整合平台', desc: 'Web — Redesign — 公共衛生' },
]

const swatchStyle = { width: 56, height: 56, borderRadius: 8, marginBottom: '0.4rem', border: '1px solid rgba(255,255,255,0.08)' }
const specRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.6rem 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.88rem' }

export default function HealthStation() {
  return (
    <ProjectLayout
      title="智慧健康照護站"
      description="從零打造一套完整的社區健康監測解決方案：整合實體量測機台、跨平台 APP（iOS / Android）與 Web 管理儀表板，建立設計系統確保一致性，以 User Flow 驅動複雜互動邏輯——讓預防醫療真正走入日常生活。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(123,194,53,0.28) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與商業脈絡</h2>
        <p>台灣面臨高齡化浪潮加速，慢性病（高血壓、糖尿病）盛行率持續攀升，但傳統「等生病了再看診」的模式讓醫療體系不堪負荷。政府積極推動社區預防保健，衛生所、社區健康中心等機構有強烈的數位化需求，卻缺乏整合硬體與軟體的完整解決方案。</p>
        <p>對先進醫資而言，這是典型的 <strong>B2G 藍海市場</strong>：政府有預算、有政策支持，但市場上的競品多半只提供單一面向（純硬體量測機 or 純 App 紀錄），缺乏串聯整個照護旅程的系統思維。<strong>智慧健康照護站定位為「全端照護解決方案」</strong>，硬體 + APP + Web + 志工後台一次整合，形成高轉換成本的產品護城河。</p>
        <div className="row g-3 mt-1">
          <div className="col-md-4"><HighlightCard title="市場機會"><p>政府積極採購社區健康監測設備，預防醫療 IoT 市場在高齡化驅動下快速成長</p></HighlightCard></div>
          <div className="col-md-4"><HighlightCard title="競爭策略"><p>硬體 + 軟體全端整合，客戶無需對接多家供應商，降低導入門檻同時提高替換成本</p></HighlightCard></div>
          <div className="col-md-4"><HighlightCard title="長尾收益"><p>設備建置為一次性銷售，軟體訂閱與系統維護形成持續性的 ARR（年度經常性收入）</p></HighlightCard></div>
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">產品架構：三層整合</h2>
        <div className="row g-3">
          {[
            { icon: '🖥️', title: '量測機台', desc: '部署於社區的實體 IoT 設備，測量血壓、血氧、額溫、身高、體重，數據藍牙/Wi-Fi 即時上傳雲端', label: '實體接觸點' },
            { icon: '📱', title: '跨平台 APP', desc: 'iOS / Android 雙平台，民眾隨時查看健康數值、手動輸入、完成篩檢量表、連接藍牙量測設備', label: '日常使用介面' },
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
        <GalleryImg src="/img/health-station-web1.webp" alt="智慧健康照護站 WEB UI — 主面板、篩檢量表、衛教資訊" style={{ marginBottom: '1rem' }} />
        <GalleryImg src="/img/health-station-web2.webp" alt="智慧健康照護站 WEB UI — 量表列印、志工專區" />
      </div>

      <div className="project-section">
        <h2 className="project-section-title">APP 功能設計與 PM 決策分析</h2>
        <div className="row g-3">
          {[
            { title: '登入流程：降低首次使用門檻', body: '提供帳號密碼、LINE、Facebook 三種登入方式。對中高齡使用者而言，記住密碼是主要阻力；社群帳號登入讓已有 LINE 帳號的台灣用戶能零摩擦進入系統。', insight: 'LINE 在台灣 40 歲以上族群的滲透率極高，以 LINE 登入等同於降低這個核心族群的使用門檻，同時借助社群平台的通知機制，潛在地提升回訪率。' },
            { title: '主面板：健康全貌的即時摘要', body: '一頁呈現所有量測指標的最新數值與狀態色，血壓 124/76（正常綠）、血氧 76%（異常紅）、體溫 36.4°C 一眼可辨。底部 Tab Bar 分為紀錄、動態、量表、個人、更多五大功能區。', insight: '首屏的設計決策是「讓使用者在 5 秒內判斷今天的健康狀態是否有問題」。這個目標決定了資訊密度的上限——卡片只放最關鍵的數值，趨勢與詳情留給下一層。' },
            { title: '手動新增：串接實體設備的橋接設計', body: '除了機台自動上傳，使用者也能手動輸入數值，或透過藍牙連接個人量測設備（血壓計、血糖機）。設備配對流程包含設備掃描、連線確認、量測觸發，整個藍牙 IoT 流程都需要清晰的狀態引導。', insight: '「支援個人設備」將產品從「需要去社區站才能量測」進化為「日常家中也能使用」，大幅擴大使用場景，提升數據密度，也讓平台對使用者的黏性從「需要時用」升級為「每天用」。' },
            { title: '數值紀錄：趨勢圖 + 參考值的雙層解讀', body: '單一指標頁顯示歷史紀錄清單（每筆附時間戳）與趨勢折線圖，右側同步展示對應的參考區間色階表。使用者能一邊看自己的數值曲線，一邊對照「120-139 是第一期高血壓」的範圍說明。', insight: '孤立的數值沒有意義，脈絡才有意義。趨勢 + 參考值的並列設計，讓使用者能自行完成「我的趨勢 × 標準範圍 → 我需要就醫嗎？」的判斷，減少對醫護人員的依賴，也降低不必要的門診量。' },
          ].map(f => (
            <div className="col-md-6" key={f.title}>
              <HighlightCard title={f.title}>
                <p>{f.body}</p>
                <p style={{ fontSize: '0.84rem', opacity: 0.7 }}><strong>PM Insight：</strong>{f.insight}</p>
              </HighlightCard>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '0.75rem', paddingLeft: '0.1rem' }}>APP UI</div>
        <GalleryImg src="/img/health-station-app1.webp" alt="智慧健康照護站 APP UI — 登入、主面板、手動新增" style={{ marginBottom: '1rem' }} />
        <GalleryImg src="/img/health-station-app2.webp" alt="智慧健康照護站 APP UI — 數值紀錄、篩檢量表" />
      </div>

      <div className="project-section">
        <h2 className="project-section-title">User Flow：複雜互動邏輯的系統化梳理</h2>
        <p>這個產品的互動複雜度遠超一般 App——多種登入方式、藍牙設備配對、多角色後台、多指標追蹤。User Flow 是在設計開始前釐清所有路徑的關鍵工具，它讓設計師、PM 與工程師在同一張圖上對齊認知，避免後期遺漏邊緣情境。</p>
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.45, marginBottom: '0.75rem' }}>User Flow</div>
          <GalleryImg src="/img/health-station-flow.webp" alt="智慧健康照護站 User Flow — 完整互動流程圖" />
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">設計反思與延伸思考</h2>
        <ul>
          <li><strong>數據連續性問題：</strong>使用者若只在覺得不舒服時才量測，歷史趨勢圖就失去預警價值。產品需要「定期量測提醒」機制（Push Notification + 社群激勵），才能確保數據足夠密集，讓機器學習模型或基礎趨勢分析真正有效。</li>
          <li><strong>藍牙 UX 的隱性成本：</strong>設備配對的技術複雜度對中高齡使用者是顯著門檻。未來可考慮提供「影片教學入口」直接嵌入配對流程的失敗畫面，而非只給文字說明，以降低客服量。</li>
          <li><strong>篩檢量表的醫療邊界：</strong>AD-8 是篩查工具，不是診斷工具。設計上需要非常謹慎地處理結果呈現的措辭——「建議諮詢醫師」而非「您可能有失智症」。</li>
          <li><strong>B2G 的驗收邏輯：</strong>政府客戶的採購驗收常以「功能清單」為準，容易讓開發團隊著重功能完整度而非使用者體驗品質。設計師需要在專案早期就建立「易用性標準」並納入驗收條件，否則設計品質容易在後期被壓縮。</li>
        </ul>
        <p className="mt-3">這個專案讓我第一次完整經歷「從零建立設計系統」的過程——Style Guide 不只是顏色表，更是跨平台設計決策的成文化。<strong>一個好的設計系統讓整個團隊能快速決策、降低溝通成本，這是設計師能為產品組織貢獻的長期基礎建設價值。</strong></p>
      </div>
    </ProjectLayout>
  )
}
