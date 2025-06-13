import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
const paginationContainer = document.querySelector('.news__content-pagination');
let isSwapped = false;


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

function swapSlides() {
  const width = window.innerWidth;
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


function getCurrentSettings() {
  const currentWidth = window.innerWidth;
  if (currentWidth >= 1440) {
    return { slidesPerGroup:3, slidesPerView: 3, rows:1 };
  } else if (currentWidth >= 768) {
    return { slidesPerGroup:2, slidesPerView:2, rows:2 };
  } else {
    return { slidesPerGroup:1, slidesPerView:1, rows:2 };
  }
}

function getVisibleSlides() {
  const settings = getCurrentSettings();

  const slidesPerView = settings.slidesPerView === 'auto' ? settings.slidesPerGroup : settings.slidesPerView;

  return slidesPerView * settings.rows;
}

function getTotalPages() {
  const totalSlides = newsContentSwiper.slides.length;
  const settings = getCurrentSettings();
  const visibleSlides = getVisibleSlides();

  if (visibleSlides >= totalSlides) {
    return 1;
  }

  if (settings.rows > 1) {
    return Math.ceil(totalSlides / (settings.slidesPerGroup * settings.rows));
  }

  return Math.ceil(totalSlides / settings.slidesPerGroup);
}

function renderPagination(currentPage) {
  paginationContainer.innerHTML = '';

  const totalPages = getTotalPages();

  let startIndex;

  if(totalPages <= 4){
    startIndex = 0;
  } else{
    if(currentPage < 3){
      startIndex = 0;
    } else if(currentPage >= totalPages - 2){
      startIndex = totalPages - 4;
    } else{
      startIndex = currentPage - 2;
    }

  }

  const endIndex = Math.min(startIndex + 4, totalPages);

  for(let i = startIndex; i < endIndex; i++){
    const btn = document.createElement('button');
    btn.textContent = i + 1;
    btn.classList.add('news__pagination-btn');
    if(i === currentPage) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', ()=>{
      const settings = getCurrentSettings();
      newsContentSwiper.slideTo(i * settings.slidesPerGroup);
    });

    paginationContainer.appendChild(btn);
  }
}

renderPagination(Math.floor(newsContentSwiper.activeIndex / getCurrentSettings().slidesPerGroup));
newsContentSwiper.on('slideChange', ()=>{
  renderPagination(Math.floor(newsContentSwiper.activeIndex / getCurrentSettings().slidesPerGroup));
});
window.addEventListener('resize', ()=>{
  renderPagination(Math.floor(newsContentSwiper.activeIndex / getCurrentSettings().slidesPerGroup));
});
