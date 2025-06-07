import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';

const heroSwiper = new Swiper ('.hero__wrapper', {
  modules: [Pagination],

  direction: 'horizontal',
  loop: true,
  autoHeight: 'true',
  slidesPerView: 1,
  spaceBetween: 0,

  pagination: {
    el: '.hero__pagination',
    type: 'bullets',
    clickable: true,
    renderBullet: function (index, className) {
      return `<button class="${ className } hero__pagination-bullet" tabindex="0"><span class="visually-hidden">${ index + 1 } слайд</span></button>`;
    }
  },
  on: { slideChangeTransitionStart: function () {
    movePaginationToActiveSlide();
  }, init: function () {
    movePaginationToActiveSlide();
  }},
  allowTouchMove: window.innerWidth < 1440,
  breakpoints: {
    768: {
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

function movePaginationToActiveSlide() {
  const slides = document.querySelectorAll('.hero__card');
  const paginationElement = document.querySelector('.swiper-pagination');

  slides.forEach((slide) => {
    if (slide.classList.contains('swiper-slide-active')) {
      const content = slide.querySelector('.hero__card-content');
      content.appendChild(paginationElement);
    }
  });
}

heroSwiper.on('slideChange', () => {
  movePaginationToActiveSlide();
});

movePaginationToActiveSlide();
