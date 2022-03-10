const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// const username = 'Alice';
// sayHello(username);

// sayHello('Bob');
// sayHello([]);
// sayHello({});

const runMyFunc = function(anotherFunc) {
  anotherFunc('Dean');
};

runMyFunc(sayHello);

runMyFunc(function(val) {
  console.log(`this is the val ${val}`);
});
