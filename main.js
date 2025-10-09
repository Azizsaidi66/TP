let div = document.querySelector('#maDiv');
div.textContent = 'new text';
let button = document.querySelector('#monBouton');
button.textContent = 'new button text';

let p = document.createElement('p');
p.textContent = "new p";
div.appendChild(p);

let b = document.createElement('button2');
b.textContent = "new button"
document.body.appendChild(b);
b.style.backgroundColor = "crimson";
b.style.fontSize = "20px";
b.style.borderraduis = "10px"

let button2 = document.querySelector("#monBouton");
button2.addEventListener("click", function() {
  document.querySelector("#maDiv").innerText = "Le texte a changé !";
});
