// define function runInOrder with two arguments array of Functions and array of Nums
// SetTime out will be passed to WEB API and thread will proceed to run the next function in line, so in order to run the setTimeout in order we need to include the previous wait times in our setTimeout.
// to do this we first declare a variable waitTime = 0
// then we loop through each function in array of function, we add to wait time the desired wait time for that function, which is the element with the same index as the function. this way the waitTime keeps increasing for each subsequent function. and essentially all the setTimeout will be executed at around the same time since the thread will run all them synchronously.
// the eventual result will be in order that we want

function runInOrder(arrOfFuncs, arrOfNums) {
  let waitTime = 0;
  for (let i = 0; i<arrOfFuncs.length; i++) {
    waitTime += arrOfNums[i];
    setTimeout(arrOfFuncs[i], waitTime);
  }
}

/* Uncomment the following lines and click 'run' to test your work */

function sayHi() {
  console.log('hi');
}
function sayBye() {
  console.log('bye');
}
function sayHowdy() {
  console.log('howdy');
}

runInOrder([sayHi, sayBye, sayHowdy], [200, 100, 300]);

/*
should log:
'hi' (after 200 ms)
'bye' (100 ms after 'hi')
'howdy' (300 ms after 'bye')
*/
