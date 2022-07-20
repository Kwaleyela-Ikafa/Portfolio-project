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

let modalInformation  = {
  title: 'Keeping track of hundreds  of components website',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  imageSrc: src="./images/SnapshootPortfolio.png",
  button1: 'See Live <img src="./images/Icons/IconExport.png">',
  button2: 'See Source <img src="./images/Icons/IconGitHub.png">'
}

let div1 = document.createElement('div');
div1.id = 'myModal';
div1.className = 'modal';
// append section to the document
document.body.appendChild(div1);

let div = document.createElement('div')
div.className = 'modal-content';
div1.appendChild(div);

let div2 = document.createElement('div')
div2.className = 'modal-header';
div.appendChild(div2);

let h2 = document.createElement('h2');
h2.className = 'modal-h2'
h2.textContent = modalInformation.title;
div2.appendChild(h2);


let span = document.createElement('span');
span.className = 'close';
span.innerHTML = "&times;";
div2.appendChild(span);

let div3 = document.createElement('div');
div3.className = 'modal-body';
div.appendChild(div3);

let img = document.createElement('img');
img.src = modalInformation.imageSrc;
div3.appendChild(img)

let p = document.createElement('p');
p.className = 'modal-p';
p.textContent = modalInformation.description;
div3.appendChild(p)

let button = document.createElement('button');
button.className = 'modal-button';
button.innerHTML = modalInformation.button1;
div3.appendChild(button)

let button2 = document.createElement('button');
button2.className = 'modal-button2';
button2.innerHTML = modalInformation.button2;
div3.appendChild(button2)

// Get the modal
div1 = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  div1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  div1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == div1) {
    div1.style.display = "none";
  }
}