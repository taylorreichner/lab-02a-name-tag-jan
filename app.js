const textButton = document.getElementById('textButton');
const newName = document.getElementById('newName');
const userInput = document.getElementById('userInput');


textButton.addEventListener('click', () => {
   newName.textContent = userInput.value;
});

const blueButton = document.getElementById('blueButton');
const blueInput = document.getElementById('blueInput');
const blueInput2 = document.getElementById('blueInput2')

blueButton.addEventListener('click', () => {
    blueInput.style.backgroundColor = 'blue';
    blueInput2.style.backgroundColor = 'blue';
 });

 const redButton = document.getElementById('redButton')

 redButton.addEventListener('click', () => {
    blueInput.style.backgroundColor = 'red';
    blueInput2.style.backgroundColor = 'red';
 });
 const newP = document.getElementById('newP')
 const pButton = document.getElementById('pButton')
 const pInput = document.getElementById('pInput')

 pButton.addEventListener('click', () => {
    newP.textContent = pInput.value;
 });

