import ProjectLayout, { GalleryImg, ProjectImageBlock, HighlightCard } from '../../components/ProjectLayout'
import { ip } from '../../utils/imgPath'

const meta = [
  { label: '角色', value: 'UI/UX + 前端切版' },
  { label: '類型', value: 'Web 活動頁' },
  { label: '領域', value: '金融科技 / 政府政策' },
  { label: '企業', value: '一卡通票證' },
]

const otherProjects = [
  { href: '/projects/linepay-bill', title: 'LINE Pay 生活繳費', desc: 'APP｜UI/UX｜金融科技' },
  { href: '/projects/linepay-citizen', title: 'LINE Pay 市民卡', desc: 'APP｜UI/UX｜金融科技' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web｜UI/UX + 前端切版｜公共服務' },
]

const accentBorder = { borderLeft: '3px solid var(--accent)' }

export default function EventRegister() {
  return (
    <ProjectLayout
      title="一卡通振興券活動登錄平台"
      description="振興三倍券數位綁定的登錄頁。法規要揭露的條款很長，資料填錯就拿不到回饋，紙本券和數位券又不能兼得。這頁要在這些限制下，讓民眾順利完成綁定。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(0,150,255,0.3) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景</h2>
        <p>2020 年台灣政府推出「振興三倍券」政策，民眾以 NT$1,000 換取 NT$3,000 的消費券，目的是刺激 COVID-19 後的經濟復甦。除傳統紙本券外，政府開放行動支付業者提供「數位綁定」方案，消費者綁定指定支付工具後，消費滿 NT$3,000 即可獲得回饋金。</p>
        <p>對一卡通票證來說，這是一次<strong>大量吸引新使用者的機會</strong>：如果民眾順利綁定 LINE Pay Money，活躍帳戶就會增加，也有機會養成長期使用的習慣。</p>
        <div className="row g-3 mt-2">
          <div className="col-md-4"><HighlightCard title="政府目標"><p>推動數位支付普及，加速電子券取代紙本，降低行政成本</p></HighlightCard></div>
          <div className="col-md-4"><HighlightCard title="企業目標"><p>趁政策期間吸引新使用者，讓更多人開始用 LINE Pay Money</p></HighlightCard></div>
          <div className="col-md-4"><HighlightCard title="使用者目標"><p>用最少的步驟完成登錄，拿到 NT$2,000 回饋金</p></HighlightCard></div>
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/event-register-web.jpg" alt="一卡通振興券登錄平台：桌機版登入畫面，只有身分證號與手機門號兩個欄位" />
      </ProjectImageBlock>
      <div className="project-section">
        <h2 className="project-section-title">問題定義：這個頁面的設計難點在哪？</h2>
        <p>表面上這只是一個「填資料、按登入」的簡單頁面，但背後有幾件事互相拉扯：</p>
        <div className="row g-3 mt-1">
          {[
            { title: '1. 法規要揭露的很多，使用者讀不完', body: '政府法規要求完整揭露活動規則與個資蒐集聲明，但落落長的條款會讓使用者直接放棄或略過，導致後續爭議。要怎麼讓必要的資訊真的被看到？' },
            { title: '2. 錯誤成本極高', body: '資料填錯就「視同放棄活動回饋資格」，對使用者來說，錯一個字就損失 NT$2,000。所以介面要把後果講清楚，讓人送出前再確認一次。' },
            { title: '3. 互斥規則的清楚說明', body: '數位券與紙本券互斥，若民眾已領紙本券就不能再綁定。這條規則要是沒講清楚，可能引來很多客服投訴和退款爭議。' },
            { title: '4. 要先看懂整段流程', body: '回饋金要經過三步：綁定、消費滿額、申領回饋。使用者要先看懂整段流程，才能決定要不要參加、選哪種領取方式。' },
          ].map(d => (
            <div className="col-md-6" key={d.title}>
              <HighlightCard style={accentBorder} title={d.title}><p>{d.body}</p></HighlightCard>
            </div>
          ))}
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/event-register-terms.jpg" alt="活動注意事項彈窗：綁定期程、消費門檻、不適用項目與客服專線等法規揭露內容" />
      </ProjectImageBlock>
      <div className="project-section">
        <h2 className="project-section-title">設計決策</h2>
        <div className="row g-3">
          {[
            { title: '決策一：入口只放兩個欄位', body: '登入表單只有兩個欄位（身分證號＋手機門號），下面一段提醒填錯的後果，沒有其他選項。按下登入、完成身分確認後，才跳出規則說明。', insight: '長篇條款放到使用者填完資料之後才出現。我的判斷是：已經開始填了，比較願意讀下去。' },
            { title: '決策二：條款分成 8 條', body: '將活動規則依主題分成 8 條（綁定期間、不適用項目、消費計算、回饋領取等），每條開頭用粗體，使用者可以先掃粗體，找到跟自己有關的那條再細讀。', insight: '內容完整是為了法規，分類是為了讓人找得到，兩件事可以同時做到。' },
            { title: '決策三：強調錯誤成本，引導謹慎確認', body: '填錯不能補登是活動規則，我把這段提醒放在欄位下方、登入按鈕上方：「資料輸入錯誤者，視同放棄及未符合活動回饋資格」，讓使用者送出前就知道填錯的後果。送出前還有一個「確認登錄資料」視窗，提醒送出後不能修改。', insight: '規則寫明填錯不能補登，所以只能在送出前講清楚。' },
            { title: '決策四：把三種領取方式放進登錄流程', body: '三種領取方式（LINE Pay Money 儲值金、ATM 現金、公益捐款）是活動規則訂的。介面上讓使用者登錄時就選好，之後也能變更。', insight: '這是公司的取捨：少導一點流量到 LINE Pay Money，換更多人願意參加。' },
          ].map(d => (
            <div className="col-md-6" key={d.title}>
              <HighlightCard title={d.title}>
                <p>{d.body}</p>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}><strong>為什麼這樣做：</strong>{d.insight}</p>
              </HighlightCard>
            </div>
          ))}
        </div>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/event-register-mobile.jpg" alt="手機版畫面：卡片改為滿版單欄，兩個欄位與主按鈕維持相同的視覺層級" />
      </ProjectImageBlock>
      <div className="project-section">
        <h2 className="project-section-title">如果重做</h2>
        <p>我會改這幾個地方：</p>
        <ul>
          <li><strong>資格前置確認：</strong>在填表前先讓使用者回答「您是否已領取紙本券？」這類互斥問題，避免不符資格者進入流程後浪費時間，也減少後續退件處理</li>
          <li><strong>進度指示器：</strong>明確告知使用者「現在是三個步驟中的第一步」，讓人知道還剩幾步</li>
          <li><strong>Inline 欄位驗證：</strong>在使用者填寫身分證號時即時格式驗證，不用等到送出才報錯，減少因格式錯誤導致的重複操作</li>
        </ul>
        <a href="https://anita791122.github.io/event_register3/index.html" target="_blank" rel="noopener noreferrer" className="project-live-link">
          查看實作成果 ↗
          <img src={ip('/img/arrow.svg')} alt="" aria-hidden="true" className="project-live-link__icon" />
        </a>
      </div>
    </ProjectLayout>
  )
}
