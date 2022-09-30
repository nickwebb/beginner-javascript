const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute Pup`;

const myHTML = `
    <div class="wrapper">
        <h2>Cute ${desc}</h2>
        <img src="${src}" alt="${desc}" />
    </div>
    `;

const myFragment = document.createRange().createContextualFragment(myHTML);

console.log(myFragment);

document.body.appendChild(myHTML);
