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
        title : 'FIFA | Home',
        content1 : 'FIFA World Cup 26™ Ticketing Programme launches this September',
        content2 : 'President Trump says FIFA is doing “fantastically well” in growing football in the United States',
        content3 : 'Australia’s Alireza Faghani appointed FIFA Club World Cup 2025™ final referee',
        imeg1 : 'imeges/FIFA-WORLD-CUP-26-TICKETING-PROGRAMME-LAUNCHES-THIS-SEPTEMBER.webp',
        imeg2 : 'imeges/Chelsea-FC-v-Paris-Saint-Germain-Final-FIFA-Club-World-Cup-2025.webp',
        imeg3 : 'imeges/SE-Palmeiras-v-Chelsea-FC-Quarter-Final-FIFA-Club-World-Cup-2025.webp',
        classBody : 'body-home'
    })
});

app.get('/tournaments', (req, res)=>{
    res.render('./tournaments.ejs', {
        title : 'FIFA | tournaments',
        content1 : 'FIFA World Cup 26™',
        content2 : 'FIFA Women’s World Cup Brazil 2027™ ',
        content3 : 'FIFA World Cup 2034™ ',
        imeg1 : 'imeges/FIFA_FWC26_Tournament-Thumbnail-4-3.webp',
        imeg2 : 'imeges/FIFA_WWC27_Tournament-Thumbnail-4-3.webp',
        imeg3 : 'imeges/FIFA-com_Bidding-Thumbnails_FWC2034.webp',
        classBody : 'body-tournaments'
    })
});

app.get('/world-rankings', (req, res)=>{
    res.render('./world-rankings.ejs', {
        title : 'FIFA | world-rankings',
        classBody : 'body-ranking',
    });
});

app.get('/watch-on-fifa', (req, res)=>{
    res.render('./watch-on-fifa.ejs', {
        title : 'FIFA | watch on fifa',
        classBody : 'body-home'
    });
});

app.get('/play', (req, res)=>{
    res.render('./play.ejs', {
        title : 'FIFA | play',
        classBody : 'body-homes'
    });
});

app.use((req, res) =>{
    res.render('./404.ejs', {
        title : '404 | not found',
        classBody : 'body-home'
    });
})