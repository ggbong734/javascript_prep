// define a function censor with no argument
// declare an array in the local context for censor to store all instances of first strings when there are two string arguments
// declare another array for the second argument
// returns a function accept two or one string
// with two string function saves the two strings
// with one string give, returned function returns the same string, but all instances of a the saved first string will be replaced with the saved second string
// loop through each element in firstStrings using index as counter. replace each instance of the word from firstStrings with corresponding word from second Strings at the same index.

function censor () {
  let firstStrings = [];
  let secondStrings =[];
  return function(string1, string2) {
    if (typeof(string2) !== 'undefined') {
      firstStrings.push(string1);
      secondStrings.push(string2);
    } else {
      for (let i=0; i<firstStrings.length; i++) {
        string1 = string1.replace(firstStrings[i], secondStrings[i]);
      }
      return string1;
    }
  }
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'
