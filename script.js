const hamburger = document.querySelector('.hamburger');
// const HamBurger = document.querySelector('.ham-container');

hamburger.addEventListener('click', () => {
  document.getElementById('myDropdown').classList.toggle('show');
  document.getElementById('myHamburger').classList.toggle('change');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  document.getElementById('myDropdown').classList.remove('show');
  document.getElementById('myHamburger').classList.remove('change');
}));

const modalInformation = {
  title: 'Keeping track of hundreds  of components website',
  title2: 'Multi Post Stories',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  imageSrc: './images/SnapshootPortfolio.png',
  button1: 'See Live <img src="./images/Icons/IconExport.png">',
  button2: 'See Source <img src="./images/Icons/IconGitHub.png">',
  li: 'html',
  li2: 'Bootstrap',
  li3: 'Ruby on rails',
}

let div1 = document.createElement('div');
div1.id = 'myModal';
div1.className = 'modal';
document.body.appendChild(div1);

const div = document.createElement('div');
div.className = 'modal-content';
div1.appendChild(div);

const div2 = document.createElement('div');
div2.className = 'modal-header';
div.appendChild(div2);

const h2 = document.createElement('h2');
h2.className = 'modal-h2';
h2.textContent = modalInformation.title;
div2.appendChild(h2);

const h22 = document.createElement('h2');
h22.className = 'modal-h22';
h22.textContent = modalInformation.title2;
div2.appendChild(h22);

let span = document.createElement('span');
span.className = 'close';
span.innerHTML = "&times;";
div2.appendChild(span);

const div3 = document.createElement('div');
div3.className = 'modal-tags';
div2.appendChild(div3);

const ul = document.createElement('ul');
ul.className = 'ul-tags';
div3.appendChild(ul);

const li = document.createElement('li');
li.className = 'tags1';
li.innerHTML = modalInformation.li;
ul.appendChild(li);

const li2 = document.createElement('li');
li2.className = 'tags2';
li2.innerHTML = modalInformation.li2;
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.className = 'tags3';
li3.innerHTML = modalInformation.li3;
ul.appendChild(li3);

const div4 = document.createElement('div');
div4.className = 'modal-body';
div.appendChild(div4);

const img = document.createElement('img');
img.className = 'modal-image';
img.src = modalInformation.imageSrc;
div4.appendChild(img);

const p = document.createElement('p');
p.className = 'modal-p';
p.textContent = modalInformation.description;
div4.appendChild(p);

const button = document.createElement('button');
button.className = 'modal-button';
button.innerHTML = modalInformation.button1;
div4.appendChild(button);

const button2 = document.createElement('button');
button2.className = 'modal-button2';
button2.innerHTML = modalInformation.button2;
div4.appendChild(button2);

// Get the modal
div1 = document.getElementById('myModal');
const btn = document.getElementById('myBtn');
span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
btn.onclick = () => {
  div1.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = () => {
  div1.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === div1) {
    div1.style.display = 'none';
  }
}