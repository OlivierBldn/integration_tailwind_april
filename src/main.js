document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".burger-button");
  const crossIcon = document.querySelector(".cross-icon");
  const mobileMenu = crossIcon.closest("div");
  const body = document.body;
  const header = document.querySelector("header");

  // Check if on mobile format
  if (window.innerWidth < 1024) {
    header.classList.remove("header-absolute");
    header.classList.remove("header-fixed");
    header.classList.add("header-mobile");
  }

  // Open mobile menu
  burgerButton.addEventListener("click", () => {
    mobileMenu.classList.remove("hidden");
    body.classList.add("overflow-hidden");
  });

  // Close mobile menu
  crossIcon.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    body.classList.remove("overflow-hidden");
  });

  // Fixed menu on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.innerWidth >= 1024) {
      if (window.scrollY > 50) {
        header.classList.add("header-fixed");
        header.classList.remove("header-absolute");
      } else {
        header.classList.remove("header-fixed");
        header.classList.add("header-absolute");
      }
    } else {
      header.classList.add("header-fixed");
      header.classList.remove("header-absolute");
    }
  });

  // Close mobile menu when resizing to desktop
  window.addEventListener("resize", () => {
    const header = document.querySelector("header");
    if (window.innerWidth >= 1024) {
      header.classList.remove("header-mobile");
      body.classList.remove("overflow-hidden");
      mobileMenu.classList.add("hidden");
      if (window.scrollY > 50) {
        header.classList.add("header-fixed");
        header.classList.remove("header-absolute");
      } else {
        header.classList.remove("header-fixed");
        header.classList.add("header-absolute");
      }
    } else {
      header.classList.add("header-mobile");
      header.classList.remove("header-absolute");
      header.classList.remove("header-fixed");
    }
  });
});
