document.addEventListener('DOMContentLoaded', () => {
  const burgerButton = document.querySelector('.burger-button');
  const crossIcon = document.querySelector('.cross-icon');
  const mobileMenu = crossIcon.closest('div');
  const body = document.body;
  const header = document.querySelector('header');


  // Open mobile menu
  burgerButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    body.classList.add('overflow-hidden');
  });

  // Close mobile menu
  crossIcon.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  });

  // Fixed menu on scroll
window.addEventListener('scroll', () => {
  if (window.innerWidth >= 1024) {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('header-fixed');
      header.classList.remove('header-absolute');
    } else {
      header.classList.remove('header-fixed');
      header.classList.add('header-absolute');
    }
  }
});


  // Close mobile menu when resizing to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      mobileMenu.classList.add('hidden');
      header.classList.remove('fixed');
    } else {
      header.classList.remove('header-fixed', 'header-absolute');
    }
  });
});