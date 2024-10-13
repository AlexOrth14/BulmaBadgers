// HEY THERE BUDDY!.... ONLY PLACE CONTENT THAT APPLIES TO ALL PAGES HERE

/* Pro tip, link this app.js to your page in addition to your custom .js file*/

// MOBILE NAVBAR CODE
// had to add this for fitting navbar better on mobile
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".navbar-burger");
  const menu = document.getElementById("navMenu");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
});

// MODALTOGGLE
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

// WEBPAGE JAVASCRIPT
const home = document.getElementById("home");
const home_button = document.getElementById("home_button");
const resources = document.getElementById("resources");
const resources_button = document.getElementById("resources_button");
const about_us = document.getElementById("about_us");
const about_button = document.getElementById("about_button");
const contact_us = document.getElementById("contact_us");
const contact_button = document.getElementById("contact_button");

// JS FOR WHEN HOME IS CLICKED
home_button.addEventListener("click", () => {
  home.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
});

// JS FOR RESOURCES
resources_button.addEventListener("click", () => {
  resources.classList.remove("is-hidden");
  home.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
});

// JS FOR ABOUT US
about_button.addEventListener("click", () => {
  about_us.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  home.classList.add("is-hidden");
  contact_us.classList.add("is-hidden");
});

contact_button.addEventListener("click", () => {
  contact_us.classList.remove("is-hidden");
  resources.classList.add("is-hidden");
  about_us.classList.add("is-hidden");
  home.classList.add("is-hidden");
});
