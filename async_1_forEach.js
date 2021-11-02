function forEach(arr, cb) {
  for (let i =0; i<arr.length; i++) {
    arr[i] = cb(arr[i], i);
  }
}

let delays = [200, 500, 0, 350];

function delayLog(delayTime, i) {
  function print() {
  	console.log(`printing element ${i}`);
	}
  setTimeout(print, delayTime);
}

forEach(delays, delayLog);
// Add code here
