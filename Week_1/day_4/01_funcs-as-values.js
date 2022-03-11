// function sayHello(name) {
//   console.log(`hello there ${name}`);
// }

const a = 5;
const b = a;

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello('Alice');

const anotherThing = sayHello;

// anotherThing('Bob');
// console.log(anotherThing.toString());

// anotherThing.secretMessage = 'hello world';
// anotherThing['secretMessage'] = 'hello world';

// console.log(anotherThing);

const funcs = [];
funcs.push(anotherThing);
// console.log(funcs);

// const anotherName = funcs[0];
// anotherName('Carol');

funcs[0]('Carol');
