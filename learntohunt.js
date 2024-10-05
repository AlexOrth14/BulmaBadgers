// JavaScript for the navbar toggle on mobile
document.addEventListener('DOMContentLoaded', () => {
    const burgerIcon = document.querySelector('.navbar-burger');
    const navbarMenu = document.querySelector('#navbarMenu');
  
    burgerIcon.addEventListener('click', () => {
      navbarMenu.classList.toggle('is-active');
    });
  });
  
  // JavaScript for the login modal toggle
  document.querySelector('#login_button').addEventListener('click', () => {
    document.querySelector('#signin_modal').classList.add('is-active');
  });
  
  document.querySelector('.modal-close').addEventListener('click', () => {
    document.querySelector('#signin_modal').classList.remove('is-active');
  });
  