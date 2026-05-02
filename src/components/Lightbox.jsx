import { useEffect, useRef, useState, useCallback } from 'react'

let lightboxSetImage = null

export function openLightbox(src, alt) {
  if (lightboxSetImage) lightboxSetImage({ src, alt })
}

export default function Lightbox() {
  const [image, setImage] = useState(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    lightboxSetImage = setImage
    return () => { lightboxSetImage = null }
  }, [])

  const close = useCallback(() => {
    setImage(null)
    document.body.style.overflow = ''
  }, [])

  useEffect(() => {
    if (image) {
      document.body.style.overflow = 'hidden'
    }
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [image, close])

  if (!image) return null

  return (
    <div
      className="lightbox-overlay active"
      id="lightbox"
      role="dialog"
      aria-hidden="false"
      onClick={close}
      ref={overlayRef}
    >
      <button className="lightbox-close" aria-label="Close" onClick={close}>&times;</button>
      <img
        className="lightbox-img"
        src={image.src}
        alt={image.alt}
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}
