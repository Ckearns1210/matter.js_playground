var express     = require('express'),
    morgan      = require('morgan'),
    app         = express(),
    router      = express.Router(),
    request     = require('request'),
    port        = process.env.PORT || 3000,
    bodyParser  =require('body-parser')

//mongoose DB


//EXPRESS SETUP
app.use(morgan('dev'));
app.use(bodyParser());

//TEMPLATE SETUP
app.use(express.static('public') );

//PASSPORT SETUP


//ROUTES

//Port and Start
app.listen(port);
console.log('Cool runnings down through port 3000')

app.get('/', function (req, res) {
    res.send("I Work");
});
