// map is for transformations, gives an array the exact same length as the one you gave it

const dogs = ['Stella', 'Duff', 'Phoebe', 'Max', 'Dan', 'Dioji', 'Tootsie'];

const mapped = dogs.map((dog) => {
  return `${dog} needs a walk`;
});

console.log(mapped);

const ourMap = (arr, callback) => {
  const newArray = [];

  // iterate through an array
  for (const element of arr) {
    // call a callback for each element in the array
    const returnVal = callback(element);
    // take the callback's return value and push it into another array
    newArray.push(returnVal);

    // newArray.push(callback(element));
  }

  return newArray;
};

console.log();

const mappedDogs = ourMap(dogs, (dog) => {
  return `${dog} needs a treat`;
});

const mappedDogs2 = ourMap(dogs, dog => `${dog} needs a treat`);


console.log(mappedDogs);
