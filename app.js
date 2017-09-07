// questo è il file principale dell'applicazione

//usiamo la libreria express
var express = require('express');

var juguler = require('./juguler');

//usiamo la librerira express-handlebars
var exphbs  = require('express-handlebars');

// in app ci sarà la nostra applicazione
var app = express();

// configuriamo in modo che i file statici vengano presi dalla directory static_files
app.use(express.static(__dirname + '/static_files'));

// usiamo handlebars come template engine
app.engine('handlebars', exphbs({defaultLayout: 'main',partialsDir: ['views/partials/']}));
app.set('view engine', 'handlebars');


app.get('/dashboard', function (req, res) {

    juguler.addColumn(1,"Da Fare");
    juguler.addColumn(2,"In progress");

    juguler.add(1,"pippo","pippo");
    juguler.add(1,"pluto","pluto");

    juguler.add(2,"paperino","paperino");
    juguler.add(2,"topolino","topolino");

    res.render("dashboard",{
        cards: juguler.cards,
        colonne: juguler.colonne
    });
});







app.listen(3000);
console.log("Applicazione partita!! collegati a http://localhost:3000");