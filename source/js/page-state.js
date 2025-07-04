const body = document.body;
const main = body.querySelector('main');
const footer = body.querySelector('.footer');

const pageState = {
  isMenuOpen: false,
  isModalOpen: false,
  openModal() {
    this.isModalOpen = true;
    body.classList.add('page-body--no-scroll');
    main.classList.add('main-container--color');
    footer.classList.add('footer--color');
  },
  closeModal() {
    this.isModalOpen = false;
    body.classList.remove('page-body--no-scroll');
    main.classList.remove('main-container--color');
    footer.classList.remove('footer--color');
  },
  openMenu() {
    if (!this.isMenuOpen) {
      this.isMenuOpen = true;
      body.classList.add('page-body--no-scroll');
      main.classList.add('main-container--color');
      footer.classList.add('footer--color');
    }
  },
  closeMenu() {
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
      body.classList.remove('page-body--no-scroll');
      main.classList.remove('main-container--color');
      footer.classList.remove('footer--color');
    }
  }
};

export {pageState};
