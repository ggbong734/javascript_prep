// convert word to lower case
// replace each char using the regex /./g for each character edit yeay
// check if the first index that the char appears is the same as the last index that it appears
// if true, char appears once so replace with (, otherwise char appears more than once and replace with )
function duplicateEncode(word){
  word = word.toLowerCase()
  return word.replace(/./g, c => word.indexOf(c) == word.lastIndexOf(c) ? '(' : ')');
}
