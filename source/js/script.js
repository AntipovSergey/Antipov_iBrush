const defaulSelect = () => {
  const element = document.querySelector('.comments__book');
  const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
  });
}

defaulSelect();

const choices = document.querySelector('.choices');
let options = document.querySelectorAll('.choices__item');

choices.addEventListener('click', () => {
    options[3].classList.add('is-selected');
})

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
