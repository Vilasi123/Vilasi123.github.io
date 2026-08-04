/* =========================================================
   WEDDINGS BY M&M — script.js
   Handles: sticky header shrink state, mobile nav toggle,
   scroll-triggered fade-in animations, active nav link sync,
   "Magic We Offer" dropdown (desktop + mobile/tablet), video
   lightbox, and current year in footer.
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Sticky header shadow on scroll ---------- */
  const header = document.getElementById('siteHeader');

  if (header) {
    const handleHeaderScroll = () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleHeaderScroll, { passive: true });
    handleHeaderScroll(); // run once on load
  }

  /* ---------- 2. Mobile navigation toggle ---------- */
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      menuToggle.classList.toggle('is-active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile nav automatically when a link is tapped
    // (but NOT when the "Magic We Offer" trigger itself is tapped —
    // that should open the submenu instead of closing the whole drawer)
    mobileNav.querySelectorAll('a').forEach((link) => {
      if (link.id && link.id.startsWith('magicOfferTrigger')) return;
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close mobile nav when tapping/clicking outside it
    document.addEventListener('click', (e) => {
      const clickedInsideNav = mobileNav.contains(e.target);
      const clickedToggle = menuToggle.contains(e.target);
      if (!clickedInsideNav && !clickedToggle && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuToggle.classList.remove('is-active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- 3. Scroll-triggered fade-in reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.fade-in, .fade-in-up, .fade-in-left, .fade-in-right'
  );

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    revealTargets.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for very old browsers: just show everything
    revealTargets.forEach((el) => el.classList.add('is-visible'));
  }

  /* ---------- 4. "Magic We Offer" dropdown — desktop + mobile/tablet
     Loops over every .nav-item-dropdown on the page, so it works
     for however many trigger/menu pairs exist (e.g. one in the
     desktop nav with id="magicOfferTrigger", another in the
     mobile drawer with id="magicOfferTriggerMobile"). ---------- */
  document.querySelectorAll('.nav-item-dropdown').forEach((dropdown) => {
    const trigger = dropdown.querySelector('[id^="magicOfferTrigger"]');
    const menu = dropdown.querySelector('.mega-menu');
    if (!trigger || !menu) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault(); // don't navigate on "#about" or similar
      const isOpen = menu.classList.contains('active');

      // Close any other open dropdown first (only one open at a time)
      document.querySelectorAll('.mega-menu.active').forEach((m) => {
        if (m !== menu) m.classList.remove('active');
      });
      document.querySelectorAll('[id^="magicOfferTrigger"].active').forEach((t) => {
        if (t !== trigger) t.classList.remove('active');
      });

      menu.classList.toggle('active', !isOpen);
      trigger.classList.toggle('active', !isOpen);
    });
  });

  // Close any open dropdown when clicking outside it
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-item-dropdown')) {
      document.querySelectorAll('.mega-menu.active').forEach((m) => m.classList.remove('active'));
      document.querySelectorAll('[id^="magicOfferTrigger"].active').forEach((t) => t.classList.remove('active'));
    }
  });

  /* ---------- 5. Footer current year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});

/* ---------- 6. Video lightbox for story cards ---------- */
const lightbox = document.getElementById('videoLightbox');
const lightboxVideo = document.getElementById('lightboxVideo');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.story-card').forEach(function(card, index) {
  const cardVideo = card.querySelector('video');
  const btn = card.querySelector('.play-btn');

  if (!btn || !cardVideo) {
    console.warn('Missing button or video in story-card #' + index, card);
    return; // is card ला skip kara, baकीचे chalू dеto
  }

  btn.addEventListener('click', function() {
    lightboxVideo.src = cardVideo.getAttribute('src');
    lightbox.classList.add('active');
    lightboxVideo.play();
  });
});

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxVideo.pause();
  lightboxVideo.src = '';
}

if (lightboxClose) {
  lightboxClose.addEventListener('click', closeLightbox);
}

if (lightbox) {
  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});