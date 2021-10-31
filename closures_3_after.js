// define after as a function with two arguments, a number and a callback function
// initialize a variable called counter and set it to zero
// define a function monitoredCb with an argument that is variable
// increment counter when invoking this function
// then check if counter is equal or more than the num
// if so run the callback function with arg as the argument. otherwise do nothing.
// then in the after function context, return monitoredCb function as the output to after.

function after(num, callback) {
	let counter = 0;
  function monitoredCb(...arg) {
    counter++;
    if (counter >= num) {
      return callback(...arg);
    }
  }
  return monitoredCb;
}


const called = function(string) { return('hello ' + string); };
const afterCalled = after(3, called);

// UNCOMMENT THESE LINES TO TEST YOUR WORK
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> undefined is printed
console.log(afterCalled('world')); // -> 'hello world' is printed
