// define a function flow with two input parameters
// set up base cases, when no function in array, return input
// return the flow function recursively with the input updated to be the output of first function with the input as input, and the funcArray is sliced to exclude the first function.
// this is tail call optimized as it does not need to remember anything in the outer scope

function flow(input, funcArray) {
	if (funcArray.length === 0) return input;
  return flow(funcArray[0](input), funcArray.slice(1))
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7
