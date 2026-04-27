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
// FADE IN — sections on scroll
// ===========================
const fadeElements = document.querySelectorAll(
  '.about-grid, .court-card, .amenity-item, .comp-card, .level-card, .type-card, .coach-card, .courts h2, .about-text h2, .competitions h2, .academy h2'
);

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
