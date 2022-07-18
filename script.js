const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function () {
  document.getElementById('myDropdown').classList.toggle('show');
});

const HamBurger = document.querySelector('.ham-container');

HamBurger.addEventListener('click', function () {
  document.getElementById('myHamburger').classList.toggle('change');
});
