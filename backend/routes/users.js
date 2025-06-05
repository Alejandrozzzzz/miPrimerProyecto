const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users');

// Ruta de prueba
router.get('/test', (req, res) => {
  res.json({ message: 'Ruta /users/test funcionando correctamente' });
});

// Ruta de login
router.post('/login', async (req, res) => {
  const { usuario, clave } = req.body;
  if (!usuario || !clave) {
  return res.status(400).json({ error: 'Usuario y clave son obligatorios' });
}

  try {
    const user = await User.findOne({ usuario });

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const esClaveValida = await bcrypt.compare(clave, user.clave);

    if (!esClaveValida) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    res.json({
      mensaje: 'Login exitoso',
      usuario: {
        nombre: user.nombre,
        usuario: user.usuario,
        correo: user.correo,
        rol: user.rol,
        activo: user.activo
      }
    });
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

router.post('/register', async (req, res) => {
  const { nombre, usuario, correo, clave, rol } = req.body;

  try {
    // Verifica si el usuario ya existe
    const usuarioExistente = await User.findOne({ usuario });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya existe' });
    }

    // Hashear la contraseña
    const claveHasheada = await bcrypt.hash(clave, 10);

    // Crear nuevo usuario
    const nuevoUsuario = new User({
      nombre,
      usuario,
      correo,
      clave: claveHasheada,
      activo: true,
      rol: rol || 'usuario',
      fecha_creacion: new Date()
    });

    // Guardar en la base de datos
    await nuevoUsuario.save();

    res.status(201).json({ mensaje: 'Usuario registrado correctamente' });
  } catch (err) {
    console.error('Error al registrar usuario:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

module.exports = router;
