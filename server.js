let express = require('express');
let app = express();

// setting the view engine to ejs
app.set('view engine', 'ejs');

// use.render to load up an ejs view file

// index.page
app.get('/', (req, res) => {
  res.render('pages/index.ejs');
});

//about page
app.get('/about', (req, res) => {
  res.render('pages/about');
});

app.get('/contact', (req, res) => {
  res.render('pages/contact');
});

app.listen(8080);
console.log('Server is listening on port 8080');