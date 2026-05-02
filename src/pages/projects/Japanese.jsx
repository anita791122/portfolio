import ProjectLayout, { HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'PM × UI/UX × 前端' },
  { label: '類型', value: 'Side Project' },
  { label: '設計系統', value: 'Material Design 3' },
  { label: '技術', value: 'HTML / CSS / JS' },
]

const otherProjects = [
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web — UI/UX + 前端 — 公共服務' },
  { href: '/projects/nhi-card', title: '虛擬健保卡就醫應用 APP', desc: 'APP — UI/UX — 醫療健康' },
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP — UI/UX — 金融科技' },
]

const pmInsightStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  padding: '1.25rem 1.5rem',
  height: '100%',
}

const metricRowStyle = {
  display: 'flex',
  gap: '1.5rem',
  flexWrap: 'wrap',
  margin: '2rem 0 0',
}

const metricCardStyle = {
  flex: '1 1 140px',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  padding: '1.25rem',
  textAlign: 'center',
}

const featureMapStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: '1.5rem',
}

const featureItemStyle = {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'flex-start',
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '12px',
  padding: '1.25rem 1.5rem',
}

const featureIconStyle = {
  fontSize: '2rem',
  flexShrink: 0,
  lineHeight: 1,
  marginTop: '0.1rem',
}

export default function Japanese() {
  return (
    <ProjectLayout
      title="日文道場 — Nihongo Dojo"
      description={<>一個以「讓自學者真的學得下去」為核心命題的 Side Project。<br />透過遊戲化留存機制、完整的學習閉環設計，加上 Material Design 3 沉浸式 UI，<br />從零到一由一人完成設計、開發與發布。</>}
      glowStyle={{ background: 'radial-gradient(circle,rgba(79,195,247,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景：為什麼要做這個？</h2>
        <p>
          開始自學日文後，我快速發現一個矛盾：市面上的學習工具要嘛功能太複雜（讓人不知從何開始），要嘛太枯燥（背了三天就放棄）。<br />
          Duolingo 雖然好，但 N5 文法的課表與台灣人習慣的說法不完全契合。
        </p>
        <p>
          這個問題對我而言是真實需求，也是一個可以同時練習「設計思維 + PM 產品規劃 + 前端實作」的好機會。
          於是我決定：<strong>自己打造一個專屬的學習工具。</strong>
        </p>
        <div className="row g-3 mt-2">
          {[
            { title: 'User Pain Point', body: '自學者缺乏即時回饋，學完一個單元不知道自己「到底學進去沒有」，導致動力快速流失。' },
            { title: 'Market Gap', body: '台灣繁體中文 N5 學習資源以靜態教材為主，互動性強且設計品質高的工具稀缺。' },
            { title: 'Opportunity', body: '遊戲化 + 深度客製化內容（台灣情境的會話練習）+ 高品質 UI，三者同時到位的競品幾乎為零。' },
          ].map(c => (
            <div className="col-md-4" key={c.title}>
              <div style={pmInsightStyle}>
                <h5 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.5rem' }}>{c.title}</h5>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">產品定位與競品分析</h2>
        <div style={{ overflowX: 'auto' }}>
          <table className="compete-table">
            <thead>
              <tr>
                <th>工具</th>
                <th>遊戲化機制</th>
                <th>繁中情境</th>
                <th>離線可用</th>
                <th>客製化程度</th>
                <th>UI 品質</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>日文道場</strong></td>
                <td className="badge-yes">✓ XP / 連勝 / 愛心</td>
                <td className="badge-yes">✓ 台灣情境</td>
                <td className="badge-yes">✓ 純前端</td>
                <td className="badge-yes">✓ 完全可控</td>
                <td className="badge-yes">✓ MD3 Dark</td>
              </tr>
              <tr>
                <td>Duolingo</td>
                <td className="badge-yes">✓ 完整</td>
                <td className="badge-part">△ 非繁中導向</td>
                <td className="badge-no">✗ 需登入</td>
                <td className="badge-no">✗ 無</td>
                <td className="badge-yes">✓ 高</td>
              </tr>
              <tr>
                <td>Anki</td>
                <td className="badge-no">✗ 無</td>
                <td className="badge-part">△ 自建牌組</td>
                <td className="badge-yes">✓</td>
                <td className="badge-yes">✓ 高</td>
                <td className="badge-no">✗ 低</td>
              </tr>
              <tr>
                <td>傳統教材 PDF</td>
                <td className="badge-no">✗ 無</td>
                <td className="badge-part">△ 因書而異</td>
                <td className="badge-yes">✓</td>
                <td className="badge-no">✗ 無</td>
                <td className="badge-no">✗ 低</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>日文道場的差異化主軸是：<strong>台灣學習者視角 × 遊戲化留存 × 沉浸式 UI</strong>，三者合一。</p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">功能架構：以留存為核心的產品設計</h2>
        <p>從 PM 視角出發，每個功能的存在都必須服務於「讓使用者明天還想回來」這個核心目標。以下五大模組各自對應不同的學習階段與留存機制：</p>
        <div style={featureMapStyle}>
          {[
            { icon: '📚', title: '課程系統', body: '結構化的 N5 學習路徑，含單字、文法、會話三個維度，清楚顯示進度與解鎖狀態，製造「下一關」的驅動感。' },
            { icon: '🃏', title: '單字卡（Flashcard）', body: '3D 翻牌動效 + 語音朗讀（TTS）。「不記得 / 記得」雙選反饋，模擬間隔記憶邏輯，加速記憶鞏固。' },
            { icon: '🎯', title: '測驗（Quiz）', body: '四選一選擇題 + 填空輸入雙模式，答題後即時顯示正誤反饋與解釋，搭配愛心系統製造適度緊張感。' },
            { icon: '🔗', title: '配對遊戲（Matching）', body: '日文 ↔ 中文連連看，答錯時震動動畫 + 扣心機制，讓「失敗成本」成為記憶的錨點。' },
            { icon: '📖', title: '文法說明', body: '重點句型 + 波浪底線標注 + 多組例句，採台灣日常情境（購物、問路、餐廳），讓語法學習不脫離實用脈絡。' },
            { icon: '💬', title: '情境會話', body: '分角色的對話場景（A/B 雙角色 + 店員/客人），搭配 TTS 逐句朗讀，模擬真實對話節奏。' },
          ].map(f => (
            <div key={f.title} style={featureItemStyle}>
              <span style={featureIconStyle}>{f.icon}</span>
              <div>
                <h5 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.4rem' }}>{f.title}</h5>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">商業思維：遊戲化留存機制拆解</h2>
        <p>參考 Duolingo 的核心留存邏輯，並針對「沒有帳號系統的 Side Project」重新設計適合的輕量化版本：</p>
        <div className="row g-3">
          {[
            { title: '🔥 連勝天數（Streak）', body: '最強的回訪驅動力之一。使用者一旦建立「連勝記錄」，為了「不讓數字歸零」而每天回來的動機遠超過「想學習」本身。這是 Duolingo 留存率的核心支柱之一。' },
            { title: '⚡ XP 升級系統', body: '每完成一個練習獲得 XP，累積至 500 XP 升級。進度條讓使用者清楚看到「距離下一個里程碑還差多少」，製造 Endowed Progress Effect（已擁有進度捨不得放棄）。' },
            { title: '❤️ 愛心（Lives）系統', body: '測驗中限制犯錯次數，答錯扣心。適度的失敗成本讓使用者認真作答，避免無腦亂點，也讓「心全部消耗」成為一個自然的回訪觸發點。' },
            { title: '✨ 即時正向反饋', body: '每次答對顯示 XP 浮動數字動畫（+10 XP），答題完成後呈現「太棒了！」完成頁，搭配正確率、用時、獲得 XP 等統計，讓每次練習都有明確的成就感。' },
          ].map(c => (
            <div className="col-md-6" key={c.title}>
              <HighlightCard title={c.title}><p>{c.body}</p></HighlightCard>
            </div>
          ))}
        </div>
        <div style={metricRowStyle}>
          {[
            { val: '5', lbl: '核心學習模組' },
            { val: '3', lbl: '留存機制（Streak / XP / Hearts）' },
            { val: '1', lbl: '人完成設計 + 開發 + 上線' },
          ].map(m => (
            <div key={m.lbl} style={metricCardStyle}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1.1 }}>{m.val}</div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.4rem' }}>{m.lbl}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">頁面預覽</h2>
        <p>以下為各主要功能畫面的實際樣式，採 Material Design 3 Dark Theme，完整響應式支援手機、平板、桌機三種排版。</p>
        <div className="browser-frame">
          <div className="browser-topbar">
            <div className="browser-dots">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
            </div>
            <div className="browser-url">https://anita791122.github.io/japanese/</div>
          </div>
          <iframe
            src="https://anita791122.github.io/japanese/"
            title="日文道場 Live Preview"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>
        <p className="text-center" style={{ fontSize: '.85rem', color: '#80939A', marginTop: '-8px' }}>
          ↑ 可直接在此互動操作，或{' '}
          <a href="https://anita791122.github.io/japanese/" target="_blank" rel="noopener noreferrer" style={{ color: '#4FC3F7' }}>點此全螢幕開啟</a>
        </p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">設計決策：為什麼選 Material Design 3？</h2>
        <div className="row g-3">
          {[
            { title: 'Dark Mode First', body: '深夜睡前記單字是高頻使用情境。深色介面降低眼睛負擔，也讓日文假名在深色背景上更易辨讀。主色 Cyan-Blue（#4FC3F7）在深色背景有高對比，符合 WCAG 可及性標準。' },
            { title: 'Adaptive Navigation', body: '手機 → Bottom Navigation Bar；平板 → Nav Rail；桌機 → Navigation Drawer。一套 CSS + media query 實現三段響應式導航，與 MD3 官方設計規範完全對應。' },
            { title: 'Motion Design', body: '單字卡翻牌、畫面切換、XP 浮動數字全部有專屬動畫。Emphasized Easing（cubic-bezier(.2,0,0,1.4)）讓互動有彈性感，提升操作的愉悅度。' },
            { title: '零框架純實作', body: '以原生 HTML / CSS / JS 完成。' },
          ].map(c => (
            <div className="col-md-6" key={c.title}>
              <div style={pmInsightStyle}>
                <h5 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.5rem' }}>{c.title}</h5>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">反思：如果這是一個真實產品，接下來要做什麼？</h2>
        <p>以 PM 視角來看，目前的版本是一個功能完整的 MVP（Minimum Viable Product）。如果要往「真正的產品」演進，我會優先做以下三件事：</p>
        <ul>
          <li><strong>建立帳號系統 + 雲端進度同步</strong>：目前進度存在 localStorage，換裝置即消失。Streak 的留存力量必須跨裝置才能真正生效。</li>
          <li><strong>導入分析儀表板</strong>：追蹤「哪些單字答錯率最高」「使用者在哪個步驟流失」，以數據驅動課程內容迭代，而非憑感覺新增教材。</li>
          <li><strong>社群 / 排行榜機制</strong>：Duolingo 最強的留存手段之一是同儕競爭。加入「本週積分排行」或「揪朋友一起學」，可大幅提升網路效應與自然分享率。</li>
        </ul>
        <div className="row g-3 mt-2">
          {[
            { title: 'PM Takeaway #1', body: '遊戲化不是「加點數就好」，需要理解每個機制背後的心理學原理，才能設計出真正有效的留存工具。' },
            { title: 'PM Takeaway #2', body: '「設計者即使用者」的 Side Project 雖然驗證成本最低，但也最容易陷入個人偏見；真正的 PM 工作需要超越自己的使用情境去思考。' },
            { title: 'PM Takeaway #3', body: '從零到一獨力完成讓我深刻理解「設計可行性」：哪些互動效果在純 CSS 實現時有技術天花板，哪些需要 JS 支援，影響後續與工程師溝通的精準度。' },
          ].map(c => (
            <div className="col-md-4" key={c.title}>
              <div style={pmInsightStyle}>
                <h5 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: '0.5rem' }}>{c.title}</h5>
                <p style={{ fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ProjectLayout>
  )
}
