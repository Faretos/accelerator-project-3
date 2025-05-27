import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

const programsSwiper = new Swiper ('.programs__swiper', {
  modules: [Navigation],

  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.programs__next-slide',
    prevEl: '.programs__prev-slide',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

programsSwiper.init();
