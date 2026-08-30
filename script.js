(function () {
    'use strict';

    var header = document.getElementById('site-header');
    var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

    function onScroll() {
        if (!header) {
            return;
        }
        if (window.scrollY > 8) {
            header.classList.add('is-scrolled');
        } else {
            header.classList.remove('is-scrolled');
        }
    }

    function onNavClick(event) {
        var href = event.currentTarget.getAttribute('href');
        if (!href || href.charAt(0) !== '#') {
            return;
        }

        var target = document.querySelector(href);
        if (!target) {
            return;
        }

        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    navLinks.forEach(function (link) {
        link.addEventListener('click', onNavClick);
    });

    var scrollCue = document.querySelector('.scroll-cue');
    if (scrollCue) {
        scrollCue.addEventListener('click', onNavClick);
    }
})();
