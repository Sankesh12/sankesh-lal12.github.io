// ===== THEME TOGGLE =====
const themeBtn = document.getElementById('themeBtn');

// Apply saved theme on load
if (localStorage.getItem('theme') === 'light') {
  document.body.classList.add('light');
  themeBtn.textContent = '☀';
}

themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeBtn.textContent = isLight ? '☀' : '🌙';
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// ===== MOBILE MENU =====
const menuBtn  = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close menu when any link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 90) {
      current = sec.id;
    }
  });

  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});