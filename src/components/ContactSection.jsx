import { useRef } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

export default function ContactSection() {
  const sectionRef = useRef(null)
  useFadeUp(sectionRef)

  return (
    <section className="section-padding bg-surface text-center position-relative overflow-hidden" id="contact" ref={sectionRef}>
      <div className="contact-glow" data-parallax-speed="0.2"></div>
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <div className="fade-up" style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h2 className="contact-title mb-3">Let's <span className="accent">Connect</span></h2>
          <p className="contact-desc mb-4">歡迎隨時與我聯繫，無論是合作想法或單純交流都很樂意。</p>
          <div className="d-flex flex-column align-items-center gap-3">
            <a href="mailto:anita791122@gmail.com" className="btn-primary-custom">Send an Email</a>
            <a href="https://www.linkedin.com/in/anita-yun-99b830115/" target="_blank" rel="noopener" className="btn-secondary-custom">
              Connect with LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
