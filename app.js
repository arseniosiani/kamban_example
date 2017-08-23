// questo è il file principale dell'applicazione

//usiamo la libreria express
var express = require('express');

//usiamo la librerira express-handlebars
var exphbs  = require('express-handlebars');

// in app ci sarà la nostra applicazione
var app = express();

// configuriamo in modo che i file statici vengano presi dalla directory static_files
app.use(express.static(__dirname + '/static_files'));

// usiamo handlebars come template engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function (req, res) {
    res.end("Per il momento questa app non fa niente!!")
});

app.listen(3000);
console.log("Applicazione partita!! collegati a http://localhost:3000");