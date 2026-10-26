import ProjectLayout, { GalleryImg, ProjectImageBlock } from '../../components/ProjectLayout'

const meta = [
  { label: '角色', value: '產品設計師（UI/UX）' },
  { label: '企業', value: '倫敦印象' },
  { label: '類型', value: '內部工具 / 設計系統 / AI 工作流' },
  { label: '使用者', value: '不懂語法的同事' },
]

const otherProjects = [
  { href: '/projects/ehis-redesign', title: 'eHIS 看診介面改版', desc: 'Web System｜UI/UX｜醫療資訊' },
  { href: '/projects/japanese', title: '日文道場', desc: 'Side Project｜PM × AI 開發' },
  { href: '/projects/vaccine', title: '新竹市疫苗預約系統', desc: 'Web｜UI/UX + 前端切版｜公共服務' },
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
      title="目標：讓不懂語法的同事也能自己做商品頁"
      description="一個人要顧全站的商品頁，卡住的是產能。我把商品頁拆成可重複使用的積木，配上線上手冊和一套同事可自行安裝的 AI 內容工具（HTML 與工具由 AI 實作），目標是讓沒有設計背景的人也能產出符合規格的頁面。工具裡的護欄規則由我訂定，降低 AI 產出不實宣稱的風險。"
      glowStyle={{ background: 'radial-gradient(circle,rgba(180,160,212,0.35) 0%,transparent 70%)' }}
      meta={meta}
      otherProjects={otherProjects}
    >
      <div className="project-section">
        <h2 className="project-section-title">背景：先查，才發現問題不在版面</h2>
        <p>倫敦印象是 SHOPLINE 平台上的手機配件電商。設計資源只有我一個人，而商品頁需要持續新增與更新。</p>
        <p>一開始我以為要解的是「頁面不夠好看」。實際打開後台與線上頁去查，發現問題更基本。</p>
        <p>以旗艦組合包為例，我和 AI 在 2026 年 8 月做了一次現況實查，同時比對 DOM 與原始 HTML：</p>
        <div className="row g-3 mt-1">
          <div className="col-md-4">
            <div style={card.problem}>
              <div style={eyebrow('#f87171')}>Problem 01</div>
              <h4 style={cardTitle}>整段描述沒有文字</h4>
              <p style={cardBody}>商品描述全是把文字烤進去的圖片，沒有任何文字節點，alt 也全是空的。</p>
            </div>
          </div>
          <div className="col-md-4">
            <div style={card.problem}>
              <div style={eyebrow('#f87171')}>Problem 02</div>
              <h4 style={cardTitle}>頁面長到沒人看得完</h4>
              <p style={cardBody}>手機版的描述區要往下滑非常多個螢幕才看得完。</p>
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
        <p className="mt-4">也就是說，這一頁對搜尋引擎與 AI 來說幾乎不存在。同時 Clarity 熱圖顯示：加價購多數發生在商品頁，但客人平均只看到頁面上方一小段，加價購最多的商品也很少人滑到底。</p>
        <p>兩件事合起來的結論是：把心力放在「頁面下半部做得更精緻」是錯的方向。問題其實有兩個：內容產不出來，產出來也讀不到。</p>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">使用者是同事，不是消費者</h2>
        <p>這個專案的使用者是公司裡不懂語法的同事。他們要能自己上架，我不可能是每一頁的瓶頸。</p>
        <p>這改變了設計目標：要做的是一套「別人照著做也不會做壞」的系統。</p>
        <div style={callout}>
          <div style={eyebrow('var(--accent)')}>平台限制</div>
          <p style={cardBody}>SHOPLINE 的商品描述欄會過濾掉 style、script、details、svg 標籤與 data: URI，也不支援 gap 與 aspect-ratio；描述容器實測比視窗還窄。所有版型都必須在這個範圍內成立。</p>
        </div>
      </div>

      <div className="project-section">
        <h2 className="project-section-title">做了什麼</h2>
        <p>積木的設計和版型是我做的；HTML、手冊網頁和工具的程式由 AI 實作，我訂規格、驗收。</p>
        <div className="row g-3 mt-1">
          <div className="col-md-4">
            <div style={card.neutral}>
              <h4 style={cardTitle}>可重複使用的積木</h4>
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

      <ProjectImageBlock>
        <GalleryImg src="/img/londonimg-guide-blocks.jpg" alt="線上使用手冊的積木總覽頁：左側是各積木的子選單，右側逐一列出每塊積木的呈現樣式與「看填空語法」入口" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">幾個取捨</h2>

        <Tradeoff n="01" title="不重做版型">
          <p style={cardBody}>最容易走的路是「這頁很糟，重做一版」。但我比對過自己先前做的 v3 版型後判斷：這套積木本身就是可用的模板，缺的不是新設計，是組合商品專屬的那幾件事。所以我沒有重做，只補缺口。</p>
        </Tradeoff>

        <Tradeoff n="02" title="版本比較不做 HTML 表格">
          <p style={cardBody}>原本想用表格呈現「一般款 vs 進階款」。和老闆討論後改成單張對比合成圖，加上「選哪款」兩張卡片。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>原因有兩層：平台限制讓表格很難做得穩，而表格在手機的窄螢幕上本來就不好讀。改用圖卡之後，美編可以把差異畫進圖裡，同事也不用碰語法。</p>
        </Tradeoff>

        <Tradeoff n="03" title="決定不做 FAQ schema">
          <p style={cardBody}>原本規劃要為 QA 區塊補上 FAQPage 結構化資料。實際去查線上頁之後發現三件事：SHOPLINE 主題已經自動輸出 Product、Offer、Breadcrumb 三種結構化資料；FAQ 沒有乾淨的掛載點；而 Google 對 FAQ 複合式搜尋結果多半已經停用。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>所以我把它拿掉了，工具只產可見的 QA 文字，不產 JSON-LD，並在手冊裡直接寫「這塊同事不用碰」。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>做一件看起來很專業、但沒有效益的事，除了白做，每個同事之後還要多維護一段用不到的語法。</p>
        </Tradeoff>

        <Tradeoff n="04" title="最值錢的那句話不放在商品描述">
          <p style={cardBody}>Clarity 熱圖顯示加價購發生在商品頁，但客人平均沒往下滑多少。所以組合商品「為什麼是這三件」這句最重要的話，我放在購買區上方的商品摘要欄，不放在要往下捲才看得到的商品描述欄。</p>
        </Tradeoff>

        <Tradeoff n="05" title="護欄寫進工具裡">
          <p style={cardBody}>代理品牌的電商賣的是別人的東西，一句寫過頭的宣稱就可能變成不實廣告。讓非專業使用者用 AI 產文案，這個風險會被放大。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>所以我訂了規則，由 AI 寫進工具本身：身分只能寫「授權經銷商」，不能宣稱代言、官方或獨家；認證數字必須有官方出處且屬實才能引用；不照抄、改寫、翻譯或仿寫競品文案。公司原本就規定情境圖禁止 AI 生成、只能 AI 修圖，這條也一起寫進工具，因為賣的是實體商品，假圖會誤導。</p>
          <p style={{ ...cardBody, marginTop: '0.75rem' }}>寫在文件裡的規則只有讀過的人會遵守；寫進工具裡的規則，每次產出時都會帶進去。</p>
        </Tradeoff>
      </div>

      <ProjectImageBlock>
        <GalleryImg src="/img/londonimg-guide-block.jpg" alt="單一積木的說明頁：白話註解、兩種版型的差異、實際預覽，以及可一鍵複製的填空語法" />
      </ProjectImageBlock>

      <div className="project-section">
        <h2 className="project-section-title">學到的事</h2>
        <div style={tradeoffWrap}>
          <p style={cardBody}>先問「這個東西<strong>存在</strong>嗎」，再問「這個東西好不好」。我花了不少時間在版面細節上，後來才發現整頁對搜尋引擎與 AI 是空的。可讀性應該排在美感前面。</p>
        </div>
        <div style={tradeoffWrap}>
          <p style={cardBody}>誠實說明<strong>效益的邊界</strong>。這一輪的成果不是轉換率提升，我也沒有這樣報。它是產能與可檢索性：十月交出初版的商品上架工具（由 AI 實作），同事已經直接在用；部分商品描述也開始有文字能被讀到。老闆要的是可以驗證的東西。</p>
        </div>
        <div style={tradeoffWrap}>
          <p style={cardBody}>我和 AI 的<strong>量測也會錯</strong>。初次測量描述區高度時低估了，因為 lazy load 的佔位圖是正方形，真實原圖是直式，換算後才正確。發現後直接在文件裡更正，沒有默默改掉。</p>
        </div>
      </div>
    </ProjectLayout>
  )
}
