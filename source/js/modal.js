import { pageState } from './page-state';

const body = document.body;
const modalOpenButton = document.getElementById('modal-open');
const modalWindow = document.querySelector('.modal-window');
const modalCloseButton = modalWindow.querySelector('.modal-window__button');
const form = modalWindow.querySelector('.form');
let scrollPosition = 0;


function openModalWindow() {
  scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  pageState.openModal();
  modalWindow.classList.add('modal-window--open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeModalWindow() {
  if (modalWindow.classList.contains('modal-window--open')) {
    pageState.closeModal();
    modalWindow.classList.remove('modal-window--open');
    form.reset();
    window.scrollTo({top: scrollPosition, behavior: 'smooth'});
  }
}

modalOpenButton.addEventListener('click', openModalWindow);
modalCloseButton.addEventListener('click', closeModalWindow);

modalWindow.addEventListener('click', (event) => {
  event.stopPropagation();
});

body.addEventListener('click', (event) => {
  if (modalWindow.classList.contains('modal-window--open') && !modalWindow.contains(event.target) && !modalOpenButton.contains(event.target)) {
    closeModalWindow();
  }
});

export {closeModalWindow};
