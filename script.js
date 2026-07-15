document.addEventListener('DOMContentLoaded', () => {

    // LOADER INITIALIZATION

    initTypingEffect();

    // STICKY NAVBAR & SCROLL PROGRESS
    const navbar = document.getElementById('navbar');
    const progressBar = document.getElementById('progressBar');

    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;

        progressBar.style.width = scrolled + '%';

        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        handleParallax();
    });

    // HERO TYPING ANIMATION
    function initTypingEffect() {
        const textToType = "Where Every Cup Begins a Story.";
        const typingElement = document.getElementById('typingText');
        let index = 0;

        function type() {
            if (index < textToType.length) {
                typingElement.textContent += textToType.charAt(index);
                index++;
                setTimeout(type, 80);
            }
        }
        type();
    }
    // MOBILE NAVIGATION TOGGLE
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    //  SCROLL REVEAL OBSERVER
    const revealElements = document.querySelectorAll('.scroll-reveal, .fade-in-up');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // PARALLAX EFFECT FOR STORY IMAGE
    function handleParallax() {
        const parallaxImg = document.querySelector('.parallax-img');
        if (parallaxImg) {
            const rect = parallaxImg.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                const shift = (window.innerHeight - rect.top) * 0.05;
                parallaxImg.style.transform = `translateY(${shift}px) scale(1.05)`;
            }
        }
    }

    // TESTIMONIAL SLIDER

    const track = document.getElementById('testimonialTrack');
    const dots = document.querySelectorAll('.slider-dots .dot');
    let currentSlide = 0;

    function goToSlide(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.getAttribute('data-slide'));
            goToSlide(index);
        });
    });

    // Auto Advance Slides
    setInterval(() => {
        currentSlide = (currentSlide + 1) % dots.length;
        goToSlide(currentSlide);
    }, 6000);

    // BUTTON RIPPLE EFFECT

    const rippleButtons = document.querySelectorAll('.ripple-btn');

    rippleButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const circle = document.createElement('span');
            circle.classList.add('ripple');
            circle.style.left = x + 'px';
            circle.style.top = y + 'px';

            this.appendChild(circle);

            setTimeout(() => circle.remove(), 600);
        });
    });

    //  BACK TO TOP BUTTON
    const backToTopBtn = document.getElementById('backToTop');

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});