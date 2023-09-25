(() => {
  const openMenuBtn = document.querySelector(".header__burger-menu");
  const mobileMenu = document.querySelector(".header__menu");
  openMenuBtn.addEventListener("click", function (e) {
    document.body.classList.toggle("scroll-lock");
    openMenuBtn.classList.toggle("active-menu");
    mobileMenu.classList.toggle("active-menu");
  });

  const navLinks = document.querySelectorAll(".header__menu-link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (openMenuBtn.classList.contains("active-menu")) {
        document.body.classList.remove("scroll-lock");
        openMenuBtn.classList.remove("active-menu");
        mobileMenu.classList.remove("active-menu");
      }
    });
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 992px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("active-menu");
    openMenuBtn.classList.remove("active-menu");
    document.body.classList.remove("scroll-lock");
  });
})();
