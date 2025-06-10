const customSelect = document.querySelector('.contact-us-form__custom-select');
const selected = customSelect.querySelector('.contact-us-form__custom-select-selected');
const items = customSelect.querySelector('.contact-us-form__custom-select-items');
const originalSelect = document.getElementById('contact-us-form-city');

selected.addEventListener('click', () => {
  items.classList.toggle('contact-us-form__custom-select-select-hidden');
});

selected.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    items.classList.toggle('contact-us-form__custom-select-select-hidden');
  }
});

items.querySelectorAll('div').forEach((item) => {
  item.addEventListener('click', function() {
    selected.textContent = this.textContent;
    selected.setAttribute('data-value', this.getAttribute('data-value'));
    originalSelect.value = this.getAttribute('data-value');
    items.classList.add('contact-us-form__custom-select-select-hidden');
  });

  item.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      selected.textContent = this.textContent;
      selected.setAttribute('data-value', this.getAttribute('data-value'));
      originalSelect.value = this.getAttribute('data-value');
      items.classList.add('contact-us-form__custom-select-select-hidden');
    }
  });
});


document.addEventListener('click', (event) => {
  if (!customSelect.contains(event.target)) {
    items.classList.add('contact-us-form__custom-select-select-hidden');
  }
});

customSelect.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    items.classList.add('contact-us-form__custom-select-select-hidden');
  }
});
