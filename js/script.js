'use strick'
var button = document.querySelector(".button_menu")
var navlinks = document.querySelector('.nav__links')
var navlink = document.querySelector('.nav__link')

button.addEventListener ('click', () =>
{
    navlinks.classList.toggle("nav__links-oncick");
    for (i=0; i < navlink.lenght; i++) {
        navlink[i].classList.toggle('nav__link-click');
    }

})