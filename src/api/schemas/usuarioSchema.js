const Joi = require("joi");

const usuarioSchema = Joi.object({
  IdUsuario: Joi.number().integer(),
  IdRol: Joi.number().integer(),
  Nombre: Joi.string().min(3).max(100).required(),
  Usuario: Joi.string().min(3).max(20).required(),
  Contraseña: Joi.string().min(6).max(50).required(),
  Email: Joi.string().email().max(50).required(),
  Numero: Joi.string().max(20).required(),
  Pais: Joi.string().min(3).max(50).required(),
  Ciudad: Joi.string().min(3).max(50).required(),
  Direccion: Joi.string().min(3).max(200).required(),
  Identificacion: Joi.string().min(10).max(15).required(),
  RUC: Joi.string().min(10).max(20),
  UrlLogoEmpresa: Joi.string().max(16777215),
  FirebaseToken: Joi.string().max(200),
  Provincia: Joi.string().min(3).max(100).required(),
});

module.exports = { usuarioSchema };
