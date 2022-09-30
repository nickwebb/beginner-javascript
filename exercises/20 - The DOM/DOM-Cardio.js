// Make a div
const wrapper = document.createElement('div');

// add a class of wrapper to it
wrapper.classList.add('wrapper');

// put it into the body
document.body.insertAdjacentElement('afterbegin', wrapper);

// make an unordered list
const list = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const it1 = document.createElement('li');
const it2 = document.createElement('li');
const it3 = document.createElement('li');

it1.textContent = 'one';
it2.textContent = 'two';
it3.textContent = 'three';

list.append(it1);
list.append(it2);
list.append(it3);

// put that list into the above wrapper
wrapper.appendChild(list);

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/200';

// set the width to 250
img.width = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';

// Append that image to the wrapper
wrapper.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const para = document.createElement('div');
para.innerHTML = `
                    <p>Hello I am Nick</p>
                    <p>I am awesome!</p>
                    `;

// put this div before the unordered list from above
list.insertAdjacentElement('afterbegin', para);

// add a class to the second paragraph called warning

para.childNodes[3].classList.add('warning');

// remove the first paragraph

para.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
  const card = document.createElement('div');
  card.classList.add('playerCard');
  card.innerHTML = `
        <h2>${name} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!</p>
                    `;
  return card;
}

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// cards.style.margin(2);

// make 4 player cards using generatePlayerCard

const nick = generatePlayerCard('Nick', 38, '1.74m');
const hannah = generatePlayerCard('Hannah', 38, '1.65m');
const george = generatePlayerCard('George', 8, '1.20m');
const molly = generatePlayerCard('Molly', 5, '1.02m');

// append those cards to the div
cards.append(nick);
cards.append(hannah);
cards.append(george);
cards.append(molly);

// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
const button4 = document.createElement('button');
button1.textContent = 'Delete';
button2.textContent = 'Delete';
button3.textContent = 'Delete';
button4.textContent = 'Delete';
button1.type = 'button';
button2.type = 'button';
button3.type = 'button';
button4.type = 'button';

nick.append(button1);
hannah.append(button2);
george.append(button3);
molly.append(button4);

const remove1 = () => nick.remove();
const remove2 = () => hannah.remove();
const remove3 = () => george.remove();
const remove4 = () => molly.remove();

button1.addEventListener('click', remove1);
button2.addEventListener('click', remove2);
button3.addEventListener('click', remove3);
button4.addEventListener('click', remove4);

// select all the buttons!
// make out delete function
// loop over them and attach a listener
