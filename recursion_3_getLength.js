// define function with array as argument, also add length parameter to keep track of length. Set default length to zero
// base case if first element of array is undefined, return 0 or the default length in this case
//return the function recursively, this time updating the array to exclude the first element, and to add one to the length counter
// this has tail call optimization since we are storing the length in a parameter

function getLength(array, length = 0) {
	if (typeof(array[0]) === 'undefined') return length;
  return getLength(array.slice(1), length + 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
