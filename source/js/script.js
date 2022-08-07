const menuButton = document.querySelector('.main-nav__toggle');
const menuSite = document.querySelector('.main-nav__inner-wrapper');

menuButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (menuSite.classList.contains('main-nav__inner-wrapper--closed')) {
    menuSite.classList.remove('main-nav__inner-wrapper--closed');
    menuSite.classList.add('main-nav__inner-wrapper--opened');
  } else {
    menuSite.classList.remove('main-nav__inner-wrapper--opened');
    menuSite.classList.add('main-nav__inner-wrapper--closed');
  }
})
