// Smooth scrolling para enlaces internos de esta página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = targetId;
        }
    });
});

// Intersection Observer para animaciones de secciones y cards
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const menuSections = document.querySelectorAll('.menu-section');

const sectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.querySelectorAll('.menu-item').forEach((item, index) => {
                item.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
            });
        }
    });
}, observerOptions);

menuSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
    section.querySelectorAll('.menu-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
    });
    sectionObserver.observe(section);
});
