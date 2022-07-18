const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
  document.getElementById('myDropdown').classList.toggle('show');
});

const HamBurger = document.querySelector('.ham-container');

HamBurger.addEventListener('click', () => {
  document.getElementById('myHamburger').classList.toggle('change');
});
