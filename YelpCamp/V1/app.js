const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

var PORT = 3000;

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

//schema setup

var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//   name: "Salmon Creek",
//   image:"https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"
//   description:"This is a huge creek, no bathrooms. No water. Beautiful scenary."
//
// },
// function(err, campground){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Newly created campground: ");
//     console.log(campground);
//   }
// });

app.get("/", function(req, res){
  res.render("landing");
});

//Index route - Show all campgrounds
app.get("/campgrounds", function(req, res){
  //Get all campgrounds from DB
  Campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("index", {campgrounds:allCampgrounds});
    }
  });
});

//Create route add new campground to DB
app.post("/campgrounds", function(req, res){
  //Get data from forms and add to campground array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc}
  // Create a new campground and save to DB
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

//NEW route - show form to create new campground
app.get("/campgrounds/new", function(req, res){
  res.render("new.ejs")
});

//SHOW route - shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
  //find the campground with the provided ID
  Campground.findById(req.params.id, function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      //render show template with that campground
      res.render("show", {campground: foundCampground});
    }
  });
});

app.listen(PORT, function(){
  console.log("I am listening on port " + PORT);

});
