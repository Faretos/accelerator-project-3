import { closeModalWindow } from './modal';
const modalForm = document.querySelector('.modal-window__form');
const inputs = modalForm.querySelectorAll('.form__input, .form__select');
const nameInput = modalForm.querySelector('#name');
const phoneInput = modalForm.querySelector('#phone');
const citySelect = modalForm.querySelector('#city');
const customCitySelect = modalForm.querySelector('.form__custom-select');
const customCitySelectInput = modalForm.querySelector('#form-custom-select-input');
const personalDataInput = modalForm.querySelector('#personal-data');
const namePattern = /^[A-Za-zА-Яа-яЁё]+ [A-Za-zА-Яа-яЁё]+$/;
const phonePattern = /^\+7\d{10}$/;
let isValid = true;

modalForm.setAttribute('novalidate', '');
citySelect.style.display = 'none';
customCitySelect.style.display = 'block';

function valdateName() {
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('form__input--error');
    nameInput.setCustomValidity('Поле не может быть пустым');
  } else if (!namePattern.test(nameInput.value)) {
    isValid = false;
    nameInput.classList.add('form__input--error');
    nameInput.setCustomValidity('Неверный формат имени. Например: Иван Иванов');
  } else {
    nameInput.classList.remove('form__input--error');
    nameInput.setCustomValidity('');
  }
}

function validatePhone() {
  if (phoneInput.value.trim() === '') {
    isValid = false;
    phoneInput.classList.add('form__input--error');
    phoneInput.setCustomValidity('Поле не может быть пустым');
  } else if (!phonePattern.test(phoneInput.value)) {
    isValid = false;
    phoneInput.classList.add('form__input--error');
    phoneInput.setCustomValidity('Неверный формат телефона. Например: +79999999999');
  } else {
    phoneInput.classList.remove('form__input--error');
    phoneInput.setCustomValidity('');
  }
}

function validateCitySelect() {
  if (citySelect.value.trim() === '') {
    isValid = false;
    citySelect.classList.add('form__input--error');
    citySelect.setCustomValidity('Поле не может быть пустым, выберите город');
  } else {
    citySelect.classList.remove('form__input--error');
    citySelect.setCustomValidity('');
  }
}

function validateCustomCitySelect() {
  const customCitySelectInputValue = customCitySelectInput.getAttribute('data-value');
  const originalSelectValue = citySelect.value;

  if (!customCitySelectInputValue || customCitySelectInputValue === 'hidden' || customCitySelectInputValue !== originalSelectValue) {
    isValid = false;
    customCitySelectInput.classList.add('form__input--error');
    customCitySelectInput.textContent = 'Необходимо выбрать город';
  } else {
    customCitySelectInput.classList.remove('form__input--error');
  }
}

function validatePersonalData() {
  if (!personalDataInput.checked) {
    isValid = false;
    personalDataInput.classList.add('form__input--error');
    personalDataInput.setCustomValidity('Необходимо согласие на обработку Персональных данных');
  } else {
    personalDataInput.classList.remove('form__input--error');
    personalDataInput.setCustomValidity('');
  }
}

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    input.classList.remove('form__input--error');
    if (typeof input.setCustomValidity === 'function') {
      input.setCustomValidity('');
    }
  });

  isValid = true;

  valdateName();
  validatePhone();
  validateCitySelect();
  validateCustomCitySelect();
  validatePersonalData();

  inputs.forEach((input) => {
    if (typeof input.setCustomValidity === 'function') {
      input.reportValidity();
    }
  });

  if (isValid) {
    modalForm.submit();
    closeModalWindow();
  }
});

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    if (input.classList.contains('form__input--error')) {
      input.classList.remove('form__input--error');
      if (typeof input.setCustomValidity === 'function') {
        input.setCustomValidity('');
      }
    }
  });
});

function customSelectErrorRemover() {
  customCitySelectInput.classList.remove('form__input--error');
}

customCitySelectInput.addEventListener('click', () => {
  if (customCitySelectInput.classList.contains('form__input--error')) {
    customSelectErrorRemover();
  }
});

