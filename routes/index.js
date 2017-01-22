var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Loja = require('../models/lojas');

router.use(function timeLog(req, res, next) {
 console.log('Time: ', Date());
 console.log('Request Type:', req.method);
 console.log('Request URL:', req.originalUrl);
 next(); //passa a solicitação para a próxima função de middleware na pilha
});

//get all contacts with specific filter
router.post('/registo',function(req,res){
  var loja = new Loja();

  loja.name = req.body.name;
  loja.email = req.body.email;

  loja.setPassword(req.body.password);

  loja.save(function(err){
      var token;
      token = loja.generateJwt;
      res.status(200);
      res.json({
          "token": token
      });
  });

});

router.post('/login',function(req,res){
  
});

router.get('/profile/LojaId',function(req,res){
  
});


router.use('/lojas',require('./lojas'));
router.use('/produtos',require('./produtos'));

router.use(function(req,res,next){
    res.status(404).json({Error:"Invalid Url"});
})

module.exports = router;