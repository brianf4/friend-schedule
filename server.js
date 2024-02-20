require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/database');
const passport = require('passport');
const session = require('express-session');
const flash = require('express-flash');
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");


// connect to DB
connectDB();

require("./config/passport")(passport);

// routes
const mainRoutes = require('./routes/main');
const aboutRoutes = require('./routes/about');
const loginRoutes = require('./routes/login');
const signupRoutes = require('./routes/signup');

// setting the view engine to ejs
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(flash());

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
  })
);

app.use(passport.initialize());

// routes for which the server is listening
app.use("/", mainRoutes);
app.use("/about", aboutRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`); 
});