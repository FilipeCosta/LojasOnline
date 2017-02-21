var express = require('express');
var router = express.Router();
var Loja = require('../models/lojas');
var Produto = require('../models/produtos');


/**
 * @api{post} /produtos/:id 
 * @apiName adicionaProduto
 * @apiGroup adicionaProduto
 * @apiDescription
 * adiciona um produto sem especificar uma loja para este
 * 
 * @apiParam {Number} id Identificador do produto
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     
 */
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


/**
 * @api{get} /produtos
 * @apiName adicionaProduto
 * @apiGroup adicionaProduto
 * @apiDescription
 * obtem todos os produtos de todas as lojas e produtos nao associados a lojas
 * 
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 * 
 * "produtos": [
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
 *         ]
 *     
 */
router.get('/',function(req,res){
    Produto.find(function(err,produtos){
      if(!produtos){
        return res.status(404).json({Error:"nao existem produtos"});
      }
      res.send(produtos); 
  });
});


/**
 * @api{get} /produtos/:id 
 * @apiName ObtemProduto
 * @apiGroup ObtemProduto
 * @apiDescription
 * Obtem um produto atraves do seu Id
 * 
 * @apiParam {Number} id Identificador do produto
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 Ok
 *     
 */
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