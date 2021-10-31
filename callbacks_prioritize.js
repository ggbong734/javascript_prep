// initialize two arrays: trueArr and falseArr
// loop through each element in arr and pass each element to callback
// if true, push into trueArr but if not push into falseArr
// concatenate trueArr with falseArr to create the result array

function prioritize(arr, callback) {
  let trueArr = [];
  let falseArr = [];
  for(let i=0; i<arr.length; i++) {
    if (callback(arr[i])) {
			trueArr.push(arr[i]);
    } else {
      falseArr.push(arr[i]);
    }
  }
  return trueArr.concat(falseArr);
}

// Uncomment these to check your work!
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
