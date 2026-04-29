// ===========================
// NAVBAR — scroll effect
// ===========================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===========================
// MOBILE NAV TOGGLE
// ===========================
if (navbar) {
  const navContainer = navbar.querySelector('.nav-container');
  const navLinks = navbar.querySelector('.nav-links');

  if (navContainer && navLinks && !navbar.querySelector('.nav-toggle')) {
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.type = 'button';
    navToggle.setAttribute('aria-label', 'Toggle navigation menu');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.innerHTML = '&#9776;';

    navContainer.insertBefore(navToggle, navLinks);

    navToggle.addEventListener('click', () => {
      const isOpen = navbar.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navbar.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
}


// ===========================
// FADE IN — sections on scroll
// ===========================
const fadeElements = document.querySelectorAll('section');

fadeElements.forEach(el => {
  el.classList.add('fade-in');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));


// ===========================
// HERO BALL — replay on hover
// ===========================
const heroBall = document.getElementById('heroBall');

if (heroBall) {
  heroBall.addEventListener('animationend', () => {
    setTimeout(() => {
      heroBall.style.animation = 'none';
      heroBall.offsetHeight;
      heroBall.style.animation = 'ballShoot 2.5s ease-out forwards';
    }, 4000);
  });
}


// ===========================
// SMOOTH SCROLL — nav links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


// ===========================
// COURT CARDS — stagger delay
// ===========================
document.querySelectorAll('.court-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.amenity-item').forEach((item, index) => {
  item.style.transitionDelay = `${index * 0.08}s`;
});

document.querySelectorAll('.comp-card').forEach((card, index) => {
  card.style.transitionDelay = `${index * 0.1}s`;
});

// ===========================
// FOUNDERS OPEN COUNTDOWN
// ===========================
const foundersCountdown = document.getElementById('foundersCountdown');

if (foundersCountdown) {
  const endDate = new Date('2025-06-04T00:00:00');
  const daysEl = foundersCountdown.querySelector('[data-time="days"]');
  const hoursEl = foundersCountdown.querySelector('[data-time="hours"]');
  const minutesEl = foundersCountdown.querySelector('[data-time="minutes"]');
  const secondsEl = foundersCountdown.querySelector('[data-time="seconds"]');

  const updateCountdown = () => {
    const now = new Date();
    const distance = Math.max(endDate - now, 0);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
  };

  updateCountdown();
  setInterval(updateCountdown, 1000);
}
