document.addEventListener("DOMContentLoaded", () => {
  // Navbar Burger Toggle for Mobile
  const navbarBurgers = Array.from(document.querySelectorAll(".navbar-burger"));
  if (navbarBurgers.length > 0) {
    navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }

  // Modal Toggle for Member Login
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

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("is-active");
      const answer = item.querySelector(".faq-answer");
      if (item.classList.contains("is-active")) {
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else {
        answer.style.maxHeight = "0px";
      }
    });
  });

  // Show More Button for Extra Content
  const showMoreBtn = document.getElementById("show_more_btn");
  const hiddenContent = document.querySelectorAll(".hidden-content");

  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", () => {
      hiddenContent.forEach(content => {
        content.classList.remove("hidden-content");
      });
      showMoreBtn.style.display = "none"; // Hide the button after clicking
    });
  }
});
