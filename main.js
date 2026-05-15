// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        closeMenu();
    }
});

// Typewritter effect
const words = ['Web Developer', 'UI/UX Designer', 'Mobile Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById('typewriter');

function type() {
    const current = words[wordIndex];

    if (isDeleting) {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? 60 : 100;

    if (!isDeleting && charIndex === current.length) {
        speed = 1800;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 400;
    }

    setTimeout(type, speed);
}

type();

// NAV — hide on scroll down, show on scroll up
let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    const current = window.scrollY;

    if (current > lastScroll && current > 80) {
        nav.style.transform = 'translateY(-100%)';
        nav.style.transition = 'transform 0.3s ease';
    } else {
        nav.style.transform = 'translateY(0)';
    }

    lastScroll = current;
});

// View portofolio button

const portofolioBtn = document.querySelector('.btn-ghost');

if (portofolioBtn) {
    portofolioBtn.addEventListener('click', () => {
        const portofolio = document.querySelector('#portofolio');
        if (portofolio) {
            portofolio.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Services buttons — go to contact
document.querySelectorAll('.services-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        window.location.href = 'contact.html';
    });
});