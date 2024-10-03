// MOBILE NAVBAR CODE
// had to add this for fitting navbar better on mobile
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("navbarMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
});

//NAVBAR DISAPPEARING AND REAPPEARING BASED OFF SCROLL
// ---inspired by Actuarial Club's navbar
let lastScroll = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scroll down
    navbar.classList.add("hidden");
  } else {
    // Scroll up
    navbar.classList.remove("hidden");
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
});

let login_button = document.querySelector("#login_button");
login_button.addEventListener("click", () => {
  signin_modal.classList.add("is-active");
});
signin_modalbg.addEventListener("click", () => {
  signin_modal.classList.remove("is-active");
});
