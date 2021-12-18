// ADD CODE HERE...

function pluralize(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] + "s"
  }
  return newArr
}
// Uncomment these to check your work!
const animals = ["dog", "cat", "tree frog"];
console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]


// define function takes in an array of strings
// it will loop through each string in the array and concat an s to the string

let strings = ['dog', 'cat', 'man dog']


function pluralize(arr) {
  let newArr = [];
  arr.forEach((string, idx, array) => newArr[idx] = string.concat('s'));
  return newArr
}

console.log(pluralize(strings));

let newArr = ['human', 'tiger', 'lion']

function pluralizer(arr) {
  let outputArr = [];
  for (let i = 0; i < arr.length; i++) {
    outputArr[i] = arr[i] + "s";
  }
  return outputArr;
}

console.log(pluralizer(newArr));
