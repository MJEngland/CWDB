const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Associations");

//POST - Title and Content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

var Post = mongoose.model("Post", postSchema);

//USER - Email and Name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



// var newUser = new User ({
//   email: "MjE360@hotmail.co.uk",
//   name: "Matthew England"
// });
// newUser.save(function(err, user){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

var newPost = new Post ({
  title: "Reflections on Cheeses",
  content: "They are cheesey"
});
newPost.save(function(err, post){
  if(err){
    console.log(err);
  } else {
    console.log(post);
  }
});
