import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';
const swiperWrapper = document.querySelector('.reviews__swiper-wrapper');
const slides = swiperWrapper.querySelectorAll('.reviews__slide');

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
      slidesPerGroup: 2,
      spaceBetween: 32,
      allowTouchMove: false,
      scrollbar: {
        el: '.reviews-slider-scrollbar',
        dragSize: 394,
        draggable: true,
      },
    },
  },
});

reviewsSwiper.init();

function cloneSlides() {
  const clonedSlides = swiperWrapper.querySelectorAll('.cloned-slide');
  clonedSlides.forEach((slide) => slide.remove());

  if (window.innerWidth >= 1440) {
    for (let i = 0; i < 2; i++) {
      if (slides[i]) {
        const clonedSlide = slides[i].cloneNode(true);
        clonedSlide.classList.add('cloned-slide');
        swiperWrapper.appendChild(clonedSlide);
      }
    }
  }
}

window.addEventListener('load', cloneSlides);
window.addEventListener('resize', cloneSlides);
