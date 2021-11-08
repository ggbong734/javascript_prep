// add a method to the constructor using the Constructor.Prototype.method approach


function PersonConstructor() {
  this.greet = function() {
    console.log('hello');
  }
}

function personFromConstructor(name, age) {
  const person = new PersonConstructor();
  person.name = name;
  person.age = age;
  return person;
}

const mike = personFromConstructor('Mike', 30);

// add code here
PersonConstructor.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`)
}


// Uncomment this line to check your work!
mike.introduce(); // -> Logs 'Hi, my name is Mike'
