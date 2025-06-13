import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

const programsSwiper = new Swiper ('.programs__swiper', {
  modules: [Navigation, Scrollbar],

  direction: 'horizontal',
  loop: false,
  autoHeight: 'auto',
  slidesPerView: 1,
  spaceBetween: 20,

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  navigation: {
    nextEl: '.programs__next-slide',
    prevEl: '.programs__prev-slide',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
      allowTouchMove: false,
    },
  },
});

programsSwiper.init();
