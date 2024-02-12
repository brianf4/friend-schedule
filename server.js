let express = require('express');
let app = express();
require('dotenv').config();

// routes
const mainRoutes = require('./routes/main');
const aboutRoutes = require('./routes/about');

// setting the view engine to ejs
app.set('view engine', 'ejs');

// routes for which the server is listening
app.use("/", mainRoutes);
app.use("/about", aboutRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`); });