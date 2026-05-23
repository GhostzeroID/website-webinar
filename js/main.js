/**
 * Rasa Nusantara — Main JavaScript
 * Vanilla JS, IIFE, strict mode
 */
(function () {
  'use strict';

  /* --- DOM References --- */
  var navbar = document.querySelector('.navbar');
  var navbarToggle = document.getElementById('navbar-toggle');
  var navbarNav = document.getElementById('navbar-nav');
  var navLinks = document.querySelectorAll('.navbar__link');
  var anchorLinks = document.querySelectorAll('a[href^="#"]');
  var fadeElements = document.querySelectorAll('.fade-up');
  var sections = document.querySelectorAll('section[id]');

  var testimoniSlider = document.getElementById('testimoni-slider');
  var testimoniTrack = document.getElementById('testimoni-track');
  var testimoniPrev = document.getElementById('testimoni-prev');
  var testimoniNext = document.getElementById('testimoni-next');
  var testimoniDots = document.getElementById('testimoni-dots');

  var currentSlide = 0;
  var slideCount = 0;
  var autoPlayTimer = null;
  var AUTO_PLAY_INTERVAL = 5000;

  /* --- Navbar Scroll --- */
  function handleNavbarScroll() {
    if (!navbar) return;
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  /* --- Mobile Menu --- */
  function openMobileMenu() {
    if (!navbarNav || !navbarToggle) return;
    navbarNav.classList.add('open');
    navbarToggle.classList.add('open');
    navbarToggle.setAttribute('aria-expanded', 'true');
    navbarToggle.setAttribute('aria-label', 'Tutup menu navigasi');
    document.body.classList.add('menu-open');
  }

  function closeMobileMenu() {
    if (!navbarNav || !navbarToggle) return;
    navbarNav.classList.remove('open');
    navbarToggle.classList.remove('open');
    navbarToggle.setAttribute('aria-expanded', 'false');
    navbarToggle.setAttribute('aria-label', 'Buka menu navigasi');
    document.body.classList.remove('menu-open');
  }

  function toggleMobileMenu() {
    if (navbarNav.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function handleOutsideClick(e) {
    if (
      navbarNav &&
      navbarNav.classList.contains('open') &&
      !navbarNav.contains(e.target) &&
      !navbarToggle.contains(e.target)
    ) {
      closeMobileMenu();
    }
  }

  function handleEscapeKey(e) {
    if (e.key === 'Escape') {
      closeMobileMenu();
    }
  }

  /* --- Smooth Scroll --- */
  function getNavbarOffset() {
    return navbar ? navbar.offsetHeight : 72;
  }

  function smoothScrollTo(targetId) {
    var target = document.getElementById(targetId);
    if (!target) return;

    var offset = getNavbarOffset();
    var top = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }

  function handleAnchorClick(e) {
    var href = this.getAttribute('href');
    if (!href || href === '#') return;

    var id = href.slice(1);
    var target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    smoothScrollTo(id);
    closeMobileMenu();
  }

  /* --- Active Nav Link --- */
  function setActiveNavLink() {
    var scrollPos = window.scrollY + getNavbarOffset() + 100;
    var currentId = 'home';

    sections.forEach(function (section) {
      if (section.offsetTop <= scrollPos) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '#' + currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  /* --- Intersection Observer (fade-up) --- */
  function initFadeUpObserver() {
    if (!fadeElements.length) return;

    if (!('IntersectionObserver' in window)) {
      fadeElements.forEach(function (el) {
        el.classList.add('visible');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --- Testimoni Slider --- */
  function initTestimoniSlider() {
    if (!testimoniTrack || !testimoniSlider) return;

    var slides = testimoniTrack.querySelectorAll('.testimoni-card');
    slideCount = slides.length;
    if (slideCount === 0) return;

    buildDots();
    goToSlide(0);
    startAutoPlay();

    if (testimoniPrev) {
      testimoniPrev.addEventListener('click', function () {
        goToSlide(currentSlide - 1);
        resetAutoPlay();
      });
    }

    if (testimoniNext) {
      testimoniNext.addEventListener('click', function () {
        goToSlide(currentSlide + 1);
        resetAutoPlay();
      });
    }

    testimoniSlider.addEventListener('mouseenter', stopAutoPlay);
    testimoniSlider.addEventListener('mouseleave', startAutoPlay);

    window.addEventListener('resize', function () {
      goToSlide(currentSlide);
    });
  }

  function buildDots() {
    if (!testimoniDots) return;
    testimoniDots.innerHTML = '';

    for (var i = 0; i < slideCount; i++) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'testimoni-slider__dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Tampilkan testimoni ' + (i + 1));
      dot.setAttribute('role', 'tab');
      dot.dataset.index = i;

      (function (index) {
        dot.addEventListener('click', function () {
          goToSlide(index);
          resetAutoPlay();
        });
      })(i);

      testimoniDots.appendChild(dot);
    }
  }

  function goToSlide(index) {
    if (slideCount === 0) return;

    if (index < 0) {
      currentSlide = slideCount - 1;
    } else if (index >= slideCount) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    testimoniTrack.style.transform = 'translateX(-' + currentSlide * 100 + '%)';

    var dots = testimoniDots ? testimoniDots.querySelectorAll('.testimoni-slider__dot') : [];
    dots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === currentSlide);
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(function () {
      goToSlide(currentSlide + 1);
    }, AUTO_PLAY_INTERVAL);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  /* --- Init --- */
  function init() {
    handleNavbarScroll();
    initFadeUpObserver();
    initTestimoniSlider();

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    window.addEventListener('scroll', setActiveNavLink, { passive: true });

    if (navbarToggle) {
      navbarToggle.addEventListener('click', toggleMobileMenu);
    }

    navLinks.forEach(function (link) {
      link.addEventListener('click', closeMobileMenu);
    });

    anchorLinks.forEach(function (link) {
      link.addEventListener('click', handleAnchorClick);
    });

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    setActiveNavLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
