// HEY THERE BUDDY!.... ONLY PLACE CONTENT THAT APPLIES TO ALL PAGES HERE

/* Pro tip, link this app.js to your page in addition to your custom .js file*/

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

const loginButton = document.getElementById("login_button");
const loginModal = document.getElementById("signin_modal");
const closeModal = document.querySelectorAll(".delete, #close_modal");

if (loginButton && loginModal) {
  loginButton.addEventListener("click", () => {
    loginModal.classList.add("is-active");
  });
}

closeModal.forEach((el) => {
  el.addEventListener("click", () => {
    loginModal.classList.remove("is-active");
  });
});
