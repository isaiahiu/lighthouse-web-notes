const dogs = ['Stella', 'Duff', 'Phoebe', 'Max', 'Dan', 'Dioji', 'Tootsie'];

dogs.forEach((dog) => {
  console.log(`who is a good dog? ${dog} is`);
});

const ourForEach = (arr, callback) => {
  // iterate through a given array
  for (const element of arr) {
    // call a provided callback for each element in the array
    callback(element);
  }
};

console.log();

ourForEach(dogs, (dog) => {
  console.log(`${dog} is still a good dog`);
});

for (const dog of dogs) {
  console.log(`${dog} is still a good dog`);
}
