const passport = require('passport');

const verificarJWT = passport.authenticate('jwt', { session: false });

module.exports = { verificarJWT };
