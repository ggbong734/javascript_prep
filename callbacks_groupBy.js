// initialize a new object
// pass each element in the array into callback
// check if the result is present as a key in object.
// if not create a new key and add an array with the element as the only item in the array
// if already exists push the ELEMENT in the array in the key

function groupBy (arr, callback) {
  let obj = {};
  for (let i=0; i<arr.length;i++) {
    let result = callback(arr[i]);
    if (result in obj) {
      obj[result].push(arr[i]);
    } else {
      obj[result] = [arr[i]];
    }
  }
  return obj;
}

// Uncomment these to check your work!
const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
