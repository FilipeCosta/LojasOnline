var express = require('express');
var bodyParser = require('body-Parser');
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var multer = require('multer');
var app = express();



var dbName = 'LojasDB';
var connectionString = 'mongodb://localhost:27017' + dbName;
mongoose.Promise = global.Promise;
mongoose.connect(connectionString);

app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}))


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(multer({dest:'./upload'}).single('photo'));

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