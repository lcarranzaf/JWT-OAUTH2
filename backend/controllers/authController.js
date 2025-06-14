const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
};


exports.register = async (req, res) => {
  const { nombre, apellido, email, password, telefono } = req.body;
  try {
    const existe = await User.findOne({ where: { email } });
    if (existe) return res.status(400).json({ error: 'Ya existe un usuario con ese email' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = await User.create({
      nombre,
      apellido,
      email,
      password: hashedPassword,
      telefono
    });

    const token = generateToken(nuevoUsuario);
    res.json({ user: nuevoUsuario, token });
  } catch (err) {
    console.error('❌ Error al registrar:', err);
    res.status(500).json({ error: 'Error al registrar' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await User.findOne({ where: { email } });
    if (!usuario || !usuario.password) return res.status(400).json({ error: 'Credenciales inválidas' });

    const coincide = await bcrypt.compare(password, usuario.password);
    if (!coincide) return res.status(400).json({ error: 'Credenciales inválidas' });

    const token = generateToken(usuario);
    res.json({ user: usuario, token });
  } catch (err) {
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};


exports.getMe = (req, res) => {
  res.json({ user: req.user });
};


exports.googleCallback = (req, res) => {
  const token = generateToken(req.user);
  res.redirect(`http://localhost:3000/google-success?token=${token}`);
};
