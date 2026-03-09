// ── NAVBAR HAMBURGER ──────────────────────────
const menuToggle = document.getElementById('menuToggle');
const navLinks   = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinks.classList.toggle('open');
    });
}

document.addEventListener('click', function(e) {
    if (navLinks && !navLinks.contains(e.target) && e.target !== menuToggle) {
        navLinks.classList.remove('open');
    }
});

function closeNav() {
    if (navLinks) navLinks.classList.remove('open');
}

// ── SMOOTH SCROLLING ──────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// ── REVIEW FORM ───────────────────────────────
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
    reviewForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name    = document.getElementById('reviewerName').value;
        const rating  = parseInt(document.getElementById('rating').value);
        const comment = document.getElementById('reviewComment').value;

        if (name && rating && comment) {
            const card = document.createElement('div');
            card.classList.add('review-card');

            let starsHtml = '';
            for (let i = 0; i < rating; i++) starsHtml += '<i class="fas fa-star"></i>';

            card.innerHTML = `
                <div class="stars">${starsHtml}</div>
                <p>"${comment}"</p>
                <div class="reviewer-name">- ${name}</div>
            `;

            document.querySelector('.review-grid').prepend(card);
            reviewForm.reset();
            alert('¡Gracias por tu reseña!');
        } else {
            alert('Por favor, completa todos los campos de la reseña.');
        }
    });
}

// ── SCROLL ANIMATIONS ─────────────────────────
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

const fadeInSections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity    = '1';
            entry.target.style.transform  = 'translateY(0)';
        }
    });
}, observerOptions);

fadeInSections.forEach(section => {
    section.style.opacity    = '0';
    section.style.transform  = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    sectionObserver.observe(section);
});


// ═══════════════════════════════════════════════
//   SCROLL ANIMATION — SECCIÓN CONTACTO
//   Replica el ContainerScroll de Aceternity UI
// ═══════════════════════════════════════════════
(function () {
    const container = document.getElementById('scrollContainer');
    const card      = document.getElementById('scrollCard');
    const title     = document.getElementById('scrollTitle');

    if (!container || !card || !title) return;

    // Detecta mobile
    const isMobile = () => window.innerWidth <= 600;

    function lerp(a, b, t) { return a + (b - a) * t; }

    // Clamp t entre 0 y 1
    function clamp01(v) { return Math.max(0, Math.min(1, v)); }

    function onScroll() {
        const rect     = container.getBoundingClientRect();
        const wh       = window.innerHeight;
        const total    = container.offsetHeight;

        // progress: 0 cuando el section entra, 1 cuando sale por arriba
        const progress = clamp01((wh - rect.top) / (wh + total));

        // En móvil el efecto es más suave (menos rotación, menos escala)
        const mobile = isMobile();
        const startRotate = mobile ? 14 : 20;
        const startScale  = mobile ? 1.03 : 1.05;
        const titleTravel = mobile ? -40 : -80;
        const perspective = mobile ? 800 : 1200;

        // ── TÍTULO: baja suavemente
        const titleY = lerp(0, titleTravel, progress);
        title.style.transform = `translateY(${titleY}px)`;

        // ── TARJETA: rota de startRotate° → 0° y escala startScale → 1
        const rotateX = lerp(startRotate, 0, progress);
        const scale   = lerp(startScale, 1, progress);

        card.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) scale(${scale})`;

        // Sombra dinámica
        const shadowOpacity = lerp(0.6, 0.2, progress);
        card.querySelector('.scroll-card-inner').style.boxShadow = `
            0 0 0 rgba(0,0,0,0),
            0 9px 20px rgba(0,0,0,${shadowOpacity}),
            0 37px 37px rgba(0,0,0,${shadowOpacity * 0.9}),
            0 84px 50px rgba(0,0,0,${shadowOpacity * 0.5})
        `;
    }

    // Smooth: usar requestAnimationFrame para suavidad
    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            requestAnimationFrame(function () {
                onScroll();
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });

    // Run once on load
    onScroll();
    window.addEventListener('resize', onScroll);
})();
