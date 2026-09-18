const header = document.querySelector('[data-header]');
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach((element) => observer.observe(element));

window.addEventListener('scroll', () => {
  header.classList.toggle('compact', window.scrollY > 80);
}, { passive: true });

document.querySelector('.to-top').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('year').textContent = new Date().getFullYear();
