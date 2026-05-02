import ProjectLayout, { GalleryImg, HighlightCard } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: 'UI/UX + 前端' },
  { label: '類型', value: 'Web 活動頁' },
  { label: '領域', value: '金融科技 / 政策落地' },
  { label: '企業', value: '一卡通票證' },
]

const otherProjects = [
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP — UI/UX — 金融科技' },
  { href: '/projects/linepay-citizen', title: 'LINE Pay 市民卡', desc: 'APP — UI/UX — 市民服務' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web — UI/UX — 公共服務' },
]

const accentBorder = { borderLeft: '3px solid var(--accent)' }

export default function EventRegister() {
  return (
    <ProjectLayout
      title="一卡通振興券活動登錄平台"
      description="將政府三倍振興券政策數位化落地：設計一個在法規強制揭露、多方利益協調與使用者體驗之間取得平衡的活動登錄系統，讓民眾以最低操作成本完成綁定，同時保護企業合規。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(0,150,255,0.3) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景與商業脈絡</h2>
        <p>2020 年台灣政府推出「三倍振興券」政策，民眾以 NT$1,000 換取 NT$3,000 的消費券，目的是刺激 COVID-19 後的經濟復甦。除傳統紙本券外，政府開放行動支付業者提供「數位綁定」方案，消費者綁定指定支付工具後，消費滿 NT$3,000 即可獲得回饋金。</p>
        <p>對一卡通票證而言，這是一個難得的<strong>使用者大規模取得機會</strong>：若能讓民眾順利完成 LINE Pay Money 綁定，不只可以衝高活躍帳戶數，更能在政策紅利期間建立使用習慣，轉化為長期付費用戶。</p>
        <div className="row g-3 mt-2">
          <div className="col-md-4"><HighlightCard title="政府目標"><p>推動數位支付普及，加速電子券取代紙本，降低行政成本</p></HighlightCard></div>
          <div className="col-md-4"><HighlightCard title="企業目標"><p>透過政策紅利大量取得新用戶，提升 LINE Pay Money 活躍率與品牌曝光</p></HighlightCard></div>
          <div className="col-md-4"><HighlightCard title="使用者目標"><p>用最少步驟完成登錄，確保自己不會錯失 NT$2,000 回饋金</p></HighlightCard></div>
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">問題定義：這個頁面的設計難點在哪？</h2>
        <p>表面上這只是一個「填資料、按登入」的簡單頁面，但背後有幾個相互競爭的設計張力：</p>
        <div className="row g-3 mt-1">
          {[
            { title: '1. 法規揭露 vs. 認知負荷', body: '政府法規要求完整揭露活動規則與個資蒐集聲明，但落落長的條款會讓使用者直接放棄或略過，導致後續爭議。如何讓必要資訊被「看見」而非「忽略」？' },
            { title: '2. 錯誤成本極高', body: '資料填寫錯誤即「視同放棄活動回饋資格」——對使用者而言錯一個字就損失 NT$2,000。這種高風險場景要求系統設計必須明確傳達後果，引導用戶謹慎確認。' },
            { title: '3. 互斥規則的清楚說明', body: '數位券與紙本券互斥，若民眾已領紙本券就不能再綁定。此規則若說明不清，將造成大量客服投訴與退款爭議，直接增加企業營運成本。' },
            { title: '4. 流程的完整性設計', body: '回饋金的發放流程橫跨三個月：綁定 → 消費滿額 → 申領回饋。使用者需要一次性理解整個流程，才能做出正確決策（是否要參與、選擇哪種領取方式）。' },
          ].map(d => (
            <div className="col-md-6" key={d.title}>
              <HighlightCard style={accentBorder} title={d.title}><p>{d.body}</p></HighlightCard>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">設計決策與 PM 思維</h2>
        <div className="row g-3">
          {[
            { title: '決策一：極簡入口，降低首屏決策成本', body: '登入表單只有兩個欄位（身分證號 + 手機門號），沒有多餘的選項或說明。使用者在完成最基本的身份確認後，才進入規則閱讀流程，降低「還沒開始就放棄」的機率。', insight: '把摩擦力最大的內容（長篇條款）放在使用者已有初步承諾（填完資料）後才展示，利用沉沒成本效應提高完讀率。' },
            { title: '決策二：八大分類讓條款「可掃視」', body: '將活動規則依主題切成 8 個清楚標題的分類（綁定期間、不適用項目、消費計算、回饋領取等），使用者不需逐字閱讀，能依自己的疑問快速跳至相關段落。', insight: '完整呈現資訊滿足法規要求，分類結構則降低使用者的認知負荷，兩者並不衝突。' },
            { title: '決策三：強調錯誤成本，引導謹慎確認', body: '在表單上方明確說明「資料輸入錯誤者，視同放棄及未符合活動回饋資格」，讓使用者在填寫前就了解後果的嚴重性，主動放慢確認節奏，減少錯誤資料入庫。', insight: '預防勝於治療。比起事後補登申請機制，前端的清楚警示能大幅降低客服量與補救成本。' },
            { title: '決策四：回饋管道多元化，提升轉換率', body: '提供三種領取方式（LINE Pay Money 儲值金、ATM 現金、公益捐款），讓對 LINE Pay Money 尚未完全信任的使用者仍有參與誘因，降低「支付工具陌生感」造成的流失。', insight: '回饋管道多元化是典型的「降低採用門檻」策略，犧牲部分品牌導流效益，換取更高的整體活動完成率。' },
          ].map(d => (
            <div className="col-md-6" key={d.title}>
              <HighlightCard title={d.title}>
                <p>{d.body}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}><strong>PM Insight：</strong>{d.insight}</p>
              </HighlightCard>
            </div>
          ))}
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">設計反思與延伸思考</h2>
        <p>如果重新設計這個頁面，從 PM 角度會考慮以下改進方向：</p>
        <ul>
          <li><strong>資格前置確認：</strong>在填表前先讓使用者回答「您是否已領取紙本券？」這類互斥問題，避免不符資格者進入流程後浪費時間，也減少後續退件處理</li>
          <li><strong>進度指示器：</strong>明確告知使用者「現在是三個步驟中的第一步」，降低不確定感，提高完成率</li>
          <li><strong>Inline 欄位驗證：</strong>在使用者填寫身分證號時即時格式驗證，而非等到送出才報錯，減少因格式錯誤導致的重複操作</li>
          <li><strong>回饋管道選擇前置：</strong>讓使用者在登錄時就選好領取方式（而非事後補填），可以在流程中強化「你將獲得 NT$2,000 現金回饋」的正向錨點，提升動機</li>
        </ul>
        <p className="mt-3">這個案例讓我深刻理解：<strong>一個看似簡單的活動登錄頁面，其實是政策落地、商業目標與使用者體驗三方博弈的縮影</strong>。設計師若只關注視覺呈現，會錯過那些真正影響專案成敗的系統性問題。</p>
        <a href="https://anita791122.github.io/event_register3/index.html" target="_blank" rel="noopener noreferrer" className="project-live-link">
          查看實作成果 ↗
          <img src="/img/arrow.svg" alt="" aria-hidden="true" className="project-live-link__icon" />
        </a>
      </div>
    </ProjectLayout>
  )
}
