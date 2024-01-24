document.getElementById("mainH1").addEventListener("mouseover", function () {
   document.getElementById("section1").style.background = "url(img/stars5.gif) center center/cover repeat";
}, false);
document.getElementById("mainH1").addEventListener("mouseout", function () {
   document.getElementById("section1").style.background = "url(img/actionvance-t7EL2iG3jMc-unsplash.jpg) center/cover no-repeat";
}, false);

var btnMenu = document.querySelector(".btn-menu");
var btnBars = document.querySelector(".btn-menu__bars");
var nav = document.querySelector(".nav");
btnMenu.addEventListener('click', function () {
   btnBars.classList.toggle("menu-open");
   nav.classList.toggle("nav-open");
});


// btnMenu.addEventListener('click', function () {
//    btnBars.classList.toggle("menu-open");
//    nav.classList.toggle("nav-open");
// });
