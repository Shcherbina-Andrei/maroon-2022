const sliderPrevButtonElement = document.querySelector('.slider__button--prev');
const sliderNextButtonElement = document.querySelector('.slider__button--next');
let sliderListELement = document.querySelector('.slider__list');
let sliderWrapperElement = document.querySelector('.slider__wrapper');
let transformValue = 0;
let sliderStep = document.documentElement.clientWidth < 768 ? 260 : 100;
let sliderWidth = sliderListELement.clientWidth;
let sliderWrapperWidth = sliderWrapperElement.clientWidth;
let sliderPathValue = sliderWidth - sliderWrapperWidth;

window.addEventListener('resize', () => {
  sliderStep = document.documentElement.clientWidth < 768 ? 260 : 100;
  sliderListELement = document.querySelector('.slider__list');
  sliderWrapperElement = document.querySelector('.slider__wrapper');
  sliderWidth = sliderListELement.clientWidth;
  sliderWrapperWidth = sliderWrapperElement.clientWidth;
  transformValue = 0;
  sliderListELement.style.transform = `translateX(${transformValue}px)`;
  sliderPathValue = sliderWidth - sliderWrapperWidth;
})

sliderNextButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (transformValue >= -sliderPathValue) {
    transformValue = transformValue - sliderStep;
    sliderListELement.style.transform = `translateX(${transformValue}px)`;
  }
});

sliderPrevButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (transformValue < 0) {
    transformValue = transformValue + sliderStep;
    sliderListELement.style.transform = `translateX(${transformValue}px)`;
  }
});
