const accordion = document.querySelector('.faq__accordion');
const accordionItems = accordion.querySelectorAll('.faq__accordion-item');
const accordionButtons = accordion.querySelectorAll('button');


accordionItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

accordionButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    button.parentElement.classList.toggle('active');
  });
});
