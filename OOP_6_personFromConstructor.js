// create an instance of PersonConstructor with new and the constructor function
// using dot notation, add name and age properties and assign arguments to them

function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
	let obj = new PersonConstructor();
  obj.name = name;
  obj.age = age;
  return obj;
}

const mike = personFromConstructor('Mike', 30);

// Uncomment these lines to check your work!
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); // -> Logs 30
mike.greet(); // -> Logs 'hello'
