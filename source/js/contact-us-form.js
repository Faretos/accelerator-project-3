const contactUsForm = document.querySelector('.contact-us-form__form');
const inputs = contactUsForm.querySelectorAll('.contact-us-form__input, .contact-us-form__message, .contact-us-form__select, .contact-us-form__custom-select-selected');
const nameInput = contactUsForm.querySelector('#contact-us-form-name');
const phoneInput = contactUsForm.querySelector('#contact-us-form-phone');
const citySelect = contactUsForm.querySelector('#contact-us-form-city');
const personalDataInput = contactUsForm.querySelector('#contact-us-form-personal-data');
const namePattern = /^[A-Za-zА-Яа-яЁё]+ [A-Za-zА-Яа-яЁё]+$/;
const phonePattern = /^\+7\d{10}$/;
let isValid = true;

contactUsForm.setAttribute('novalidate', '');

function valdateName() {
  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('contact-us-form__input--error');
    nameInput.setCustomValidity('Поле не может быть пустым');
  } else if (!namePattern.test(nameInput.value)) {
    isValid = false;
    nameInput.classList.add('contact-us-form__input--error');
    nameInput.setCustomValidity('Неверный формат имени. Например: Иван Иванов');
  } else {
    nameInput.classList.remove('contact-us-form__input--error');
    nameInput.setCustomValidity('');
  }
}

function validatePhone() {
  if (phoneInput.value.trim() === '') {
    isValid = false;
    phoneInput.classList.add('contact-us-form__input--error');
    phoneInput.setCustomValidity('Поле не может быть пустым');
  } else if (!phonePattern.test(phoneInput.value)) {
    isValid = false;
    phoneInput.classList.add('contact-us-form__input--error');
    phoneInput.setCustomValidity('Неверный формат телефона. Например: +79999999999');
  } else {
    phoneInput.classList.remove('contact-us-form__input--error');
    phoneInput.setCustomValidity('');
  }
}

function validateCitySelect() {
  if (citySelect.value.trim() === '') {
    isValid = false;
    citySelect.classList.add('contact-us-form__input--error');
    citySelect.setCustomValidity('Поле не может быть пустым, выберите город');
  } else {
    citySelect.classList.remove('contact-us-form__input--error');
    citySelect.setCustomValidity('');
  }
}

function validateCustomCitySelect() {
  const customCitySelectInput = contactUsForm.querySelector('#contact-us-form-custom-select-input');
  const customCitySelectInputValue = customCitySelectInput.getAttribute('data-value');
  const originalSelectValue = citySelect.value;

  if (!customCitySelectInputValue || customCitySelectInputValue === 'hidden' || customCitySelectInputValue !== originalSelectValue) {
    isValid = false;
    customCitySelectInput.classList.add('contact-us-form__input--error');
    customCitySelectInput.textContent = 'Необходимо выбрать город';
  } else {
    customCitySelectInput.classList.remove('contact-us-form__input--error');
  }
}

function validatePersonalData() {
  if (!personalDataInput.checked) {
    isValid = false;
    personalDataInput.classList.add('contact-us-form__input--error');
    personalDataInput.setCustomValidity('Необходимо согласие на обработку Персональных данных');
  } else {
    personalDataInput.classList.remove('contact-us-form__input--error');
    personalDataInput.setCustomValidity('');
  }
}

contactUsForm.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach((input) => {
    input.classList.remove('contact-us-form__input--error');
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
    contactUsForm.submit();
  }
});

inputs.forEach((input) => {
  input.addEventListener('click', () => {
    if (input.classList.contains('contact-us-form__input--error')) {
      input.classList.remove('contact-us-form__input--error');
      if (typeof input.setCustomValidity === 'function') {
        input.setCustomValidity('');
      }
    }

  });
});
