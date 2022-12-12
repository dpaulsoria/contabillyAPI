// SWAGGER
const {
  swaggerUI,
  swaggerJsDoc,
  swaggerSpec,
} = require("./documentation/swagger");
// CORS
const { options } = require("./cors/options");
// DB CONNECTION
const { sequelize } = require("./dbConnection/connection");

// DEPENDENCIES
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// SCHEMAS
const { usuarioSchema } = require("./api/schemas/usuarioSchema");

const app = express();

app.use(morgan("dev"));
app.use(cors(options));
app.use(express.json());
let ap = false;
let usuarios = {};

app.get("/", async (req, res) => {
  try {
    await sequelize.authenticate();
    ap = true;
    const Usuario = sequelize.define(usuarioSchema);

    usuarios = await Usuario.findAll();
    console.log(users.every((usuario) => usuario instanceof Usuarios)); // true
    console.log("All users:", JSON.stringify(usuarios, null, 2));
  } catch (err) {
    console.log(err);
  }
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    dataBaseStateUp: ap,
    AllUsers: usuarios,
  });
});

app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

module.exports = app;
