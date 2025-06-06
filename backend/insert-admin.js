const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Conectar a MongoDB
mongoose.connect('mongodb://localhost:27017/local')
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar:', err));

// Definir el esquema
const userSchema = new mongoose.Schema({
  nombre: String,
  usuario: String,
  correo: String,
  clave: String,
  activo: Boolean,
  rol: String,
  fecha_creacion: Date
});

const User = mongoose.model('User', userSchema);

async function crearAdmin() {
  try {
    // Verifica si ya existe
    const existente = await User.findOne({ usuario: 'admin1' });
    if (existente) {
      console.log('Ya existe un usuario admin.');
      mongoose.disconnect();
      return;
    }

    const hash = await bcrypt.hash('1234', 10);

    const nuevoUsuario = new User({
      nombre: 'Administrador',
      usuario: 'admin1',
      correo: 'admin@ejemplo1.com',
      clave: hash,
      activo: true,
      rol: 'admin',
      fecha_creacion: new Date()
    });

    await nuevoUsuario.save();
    console.log('Usuario admin creado exitosamente.');
  } catch (err) {
    console.error('Error al crear usuario:', err);
  } finally {
    mongoose.disconnect();
  }
}

crearAdmin();
