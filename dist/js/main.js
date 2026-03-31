/* ============================================
   Analog Grand Prix - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
  initScrollReveal();
  initNavigation();
  initMobileMenu();
  initLightbox();
});

/* --- Scroll Reveal (IntersectionObserver) --- */
function initScrollReveal() {
  var elements = document.querySelectorAll('[data-reveal]');
  if (!elements.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var delay = parseInt(entry.target.getAttribute('data-reveal-delay') || '0', 10);
        setTimeout(function () {
          entry.target.classList.add('revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '-80px 0px', threshold: 0.1 });

  elements.forEach(function (el) { observer.observe(el); });
}

/* --- Navigation: scroll state + active section --- */
function initNavigation() {
  var nav = document.querySelector('.nav');
  if (!nav) return;

  // Scroll background
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Active section tracking
  var sections = document.querySelectorAll('section[id]');
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (!sections.length || !navLinks.length) return;

  var sectionObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navLinks.forEach(function (link) { link.classList.remove('active'); });
        var active = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -60% 0px' });

  sections.forEach(function (s) { sectionObserver.observe(s); });

  // Smooth scroll for nav links
  navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var target = document.querySelector(this.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });
}

/* --- Mobile Menu --- */
function initMobileMenu() {
  var hamburger = document.querySelector('.hamburger');
  var mobileMenu = document.querySelector('.mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  mobileMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

/* --- GLightbox Init --- */
function initLightbox() {
  if (typeof GLightbox === 'undefined') return;
  GLightbox({
    touchNavigation: true,
    loop: false,
    closeOnOutsideClick: true,
    openEffect: 'fade',
    closeEffect: 'fade'
  });
}
