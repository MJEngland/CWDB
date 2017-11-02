//Create secret number
var secretNumber = 4;
//Ask user for guess
var guess = Number(prompt('Guess a number: ');
//Check guess
if(guess) === secretNumber){
  alert('You got it right!');
}
//otherwise check if higher
else if (guess) > secretNumber){
  alert('Your guess was too high!');
}
//otherwise check if lower
else if (guess) < secretNumber){
  alert('Your guess was too low');
}
