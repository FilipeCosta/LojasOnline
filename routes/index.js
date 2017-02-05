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

router.use('/',require('./autenticacao'))
router.use('/lojas',require('./lojas'));
router.use('/produtos',require('./produtos'));

router.use(function(req,res,next){
    return res.status(404).json({Error:"Invalid Url"});
})

module.exports = router;