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
