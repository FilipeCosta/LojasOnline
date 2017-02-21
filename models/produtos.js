var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var produtoSchema = mongoose.Schema({
    nome: {
        type: String, required: true
    },
    stock: {
        type: Number
    },
    descricao: {
        type: String,
        default: "Ainda não exista descrição para este produto"
    },
    categoria: {
        type: String, required: true
    },
    tamanho: {
        type: String, required: true
    },
    data: {
        type: Date, default: Date.now
    },
    foto: { name: String, img: String, contentType: String },
    preco: {
        type: Number, required: true, default: 0
    }
});


module.exports = mongoose.model('Produto', produtoSchema);