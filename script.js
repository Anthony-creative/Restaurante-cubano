// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Envío de reseña (simulación del lado del cliente)
document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('reviewerName').value;
    const rating = parseInt(document.getElementById('rating').value);
    const comment = document.getElementById('reviewComment').value;

    if (name && rating && comment) {
        const newReviewCard = document.createElement('div');
        newReviewCard.classList.add('review-card');

        let starsHtml = '';
        for (let i = 0; i < rating; i++) {
            starsHtml += '<i class="fas fa-star"></i>';
        }

        newReviewCard.innerHTML = `
            <div class="stars">${starsHtml}</div>
            <p>"${comment}"</p>
            <div class="reviewer-name">- ${name}</div>
        `;

        document.querySelector('.review-grid').prepend(newReviewCard);

        // Limpiar formulario
        document.getElementById('reviewForm').reset();
        alert('¡Gracias por tu reseña!');
    } else {
        alert('Por favor, completa todos los campos de la reseña.');
    }
});

// Intersection Observer para animaciones al hacer scroll
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeInSections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

fadeInSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    sectionObserver.observe(section);
});
