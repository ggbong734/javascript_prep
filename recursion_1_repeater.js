console.log('Hello, world!');


// optimal solution does not use a counter or an inner function
function repeater(char) {
    if (char.length === 5) return char;
  	return repeater(char + char[0]);
}

// my own solution is not as efficient: :p
// define a function repeater
// in addition to the char argument, add an argument counter to keep track of how many times functions has been run
// set default value of counter to 0 so the argument is optional for users
// increment the counter when the  function runs
// create a base case when the counter reaches 5, it outputs the char
// in the return we concat the char with the function repeater so that at each recursion loop we add a char to the output string
// remember to include the updated counter in the function argument
// this is the parameter/argument as storage method of recursion

function repeater(char, counter = 0) {
    counter++;
  	if (counter === 5) return char;
  	return char + repeater(char, counter);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));
