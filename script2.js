var btnMenu = document.querySelector(".btn-menu");
var btnBars = document.querySelector(".btn-menu__bars");
var nav = document.querySelector(".nav");
btnMenu.addEventListener('click', function () {
   btnBars.classList.toggle("menu-open");
   nav.classList.toggle("nav-open");
});

var figure = document.querySelectorAll("figure");
var historyText = document.querySelectorAll(".history_text");
for (let i = 0; i < figure.length; i++) {
    const counter = figure[i];
    const counterText = historyText[i];
    counter.addEventListener('click', function () {
        this.classList.toggle("photo_click");
        this.querySelector("figcaption").classList.toggle("text_white");
        this.querySelector("img").classList.toggle("width_disable");

        counterText.classList.toggle("no-blur");
    });
}

