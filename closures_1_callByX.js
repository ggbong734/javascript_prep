// define function addbyX with a num as argument
// initialize a variable sum in the local contextual environment (variable environment) to serve as the sum. Assign the number argument to this variable
// define another function to add a different num2 argument to sum
// return the updated sum value

function addByX(num) {
  let sum = num;
  function incrementSum(num2) {
    sum += num2;
    return sum;
  }
  return incrementSum;
}

const addByTwo = addByX(2);

// Now call addByTwo with an input of 1 and log the output
console.log(addByTwo(1));

// Now call addByTwo with an input of 2 and log the output
console.log(addByTwo(2));
