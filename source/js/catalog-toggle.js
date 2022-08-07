const filterMoreButtonElements = document.querySelectorAll('.filter-form__subtitle');
const filterButtonElement = document.querySelector('.catalog__filter-button');
const formFilterElement = document.querySelector('.catalog__filter');

formFilterElement.classList.add('filter-form--closed');

filterButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (formFilterElement.classList.contains('filter-form--closed')) {
    filterButtonElement.classList.toggle('catalog__filter-button--opened');
    filterButtonElement.classList.toggle('catalog__filter-button--closed');
    formFilterElement.classList.toggle('filter-form--closed');
  } else {
    filterButtonElement.classList.toggle('catalog__filter-button--opened');
    filterButtonElement.classList.toggle('catalog__filter-button--closed');
    formFilterElement.classList.toggle('filter-form--closed');
  }
});

filterMoreButtonElements.forEach((element) => {
  element.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (element.classList.contains('filter-form__subtitle--closed')) {
      element.classList.remove('filter-form__subtitle--closed');
      element.classList.add('filter-form__subtitle--opened');
    } else {
      element.classList.remove('filter-form__subtitle--opened');
      element.classList.add('filter-form__subtitle--closed');
    }
  })
})

