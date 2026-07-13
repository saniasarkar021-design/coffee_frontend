/**
 * CHAPTER ONE — Main Interactive Engine
 * Strictly Plain Native JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. LOADER INITIALIZATION
       ========================================== */
       initTypingEffect();
    // const loader = document.getElementById('loader');
    // const loaderFill = document.getElementById('loaderFill');
    // let progress = 0;

    // const progressInterval = setInterval(() => {
    //     progress += Math.floor(Math.random() * 15) + 10;
    //     if (progress >= 100) {
    //         progress = 100;
    //         clearInterval(progressInterval);
    //         setTimeout(() => {
    //             loader.classList.add('hidden');
    //             initTypingEffect();
    //         }, 400);
    //     }
    //     loaderFill.style.width = progress + '%';
    // }, 100);

    // /* ==========================================
    //    2. CUSTOM CURSOR & MOUSE GLOW CANVAS
    //    ========================================== */
    // const cursor = document.getElementById('customCursor');
    // const follower = document.getElementById('cursorFollower');
    // const canvas = document.getElementById('mouseGlowCanvas');
    // const ctx = canvas.getContext('2d');

    // let mouseX = window.innerWidth / 2;
    // let mouseY = window.innerHeight / 2;
    // let followerX = mouseX;
    // let followerY = mouseY;

    // function resizeCanvas() {
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    // }
    // resizeCanvas();
    // window.addEventListener('resize', resizeCanvas);

    // window.addEventListener('mousemove', (e) => {
    //     mouseX = e.clientX;
    //     mouseY = e.clientY;

    //     cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    // });

    // function renderGlow() {
    //     followerX += (mouseX - followerX) * 0.1;
    //     followerY += (mouseY - followerY) * 0.1;

    //     follower.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%)`;

    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        
    //     // Render subtle light aura around cursor
    //     const gradient = ctx.createRadialGradient(
    //         followerX, followerY, 10,
    //         followerX, followerY, 250
    //     );
    //     gradient.addColorStop(0, 'rgba(201, 162, 39, 0.08)');
    //     gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    //     ctx.fillStyle = gradient;
    //     ctx.beginPath();
    //     ctx.arc(followerX, followerY, 250, 0, Math.PI * 2);
    //     ctx.fill();

    //     requestAnimationFrame(renderGlow);
    // }
    // renderGlow();

    /* ==========================================
       3. STICKY NAVBAR & SCROLL PROGRESS
       ========================================== */
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

    /* ==========================================
       4. HERO TYPING ANIMATION
       ========================================== */
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

    /* ==========================================
       5. MOBILE NAVIGATION TOGGLE
       ========================================== */
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

    /* ==========================================
       6. SCROLL REVEAL OBSERVER
       ========================================== */
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

    /* ==========================================
       7. PARALLAX EFFECT FOR STORY IMAGE
       ========================================== */
    // function handleParallax() {
    //     const parallaxImg = document.querySelector('.parallax-img');
    //     if (parallaxImg) {
    //         const rect = parallaxImg.getBoundingClientRect();
    //         if (rect.top < window.innerHeight && rect.bottom > 0) {
    //             const shift = (window.innerHeight - rect.top) * 0.05;
    //             parallaxImg.style.transform = `translateY(${shift}px) scale(1.05)`;
    //         }
    //     }
    // }

    /* ==========================================
       8. SIGNATURE COLLECTION INTERACTIVE SWITCH
       ========================================== */
    // const signatureData = {
    //     elixir: {
    //         title: "Golden Aurelia",
    //         origin: "Origin: Geisha Micro-Lot, Panama",
    //         price: "₹546",
    //         desc: "Infused with edible 24k gold leaf, cold-distilled orange blossom water, and slow-drip Panama Geisha coffee served over a single hand-carved ice sphere.",
    //         img: "image/i1.jpg",
    //         notes: ["White Peach", "Jasmine", "24K Gold Sparkle"]
    //     },
    //     velvet: {
    //         title: "Smoked Velvet",
    //         origin: "Origin: Blue Mountain, Jamaica",
    //         price: "₹685",
    //         desc: "Cold extraction passed through cherrywood smoke, layered with condensed bourbon-vanilla cream and sprinkled with smoked cacao dusting.",
    //         img: "image/i2.jpeg",
    //         notes: ["Bourbon Vanilla", "Oak Smoke", "Dark Chocolate"]
    //     },
    //     botanical: {
    //         title: "Flora Infusion",
    //         origin: "Origin: Sidama, Ethiopia",
    //         price: "₹495",
    //         desc: "Light roast flash-chilled espresso layered with house-made elderflower reduction, tonic water, and a bouquet of fresh edible flora.",
    //         img: "image/i3.jpg",
    //         notes: ["Elderflower", "Citrus Zest", "Crisp Tonic"]
    //     }
    // };

    // const signatureBtns = document.querySelectorAll('.signature-btn');
    // const sigImg = document.getElementById('signatureImg');
    // const sigTitle = document.getElementById('signatureTitle');
    // const sigOrigin = document.getElementById('signatureOrigin');
    // const sigPrice = document.getElementById('signaturePrice');
    // const sigDesc = document.getElementById('signatureDesc');
    // const sigNotesList = document.getElementById('signatureNotesList');

    // signatureBtns.forEach(btn => {
    //     btn.addEventListener('click', () => {
    //         signatureBtns.forEach(b => b.classList.remove('active'));
    //         btn.classList.add('active');

    //         const itemKey = btn.getAttribute('data-coffee');
    //         const data = signatureData[itemKey];

    //         // Smooth crossfade animation
    //         const container = document.querySelector('.signature-display');
    //         container.classList.add('fade-out');

    //         setTimeout(() => {
    //             sigImg.src = data.img;
    //             sigTitle.textContent = data.title;
    //             sigOrigin.textContent = data.origin;
    //             sigPrice.textContent = data.price;
    //             sigDesc.textContent = data.desc;

    //             sigNotesList.innerHTML = '';
    //             data.notes.forEach(note => {
    //                 const li = document.createElement('li');
    //                 li.textContent = note;
    //                 sigNotesList.appendChild(li);
    //             });

    //             container.classList.remove('fade-out');
    //             container.classList.add('fade-in');
    //             setTimeout(() => container.classList.remove('fade-in'), 400);
    //         }, 300);
    //     });
    // });

    /* ==========================================
       9. TESTIMONIAL SLIDER
       ========================================== */
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

    /* ==========================================
       10. BUTTON RIPPLE EFFECT
       ========================================== */
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

    /* ==========================================
       11. RESERVATION FORM HANDLING
       ========================================== */
    // const reserveForm = document.getElementById('reserveForm');
    // const formFeedback = document.getElementById('formFeedback');

    // reserveForm.addEventListener('submit', (e) => {
    //     e.preventDefault();

    //     const btn = document.getElementById('reserveBtn');
    //     btn.querySelector('span').textContent = "Reserving Table...";

    //     setTimeout(() => {
    //         btn.querySelector('span').textContent = "Reservation Confirmed";
    //         formFeedback.textContent = "Thank you. Your sensory journey has been scheduled. Check your email for confirmation.";
    //         reserveForm.reset();

    //         setTimeout(() => {
    //             btn.querySelector('span').textContent = "Confirm Reservation";
    //             formFeedback.textContent = "";
    //         }, 5000);
    //     }, 1500);
    // });

    /* ==========================================
       12. BACK TO TOP BUTTON
       ========================================== */
    const backToTopBtn = document.getElementById('backToTop');

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});