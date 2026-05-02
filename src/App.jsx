import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Vaccine from './pages/projects/Vaccine'
import NhiCard from './pages/projects/NhiCard'
import LinepayBill from './pages/projects/LinepayBill'
import LinepayCity from './pages/projects/LinepayCity'
import HealthPlatform from './pages/projects/HealthPlatform'
import EhisRedesign from './pages/projects/EhisRedesign'
import HealthStation from './pages/projects/HealthStation'
import EventRegister from './pages/projects/EventRegister'
import TicketDesign from './pages/projects/TicketDesign'
import VisualDesign from './pages/projects/VisualDesign'
import Japanese from './pages/projects/Japanese'

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/vaccine" element={<Vaccine />} />
        <Route path="/projects/nhi-card" element={<NhiCard />} />
        <Route path="/projects/linepay-bill" element={<LinepayBill />} />
        <Route path="/projects/linepay-citizen" element={<LinepayCity />} />
        <Route path="/projects/health-platform" element={<HealthPlatform />} />
        <Route path="/projects/ehis-redesign" element={<EhisRedesign />} />
        <Route path="/projects/health-station" element={<HealthStation />} />
        <Route path="/projects/event-register" element={<EventRegister />} />
        <Route path="/projects/ticket-design" element={<TicketDesign />} />
        <Route path="/projects/visual-design" element={<VisualDesign />} />
        <Route path="/projects/japanese" element={<Japanese />} />
      </Routes>
    </>
  )
}
