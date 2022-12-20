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
const path = require("path")

//"🦄🌈✨👋🌎🌍🌏✨🌈🦄"
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
    
    const sequelize = require('../models/index.js').sequelize;
    var initModels = require("../models/init-models");
    var models = initModels(sequelize);  

    models.usuario.findAll()
   .then(data => {
      usuarios = data
      res.json({
        message: "UP",
        AllUsers: usuarios,
      });
   })
   .catch(error => res.status(400).send(error))
    
  } catch (err) {
    console.log(err);
  }
  
});

app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);

module.exports = app;
