/* ========================================
   Anita Portfolio — Main JavaScript
   Parallax + Scroll Animations + Interactions
   ======================================== */

(function () {
  'use strict';

  /* ---------- Navigation scroll effect ---------- */
  const nav = document.getElementById('mainNav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
  }

  /* ---------- Parallax Engine ---------- */
  const parallaxElements = document.querySelectorAll('[data-parallax-speed]');
  let ticking = false;

  function updateParallax() {
    const scrollY = window.scrollY;
    const viewH = window.innerHeight;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallaxSpeed) || 0;
      const rect = el.getBoundingClientRect();
      // Only animate if element is near viewport
      if (rect.bottom < -200 || rect.top > viewH + 200) return;
      const offset = scrollY * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });

    ticking = false;
  }

  if (parallaxElements.length > 0) {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    }, { passive: true });
    // Initial call
    updateParallax();
  }

  /* ---------- Horizontal Scroll Parallax (Services) ---------- */
  const svcTrack = document.getElementById('svcTrack');
  const svcSection = svcTrack ? svcTrack.closest('.svc-section') : null;

  if (svcTrack && svcSection && window.matchMedia('(min-width: 768px)').matches) {
    function updateSvcScroll() {
      const rect = svcSection.getBoundingClientRect();
      const sectionH = svcSection.offsetHeight;
      const viewH = window.innerHeight;

      // Progress: 0 when section top hits viewport top, 1 when section bottom leaves
      const scrollable = sectionH - viewH;
      if (scrollable <= 0) return;

      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));

      // How far the track needs to move: total track width minus viewport width
      const trackW = svcTrack.scrollWidth;
      const viewW = window.innerWidth;
      const maxShift = trackW - viewW + 60; // 60px extra padding

      const translateX = -progress * maxShift;
      svcTrack.style.transform = `translate3d(${translateX}px, 0, 0)`;
    }

    window.addEventListener('scroll', () => {
      requestAnimationFrame(updateSvcScroll);
    }, { passive: true });
    updateSvcScroll();
  }

  /* ---------- Stat Counter Animation ---------- */
  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    counters.forEach(counter => {
      if (counter.dataset.animated) return;
      const target = parseInt(counter.dataset.count, 10);
      const duration = 1600;
      const start = performance.now();

      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.textContent = Math.round(target * eased);
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          counter.textContent = target;
        }
      }

      counter.dataset.animated = 'true';
      requestAnimationFrame(tick);
    });
  }

  /* ---------- Scroll-triggered fade-in animation ---------- */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);

        // Trigger counter animation if hero-stats become visible
        if (entry.target.querySelector('[data-count]') || entry.target.hasAttribute('data-count')) {
          animateCounters();
        }
      }
    });
  }, {
    threshold: 0.01,
    rootMargin: '0px 0px 0px 0px'
  });

  /* ---------- DOMContentLoaded ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    // Observe fade-up elements
    const fadeEls = document.querySelectorAll('.fade-up');
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
        // Check for counters
        if (el.querySelector('[data-count]')) {
          setTimeout(animateCounters, 400);
        }
      } else {
        observer.observe(el);
      }
    });

    // Observe project detail sections
    const detailEls = document.querySelectorAll('.project-section, .project-image-block, .other-projects');
    detailEls.forEach((el, i) => {
      el.classList.add('fade-up');
      el.style.transitionDelay = `${i * 0.06}s`;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      } else {
        observer.observe(el);
      }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    /* ---------- Card Tilt Effect (desktop only) ---------- */
    if (window.matchMedia('(hover: hover) and (min-width: 768px)').matches) {
      const tiltCards = document.querySelectorAll('[data-tilt]');
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(800px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg) translateY(-6px)`;
        });
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    /* ---------- Active nav link highlight ---------- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-portfolio .nav-link');

    if (sections.length && navLinks.length) {
      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      }, { threshold: 0.3 });

      sections.forEach(section => navObserver.observe(section));
    }

    /* ---------- Mobile nav close on link click ---------- */
    const navCollapse = document.getElementById('navContent');
    if (navCollapse) {
      document.querySelectorAll('#navContent .nav-link').forEach(link => {
        link.addEventListener('click', () => {
          const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
          if (bsCollapse) bsCollapse.hide();
        });
      });
    }

    /* ---------- Lightbox for project images ---------- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');

    if (lightbox && lightboxImg) {
      // Wrap gallery-img with zoom-hint wrapper on touch devices
      const isTouch = window.matchMedia('(hover: none)').matches;
      if (isTouch) {
        document.querySelectorAll('.gallery-img').forEach(img => {
          if (img.parentElement.classList.contains('gallery-img-wrap')) return;
          const wrap = document.createElement('div');
          wrap.className = 'gallery-img-wrap';
          img.parentNode.insertBefore(wrap, img);
          wrap.appendChild(img);
        });
      }

      // Click on any project card image or gallery image to open lightbox
      document.querySelectorAll('.project-card-img, .gallery-img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          lightboxImg.src = img.src;
          lightboxImg.alt = img.alt;
          lightbox.classList.add('active');
          lightbox.setAttribute('aria-hidden', 'false');
          document.body.style.overflow = 'hidden';
        });
      });

      // Close lightbox
      function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      lightbox.addEventListener('click', closeLightbox);
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
          closeLightbox();
        }
      });
    }

    /* ---------- Back to Top Button ---------- */
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
      window.addEventListener('scroll', () => {
        backToTop.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });

      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  });
})();
