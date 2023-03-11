const sideMenuButton = document.querySelector('.side-menu__button');
const sideMenu = document.querySelector('.side-menu');

sideMenuButton.addEventListener('click', () => {
    sideMenuButton.classList.toggle('side-menu__button--active')
    sideMenu.classList.toggle('side-menu--closed')
})