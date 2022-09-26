console.log('it works!');

const myParagraph = document.createElement('p');
myParagraph.textContent = 'I am a P';
myParagraph.classList.add('special');
console.log(myParagraph);

const myImage = document.createElement('img');
myImage.src = 'https://picsum.photos/500';
myImage.alt = 'Nice photo';

const myDiv = document.createElement('div');
myDiv.classList.add('wrapper');
console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myParagraph);
myDiv.appendChild(myImage);

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('afterbegin', heading);

// 5 items of <li><ul>

const ulItem = document.createElement('ul');
const liItem1 = document.createElement('li');
const liItem2 = document.createElement('li');
const liItem3 = document.createElement('li');
const liItem4 = document.createElement('li');
const liItem5 = document.createElement('li');

liItem1.textContent = 'one';
liItem2.textContent = 'two';
liItem3.textContent = 'three';
liItem4.textContent = 'four';
liItem5.textContent = 'five';

ulItem.appendChild(liItem1);
ulItem.appendChild(liItem2);
ulItem.appendChild(liItem3);
ulItem.appendChild(liItem4);
ulItem.appendChild(liItem5);

document.body.insertAdjacentElement('beforebegin', ulItem);
