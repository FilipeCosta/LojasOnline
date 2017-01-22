var express = require('express');
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var passport = require('passport');
require('./config/passport');
var app = express();


var dbName = 'LojasDB';
var connectionString = 'mongodb://localhost:27017' + dbName;
mongoose.Promise = global.Promise;
mongoose.connect(connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(passport.initialize());


app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-MethodOverride,Content-Type, Accept');
next();
});

app.use('/',require('./routes/index'));

app.listen(8080,function(){
    console.log("listen on port 8080");
})