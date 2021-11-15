function forEach(arr, callback) {
  for(let i = 0; i<arr.length; i++){
    callback(arr[i]);
  }
}

function map(arr, callback) {
  const newArr = [];
  forEach(arr, (element) => newArr.push(callback(element)));
  return newArr
}
// Uncomment these to check your work!
console.log(typeof forEach); // should log: 'function'
forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]
