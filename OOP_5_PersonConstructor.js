// use this to create a new property in the constructor and log the string hello

function PersonConstructor() {
	// add code here
  this.greet = function () {console.log("hello")}
}

const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'
