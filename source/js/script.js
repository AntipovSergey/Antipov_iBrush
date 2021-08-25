// Селект

const defaulSelect = () => {
  const element = document.querySelector('.comments__book');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
  });
}

defaulSelect();

// Слайдер

const swiper = document.querySelector('.swiper-container')

const mySwiper = new Swiper(swiper, {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});
