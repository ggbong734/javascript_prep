// initialize a new object
// Loop through values array. Each value becomes key in new object.
// Use map on callbacks array so that the output is an array of same size. Each callback is passed in the key of the object. This way we have the output array with the outputs of callbacks.
// the other less elegant option without using map will be to create a newArr in each loop. Then loop through each callback and push the result of each callback into the newArr. then set the newArr as the value of the key.

function multiMap (values, callbacks) {
  let obj = {};
  for (let i=0; i< values.length; i++) {
    obj[values[i]] = callbacks.map( cb => cb(values[i]));
  }
  return obj;
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
