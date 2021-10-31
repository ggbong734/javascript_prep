// get the minimum number of trues needed, if arr length is even, minTrues would be arr/2 + 1, else if arr length is odd, minTrues would be arr/2 rounded up.
// initialize a counter to track the number of trues
// then loop through each element in array and apply callback to each element
// at any time if number of trues equals or exceed threshold number then exit
// if at the end number of true equals arr.length - trues then return false

function majority (arr, callback) {
  let minTrues;
  if (arr.length % 2 === 0) {
  	minTrues = arr.length/2 + 1;
  } else {
    minTrues = Math.round(arr.length/2);
  }
  let counter = 0;
  for (let i =0; i<arr.length; i++) {
    if (callback(arr[i])) {
      counter += 1;
    }
    if (counter >= minTrues) {
      return true;
    }
  }
  return false;
}

// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
