// use reduce on arrOfArrays
// a is the first arr and b is the second arr. It returns a single arr: newArr.
// start with accumulator a. Loop through array a, push each element into newArr.
// Then loop through array b. If element is not in newArr, push into newArr.

function union (arrOfArrays) {
  return arrOfArrays.reduce( (a,b) => {
    let newArr = [];
    for(let i=0; i<a.length; i++) {
      newArr.push(a[i]);
    }
    for(let i=0; i<b.length;i++) {
      	if(!newArr.includes(b[i]))  newArr.push(b[i]);
    }
    return newArr;
  });
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]
