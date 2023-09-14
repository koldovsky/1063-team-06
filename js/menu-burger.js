setTimeout(getMenuBurger, 500);

function getMenuBurger() {
  const openMenuBtn = document.querySelector(".header__burger-menu");
  const mobileMenu = document.querySelector(".header__menu");
  console.log(openMenuBtn);
  openMenuBtn.addEventListener("click", function (e) {
    document.body.classList.toggle("scroll-lock");
    openMenuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  const navLinks = document.querySelectorAll(".header__menu-link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
      if (openMenuBtn.classList.contains("active")) {
        document.body.classList.remove("scroll-lock");
        openMenuBtn.classList.remove("active");
        mobileMenu.classList.remove("active");
      }
    });
  });

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia("(min-width: 992px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("active");
    openMenuBtn.classList.remove("active");
    document.body.classList.remove("scroll-lock");
  });
}
