const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    IdUsuario: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    IdRol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'rol',
        key: 'IdRol'
      }
    },
    Nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Identificacion: {
      type: DataTypes.STRING(13),
      allowNull: true
    },
    Usuario: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Contrasena: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Pais: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ciudad: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Direccion: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "IdUsuario" },
        ]
      },
      {
        name: "IdRol",
        using: "BTREE",
        fields: [
          { name: "IdRol" },
        ]
      },
    ]
  });
};
