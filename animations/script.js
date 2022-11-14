const hamburgerMenu = document.querySelector('.hamburger-menu');
const hiddenMenu = document.querySelector('.drop-menu');

hamburgerMenu.addEventListener('click', () => {

    hiddenMenu.classList.toggle('hidden');
    
});