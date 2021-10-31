// ADD CODE HERE
// define a function
// function returns another function which can accept more than one argument. so need rest parameter to unpack the arguments
// in the inner function, we invoke the callback function with the passed in argument as the first argument and the additional arguments as the remaining arguments.

function defineFirstArg(callback, arg) {
  return function(...args) {
    return callback(arg, ...args);
  }
}
// Uncomment these to check your work!
const subtract = function(big, medium, small) { return big - medium - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(6, 5)); // should log: 15
