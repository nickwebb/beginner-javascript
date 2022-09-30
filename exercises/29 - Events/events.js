const butts = document.querySelector('.butts');
const coolButton = document.querySelector('.cool');

function handleClick() {
  console.log('IT GOT CLICKED BABEY!');
}

butts.addEventListener('click', handleClick);
coolButton.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick);

function buyItem() {
  console.log('BUYING ITEM');
}

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log('you clicked the button');
  const button = event.target;
  console.log(button.textContent);
  console.log(parseFloat(event.target.dataset.price));
}

buyButtons.forEach((buyButton) => {
  buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener(
  'click',
  (event) => {
    console.log('you clicked da window mf');
    console.log(event.target);
    event.stopPropagation();
  },
  { capture: true }
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', (e) => {
  console.count(e.currentTarget);
});
