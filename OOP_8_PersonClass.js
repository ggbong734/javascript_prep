// for this class, add a constructor and use this to add a property to the class
// then add a method greet in the class body, outside of the constructor.

class PersonClass {
	constructor(name) {
    // add code here
    this.name = name;
	}

	// add code here
  greet() {
    console.log("hello")
  }

}

const george = new PersonClass('George');

// Uncomment this line to check your work!
george.greet(); // -> Logs 'hello'
