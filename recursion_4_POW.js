// define function pow with base and exponent as arguments, and product to keep track of product so far
// establish base case as exponent = 0, return product which has a default value of 1
// return the function recursively with the same base, exponent subtracted by 1, and the product is updated to be product * base to account for the 1 value in exponent
// this has tail call optimization

function pow(base, exponent, product = 1) {
	if (exponent === 0) return product;
  return pow(base, exponent - 1, product*base);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243
