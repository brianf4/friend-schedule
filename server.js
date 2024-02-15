let express = require('express');
let app = express();
const connectDB = require('./config/database');
require('dotenv').config();

// connect to DB
connectDB();

// routes
const mainRoutes = require('./routes/main');
const aboutRoutes = require('./routes/about');
const movieRoutes = require('./routes/movie');

// setting the view engine to ejs
app.set('view engine', 'ejs');

// routes for which the server is listening
app.use("/", mainRoutes);
app.use("/about", aboutRoutes);
app.use("/movies", movieRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`); });