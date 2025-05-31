import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';

const newsContentSwiper = new Swiper ('.news__content-swiper', {
  modules: [Navigation, Pagination, Grid],

  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,

  navigation: {
    nextEl: '.news__content-next-slide',
    prevEl: '.news__content-prev-slide',
  },
  pagination: {
    el: '.news__content-pagination',
    spaceBetween: 16,
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
