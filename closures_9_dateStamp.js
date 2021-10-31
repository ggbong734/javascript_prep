// define a dateStampe function with a function as argument
// returns a function
// the arguments to the inner function can be more than one. use rest parameter/
// declare an object in the local dateStamp context outside of the inner function to store the object in the closure
// add a date key with today's date as value
// add another key output with the result of the function as the value
// inner function will return the object

function dateStamp(callback) {
  const obj = {};
  return function (...args) {
    obj['date'] = new Date().toDateString();
    obj['output'] = callback(...args);
    console.log(obj['date']);
    return obj;
  }
}


// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }
