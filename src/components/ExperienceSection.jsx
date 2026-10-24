import { useRef } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const workExperience = [
  {
    company: '倫敦印象企業社',
    role: 'UI/UX、網頁設計師',
    date: '2026.05 — 現在',
    points: [
      '設計商品頁的模組化積木與版型，帶 AI 實作 HTML 與線上使用手冊，目標是讓沒有設計背景的同事也能自己組出符合規格的頁面',
      '訂定 AI 內容產出工具的護欄規則（品牌用語、代理品牌合規），工具由 AI 實作、同事可自行安裝，輸入商品資訊即產出商品文案與後台 SEO 欄位',
      '和 AI 一起用 GA4 數據找出問題，與主管討論改版優先序，把關鍵資訊移到不需捲動的位置',
      '與 AI 分工，把部分以圖片烤字為主的商品描述改為可讀文字與圖片說明並上線，讓原本搜尋引擎與 AI 讀不到的內容變成可被檢索',
      '和老闆定好先出基本版，十月交出商品上架工具初版（由 AI 實作），讓美編給圖文就能產生商品頁語法；同事已直接在用',
      '一個案子用多個 AI 對話分工，每項工作一個，訂定協作規則並檢查產出，例如結論要標明查證過或推測',
    ],
  },
  {
    company: '艾靈透生技有限公司',
    role: 'UI/UX、網頁設計師',
    date: '2026.01 — 2026.04',
    points: [
      '艾靈透生技新網站企劃與原購物網站設計，從資訊架構一路做到介面與 RWD 切版',
      '「元氣加油站」知識型網站 UI/UX Redesign，重整內容層級與瀏覽動線',
      '與行銷、工程師協作，把行銷需求轉成可實作的設計規格',
      '（因公司組織縮編，設計部門裁撤，本職位於專案推進中結束。）',
    ],
  },
  {
    company: 'Freelancer',
    role: '設計師',
    date: '2024.06 — 2025.12',
    points: [
      '獨立接案，涵蓋網站設計、切版開發與平面視覺',
      '新竹市政府疫苗預約網站：從 UX 流程規劃到前端實作一手完成，重整公共衛生的資訊架構，讓市民能快速完成預約、查詢進度與尋找接種站',
    ],
  },
  {
    company: '資拓宏宇國際',
    role: 'UI/UX 設計師',
    date: '2022.07 — 2024.05',
    points: [
      'eHIS 醫療系統看診介面重構：精煉患者資訊欄位、把七個同權重按鈕分出主次、將 S（主觀資料）、O（客觀資料）兩區由縱向改為左右並排，讓醫師在單一視窗看完看診所需資訊',
      '虛擬健保卡就醫應用：設計掛號、看診進度、預約資訊與處方紀錄的 APP／WEB 介面',
      '成人預防保健暨慢性疾病防治資訊系統、智慧檢疫多功能系統的介面與資訊層級設計',
    ],
  },
  {
    company: '一卡通票證',
    role: '專案管理師（設計）',
    date: '2019.10 — 2021.08',
    points: [
      'LINE Pay 生活繳費 UI 規劃：在既有 LINE App 的設計框架限制下，重整電費、停車費、健保費等多種繳費場景的資訊層級與功能入口',
      '2020 年振興券登錄網站、五月天演唱會周邊販售網站等活動網頁設計與切版',
      '「咒術迴戰」造型一卡通實體票卡與包裝設計',
    ],
  },
  {
    company: '先進醫資',
    role: 'UI 設計師',
    date: '2015.01 — 2019.05',
    points: [
      '公司新產品 APP、WEB 與硬體設備的 UI/UX 設計',
      '享健康智慧照護站：設計社區量測機台的 Device UI 與機台外觀標示，串起從量測到志工服務的照護流程',
      '臨床洗腎系統 UI 設計；以 Bootstrap 製作並維護公司官網',
    ],
  },
  {
    company: 'Caffebene',
    role: '網頁設計師',
    date: '2014.03 — 2014.09',
    points: [
      '以 WordPress 維護品牌官網並建置新官網',
    ],
  },
]

const education = [
  { school: '崑山科技大學', degree: '資訊傳播系 / 學士', year: '2010 — 2012' },
  { school: '國立高雄海洋技術學院', degree: '水產食品工業科 / 五專', year: '1995 — 2001' },
]

export default function ExperienceSection() {
  const sectionRef = useRef(null)
  useFadeUp(sectionRef)

  return (
    <section className="section-padding exp-gradient-section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-7 fade-up">
            <h3 className="exp-title">Work Experience</h3>
            {workExperience.map((exp) => (
              <div className="exp-item" key={exp.company + exp.date}>
                <div className="d-flex justify-content-between align-items-start flex-wrap gap-1">
                  <div>
                    <div className="exp-company">{exp.company}</div>
                    <div className="exp-role">{exp.role}</div>
                  </div>
                  <div className="exp-date">{exp.date}</div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-lg-5 fade-up">
            <h3 className="exp-title">學歷</h3>
            {education.map((edu) => (
              <div className="edu-card mt-3" key={edu.school}>
                <div className="edu-card-icon">🎓</div>
                <div>
                  <div className="exp-company">{edu.school}</div>
                  <div className="exp-role">{edu.degree}</div>
                  <div className="exp-date mt-1">{edu.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
