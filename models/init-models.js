var DataTypes = require("sequelize").DataTypes;
var _catproducto = require("./catproducto");
var _rol = require("./rol");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var catproducto = _catproducto(sequelize, DataTypes);
  var rol = _rol(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  usuario.belongsTo(rol, { as: "IdRol_rol", foreignKey: "IdRol"});
  rol.hasMany(usuario, { as: "usuarios", foreignKey: "IdRol"});

  return {
    catproducto,
    rol,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
