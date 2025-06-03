import Swiper from 'swiper';

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
