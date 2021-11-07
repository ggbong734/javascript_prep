// use Object create to create a new object using personStore as prototype
// add name and age property to the new object and assign arguments to these keys
// return object as output of the function

const personStore = {
  greet: function() {
    console.log('hello');
  }
}

function personFromPersonStore(name, age) {
	// add code here
	let obj = Object.create(personStore)
  obj.name = name;
  obj.age = age;
  return obj;
}

const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'
