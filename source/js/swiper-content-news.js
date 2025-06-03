import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
let isSwapped = false;
const width = window.innerWidth;

const newsContentSwiper = new Swiper('.news__content-swiper', {
  modules: [Navigation, Pagination, Grid],
  direction: 'horizontal',
  loop: false,
  autoHeight: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  grid: { rows: 2 },
  navigation: {
    nextEl: '.news__content-next-slide',
    prevEl: '.news__content-prev-slide',
  },
  breakpoints: {
    768: {
      slidesPerView:2,
      slidesPerGroup:2,
      grid:{rows:2},
      spaceBetween:30,
    },
    1440:{
      slidesPerView:'auto',
      slidesPerGroup:3,
      grid:{rows:1},
      spaceBetween:32,
    }
  }
});

// newsContentSwiper.on('slideChange', () => {
//   const buttons = document.querySelectorAll('.news__content-pagination button');
//   buttons.forEach((button, index) => {
//     button.classList.toggle('active', index === newsContentSwiper.realIndex);
//   });
// });

function swapSlides() {

  if (width >= 768 && width < 1440 && !isSwapped) {
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

window.addEventListener('load', swapSlides);
window.addEventListener('resize', swapSlides);
