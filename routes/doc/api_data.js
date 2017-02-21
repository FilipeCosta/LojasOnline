define({ "api": [
  {
    "type": "post",
    "url": "/lojas/:id/produtos",
    "title": "",
    "name": "PostProduto",
    "description": "<p>Adiciona um produto a uma loja</p>",
    "group": "AdicionaProdutoLoja",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da loja a obter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 NoContent",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lojas.js",
    "groupTitle": "AdicionaProdutoLoja"
  },
  {
    "type": "put",
    "url": "/lojas/:id/telefone",
    "title": "",
    "name": "PutLoja",
    "description": "<p>Atualizacao parcial do elemento telefone da loja</p>",
    "group": "AtualizaLojaParcial",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da loja a obter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lojas.js",
    "groupTitle": "AtualizaLojaParcial"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_Filipe_Desktop_SD_Trabalho_2_LojaOnline_routes_doc_main_js",
    "groupTitle": "C__Users_Filipe_Desktop_SD_Trabalho_2_LojaOnline_routes_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "'/confirm-login",
    "title": "",
    "name": "ConfirmaLogin",
    "group": "ConfirmaLogin",
    "description": "<p>Confirma se a loja esta autenticada no servico</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./autenticacao.js",
    "groupTitle": "ConfirmaLogin"
  },
  {
    "type": "post",
    "url": "'/login",
    "title": "",
    "name": "EfetuaLogin",
    "group": "EfetuaLogin",
    "description": "<p>Entra na conta que foi criada antecipadamente</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./autenticacao.js",
    "groupTitle": "EfetuaLogin"
  },
  {
    "type": "delete",
    "url": "/lojas/:idLoja/Produtos/:idProduto",
    "title": "",
    "name": "deleteProdutoLoja",
    "group": "EliminaProdutoLoja",
    "description": "<p>Elimina um produto especifico de uma loja</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idLoja",
            "description": "<p>Identificador da loja que contem o produto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idProduto",
            "description": "<p>Identificador do produto a eliminar</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 NoContent",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lojas.js",
    "groupTitle": "EliminaProdutoLoja"
  },
  {
    "type": "get",
    "url": "/lojas",
    "title": "",
    "name": "ObtemLoja",
    "description": "<p>obtem os dados de uma única loja assim como os produtos associados à loja</p>",
    "group": "GetLojas",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da loja a obter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>nome da loja</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email da loja</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "produtos",
            "description": "<p>produtos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>breve descricao sobre a loja</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK \n{\n   \"_id\": \"5899d2933363ae246461ce36\",\n   \"nome\": \"zara\",\n   \"email\": \"zara@gmail.com\",\n   \"__v\": 0,\n   \"produtos\": [],\n   \"descricao\": \"No description for this store\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lojas.js",
    "groupTitle": "GetLojas"
  },
  {
    "type": "get",
    "url": "/lojas",
    "title": "",
    "name": "GetLojas",
    "group": "ObtemLojas",
    "description": "<p>obtem informação de todas as lojas assim como dos produtos associados às lojas respetivas.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "nome",
            "description": "<p>nome da loja</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "email",
            "description": "<p>email da loja</p>"
          },
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "produtos",
            "description": "<p>produtos</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "descricao",
            "description": "<p>breve descricao sobre a loja</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n  {\n    \"_id\": \"5897456c3ccbd60958ec8902\",\n    \"nome\": \"Levis\",\n    \"email\": \"levis@gmail.com\",\n    \"__v\": 14,\n    \"produtos\": [\n      {\n        \"_id\": \"589b175e1c2d8322140c0b60\",\n        \"nome\": \"calca de ganga\",\n        \"descricao\": \"a melhor calca do mercado aqui na levis, venha visitar\",\n        \"categoria\": \"calça\",\n        \"stock\": 12,\n        \"tamanho\": \"22\",\n        \"__v\": 0,\n        \"preco\": 12,\n        \"data\": \"2017-02-08T13:04:30.705Z\"\n      },\n      {\n        \"_id\": \"589b19065e72032f5ccbbd69\",\n        \"nome\": \"camisa justa\",\n        \"descricao\": \"camisa colorida para o verao que esta aí a porta\",\n        \"categoria\": \"camisa\",\n        \"stock\": 12,\n        \"tamanho\": \"22\",\n        \"__v\": 0,\n        \"preco\": 12,\n        \"data\": \"2017-02-08T13:11:34.041Z\"\n      },\n      {\n        \"_id\": \"589b61c94ab0cf2e546192dd\",\n        \"nome\": \"camisa xpto23\",\n        \"categoria\": \"Camisa\",\n        \"descricao\": \"melhor camisa do mercado aqui venha nos visitar\",\n        \"stock\": 12,\n        \"tamanho\": \"48\",\n        \"__v\": 0,\n        \"preco\": 22,\n        \"data\": \"2017-02-08T18:22:01.423Z\"\n      }\n    ],\n    \"descricao\": \"No description for this store\"\n  },\n  {\n    \"_id\": \"5899d2933363ae246461ce36\",\n    \"nome\": \"zara\",\n    \"email\": \"zara@gmail.com\",\n   \"__v\": 0,\n    \"produtos\": [],\n    \"descricao\": \"No description for this store\"\n  }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lojas.js",
    "groupTitle": "ObtemLojas"
  },
  {
    "type": "get",
    "url": "/produtos/:id",
    "title": "",
    "name": "ObtemProduto",
    "group": "ObtemProduto",
    "description": "<p>Obtem um produto atraves do seu Id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do produto</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./produtos.js",
    "groupTitle": "ObtemProduto"
  },
  {
    "type": "get",
    "url": "/lojas/:id/produtos",
    "title": "",
    "name": "GetProdutos",
    "group": "ObtemProdutosLoja",
    "description": "<p>Obtem todos os produtos para uma loja</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador da loja a obter</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "array",
            "optional": false,
            "field": "produtos",
            "description": "<p>produtos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n    \"produtos\": [\n      {\n        \"_id\": \"589b175e1c2d8322140c0b60\",\n        \"nome\": \"calca de ganga\",\n        \"descricao\": \"a melhor calca do mercado aqui na levis, venha visitar\",\n        \"categoria\": \"calça\",\n        \"stock\": 12,\n        \"tamanho\": \"22\",\n        \"__v\": 0,\n        \"preco\": 12,\n        \"data\": \"2017-02-08T13:04:30.705Z\"\n      },\n      {\n        \"_id\": \"589b19065e72032f5ccbbd69\",\n        \"nome\": \"camisa justa\",\n        \"descricao\": \"camisa colorida para o verao que esta aí a porta\",\n        \"categoria\": \"camisa\",\n        \"stock\": 12,\n        \"tamanho\": \"22\",\n        \"__v\": 0,\n        \"preco\": 12,\n        \"data\": \"2017-02-08T13:11:34.041Z\"\n      },\n      {\n        \"_id\": \"589b61c94ab0cf2e546192dd\",\n        \"nome\": \"camisa xpto23\",\n        \"categoria\": \"Camisa\",\n        \"descricao\": \"melhor camisa do mercado aqui venha nos visitar\",\n        \"stock\": 12,\n        \"tamanho\": \"48\",\n        \"__v\": 0,\n        \"preco\": 22,\n        \"data\": \"2017-02-08T18:22:01.423Z\"\n      }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lojas.js",
    "groupTitle": "ObtemProdutosLoja"
  },
  {
    "type": "post",
    "url": "'/registo",
    "title": "",
    "name": "RegistaLoja",
    "group": "RegistaLoja",
    "description": "<p>Efetua um Registo de  uma loja/cria</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./autenticacao.js",
    "groupTitle": "RegistaLoja"
  },
  {
    "type": "post",
    "url": "/produtos/:id",
    "title": "",
    "name": "adicionaProduto",
    "group": "adicionaProduto",
    "description": "<p>adiciona um produto sem especificar uma loja para este</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identificador do produto</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 Ok",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./produtos.js",
    "groupTitle": "adicionaProduto"
  },
  {
    "type": "get",
    "url": "/produtos",
    "title": "",
    "name": "adicionaProduto",
    "group": "adicionaProduto",
    "description": "<p>obtem todos os produtos de todas as lojas e produtos nao associados a lojas</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 Ok\n\n\"produtos\": [\n          {\n            \"_id\": \"589b175e1c2d8322140c0b60\",\n            \"nome\": \"calca de ganga\",\n            \"descricao\": \"a melhor calca do mercado aqui na levis, venha visitar\",\n            \"categoria\": \"calça\",\n            \"stock\": 12,\n            \"tamanho\": \"22\",\n            \"__v\": 0,\n            \"preco\": 12,\n            \"data\": \"2017-02-08T13:04:30.705Z\"\n          },\n          {\n            \"_id\": \"589b19065e72032f5ccbbd69\",\n            \"nome\": \"camisa justa\",\n            \"descricao\": \"camisa colorida para o verao que esta aí a porta\",\n            \"categoria\": \"camisa\",\n            \"stock\": 12,\n            \"tamanho\": \"22\",\n            \"__v\": 0,\n            \"preco\": 12,\n            \"data\": \"2017-02-08T13:11:34.041Z\"\n          },\n          {\n            \"_id\": \"589b61c94ab0cf2e546192dd\",\n            \"nome\": \"camisa xpto23\",\n            \"categoria\": \"Camisa\",\n            \"descricao\": \"melhor camisa do mercado aqui venha nos visitar\",\n            \"stock\": 12,\n            \"tamanho\": \"48\",\n            \"__v\": 0,\n            \"preco\": 22,\n            \"data\": \"2017-02-08T18:22:01.423Z\"\n          }\n        ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./produtos.js",
    "groupTitle": "adicionaProduto"
  },
  {
    "type": "put",
    "url": "/lojas/:idLoja/Produtos/:idProduto",
    "title": "",
    "name": "alteraprodutoLoja",
    "group": "alteraProdutoLoja",
    "description": "<p>altera um produto especifico de uma loja</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idLoja",
            "description": "<p>Identificador da loja que contem o produto</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idProduto",
            "description": "<p>Identificador do produto a editar</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 204 NoContent",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./lojas.js",
    "groupTitle": "alteraProdutoLoja"
  }
] });
