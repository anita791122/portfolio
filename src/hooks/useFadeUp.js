import { useEffect } from 'react'

export function useFadeUp(ref) {
  useEffect(() => {
    if (!ref.current) return
    const els = ref.current.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.01 })

    els.forEach(el => {
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        el.classList.add('visible')
      } else {
        observer.observe(el)
      }
    })

    return () => observer.disconnect()
  }, [ref])
}
