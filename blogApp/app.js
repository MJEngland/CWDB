const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const exphbs  = require('express-handlebars');
const PORT = 3000;

app = express();

//app config
mongoose.connect("mongodb://localhost/blog_app");

app.engine('handlebars', exphbs({defaultViews:'index'}));
app.set('view engine', 'handlebars');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//mogoose/model config
var blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//RESTful routes
app.get('/', function(req, res){
  res.redirect("/blogs");
});

//INDEX ROUTE
app.get('/blogs', (function(req, res){
  Blog.find({}, function(err, blogs){
    if(err){
      console.log("error");
    } else {
      res.render('index', {blogs: blogs});
    }
  });
}));

//NEW ROUTE
app.get("/blogs/new", function(req, res){
  res.render("new");
});

//CREATE ROUTE

app.listen(PORT, function(){
  console.log("Server is running");
});
