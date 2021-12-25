// initialize a new object
// loop through each element in array.....
// create key with each element
// set value as the output from callback function with element passed as argument

function arrToObj(array, callback) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = callback(array[i]);
  }
  return obj
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }
