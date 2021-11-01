// define function factorial
// set up base case, when num is zero or one, return 1
// return num multiplied by a recursive call to factorial with num-1 as argument
// this is not a good solution, because it is not tail call optimized, it will require much more storage
// per call to keep track of num in the upper recursions.

function factorial(num) {
	if (num <= 1) return 1;
  return num * factorial(num-1);
}

//alternative solution provided by Codesmith
// using parameter as storage method
// better approach - tail call optimized
function factorial(num, product = 1) {
    if (num <= 1) return product;
    return factorial(num-1, product*num);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(factorial(4)); // -> 24
console.log(factorial(6)); // -> 720
console.log(factorial(0)); // -> 1
