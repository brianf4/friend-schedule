require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/database');

// connect to DB
connectDB();

// routes
const mainRoutes = require('./routes/main');
const aboutRoutes = require('./routes/about');
const loginRoutes = require('./routes/login')
const signupRoutes = require('./routes/signup')

// setting the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

// routes for which the server is listening
app.use("/", mainRoutes);
app.use("/about", aboutRoutes);
app.use("/login", loginRoutes);
app.use("/signup", signupRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`); 
});