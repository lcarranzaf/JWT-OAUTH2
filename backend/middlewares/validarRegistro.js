const { check, validationResult } = require('express-validator');

const validarRegistro = [
  check('nombre')
    .notEmpty().withMessage('El nombre es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' }).withMessage('El nombre solo debe contener letras'),

  check('apellido')
    .notEmpty().withMessage('El apellido es obligatorio')
    .isAlpha('es-ES', { ignore: ' ' }).withMessage('El apellido solo debe contener letras'),

  check('email')
    .notEmpty().withMessage('El correo es obligatorio')
    .isEmail().withMessage('Formato de correo no válido'),

  check('password')
    .notEmpty().withMessage('La contraseña es obligatoria')
    .isLength({ min: 5 }).withMessage('La contraseña debe tener al menos 5 caracteres'),

  check('telefono')
    .notEmpty().withMessage('El teléfono es obligatorio')
    .isNumeric().withMessage('El teléfono solo debe contener números'),


  (req, res, next) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.status(400).json({ errores: errores.array() });
    }
    next();
  }
];

module.exports = validarRegistro;
