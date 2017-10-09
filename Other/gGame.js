//Create secret number
var secretNumber = 7;

//Ask user for guess
var userGuess = prompt("Guess a number");

//Check guess
if number(userGuess === secretNumber) {
  console.log("Congratulations. The secret number was indeed " + secretNumber);
} else {
  console.log("Sorry that was incorrect, please try again");
}
