// Require the framworks
const express = require('express');

// Creating vars
const app = express();

// Creating localhost
app.listen(3000, ()=> console.log('Connect'));

// Connectin test
app.get('/', (req, res) => res.send('Hello!'))