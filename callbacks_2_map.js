// ADD CODE HERE

function subtractTwo(num) {
  return num -2
}

function map(arr, callb) {
  let newArr= [];
  for(let i=0; i<arr.length;i++) {
    newArr[i] = callb(arr[i]);
  }
  return newArr
}
// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]


function subtractTwo (num) {
  return num - 2;
}

function map (arr, callback) {
  let newArr = [];
  // arr.forEach((element, i) => newArr[i] = callback(arr[i]))
  // newArr = arr.map(element => callback(element));
  for (let i=0; i<arr.length;i++) {
    newArr[i] = callback(arr[i]);
  }
  return newArr;
}


console.log(map([20,18,16], subtractTwo)); //[18,16,14]
