var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Loja = mongoose.model('Loja');

passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(username, password, done) {
    Loja.findOne({ email: username }, function (err, loja) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!loja) {
        return done(null, false, {
          message: 'Loja não encontrada'
        });
      }
      // Return if password is wrong
      if (!loja.validPassword(password)) {
        return done(null, false, {
          message: 'Password errada'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));