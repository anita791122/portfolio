import { useRef } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const workExperience = [
  {
    company: '艾靈透生技有限公司',
    role: '網頁設計師',
    date: '2026.01 — 現在',
    details: '調整、設計公司產品與客戶端使用介面以使其在使用上更流暢；與行銷及工程師溝通、協作並提供適合 RWD 的切版；參與新產品專案與現有產品 UI/UX Redesign。\n期間參與專案：艾靈透生技新網站企劃、原購物網站設計；元氣加油站知識型網站 UI/UX Redesign',
  },
  {
    company: 'Freelancer',
    role: '設計師',
    date: '2024.06 — 2025.12',
    details: '獨立接案，負責平面視覺、網站設計、切版開發。\n期間參與：新竹市政府疫苗預約網站',
  },
  {
    company: '資拓宏宇國際',
    role: 'UI/UX 設計師',
    date: '2022.07 — 2024.05',
    details: '參與專案：eHIS醫療系統、虛擬診所應用、成人預防保健暨慢性疾病防治資訊系統、智慧檢疫多功能系統',
  },
  {
    company: '一卡通票證',
    role: '專案管理師（設計）',
    date: '2019.10 — 2021.08',
    details: 'LINE Pay 生活繳費UI規劃、廣告宣傳品設計、官網UI優化、活動網頁設計切版、造型票卡設計',
  },
  {
    company: '先進醫資',
    role: 'UI 設計師',
    date: '2015.01 — 2019.05',
    details: '新產品APP/WEB/設備UIUX設計、公司官網製作維護(Bootstrap)、展場規劃佈置設計',
  },
  {
    company: 'Caffebene',
    role: '網頁設計師',
    date: '2014.03 — 2014.09',
    details: '品牌官網維護與新官網設計建置（WordPress）',
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
                <div className="exp-details">{exp.details}</div>
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
