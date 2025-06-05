const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: String,
  usuario: String,
  correo: String,
  clave: String,
  activo: Boolean,
  rol: String,
  fecha_creacion: Date
});

module.exports = mongoose.model('User', userSchema);