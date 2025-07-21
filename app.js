// Require the framworks
const express = require('express');
const { default: mongoose } = require('mongoose');
const morgan = require('morgan')

// Creating vars
const app = express();

// Setting the ejs technology
app.set('view engine', 'ejs');

// Connectin the public folder 
app.use(express.static('public'));
app.use(express.static('partials'));

// Conect to db for future
const dbURI = 'mongodb+srv://amirmahdimolaie:amir1388@nodeproject.ci16kx4.mongodb.net/?retryWrites=true&w=majority&appName=Nodeproject';

mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))

    const Blog = require('./blog')

    app.get('/blog', (req, res) => {
        const blog = new Blog({
            name : 'amir',
            age : 13,
            number : 9012,
        })

    blog.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
        })

    app.get('/all-blog', (req, res) =>{
        Blog.find()
            .then((result) => res.send(result))
            .catch((err) => console.log(err))
    })
    app.get('/d all-blog', (req, res) =>{
        Blog.deleteMany()
            .then((result) => res.send(result))
            .catch((err) => console.log(err))
    })

// Connectin test
app.get('/', (req, res) => {
    res.render('./home', {
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
    res.render('./tournaments', {
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
    res.render('./world-rankings', {
        title : 'FIFA | world-rankings',
        classBody : 'body-ranking',
        picture : 'imeges/FIFAPLUS_BEST-ON-SHOW_Tournaments_00.webp',
        content : 'Ranking table of the top 20 countries in the world'
    });
});

app.get('/play', (req, res)=>{
    res.render('./play', {
        title : 'FIFA | play',
        classBody : 'body-ranking',
        picture : 'imeges/FIFA-Futsal-World-Cup-Uzbekistan-2024-Final.avif',
        content : 'Games program'
    });
});

app.use((req, res) =>{
    res.render('./404', {
        title : '404 | not found',
        classBody : 'body-home'
    });
})

console.log(app.use(morgan('tiny')));
