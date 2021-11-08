// create a new property for personStore called introduce and add a function to console log the string

const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
	const person = Object.create(personStore);
  person.name = name;
  person.age = age;
  return person;
}

const sandra = personFromPersonStore('Sandra', 26);

// add code here
personStore.prototype.introduce = function () {
  console.log(`Hi, my name is ${this.name}`)
}

// Uncomment this line to check your work!
sandra.introduce(); // -> Logs 'Hi, my name is Sandra'
