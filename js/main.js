let dice = {
  sides: 6,
  roll: function () {
  let randomNumber = Math.floor(Math.random() * this.sides) + 1;
  // Write Code Here
  // Generate a random number between 1 and the number of sides and assign it to randomNumber

   return (randomNumber);
  }
};

function printNumber(number) {
  const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
  let placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = diceFaces[number - 1];
}

const button = document.getElementById("button");

button.onclick = function() {
  let result = dice.roll();
  printNumber(result);
};
