var btnMenu = document.querySelector(".btn-menu");
var btnBars = document.querySelector(".btn-menu__bars");
var nav = document.querySelector(".nav");
btnMenu.addEventListener('click', function () {
   btnBars.classList.toggle("menu-open");
   nav.classList.toggle("nav-open");
});