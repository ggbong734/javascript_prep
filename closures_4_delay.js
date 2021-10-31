// define a function delay that takes in two arguments: callback and waitTime
// in the function return a function that has no argument (based on the sample code below)
// the inner function waits for the waitTime before running callback. It has not return value.
// if the inner function has arguments, it would be passed as the third and additional arguments in the setTimeout function.

function delay(callback, waitTime) {
  return function () {
    setTimeout(callback, waitTime);
  }
}

// UNCOMMENT THE CODE BELOW TO TEST DELAY
let count = 0;
const delayedFunc = delay(() => count++, 1000);
delayedFunc();
console.log(count); 												 // should print '0'
setTimeout(() => console.log(count), 1000); // should print '1' after 1 second
