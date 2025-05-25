const selectWrapper = document.querySelector('.form__wrapper--city');
const selectInput = document.getElementById('city');

function initSelectToggle () {
  selectInput.addEventListener('click', () => {
    selectWrapper.classList.toggle('form__wrapper--city-open');
  });
}

document.addEventListener('click', (e) => {
  if (!selectWrapper.contains(e.target) && e.target !== selectInput) {
    selectWrapper.classList.remove('form__wrapper--city-open');
  }
});

initSelectToggle();
