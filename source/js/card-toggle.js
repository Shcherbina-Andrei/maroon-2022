const cardToggleButtonElements = document.querySelectorAll('.card__subtitle');

cardToggleButtonElements.forEach((element) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    element.classList.toggle('card__subtitle--closed');
    element.classList.toggle('card__subtitle--opened');
  })
})
