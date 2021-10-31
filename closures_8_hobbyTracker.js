// defining hobby tracker with an array argument
// declare an object
// loop through the hobbies array and add each element as key into object
// initialize each value as zero
// return a function which takes in two arguments: a string and a num
// then in the inner function, we will check if the argument exists using typeof undefined
// if exists we check if the hobby exists in the object, if so we add the number of hours into the existing value
// if doesnt exist, we define a new key in the object with the num as value
// Otherwise if there is no argument, we set all values in the object to zero and return the string "tracker has been reset"

function hobbyTracker(hobbies) {
  const cache = {};
  for (let el of hobbies) {
    cache[el] = 0;
  }
  return function(string, num) {
    if (typeof(string) === 'undefined' && typeof(num) ==='undefined') {
      for (let key in cache) {cache[key] = 0;}
      return 'tracker has been reset!';
    }
    if (string in cache) {
      cache[string] += num;
    } else {
      cache[string] = num;
    }
    return cache;
  }
}

// Uncomment the code below to check your code:
const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
updateHobbies('yoga', 2);
updateHobbies('baking', 4);
updateHobbies('yoga', 1);
console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
console.log(updateHobbies()); // --> 'tracker has been reset!'
console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}
