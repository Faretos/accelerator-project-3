import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

const swiperWrapper = document.querySelector('.programs__swiper-wrapper');
const slides = swiperWrapper.querySelectorAll('.swiper-slide');
let clonedSlidesCount = 0;

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
      scrollbar: {
        dragSize: 394,
      },
    },
  },
});

function cloneSlides() {
  const windowWidth = window.innerWidth;
  if (windowWidth >= 1440) {
    if (clonedSlidesCount === 0) {
      const slidesToClone = Array.from(slides).slice(0, 3);
      slidesToClone.forEach((slide) => {
        const clone = slide.cloneNode(true);
        swiperWrapper.appendChild(clone);
      });

      clonedSlidesCount = 3;
      programsSwiper.update();
    }
  } else {
    if (clonedSlidesCount > 0) {
      const allSlides = swiperWrapper.querySelectorAll('.swiper-slide');
      for (let i = allSlides.length - 1; i >= allSlides.length - clonedSlidesCount; i--) {
        allSlides[i].remove();
      }

      clonedSlidesCount = 0;
      programsSwiper.update();
    }
  }
}

programsSwiper.init();
window.addEventListener('load', cloneSlides);
window.addEventListener('resize', cloneSlides);
