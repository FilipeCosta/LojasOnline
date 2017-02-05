var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lojasSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  nome: {
    type: String,
    required: true,
    unique: true
  },
  descricao: {
    type: String,
    default: "No description for this store"
  },
  telefone:{
    type:String,
  },
  password:
  {
    type: String, required: true
  }
  ,
  img: {
    data: Buffer, contentType: String
  },
  imgNome: {
    type: String
  },
  produtos: [
    { type: mongoose.Schema.ObjectId, ref: 'Produto' }
  ],
});

module.exports = mongoose.model('Loja', lojasSchema);