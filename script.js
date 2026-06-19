document.addEventListener('DOMContentLoaded', function() {
    var mobileToggle = document.getElementById('mobileToggle');
    var navLinks = document.getElementById('navLinks');
    var scrollTopBtn = document.getElementById('scrollTop');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(function(link) {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    // Hero slider
    var slides = document.querySelectorAll('.hero-slide');
    var dots = document.querySelectorAll('.hero-dot');
    var currentSlide = 0;

    function showSlide(index) {
        slides.forEach(function(s) { s.classList.remove('active'); });
        dots.forEach(function(d) { d.classList.remove('active'); });
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    dots.forEach(function(dot) {
        dot.addEventListener('click', function() {
            showSlide(parseInt(this.dataset.slide));
        });
    });

    setInterval(function() {
        var next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }, 5000);

    // Scroll animations
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll(
        '.cred-item, .reason-card, .step-card, .identify-item, ' +
        '.manager-card, .contact-card, .proc-block, .coverage-card, ' +
        '.doc-item, .country-card, .gallery-item'
    ).forEach(function(el) {
        el.classList.add('animate-target');
        observer.observe(el);
    });

    // Active nav highlight
    var sections = document.querySelectorAll('section[id]');
    var navLinksAll = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', function() {
        var current = '';
        sections.forEach(function(section) {
            if (window.scrollY >= section.offsetTop - 100) {
                current = section.getAttribute('id');
            }
        });
        navLinksAll.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});
