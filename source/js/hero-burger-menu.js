import { pageState } from './page-state';

const body = document.body;
const burgerMenuButton = document.querySelector('.header__menu-button');
const navigation = document.querySelector('.header__navigation');
const navList = navigation.querySelector('.navigation__list');
const navLinks = navigation.querySelectorAll('.navigation__link');
const navButtons = navigation.querySelectorAll('.navigation__button');
const navItems = navigation.querySelectorAll('.navitagion__item');

function burgerMenuToggle() {
  navigation.classList.toggle('header__navigation--open');
  burgerMenuButton.classList.toggle('header__menu-button--open');

  if (pageState.isMenuOpen) {
    pageState.closeMenu();
    navigation.classList.remove('header__navigation--open');
    navList.style.display = 'none';
    removeNavItemsClass();
    removeNavLinksListeners();
  } else {
    pageState.openMenu();
    navigation.classList.add('header__navigation--open');
    navList.style.display = 'block';
    addNavLinksListeners();
  }
}

function closeBurgerMenu() {
  pageState.closeMenu();
  burgerMenuButton.classList.remove('header__menu-button--open');
  navigation.classList.remove('header__navigation--open');
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
  navButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.closest('.navitagion__item');
      item.classList.toggle('navitagion__item--item-with-list-open');
    });
  });
}

body.addEventListener('click', (event) => {
  if(navigation.classList.contains('header__navigation--open') && !navigation.contains(event.target) && !burgerMenuButton.contains(event.target)) {
    closeBurgerMenu();
  }
});

initBurgerMenu();
