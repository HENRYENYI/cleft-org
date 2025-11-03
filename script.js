// Hide logo image and shrink navbar on scroll
window.addEventListener('scroll', function() {
    const logoImg = document.querySelector('.logo-img');
    const headerTop = document.querySelector('.header-top');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > 50) {
        logoImg.style.opacity = '0';
        logoImg.style.transform = 'scale(0)';
        headerTop.style.padding = '0.3rem 0';
    } else {
        logoImg.style.opacity = '1';
        logoImg.style.transform = 'scale(1)';
        headerTop.style.padding = '0.8rem 0';
    }
});

// Document ready functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavToggle.addEventListener('click', () => {
    mobileNavToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Only close nav when clicking links
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileNavToggle.classList.remove('active');
    });
});