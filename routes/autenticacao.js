var express = require('express');
var router = express.Router();
var Loja = require('../models/lojas');
var Produto = require('../models/produtos');
var fs = require('fs');
var multer = require('multer');
var upload = multer({dest:'./public/upload'});
var session = require('express-session');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();






router.post('/registo',upload.single('file'), function (req, res) {


  if (JSON.stringify(req.body) == "{}") {
    return res.status(400).json({ Error: "empty request body" });
  }
  if (!req.body.email && !req.body.nome) {
    return res.status(400).json({ Error: "you need to specify the email and the name" });
  }
  if (!req.body.email) {
    return res.status(400).json({ Error: "you need to specifiy the email" });
  }
  if (!req.body.nome) {
    return res.status(400).json({ Error: "you need to specify the name" });
  }
  

  /*Loja.find({nome: req.body.nome},function(err,loja){
    if(err){
      return res.status(500).json({Error:"database problem"});
    }
    if(loja){
      return res.status(400).json({Error:"Ja existe uma loja com o nome que especificou"});
    }
  });

  Loja.find({email: req.body.email},function(err,loja){
    if(err){
      return res.status(500).json({Error:"database problem"});
    }
    if(loja){
      return res.status(400).json({Error:"ja existe uma conta com o email que especificou"});
    }
  });*/


  // saving image
  var pic = {
    name: req.file.name,
    img:  req.file.path,
    contentType: req.file.type
  };

  console.log(pic);

  var loja = new Loja({
    nome: req.body.nome,
    email: req.body.email,
    password: req.body.password,
    foto: pic
  });

  loja.save(function (err) {
    if (err) {
      return res.status(500);
    }
    return res.json({ message: "Contact added" });
  });

});

router.post('/login', function (req, res) {
  if (JSON.stringify(req.body) == "{}") {
    return res.status(400).json({ message: "corpo vazio" });
  }

  if (!req.body.email) {
    return res.status(400).json({ message: "tem que especificar um email" });
  }

  if (!req.body.password) {
    return res.status(400).json({ message: "tem que especificar uma password" });
  }

  Loja.findOne({ email: req.body.email }, function (err, loja) {
    if (!loja) {
      return res.status(404).json({ message: "login invalido verifique as suas credenciais" });
    }
    if (loja.password != req.body.password) {
      return res.status(400).json({ message: "password invalida" });
    }
    if (err) {
      return res.status(500);
    }
    // se tudo correr bem guarda a sessao do utilizador
    req.session.loja = loja;
    return res.send(req.session.loja);
  });
});

router.get('/confirm-login',function(req,res){
  if ( req.session && req.session.loja ) {
    res.send(req.session.loja);
  } else {
    res.status(401).send({ status: 'Unauthorized'});
  }
});

router.post('/upload', multipartMiddleware, function (req, res) {
  console.log("sadasdsa");
  flow.post(req, function (status, filename, original_filename, identifier) {
    console.log('POST', status, original_filename, identifier);

    res.send(200, {
      // NOTE: Uncomment this funciton to enable cross-domain request.
      //'Access-Control-Allow-Origin': '*'
    });
  });
});


router.get('/upload', function(req, res){
  flow.get(req, function(status, filename, original_filename, identifier){
    console.log('GET', status);
    res.send(200, (status == 'found' ? 200 : 404));
  });
});

router.get('/profile', function (req, res) {

});





module.exports = router;
