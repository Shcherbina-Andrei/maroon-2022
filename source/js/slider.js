const sliderPrevButtonElement = document.querySelector('.slider__button--prev');
const sliderNextButtonElement = document.querySelector('.slider__button--next');
const sliderListELement = document.querySelector('.slider__list');
const sliderWrapperElement = document.querySelector('.slider__wrapper');
console.log('Hello from slider');
let transformValue = 0;
const sliderStep = 100;
const sliderWidth = sliderListELement.clientWidth;
const sliderWrapperWidth = sliderWrapperElement.clientWidth;
const sliderPathValue = sliderWidth - sliderWrapperWidth;

console.log(sliderWidth);


sliderNextButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (transformValue >= -sliderPathValue) {
    transformValue = transformValue - sliderStep;
    sliderListELement.style.transform = `translateX(${transformValue}px)`;
  }
  console.log(transformValue);
});

sliderPrevButtonElement.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (transformValue < 0) {
    transformValue = transformValue + sliderStep;
    sliderListELement.style.transform = `translateX(${transformValue}px)`;
  }
  console.log(transformValue);
});
