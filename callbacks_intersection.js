// my original solution
// function intersection (arrOfArrays) {
//   let newArr = []
//   for (let i =0; i<arrOfArrays[0].length; i++) {
//     let goodEl = true;
//     for (let j=1; j<arrOfArrays.length; j++) {
//       if(!arrOfArrays[j].includes(arrOfArrays[0][i])) {
//         goodEl = false;
//       }
//     }
//     if (goodEl) {
//       newArr.push(arrOfArrays[0][i])
//     }
//   }
//   return newArr;
// }

// solution from the CodeSmith instructor
// https://www.youtube.com/watch?v=Xm-rT8ncaTc
function intersection (arrOfArrays) {
  let acc = arrOfArrays.pop();

  while (arrOfArrays.length > 0) {
  	let current = arrOfArrays.pop();
    let newArr = [];
    acc.forEach((element) => {
    	if (current.includes(element)) newArr.push(element);
    })
    acc = newArr;
  }
  return acc;
}

// apply reduce to arrOfArrays
// accumulator is automatically selected as the first array in arrOfArrays
// each step of reduce compares the accumulator with the next array and returns a single array as output
// we check each element in array a and if the element exists in array b, we push it to the output array
// this way the arrOfArrays will be reduced to a single array with elements that are contained in every array
function intersection(arrOfArrays) {
  return arrOfArrays.reduce((a, b) => {
    let newArr = [];
    for(let i=0; i < a.length; i++) {
      if (b.includes(a[i])) newArr.push(a[i]);
    }
    return newArr;
  })
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];
console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
