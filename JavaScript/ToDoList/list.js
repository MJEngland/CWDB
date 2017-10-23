var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");

while(input !== "quit"){
  //handle input
  if (input === "list"){
    listTodos();
  } else if (input === "new"){
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  //ask again for new input
  input = prompt("What would you like to do?");
}
console.log("okay, you quit the app");

function listTodos(){
  todos.forEach(function (todo, index){
    console.log("************");
    console.log(index + ": " + todo)
  });
  console.log("************");
};

function addTodo(){
  //ask for new todo
  var newTodo = prompt("Enter new todo")
  //add to todos array
  todos.push(newTodo);
  console.log("added todo")
};

function deleteTodo(){
  //ask for index of todo to be deleted
  var index = prompt("Type index of todo to be deleted")
  //delete that todo
  //splice
  todos.splice(index, 1);
  console.log("Deleted todo")
};
