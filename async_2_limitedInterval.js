// define a function limitedInterval with arguments callback, wait, limit time
// we want to find a way to stop setInterval after the limit time is reached
// declare a counter in the limitedInterval local execution context, set it to zero
// then we invoke setInterval pass it an anonymous function which invokes callback, and the wait time as second argument.
// In the anonymous function, we need to increment counter, and once the counter reaches or exceeds the quotient of limit / wait, the clearInterval function will be invoked to stop the setInterval. We pass the id of the setInterval function into clearInterval. So because of this we need to pass setInterval into a variable looper. And we pass looper into clearInterval so it knows which function to stop.
// with this, the callback function should be called repeatedly until the time limit is reached.

function limitedInterval(callback, wait, limit) {
  let counter = 0;
  let looper = setInterval(() => {
  	counter++;
  	callback();
    if(counter >= Math.floor(limit/wait)) clearInterval(looper);
  }, wait);
}


// /* Uncomment the following line and click 'run' to test your work */
limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
