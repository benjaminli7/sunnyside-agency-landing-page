window.addEventListener("load", function(event) {
    document.querySelector('body').classList.remove('preload');
});

const icon_hamburger = document.getElementById('icon-hamburger');
const nav_menu = document.getElementById('nav-menu');

icon_hamburger.addEventListener('click', () => {
    if(nav_menu.style.display === 'none') {
        nav_menu.style.display = 'block';
    } else {
        nav_menu.style.display = 'none';
    }
})