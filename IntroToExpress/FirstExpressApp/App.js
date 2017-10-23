const express = require("express");
const PORT = 3000;
const app = express();

app.get("/", function(req, res){
  res.send("Hello");
});

app.get("/bye", function(req, res){
  res.send("Bye");
});

app.get("/dog", function(req, res){
  res.send("dog");
});

app.get("/r/:subredditName", function(req, res){
  var subreddit = req.params.subredditName;
  res.send("Welcome to the " + subreddit + " Subreddit");
})

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  console.log(req.params);
  res.send("Welcome to the comments page");
})

app.get("*", function(req, res){
  res.send ("404");
});

app.listen(PORT, function(){
  console.log("Listening on port " + PORT);
});
