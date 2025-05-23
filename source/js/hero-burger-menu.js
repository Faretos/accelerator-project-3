const body = document.body;
const main = body.querySelector('main');
const burgerMenuButton = document.querySelector('.hero__menu-button');
const navList = document.querySelector('.hero__navigation');
const navLinks = document.querySelectorAll('.navigation__link');
const navButtons = document.querySelectorAll('.navigation__button');
const navItems = document.querySelectorAll('.navitagion__item');

function burgerMenuToggle() {
  const isOpened = burgerMenuButton.classList.toggle('hero__menu-button--open');
  navList.classList.toggle('hero__navigation--open');

  if (isOpened) {
    body.classList.add('page-body--no-scroll');
    main.classList.add('main-container--color');
    addNavLinksListeners();
  } else {
    body.classList.remove('page-body--no-scroll');
    main.classList.remove('main-container--color');
    removeNavLinksListeners();
  }
}

function closeBurgerMenu() {
  burgerMenuButton.classList.remove('hero__menu-button--open');
  navList.classList.remove('hero__navigation--open');
  body.classList.remove('page-body--no-scroll');
  main.classList.remove('main-container--color');
  removeNavItemsClass();
  removeNavLinksListeners();
}

function addNavLinksListeners() {
  navLinks.forEach((link) => {
    if (!link.hasListener) {
      link.addEventListener('click', closeBurgerMenu);
      link.hasListener = true;
    }
  });
}

function removeNavLinksListeners() {
  navLinks.forEach((link) => {
    if (link.hasListener) {
      link.removeEventListener('click', closeBurgerMenu);
      delete link.hasListener;
    }
  });
}

function removeNavItemsClass() {
  navItems.forEach((item) => {
    if (item.classList.contains('navitagion__item--item-with-list-open')) {
      item.classList.remove('navitagion__item--item-with-list-open');
    }
  });
}

function initBurgerMenu() {
  burgerMenuButton.addEventListener('click', burgerMenuToggle);
  navLinks.forEach((link) => {
    link.addEventListener('click', closeBurgerMenu);
  });
  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.navitagion__item');
      item.classList.toggle('navitagion__item--item-with-list-open');
    });
  });
}

body.addEventListener('click', (event) => {
  if(!navList.contains(event.target) && !burgerMenuButton.contains(event.target)) {
    closeBurgerMenu();
  }
});

initBurgerMenu();
