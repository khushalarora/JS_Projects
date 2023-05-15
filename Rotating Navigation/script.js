let menu = document.getElementById('menu');
let navigation_btn = document.getElementById('navigation-btn');
let close = document.getElementById('close');
let container = document.getElementById('container');
let home = document.getElementById('home');
let about = document.getElementById('about');
let contact = document.getElementById('contact');

home.style.translate = '-150%';
about.style.translate = '-150%';
contact.style.translate = '-150%';

menu.addEventListener('click', () => {
    navigation_btn.style.rotate = '-90deg';
    container.style.rotate = '-20deg';
    home.style.translate = '0%';
    about.style.translate = '0%';
    contact.style.translate = '0%';
    home.style.transitionDelay = '0.5s';
    about.style.transitionDelay = '0.4s';
    contact.style.transitionDelay = '0.3s';
});

close.addEventListener('click', () => {
    navigation_btn.style.rotate = '0deg';
    container.style.rotate = '0deg';
    home.style.translate = '-150%';
    about.style.translate = '-150%';
    contact.style.translate = '-150%';
    home.style.transitionDelay = '0s';
    about.style.transitionDelay = '0s';
    contact.style.transitionDelay = '0s';
});