// Create a class Developer Class and extend Person Class
// add the constructor, pass in argument name, and use super(name) to call the super class constructor
// add introduce method to log 'Hello World...'

class PersonClass {
	constructor(name) {
    this.name = name;
	}

	greet() {
    console.log('hello');
  }
}

// add code here
class DeveloperClass extends PersonClass {
  constructor(name){
    super(name); // call the super class constructor and pass in the name parameter
  }

  introduce() {
    console.log(`Hello World, my name is ${this.name}`);
  }
}

const thai = new DeveloperClass('Thai', 32);

// Uncomment these lines to check your work!
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); // -> Logs 'Hello World, my name is Thai'
