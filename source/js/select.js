const modalSelectWrapper = document.querySelector('.form__wrapper--city');
const modalSelectInput = document.getElementById('city');
const ContactUsSelectWrapper = document.querySelector('.contact-us-form__input-wrapper--city');
const ContactUsSelectInput = document.getElementById('contact-us-form-city');

function initSelectToggle () {
  modalSelectInput.addEventListener('click', () => {
    modalSelectWrapper.classList.toggle('form__wrapper--city-open');
  });
}

document.addEventListener('click', (e) => {
  if (!modalSelectWrapper.contains(e.target) && e.target !== modalSelectInput) {
    modalSelectWrapper.classList.remove('form__wrapper--city-open');
  }
});

function initContactUsSelectToggle () {
  ContactUsSelectInput.addEventListener('click', () => {
    ContactUsSelectWrapper.classList.toggle('contact-us-form__input-wrapper--city-open');
  });
}

document.addEventListener('click', (e) => {
  if (!ContactUsSelectWrapper.contains(e.target) && e.target !== ContactUsSelectInput) {
    ContactUsSelectWrapper.classList.remove('contact-us-form__input-wrapper--city-open');
  }
});

document.addEventListener('click', (e) => {
  if (!modalSelectWrapper.contains(e.target) && e.target !== modalSelectInput) {
    modalSelectWrapper.classList.remove('form__wrapper--city-open');
  }
});

initSelectToggle();
initContactUsSelectToggle();
