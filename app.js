// Require the framworks
const express = require('express');

// Creating vars
const app = express();

// Creating localhost
app.listen(3000, ()=> console.log('Connect'));

// Setting the ejs technology
app.set('view engine', 'ejs');

// Connectin the public folder 
app.use(express.static('public'));

// Connectin test
app.get('/', (req, res) => {
    res.render('./home.ejs')
})
