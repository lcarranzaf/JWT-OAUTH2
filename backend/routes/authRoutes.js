const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');
const { verificarJWT } = require('../middlewares/authMiddleware');
const validarRegistro = require('../middlewares/validarRegistro');
const generateToken = require('../utils/generateToken');

router.post('/register', validarRegistro, authController.register);
router.post('/login', authController.login);

router.get('/me', verificarJWT, authController.getMe);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req, res) => {
    console.log('✅ Usuario autenticado con Google:', req.user);

    const token = generateToken(req.user); // esta línea está bien
    res.redirect(`http://localhost:5173/google-success?token=${token}`);
  }
);
module.exports = router;
