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
app.use(express.static('partials'));

// Connectin test
app.get('/', (req, res) => {
    res.render('./home.ejs', {
        title : 'Home',
        content1 : 'FIFA World Cup 26™ Ticketing Programme launches this September',
        content2 : 'President Trump says FIFA is doing “fantastically well” in growing football in the United States',
        content3 : 'Australia’s Alireza Faghani appointed FIFA Club World Cup 2025™ final referee',
        imeg1 : 'imeges/FIFA-WORLD-CUP-26-TICKETING-PROGRAMME-LAUNCHES-THIS-SEPTEMBER.webp',
        imeg2 : 'imeges/Chelsea-FC-v-Paris-Saint-Germain-Final-FIFA-Club-World-Cup-2025.webp',
        imeg3 : 'imeges/SE-Palmeiras-v-Chelsea-FC-Quarter-Final-FIFA-Club-World-Cup-2025.webp',
    })
});

app.get('/tournaments', (req, res)=>{
    res.render('./tournaments.ejs', {
        title : 'world-rankings'
    })
});

app.get('/world-rankings', (req, res)=>{
    res.render('./world-rankings.ejs', {
        title : 'world-rankings'
    });
});

app.get('/watch-on-fifa', (req, res)=>{
    res.render('./watch-on-fifa.ejs', {
        title : 'world-rankings'
    });
});

app.get('/play', (req, res)=>{
    res.render('./play.ejs', {
        title : 'world-rankings'
    });
});

app.use((req, res) =>{
    res.render('./404.ejs', {
        title : 'world-rankings'
    });
});