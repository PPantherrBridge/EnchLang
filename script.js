const revealNodes = document.querySelectorAll('.reveal');
const nav = document.querySelector('.nav-shell');
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const closeMenu = document.getElementById('closeMenu');
const drawerBackdrop = document.getElementById('drawerBackdrop');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.18 }
);

revealNodes.forEach((node) => revealObserver.observe(node));

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 8);
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});

const closeDrawer = () => document.body.classList.remove('menu-open');

menuToggle.addEventListener('click', () => document.body.classList.add('menu-open'));
closeMenu.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

document.querySelectorAll('.mobile-drawer a').forEach((link) => {
  link.addEventListener('click', closeDrawer);
});
