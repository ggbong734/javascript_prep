// 6 kyu kata in codewar:  Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
// first we split the string by white space to make an array
// then we loop through each word in array, check if word length is equal or greater than 5
// then if so, we take the word, split it into an array, reverse the array, and join it back into string
// then we join the words in the array with white space

function spinWords(string){
  let arr = string.split(' ');
  for (let i=0; i<arr.length; i++) {
    if(arr[i].length >= 5) {
      arr[i] = arr[i].split('').reverse().join('');
    }
  }
  return arr.join(' ');
}
