define({ "api": [
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
    "type": "get",
    "url": "/lojas",
    "title": "obter uma loja e seus produtos",
    "name": "GetLoja",
    "description": "<p>obtem os dados de uma única loja assim como os produtos associados à loja</p>",
    "group": "StoreIt",
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
            "field": "id",
            "description": "<p>LojaId.</p>"
          },
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
    "groupTitle": "StoreIt"
  },
  {
    "type": "get",
    "url": "/lojas",
    "title": "obter lojas e produtos",
    "name": "GetLojas",
    "group": "StoreIt",
    "description": "<p>obtem informação de todas as lojas assim como dos produtos associados às lojas respetivas.</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>LojaId.</p>"
          },
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
    "groupTitle": "StoreIt"
  }
] });
