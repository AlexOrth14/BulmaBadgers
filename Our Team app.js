document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("navbarMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
});

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  navbar.classList.remove("hidden");

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
