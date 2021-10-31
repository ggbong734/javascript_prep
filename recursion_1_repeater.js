console.log('Hello, world!');


// define a function repeater
// define an inner function that keeps track of the num of times function has been run
// it includes an argument for counter to know how many times the function has been run
// increment the counter as soon as the inner function runs
// create a base case when the counter reaches 5, it outputs the char
// in the return we concat the char with the function repeater so that at each recursion loop we add a char to the output string


function repeater(char) {
  function repeaterInner(char, counter) {
    counter++;
    if (counter === 5) return char;
  	return char + repeaterInner(char, counter);
  }
  return repeaterInner(char, 0);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g'));
console.log(repeater('j'));
