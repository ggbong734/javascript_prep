// define a function once which takes in a callback as argument
// initialize variable counter to keep track on # times we run the function
// initialize another variable result to store the result after calling the callback
// define another function inside called oncifiedCb that takes in an argument num
// check if counter is zero. if it is (function never ran before), set result equal to output of passing num to the callback.
// if the counter is more than zero don't change result
// finally increment counter and output result

function once(callback) {
  let counter = 0;
  let result = 0;
  function oncifiedCb(num){
    if (counter == 0) {
      result = callback(num);
    }
    counter++;
    return result;
  }
  return oncifiedCb;
}

const addByTwoOnce = once(function(num) {
  return num + 2;
});

// UNCOMMENT THESE TO TEST YOUR WORK!
console.log(addByTwoOnce(5));  //should log 7
console.log(addByTwoOnce(10));  //should log 7
console.log(addByTwoOnce(9001));  //should log 7
