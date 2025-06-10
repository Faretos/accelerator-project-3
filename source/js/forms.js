const modalForm = document.querySelector('.modal-window__form');
const contactUsForm = document.querySelector('.contact-us-form__form');
const namePattern = /^[A-Za-zА-Яа-яЁё]+ [A-Za-zА-Яа-яЁё]+$/;
const phonePattern = /^\+7\d{10}$/;

modalForm.setAttribute('novalidate', '');
contactUsForm.setAttribute('novalidate', '');

modalForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputs = modalForm.querySelectorAll('.form__input, .form__select');
  const nameInput = modalForm.querySelector('#name');
  const phoneInput = modalForm.querySelector('#phone');
  const citySelect = modalForm.querySelector('#city');
  const personalDataInput = modalForm.querySelector('#personal-data');

  inputs.forEach((input) => {
    input.classList.remove('form__input--error');
  });

  let isValid = true;
  nameInput.setCustomValidity('');
  phoneInput.setCustomValidity('');
  citySelect.setCustomValidity('');
  personalDataInput.setCustomValidity('');

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

  if (citySelect.value.trim() === '') {
    isValid = false;
    citySelect.classList.add('form__input--error');
    citySelect.setCustomValidity('Поле не может быть пустым, выберите город');
  } else {
    citySelect.classList.remove('form__input--error');
    citySelect.setCustomValidity('');
  }

  if (!personalDataInput.checked) {
    isValid = false;
    personalDataInput.classList.add('form__input--error');
    personalDataInput.setCustomValidity('Необходимо согласие на обработку Персональных данных');
  } else {
    personalDataInput.classList.remove('form__input--error');
    personalDataInput.setCustomValidity('');
  }

  if (!isValid) {
    nameInput.reportValidity();
    phoneInput.reportValidity();
    citySelect.reportValidity();
    personalDataInput.reportValidity();
  } else {
    modalForm.submit();
  }
});

// contactUsForm.addEventListener('submit', (event) => {
//   const inputs = contactUsForm.querySelectorAll('.contact-us-form__input, .contact-us-form__select');

//   inputs.forEach((input) => {
//     input.classList.remove('contact-us-form__input--error');
//   });

//   let isValid = true;

//   inputs.forEach((input) => {
//     if (!input.checkValidity()) {
//       input.classList.add('contact-us-form__input--error');
//       isValid = false;
//     }
//   });

//   if (!isValid) {
//     event.preventDefault();
//   }
// });
