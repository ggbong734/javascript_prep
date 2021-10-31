// define function saveOutput with two arguments, a callback, and a password.
// initialize an empty object to store values passed into callback
// define a new variable storedPassword as the string password. To keep track if the entered password match the argument in callback
// saveOutput returns a function
// in this inner function, check if the argument passed is the same as the storedPassword. If it is, return the object
// otherwise pass the argument into the callback function, save the result in the object with the argument as key, then return the result as output of the inner function.

function saveOutput(callback, password) {
  let obj = {};
  let storedPassword = password;
  return function(arg) {
    if (arg === storedPassword) {
    	return obj;
    }
    let result = callback(arg);
    obj[arg] = result;
    return result;
  }
}

// Uncomment these to check your work!
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // should log: 4
console.log(multBy2AndLog(9)); // should log: 18
console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }
