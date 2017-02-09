var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Loja = require('../models/lojas');
var Produto = require('../models/produtos');


//Obtem todas as lojas
/**
 * @api{get} /lojas  obter lojas e produtos
 * @apiName GetLojas
 * @apiGroup StoreIt
 * @apiDescription
 * obtem informação de todas as lojas assim como dos produtos associados às lojas respetivas.
 * 
 * @apiSuccess {string} nome nome da loja  
 * @apiSuccess {string} email email da loja 
 * @apiSuccess {array}  produtos produtos
 * @apiSuccess {String} descricao breve descricao sobre a loja
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *       {
 *         "_id": "5897456c3ccbd60958ec8902",
 *         "nome": "Levis",
 *         "email": "levis@gmail.com",
 *         "__v": 14,
 *         "produtos": [
 *           {
 *             "_id": "589b175e1c2d8322140c0b60",
 *             "nome": "calca de ganga",
 *             "descricao": "a melhor calca do mercado aqui na levis, venha visitar",
 *             "categoria": "calça",
 *             "stock": 12,
 *             "tamanho": "22",
 *             "__v": 0,
 *             "preco": 12,
 *             "data": "2017-02-08T13:04:30.705Z"
 *           },
 *           {
 *             "_id": "589b19065e72032f5ccbbd69",
 *             "nome": "camisa justa",
 *             "descricao": "camisa colorida para o verao que esta aí a porta",
 *             "categoria": "camisa",
 *             "stock": 12,
 *             "tamanho": "22",
 *             "__v": 0,
 *             "preco": 12,
 *             "data": "2017-02-08T13:11:34.041Z"
 *           },
 *           {
 *             "_id": "589b61c94ab0cf2e546192dd",
 *             "nome": "camisa xpto23",
 *             "categoria": "Camisa",
 *             "descricao": "melhor camisa do mercado aqui venha nos visitar",
 *             "stock": 12,
 *             "tamanho": "48",
 *             "__v": 0,
 *             "preco": 22,
 *             "data": "2017-02-08T18:22:01.423Z"
 *           }
 *         ],
 *         "descricao": "No description for this store"
 *       },
 *       {
 *         "_id": "5899d2933363ae246461ce36",
 *         "nome": "zara",
 *         "email": "zara@gmail.com",
 *        "__v": 0,
 *         "produtos": [],
 *         "descricao": "No description for this store"
 *       }
 *     ]   
 * 
 */
router.get('/', function (req, res) {
  Loja.find()
    .populate('produtos')
    .exec(function (err, lojas) {
      if(err){
        return res.status(500).json({Error:"Server problem"})
      }
      return res.send(lojas)
    });
})


/**
 * @api{get} /lojas  obter uma loja e seus produtos
 * @apiName GetLoja
 * @apiDescription 
 * obtem os dados de uma única loja assim como os produtos associados à loja
 * @apiGroup StoreIt
 * 
 * @apiParam {Number} id Identificador da loja a obter
 * 
 * @apiSuccess {string} nome nome da loja  
 * @apiSuccess {string} email email da loja 
 * @apiSuccess {array}  produtos produtos
 * @apiSuccess {String} descricao breve descricao sobre a loja 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK 
 *    {
 *       "_id": "5899d2933363ae246461ce36",
 *       "nome": "zara",
 *       "email": "zara@gmail.com",
 *       "__v": 0,
 *       "produtos": [],
 *       "descricao": "No description for this store"
 *     }
 * 
 */
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
  var queryObject = {_id : mongoose.Types.ObjectId(req.params.id)};
    Loja.findById(queryObject,function(err,loja){
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
      });
      
      loja.produtos.push(produto);
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
  var queryObject = {_id : mongoose.Types.ObjectId(req.params.id)};
  Loja.findById(queryObject)
    .populate('produtos')
    .exec(function (err, lojas) {
      if(!lojas){
        return res.status(404).json({ Error: "Loja nao encontrada" });
        }
      if (err) {
        return res.status(500).json({ Error: "Server problem" });
      }
      res.send(lojas.produtos);
    });
});


router.delete('/:idLoja/Produtos/:idProduto', function (req, res) {


  //primeiro procura loja pois apenas uma loja pode apagar os seus produtos
  Loja.findById(req.params.idLoja, function (err, loja) {
    if (!loja) {
      return res.status(404).json({ Error: "Loja nao encontrada" });
    }
  });



  Produto.findById(req.params.idProduto, function (err, produto) {
    if (err) {
      return res.status(500).json({ Error: "Problema no servidor" });
    }

    if (!produto) {
      return res.status(404).json({ Error: "Nao podes remover um produto que não existe" });
    }

    Loja.update({}, { $pull: { produtos: { $in: [produto._id] } } }, { multi: true }).exec();

    produto.remove(function (err) {
      if (err) {
        return res.status(500).json({ Error: "Problema no servidor" });
      }
      return res.status(204).json({ message: "produto removido !" });
    });

  });
});


router.put('/:idLoja/Produtos/:idProduto', function (req, res) {

  //primeiro procura loja pois apenas uma loja pode editar os seus produtos
  Loja.findById(req.params.idLoja, function (err, loja) {
    if (!loja) {
      return res.status(404).json({ Error: "Loja nao encontrada" });
    }
  });

  Produto.findById(req.params.idProduto, function (err, produto) {
    if (err) {
      return res.status(500).json({ Error: "Problema no servidor" });
    }

    if (!produto) {
      return res.status(404).json({ Error: "Nao podes editar um produto que não existe" });
    }

    if (JSON.stringify(req.body) == "{}") {
      return res.status(404).json({ Error: "O corpo do pedido esta vazio" });
    }

    if (JSON.stringify(req.body.nome) == "") {
      return res.status(404).json({ Error: "Nao especificou um nome" });
    }

    if (JSON.stringify(req.body.categoria) == "") {
      return res.status(404).json({ Error: "Nao especificou uma categoria" });
    }

    if (JSON.stringify(req.body.tamanho) == "") {
      return res.status(404).json({ Error: "Nao especificou um tamanho" });
    }

    for (var prop in req.body) {
      produto[prop] = req.body[prop];
    }

    produto.save(function (err) {
      if (err) {
        return res.status(500).json({ Error: "Problema no servidor" });
      }
      return res.status(200).json({ message: "produto atualizado!" });
    });

  });
});


module.exports = router;