var express = require('express');
var router = express.Router();
var Loja = require('../models/lojas');
var Produto = require('../models/produtos');



router.post('/:id',function(req,res){
    var produto = new Produto(req.body);

    if(JSON.stringify == "{}"){
        return res.status({Error:"empty json"});
    }
    
    produto.save(function(err){
        if(err){
            return res.status(500);
        }
        res.send(produto);
    });
});


router.get('/',function(req,res){
    Produto.find(function(err,produtos){
      if(!produtos){
        return res.status(404).json({Error:"nao existem produtos"});
      }
      res.send(produtos); 
  });
});

router.get('/:id',function(req,res){
    Produto.findById(req.params.id,function(err,produto){


    if(JSON.stringify == "{}"){
        return res.status(404).json({Error:"empty json"});
    }
    
    if(err){
      return res.status(500).json({Error: "Existe um problema com o servidor"});
    }

    });

    return res.send(produto);
});

module.exports = router;