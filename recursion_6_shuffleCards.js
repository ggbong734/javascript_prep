// define a function shuffleCards
// set up base cases
// when topHalf is empty, return stack with the bottom half appended
// when bottomHalf is empty, return stack with the top half appended
// need to set up a counter parameter to keep track of when we add from top or bottom
// we also need to add a stack parameter to keep track of the cards we mixed so far
// next we check if counter is even or odd, if it's even which means at the start
// then we recursively call shuffleCards while adding a card from topHalf to the stack and excluding the first card from topHalf, we also increment the counter
// if the counter is odd, we also call shuffleCards but this time we a dd a card from the bottomHalf and exclude the first card from bottomHalf, increment the counter too.
// this way we alternately go between tophalf and bottomhalf until either one is empty and then we reach base case.

function shuffleCards(topHalf, bottomHalf, stack = [], counter = 0) {
  if (topHalf.length === 0) return stack.concat(bottomHalf);
  if (bottomHalf.length === 0) return stack.concat(topHalf);
  if (counter % 2 === 0) {
    return shuffleCards(topHalf.slice(1), bottomHalf, stack.concat(topHalf[0]), counter+1);
  } // if counter is even slice topHalf
  else {
    return shuffleCards(topHalf, bottomHalf.slice(1), stack.concat(bottomHalf[0]), counter+1); // if counter is odd slice bottomHalf
  }
}



// UNCOMMENT TO TEST YOUR WORK
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
  /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
      ]
  */
