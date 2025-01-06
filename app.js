// Code to run the server
const express = require('express');
const app = express();
const newsRoute = require('./routes/news');
const path = require('path');

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use('/', newsRoute);
const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

// Routes
app.get('/', (req, res) => {
  res.render('index.ejs', { currentDate });
});

// Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
