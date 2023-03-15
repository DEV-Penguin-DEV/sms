const findAncestor = (el, cls) => {
  // eslint-disable-next-line curly
  while ((el = el.parentElement) && !el.classList.contains(cls));
  return el;
};


const openMoreButtons = document.querySelectorAll('.open-more__button');

openMoreButtons.forEach((openMoreButton) => {
  const moreInfoContainer = findAncestor(openMoreButton, 'partner-cabinet__service-item').querySelector('.more-info');
  moreInfoContainer.style.display = 'none';

  openMoreButton.addEventListener('click', () => {
    if (moreInfoContainer.classList.contains('more-info--active')) {
      setTimeout(() => {
        moreInfoContainer.style.display = 'none';
      }, 1000)
    } else {

      moreInfoContainer.style.display = 'flex';

    }
    moreInfoContainer.classList.toggle('more-info--active');


  })
})