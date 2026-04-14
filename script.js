/* ================================================================
   STRATEGY CHARLIE — script.js

   Features:
   1. Sticky header border on scroll
   2. Mobile menu toggle (hamburger → ✕)
   3. Smooth scroll with header-offset correction
   4. Fade-in animations via IntersectionObserver
   5. Contact form AJAX enhancement (Formspree)
   ================================================================ */

(function () {
  'use strict';

  /* ---------------------------------------------------------------
     1. Sticky header border
     --------------------------------------------------------------- */
  var header = document.getElementById('site-header');

  function onScroll() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 8);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load


  /* ---------------------------------------------------------------
     2. Mobile menu toggle
     --------------------------------------------------------------- */
  var toggle = document.getElementById('nav-toggle');
  var menu   = document.getElementById('nav-menu');

  function openMenu() {
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (toggle && menu) {

    toggle.addEventListener('click', function () {
      toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
    });

    // Close when a nav link is clicked
    menu.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('open')) {
        closeMenu();
        toggle.focus();
      }
    });
  }


  /* ---------------------------------------------------------------
     3. Smooth scroll with sticky-header offset correction
        CSS scroll-behavior:smooth handles anchor clicks in most
        cases, but doesn't account for the fixed header height.
        This intercepts anchor clicks and adjusts the target offset.
     --------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id     = this.getAttribute('href');
      if (!id || id === '#') return;

      var target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      var headerH  = header ? header.offsetHeight : 0;
      var targetTop = target.getBoundingClientRect().top + window.scrollY - headerH;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });


  /* ---------------------------------------------------------------
     4. Fade-in on scroll (IntersectionObserver)
     --------------------------------------------------------------- */
  var fadeEls = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeEls.length) {

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold:  0.1,
      rootMargin: '0px 0px -36px 0px'
    });

    fadeEls.forEach(function (el) { observer.observe(el); });

  } else {
    // Fallback for browsers without IntersectionObserver
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }


  /* ---------------------------------------------------------------
     5. Contact form — AJAX enhancement for Formspree
        The form works without JS via normal POST (graceful
        degradation). When JS is available and the Formspree
        endpoint is configured, we submit via fetch() and show
        an inline success message instead of redirecting.
     --------------------------------------------------------------- */
  var form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', async function (e) {
      var action = form.getAttribute('action') || '';

      // Don't intercept if the placeholder hasn't been replaced yet
      if (action.includes('YOUR_FORM_ID')) return;

      e.preventDefault();

      var submitBtn    = form.querySelector('[type="submit"]');
      var originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending\u2026';
      submitBtn.disabled    = true;

      // Remove any previous error
      var existing = form.querySelector('.form-error');
      if (existing) existing.remove();

      try {
        var res = await fetch(action, {
          method:  'POST',
          body:    new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.innerHTML = '<p class="form-success">Message sent \u2014 I\u2019ll be in touch soon.</p>';
        } else {
          throw new Error('non-ok response');
        }
      } catch (_err) {
        submitBtn.textContent = originalText;
        submitBtn.disabled    = false;

        var errEl       = document.createElement('p');
        errEl.className = 'form-error';
        errEl.textContent = 'Something went wrong. Please try again or reach out directly.';
        form.appendChild(errEl);
      }
    });
  }

})();
