// define a function cycleIterator that takes in one array argument
// define a counter variable to keep track of how many times the callback function is called.
// in the inner function we use counter to get the element of the array at the same index as counter and store it as result.
// increment counter
// check if counter is higher or equal to arr length. If so reset counter to zero.

function cycleIterator(arr) {
  let counter = 0;
  return function() {
    let result = arr[counter];
    counter++;
    if (counter >= arr.length) counter = 0;
    return result;
  }
}
// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'
