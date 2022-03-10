const sayHello = function(name) {
  console.log(`hello there ${name}`);

  const anotherFunc = function() {};
};

const addTwo = function(num) {
  console.log(num + 2);
};

const runMyFunc = function(anotherFunc) {
  console.log('inside runMyFunc');
  if (typeof anotherFunc === 'function') {
    anotherFunc('Dean'); // console.log('Dean')
  }
  // console.log(anotherFunc.toString());
};

runMyFunc(sayHello);

const returnVal = sayHello('Elise');
runMyFunc(returnVal); // undefined

// runMyFunc(addTwo);
// runMyFunc(console.log);
