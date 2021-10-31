// initialize a new object
// loop through arr and pass each element into callback
// check if result already exists in the object as key (use result in obj)
// if not create new key with 1 as the value
// if already exists add 1 to the value

function countBy(arr, callback) {
  let obj = {};
  for (let i=0; i<arr.length; i++) {
    let result = callback(arr[i]);
    if (result in obj) {
      obj[result] += 1;
    } else {
      obj[result] = 1;
    }
  }
  return obj;
}

// Uncomment these to check your work!
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
const nums = [1, 2, 3, 4, 5];
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }
