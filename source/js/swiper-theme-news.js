import Swiper from 'swiper';
const themeButtons = document.querySelectorAll('.news__theme-button');

const newsThemeSwiper = new Swiper ('.news__theme-swiper', {
  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  slidesPerView: 'auto',
  spaceBetween: 7,
  breakpoints: {
    1440 : {
      spaceBetween: 30,
    },
  }
});

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    themeButtons.forEach((btn) => {
      btn.classList.remove('news__theme-button--open');
      btn.classList.remove('swiper-slide-active');
    });
    button.classList.add('news__theme-button--open');
    button.classList.add('swiper-slide-active');
  });
});

newsThemeSwiper.init();
