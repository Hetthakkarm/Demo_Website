const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn?.addEventListener('click', () => {
  const open = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!open));
  if (navLinks) {
    navLinks.style.display = open ? '' : 'flex';
    navLinks.style.position = open ? '' : 'absolute';
    navLinks.style.top = open ? '' : '68px';
    navLinks.style.left = open ? '' : '0';
    navLinks.style.right = open ? '' : '0';
    navLinks.style.padding = open ? '' : '18px 20px';
    navLinks.style.background = open ? '' : 'rgba(245,240,232,.98)';
    navLinks.style.borderBottom = open ? '' : '1px solid #ddd5ca';
    navLinks.style.flexDirection = open ? '' : 'column';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 800 && navLinks) {
      navLinks.style.display = '';
      menuBtn?.setAttribute('aria-expanded', 'false');
    }
  });
});
