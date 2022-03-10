const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// () => {} // fat arrow
// () -> {} // thin arrow

const sayHello2 = name => `just to prove it hello there ${name}`;

const returnVal = sayHello2('Bob');
console.log('returnVal', returnVal);

// benefits of arrow functions
// 1. no need for the function keyword
// 2. if there's only one arg, you can omit the parens
// 3. if it's only one line of code, you don't need the curly braces
// 4. implicit return

// cons of arrow functions
// 1. the keyword `this`
