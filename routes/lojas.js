var express = require('express');
var router = express.Router();
var Loja = require('../models/lojas');
var Produto = require('../models/produtos');


//Obtem todas as lojas
router.get('/',function(req,res){
  Loja.find(function(err,lojas){
      if(!lojas){
        return res.status(404).json({Error:"Loja nao encontrada"});
      }
      res.send(lojas); 
  }).populate("produto");
})


// Obtem uma loja especifica através do id
router.get('/:id',function(req,res){
  Loja.findById(req.params.id,function(err,loja){
      if(!loja){
        return res.status(404).json({Error:"Loja nao encontrada"});
      }
      res.send(loja); 
  });
});

//adiciona um produto a uma loja especifica
router.post('/:id/produtos',function(req,res){
  console.log(req,body);
    Loja.findById(req.params.id,function(err,loja){
      if(!loja){
        return res.status(404).json({Error:"Loja nao encontrada"});
      }

      if(JSON.stringify(req.body) == "{}")
      {
        return res.status(400).json({Error:"Your request is empty"});
      }

      var produto = new Produto(req.body);
      produto.save(function (err) {
        if(err){
          return res.status(500).json({Error:"Server Problem"})
        }
          loja.produtos.push(produto.id);
      });
      

      loja.save(function(err){
        if(err){
          return res.status(500).json({Error:"Server problem"});
        }
         res.status(200).json({message: "product added"});
      });
    })
})

// obtem todos os produtos para uma determinada loja
router.get('/:id/produtos',function(req,res){
  Loja.findById(req.params.id,function(err,loja){

    if(!loja){
      return res.status(404).json({Error:"Loja nao encontrada"});
    }

    if(err){
      return res.status(500).json({Error: "Existe um problema com o servidor"})
    }

    return res.send(loja)

  }).populate("Produtos");
});


module.exports = router;