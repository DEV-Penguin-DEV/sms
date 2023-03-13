const findAncestor2 = (el, cls) => {
  // eslint-disable-next-line curly
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
};


const openMoreButtons2 = document.querySelectorAll('.side-menu__item-more');

openMoreButtons2.forEach((openMoreButton) => {
  openMoreButton.addEventListener('click', () => {
      console.log(findAncestor2(openMoreButton, 'side-menu__item'));
        const moreInfoContainer = findAncestor2(openMoreButton, 'side-menu__item').querySelector('.under-menu');
        moreInfoContainer.classList.toggle('under-menu--active');
    })
})