let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.main-nav');

menu.addEventListener('click', function() {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('main-nav-toggle');
});

window.addEventListener('scroll', function() {
    menu.classList.remove('fa-times');
    navbar.classList.remove('main-nav-toggle');
});