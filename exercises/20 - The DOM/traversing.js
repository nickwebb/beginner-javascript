const nick = document.querySelector('.Nick');

// console.log(nick.firstElementChild);
// console.log(nick.lastElementChild);
// console.log(nick.previousElementSibling);
// console.log(nick.nextElementSibling);
// console.log(nick.parentElement);

// console.log(nick.children);
// console.log(nick.childNodes);

const p = document.createElement('p');
p.textContent = 'I will be removed';
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
