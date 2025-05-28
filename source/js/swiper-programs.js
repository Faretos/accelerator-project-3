import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

const programsSwiper = new Swiper ('.programs__swiper', {
  modules: [Navigation, Scrollbar],

  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 10,

  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize: 326,
  },
  navigation: {
    nextEl: '.programs__next-slide',
    prevEl: '.programs__prev-slide',
  },
  allowTouchMove: window.innerWidth < 1440,
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

programsSwiper.init();
