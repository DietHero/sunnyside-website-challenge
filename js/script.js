'use strick'
var button = document.querySelector(".button_menu")
var navlinks = document.querySelector('.nav__links')
const navlink = document.querySelectorAll('.nav__link-item')
var contact = document.querySelector('.nav_contact')
var arrow = document.querySelector('.arrow')
var button = document.querySelector('.button_menu-icon')



button.addEventListener ('click', () =>
{
    navlinks.classList.toggle("nav__links-click");
    navlink.forEach(link => {
        link.classList.toggle("nav__link-click");
    contact.classList.toggle('nav_contact-click');
    arrow.classList.toggle('arrow-click');
    button.classList.toggle('button_menu-icon-click')
    });
    
})