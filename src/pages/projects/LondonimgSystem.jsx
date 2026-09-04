import ProjectLayout from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: '產品設計師' },
  { label: '企業', value: '倫敦印象' },
  { label: '類型', value: '內部工具 / 設計系統 / AI 工作流' },
  { label: '使用者', value: '不懂語法的同事' },
]

const otherProjects = [
  { href: '/projects/ehis-redesign', title: 'eHIS 醫療系統優化', desc: 'Web System — UI/UX — 醫療資訊' },
  { href: '/projects/japanese', title: '日文道場', desc: 'Side Project — PM × 前端' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web — UI/UX + 前端 — 公共服務' },
]

const card = {
  problem: { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid #f87171', borderRadius: '12px', padding: '1.25rem 1.5rem', height: '100%' },
  strategy: { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: '3px solid var(--accent)', borderRadius: '12px', padding: '1.25rem 1.5rem', height: '100%' },
  neutral: { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1.25rem 1.5rem', height: '100%' },
}
const callout = { background: 'var(--accent-subtle)', border: '1px solid rgba(180,160,212,0.2)', borderRadius: '12px', padding: '1.25rem 1.5rem', margin: '1.5rem 0' }
const eyebrow = (color) => ({ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color, marginBottom: '0.5rem' })
const cardTitle = { fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }
const cardBody = { fontSize: 'var(--fs-small)', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }
const tradeoffWrap = { background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px', padding: '1.5rem 1.75rem', marginBottom: '1.25rem' }

function Tradeoff({ n, title, children }) {
  return (
    <div style={tradeoffWrap}>
      <div style={eyebrow('var(--accent)')}>Trade-off {n}</div>
      <h4 style={cardTitle}>{title}</h4>
      {children}
    </div>
  )
}

export default function LondonimgSystem() {
  return (
    <ProjectLayout
      title="讓不懂語法的同事自己做出商品頁"
      description="一個人要顧 350 個商品頁，真正的瓶頸是產能。我把商品頁拆成 13 種可複用積木，配一本線上手冊和一套同事可自行安裝的 AI 內容工具，讓沒有設計背景的人也能產出符合規格的頁面，並在工具裡內建護欄，避免 AI 產出不實宣稱。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(180,160,212,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景：先查，才發現問題不在版面</h2>
        <p>倫敦印象是 SHOPLINE 平台上的手機配件電商，站上約 350 個商品。設計資源只有我一個人，而商品頁需要持續新增與更新。</p>
        <p>一開始我以為要解的是「頁面不夠好看」。實際打開後台與線上頁去查，發現問題更基本。</p>
        <p>以旗艦組合包為例，我在 2026 年 8 月做了一次現況實查，同時比對 DOM 與原始 HTML：</p>
        <div className="row g-3 mt-1">
          <div className="col-md-4">
            <div style={card.problem}>
              <div style={eyebrow('#f87171')}>Problem 01</div>
              <h4 style={cardTitle}>整段描述沒有文字</h4>
              <p style={cardBody}>商品描述是 30 張把文字烤進去的圖片，文字節點 0、alt 全空。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={card.problem}>
              <div style={eyebrow('#f87171')}>Problem 02</div>
              <h4 style={cardTitle}>頁面長到沒人看得完</h4>
              <p style={cardBody}>手機版描述區高度約 17,300px，整頁約 25 個螢幕。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={card.problem}>
              <div style={eyebrow('#f87171')}>Problem 03</div>
              <h4 style={cardTitle}>結構化資料是空的</h4>
              <p style={cardBody}>結構化資料的 description 與 brand 都是空字串。</p>
            </div>
          </div>
        </div>
        <p className="mt-4">也就是說，這一頁對搜尋引擎與 AI 來說幾乎不存在。同時 GA4 顯示：加購行為多數發生在商品頁，但平均滾動深度只有三成左右，加購冠軍商品滾到底的比例不到一成。</p>
        <p>兩件事合起來的結論是：把心力放在「頁面下半部做得更精緻」是錯的方向。真正的問題有兩個：內容產不出來，產出來也讀不到。</p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">真正的使用者是同事，不是消費者</h2>
        <p>這個專案真正的使用者是公司裡不懂語法的同事。他們要能自己上架，我不可能是每一頁的瓶頸。</p>
        <p>這改變了設計目標：要做的是一套「別人照著做也不會做壞」的系統。</p>
        <div style={callout}>
          <div style={eyebrow('var(--accent)')}>平台限制</div>
          <p style={cardBody}>SHOPLINE 的商品描述欄會過濾掉 style、script、details、svg 標籤與 data: URI，也不支援 gap 與 aspect-ratio；描述容器實測只有約 1,217px 寬，比視窗還窄。所有版型都必須在這個範圍內成立。</p>
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">做了什麼</h2>
        <div className="row g-3 mt-1">
          <div className="col-md-4">
            <div style={card.neutral}>
              <h4 style={cardTitle}>13 種可複用積木</h4>
              <p style={cardBody}>Hero（有／無品牌兩版）、重點 icon 列、影音、特色區、情境橫圖壓文（兩版）、棋盤格（兩版）、多圖橫移（三版）、版本比較、加價購、收尾 CTA、規格、QA、SNS。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={card.neutral}>
              <h4 style={cardTitle}>線上使用手冊</h4>
              <p style={cardBody}>左側積木子選單，每一塊都是白話註解、即時預覽，加上一鍵複製的填空語法，手機有漢堡選單。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={card.neutral}>
              <h4 style={cardTitle}>可安裝的 AI 內容工具</h4>
              <p style={cardBody}>同事下載安裝後，貼上商品的基本資料，就會依序產出商品名稱與摘要、商品描述、後台 SEO 四欄。</p>
            </div>
          </div>
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">幾個關鍵取捨</h2>

        <Tradeoff n="01" title="不重做版型">
          <p style={cardBody}>最容易走的路是「這頁很糟，重做一版」。但我比對過既有的 v3 版型後判斷：13 積木本身就是可用的模板，缺的不是新設計，是組合商品專屬的那幾件事。所以我沒有重做，只補缺口。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>抗拒重做的誘惑，把力氣放在最小改動能拿到的最大槓桿。</p>
        </Tradeoff>

        <Tradeoff n="02" title="版本比較不做 HTML 表格">
          <p style={cardBody}>原本想用表格呈現「一般款 vs 進階款」。實際評估後改成單張對比合成圖，加上「選哪款」兩張卡片。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>原因有兩層：平台限制讓表格很難做得穩，而站上約有九成八的流量來自手機，表格在窄螢幕上本來就不好讀。改用圖卡之後，美編可以把差異畫進圖裡，同事也不用碰語法。</p>
        </Tradeoff>

        <Tradeoff n="03" title="決定不做 FAQ schema">
          <p style={cardBody}>原本規劃要為 QA 區塊補上 FAQPage 結構化資料。實際去查線上頁之後發現三件事：SHOPLINE 主題已經自動輸出 Product、Offer、Breadcrumb 三種結構化資料；FAQ 沒有乾淨的掛載點；而 Google 對 FAQ 複合式搜尋結果多半已經停用。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>所以我把它拿掉了，工具只產可見的 QA 文字，不產 JSON-LD，並在手冊裡直接寫「這塊同事不用碰」。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>做一件看起來很專業、但實際上沒有效益的事，成本不只是白做，是讓每個同事之後都要多維護一段沒有用的東西。</p>
        </Tradeoff>

        <Tradeoff n="04" title="最值錢的那句話不放在商品描述">
          <p style={cardBody}>GA4 告訴我加購發生在商品頁、但滾動深度只有三成。所以組合商品「為什麼是這三件」這句最關鍵的話，我放在購買區上方的商品摘要欄，而不是往下捲才看得到的商品描述欄。</p>
        </Tradeoff>

        <Tradeoff n="05" title="把護欄寫進工具，而不是寫在文件裡">
          <p style={cardBody}>代理品牌的電商賣的是別人的東西，一句寫過頭的宣稱就可能變成不實廣告。讓非專業使用者用 AI 產文案，這個風險會被放大。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>所以我把規則寫進工具本身：身分只能寫「授權經銷商」，不能宣稱代言、官方或獨家；認證數字必須有官方出處且屬實才能引用；不照抄、改寫、翻譯或仿寫競品文案；情境圖禁止 AI 生成，只能 AI 修圖，因為賣的是實體商品，假圖會誤導。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>寫在文件裡的規則只有讀過的人會遵守；寫進工具裡的規則，每一次產出都會被套用。</p>
        </Tradeoff>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">順帶攔下的一個商業風險</h2>
        <p>做內容盤點時查到一個定價問題：組合包頁面標示的原價是三件商品「原價」相加得出的 1,870 元，但消費者自己點進三個單品頁看到的現價相加是 1,470 元。頁面暗示省了 871 元，實際查得到的只有 471 元。</p>
        <p>定價不在我的權責範圍，所以我把它標成需要決策的項目往上報，沒有自己改掉。</p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">學到的事</h2>
        <div style={tradeoffWrap}>
          <p style={cardBody}>先問「這個東西<strong>存在</strong>嗎」，再問「這個東西好不好」。我花了不少時間在版面細節上，後來才發現整頁對搜尋引擎與 AI 是空的。可讀性應該排在美感前面。</p>
        </div>
        <div style={tradeoffWrap}>
          <p style={cardBody}>誠實說明<strong>效益的邊界</strong>。這一輪的成果不是轉換率提升，我也沒有這樣報。它是產能與可檢索性：同事能自己做頁面了，頁面開始有內容能被讀到。老闆要的是可以驗證的東西，不是好聽的預測。</p>
        </div>
        <div style={tradeoffWrap}>
          <p style={cardBody}>我自己的<strong>量測也會錯</strong>。初次測量描述區高度時我低估了，因為 lazy load 的佔位圖是正方形，真實原圖是直式，換算後才是正確數字。發現後我在文件裡直接更正，沒有默默改掉。</p>
        </div>
      </div>
    </ProjectLayout>
  )
}
