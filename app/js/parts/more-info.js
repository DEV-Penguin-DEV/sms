const findAncestor = (el, cls) => {
  // eslint-disable-next-line curly
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
};


const openMoreButtons = document.querySelectorAll('.open-more__button');

openMoreButtons.forEach((openMoreButton) => {
    openMoreButton.addEventListener('click', () => {
        const moreInfoContainer = findAncestor(openMoreButton, 'partner-cabinet__service-item').querySelector('.more-info');
        moreInfoContainer.classList.toggle('more-info--active');
    })
})