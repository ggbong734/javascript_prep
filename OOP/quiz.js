console.log("hello world");
const user1 = {
  name: "Will",
  score: 3,
  increment: function () {
    user1.score++;
  },
};

user1.increment(); //user1.score => 4
console.log(user1.score);
