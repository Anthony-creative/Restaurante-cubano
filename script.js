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
