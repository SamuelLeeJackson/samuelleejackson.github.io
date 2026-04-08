/* main.js — no jQuery, no Bootstrap */

(function () {
  'use strict';

  /* ── Nav: raise on scroll ───────────────────────────────── */
  var nav = document.getElementById('site-nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('raised', window.scrollY > 10);
    }, { passive: true });
  }

  /* ── Mobile nav toggle ──────────────────────────────────── */
  var toggle = document.getElementById('nav-toggle');
  var links  = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Accordion ──────────────────────────────────────────── */
  document.querySelectorAll('.acc-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      var panel    = btn.nextElementSibling;
      btn.setAttribute('aria-expanded', !expanded);
      panel.classList.toggle('open', !expanded);
    });
  });

  /* ── Back to top ────────────────────────────────────────── */
  var backTop = document.getElementById('back-top');
  if (backTop) {
    window.addEventListener('scroll', function () {
      backTop.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    backTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
