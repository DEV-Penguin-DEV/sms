const startButtonElement = document.querySelector(
  '.partners-worker-cabinet__button-controler--start'
);

startButtonElement.addEventListener('click', () => {
  startButtonElement.classList.toggle(
    'partners-worker-cabinet__button-controler--start-stop'
  );
  startButtonElement.textContent = startButtonElement.classList.contains(
    'partners-worker-cabinet__button-controler--start-stop'
  )
    ? 'STOP'
    : 'START';
});
