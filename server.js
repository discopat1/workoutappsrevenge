const express = require("express");
const session = require('express-session');
const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const mongoose = require("mongoose");
// const autoIncrement = require('mongoose-auto-increment');

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
  });
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exerciselist");


//Session related stuff
var sess = {
  secret: 'workoutapp',
  cookie: {},
  resave: false,
  saveUninitialized: true
};

if (app.get('env') === 'production') {
  sess.cookie.secure = true; //serve secure cookies, requires https
}

var strategy = new Auth0Strategy({
  domain: 'workoutapp.auth0.com',
  clientID: 'uni-ZJF0sZlESyexemvyQ1okpf3zx-Sm',
  clientSecret: 'Q9omx-09Mvgbv2jwR8yqXLISSFZZRAeuYngQazOrbL4VQOY2JZN-STRWY4ErIL9e',
  callbackURL: 'http://localhost:3000/callback',
  state: true
},

function(accessToken, refreshToken, extraParams, profile, done) {
     // accessToken is the token to call Auth0 API (not needed in the most cases)
   // extraParams.id_token has the JSON Web Token
   // profile has all the information from the user
   return done(null, profile);
}
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());
app.use(session(sess));


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
