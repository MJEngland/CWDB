const express               = require("express");
const app                   = express();
const exphbs                = require("express-handlebars");
const mongoose              = require("mongoose");
const passport              = require("passport");
const bodyParser            = require("body-parser");
const User                  = require("./models/user");
const LocalStrategy         = require("passport-local");
const passportLocalMongoose = require("passport-local-mongoose");
const passport              = require("passport");


mongoose.connect("mongodb://localhost/auth-demo-app");

const PORT = 3000

app.engine('handlebars', exphbs({defaultViews:'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({extended: true}));

app.use(require("express-session")({
  secret:"I love Rosie",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//==========
//ROUTES
//===========

app.get("/", function(req, res){
  res.render("home");
});

app.get("/secret", function(req, res){
  res.render("secret");
});

//show sign up form
app.get("/register", function(req,res){
  res.render("register");
});

//handing user sign up
app.post("/register", function(req, res){
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err){
      console.log(err);
      return  res.render("register");
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect("/secret");
    })
  });
});

//LOGIN ROUTES
//render login form

app.get("/login", function(req, res){
  res.render("login");
});

//Log in logic
//middleware
app.post("/login", passport.authenticate("local", {
  successRedirect: "/secret",
  failureRedirect: "/login"
}) ,function(req, res){
});

app.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
})

app.listen(PORT, function(){
  console.log("The server has started");
});
