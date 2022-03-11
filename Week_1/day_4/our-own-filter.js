const dogs = ['Stella', 'Duff', 'Phoebe', 'Max', 'Dan', 'Dioji', 'Tootsie'];

const filteredDogs = dogs.filter((dog) => {
  return dog.length <= 4;
});

console.log(filteredDogs);


const ourFilter = (arr, callback) => {
  const newArray = [];

  // iterate through the provided array
  for (const element of arr) {
    // call the provided callback for each element in the array
    const returnVal = callback(element);

    // listen to the return value, if true, keep the element
    if (returnVal) {
      newArray.push(element);
    }
  }

  return newArray;
};

const ourFilteredDogs = ourFilter(dogs, (dog) => {
  // return dog[0].toLowerCase() !== 'd';

  if (dog[0].toLowerCase() !== 'd') {
    return true;
  }
});

console.log(ourFilteredDogs);
