// const p = document.querySelector('p');
// const div = document.querySelectorAll('div');
// const heading = document.querySelector('h2');
// heading.textContent = 'Nick is cool';
// console.dir(heading.textContent);

// const pizzaList = document.querySelector('.pizza');

// console.log(pizzaList.textContent);

// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin', '🍕');
// pizzaList.insertAdjacentText('beforeend', '🍕');

// Classes!

const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);

pic.alt = 'Cute Pup';
pic.width = 200;

pic.setAttribute('alt', 'Really Cute Pup');
console.log(pic.getAttribute('alt'));

const custom = document.querySelector('.custom');

console.log(custom.dataset);

custom.addEventListener('click', () => {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});
