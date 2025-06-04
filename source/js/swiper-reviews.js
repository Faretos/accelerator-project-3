import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

const reviewsSwiper = new Swiper ('.reviews__swiper', {
  modules: [Navigation, Scrollbar],

  direction: 'horizontal',
  loop: false,
  autoHeight: 'auto',
  slidesPerView: 1,
  spaceBetween: 15,


  navigation: {
    nextEl: '.reviews-next-slide',
    prevEl: '.reviews-prev-slide',
  },
  breakpoints: {
    768: {
      slidesPerView: 'auto',
      spaceBetween: 30,
      scrollbar: {
        el: '.reviews-slider-scrollbar',
        dragSize: 326,
        draggable: true,
      },
    },
    1440: {
      slidesPerView: 2,
      spaceBetween: 32,
      allowTouchMove: false,
      scrollbar: {
        dragSize: 394,
      },
    },
  },
});
