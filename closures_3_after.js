// define a function after with two arguments, num and callback
// returns an anonymous function which can take any argument, so we pass in with rest parameter
// declare a variable in the local execution context of the function, call it counter = 0
// this helps us keep track of number of times we have run the function
// in the inner function, we increment counter
// then we run an if statement to check if the counter is more or equal to num, if so, we return the callback with the argument passed in


function after(num, callback) {
  let counter = 0;
  return function (...arg) {
    counter += 1;
    console.log(counter);
    if(counter >= num) {return callback(...arg);}
  }
}

const callb = function (string) {return ('hello' + string);};
const myFunc = after(3, callb);

console.log(myFunc('world'));
console.log(myFunc('world'));
console.log(myFunc('world'));
