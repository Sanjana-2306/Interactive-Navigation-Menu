const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('.section');
const backToTop = document.getElementById('backToTop');
const sectionColors = {
    home: '#4caf50',
    about: '#f44336',
    webdesign: '#2196f3',
    seo: '#ff9800',
    marketing: '#9c27b0',
    portfolio: '#673ab7',
    team: '#03a9f4',
    testimonials: '#ffeb3b',
    contact: '#009688',
};

// Change navbar color based on the current section
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 70;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navbar.style.backgroundColor = sectionColors[current];

    // Show back-to-top button
    if (window.scrollY > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Smooth scrolling
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animate sections on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach((section) => {
    observer.observe(section);
});
