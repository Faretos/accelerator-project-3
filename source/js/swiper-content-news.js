import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';
const wrapper = document.querySelector('.news__content-swiper-wrapper');
const newsCards = document.querySelectorAll('.news__card');
const newsCardsContent = document.querySelectorAll('.news__card-content');
const width = window.innerWidth;
const clonedContent = null;
const initialPositions = [];
let isSwapped = false;

const newsContentSwiper = new Swiper ('.news__content-swiper', {
  modules: [Navigation, Pagination, Grid],

  direction: 'horizontal',
  loop: false,
  autoHeight: true,

  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  grid: {
    rows: 2,
  },

  navigation: {
    nextEl: '.news__content-next-slide',
    prevEl: '.news__content-prev-slide',
  },
  pagination: {
    el: '.news__content-pagination',
    bulletElement: 'button',
    spaceBetween: 16,
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 4,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
      grid: {
        rows: 2,
      },
    },
    1440: {
      grid: {
        rows: 1,
      },
      slidesPerView: 'auto',
      spaceBetween: 0,
    },
  },
});


function swapSlides() {

  if (width >= 768 && width <= 1440 && !isSwapped) {
    const slides = newsContentSwiper.slides;
    if (slides.length >= 3) {
      const slide2 = slides[1];
      const slide3 = slides[2];

      newsContentSwiper.wrapperEl.insertBefore(slide3, slide2);
      newsContentSwiper.wrapperEl.insertBefore(slide2, slide3.nextSibling);

      newsContentSwiper.update();
      isSwapped = true;
    }
  } else if ((width < 768 || width > 1440) && isSwapped) {
    isSwapped = false;
  }
}

swapSlides();
window.addEventListener('resize', swapSlides);
