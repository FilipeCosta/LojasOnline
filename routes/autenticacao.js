var express = require('express');
var router = express.Router();
var Loja = require('../models/lojas');
var Produto = require('../models/produtos');
var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: './public/upload' });
var session = require('express-session');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
var crypto = require('crypto');


var upload = multer({
  storage: multer.diskStorage({

    destination: function (req, file, cb) {
      cb(null, './public/upload');
    },

    filename: function (req, file, cb) {
      var ext = require('path').extname(file.originalname);
      ext = ext.length > 1 ? ext : "." + require('mime').extension(file.mimetype);
      require('crypto').pseudoRandomBytes(16, function (err, raw) {
        cb(null, (err ? undefined : raw.toString('hex')) + ext);
      });
    }
  })
});


/**
 * @api{post} '/registo
 * @apiName RegistaLoja
 * @apiGroup RegistaLoja
 * @apiDescription
 * Efetua um Registo de  uma loja/cria 
 * 
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     
 */
router.post('/registo', upload.single('file'), function (req, res) {


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


  if (req.file) {
    var pic = {
      name: req.file.originalname,
      img: req.file.path,
      contentType: req.file.mimetype
    };
  }
  else {
    pic = {};
  }


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


/**
 * @api{post} '/login
 * @apiName EfetuaLogin
 * @apiGroup EfetuaLogin
 * @apiDescription
 * Entra na conta que foi criada antecipadamente
 * 
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     
 */
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
    loja.comparePassword(req.body.password, function (err, isMatch) {
      if (err) return res.status(400).json({ message: "password invalida" });;
    });
    if (err) {
      return res.status(500);
    }
    // se tudo correr bem guarda a sessao do utilizador
    req.session.loja = loja;
    return res.send(req.session.loja);
  });
});


/**
 * @api{post} '/confirm-login
 * @apiName ConfirmaLogin
 * @apiGroup ConfirmaLogin
 * @apiDescription
 * Confirma se a loja esta autenticada no servico
 * 
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     
 */
router.get('/confirm-login', function (req, res) {
  if (req.session && req.session.loja) {
    res.send(req.session.loja);
  } else {
    res.status(401).send({ status: 'Unauthorized' });
  }
});





module.exports = router;
