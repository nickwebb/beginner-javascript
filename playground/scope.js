// const age = 100;

// function go() {
//   const myage = 200;
//   const hair = 'blonde';
//   console.log(myage);
//   console.log(hair);
// }

// go();
// console.log(age);

const dog = 'snickers';

function logDog() {
  console.log(dog);
}

function goDog() {
  const dog = 'sunny';
  logDog();
}

goDog();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}

yell();
