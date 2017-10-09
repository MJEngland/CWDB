//

/* var userFirstName = prompt("What is your first name?");
var userLastName = prompt("what is your last name");
var age = prompt("what is your age");
console.log("Your name is " + userFirstName + " " + userLastName);
console.log("Your age is " + age);
*/

//Age calculator

/*var age = prompt("What is your age?");
var alive = (age * 365)
alert ("You have been alive for " + alive + " days");*/

//Age test

var age = prompt("What is your age?")
if (age<0) {
  console.log("That is not a correct age!");
} else if (age / 2 == !0) {
  console.log("You are odd");
} else if (age / age == 0){
  console.log("You are a perfect square");
} else if (age<18){
  console.log("You are not allowed to enter");
} else if(age<21){
  console.log("You are allowed to enter but not drink");
} else if(age == 21) {
  console.log("Happy 21st Birthday!");
} else {
  console.log("You can enter and drink");
}
