const body = document.body;
const main = body.querySelector('main');
const burgerMenuButton = document.querySelector('.hero__menu-button');
const navigation = document.querySelector('.hero__navigation');
const navList = navigation.querySelector('.navigation__list');
const navLinks = navigation.querySelectorAll('.navigation__link');
const navButtons = navigation.querySelectorAll('.navigation__button');
const navItems = navigation.querySelectorAll('.navitagion__item');

function burgerMenuToggle() {
  const isOpened = burgerMenuButton.classList.toggle('hero__menu-button--open');
  navigation.classList.toggle('hero__navigation--open');

  if (isOpened) {
    navList.style.display = 'block';
    body.classList.add('page-body--no-scroll');
    main.classList.add('main-container--color');
    addNavLinksListeners();
  } else {
    navList.style.display = 'none';
    body.classList.remove('page-body--no-scroll');
    main.classList.remove('main-container--color');
    removeNavItemsClass();
    removeNavLinksListeners();
  }
}

function closeBurgerMenu() {
  burgerMenuButton.classList.remove('hero__menu-button--open');
  navigation.classList.remove('hero__navigation--open');
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
    item.classList.remove('navitagion__item--item-with-list-open');
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
  if(!navigation.contains(event.target) && !burgerMenuButton.contains(event.target)) {
    closeBurgerMenu();
  }
});

initBurgerMenu();
