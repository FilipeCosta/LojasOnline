var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
var SALT_WORK_FACTOR = 10;

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
    default: "Ainda não exista descrição para esta loja"
  },
  telefone: {
    type: String,
  },
  password:
  {
    type: String, required: true
  }
  ,
  foto: { name: String, img: String, contentType: String },

  produtos: [
    { type: mongoose.Schema.ObjectId, ref: 'Produto' }
  ],
});


lojasSchema.pre('save', function(next) {
    var loja = this;

// only hash the password if it has been modified (or is new)
if (!loja.isModified('password')) return next();

// generate a salt
bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    // hash the password using our new salt
    bcrypt.hash(loja.password, salt, function(err, hash) {
        if (err) return next(err);

        // override the cleartext password with the hashed one
        loja.password = hash;
        next();
    });
});


});

lojasSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};



module.exports = mongoose.model('Loja', lojasSchema);