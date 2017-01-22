var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var grupoSchema = mongoose.Schema({
    nome:{
        type:String, required:true
    },

    data:{
        type: String, default: Date.now
    }
});


 module.exports = mongoose.model('Grupo',grupoSchema);