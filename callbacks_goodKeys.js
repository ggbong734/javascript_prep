// initialize a new array
// loop through each key in the object (using key in obj) and perform callback on the corresponding value
// if result of callback run is true, push the key into the new array.

function goodKeys(obj, callback) {
  const newArr = [];
  for (let key in obj) {
    let result = callback(obj[key]);
    if (result) newArr.push(key);
  }
  return newArr;
}
// Uncomment these to check your work!
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']
