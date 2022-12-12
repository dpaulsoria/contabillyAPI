const path = require('path')

const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node MySQL API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: [`${path.join(__dirname, "../api/*.js")}`],
};

module.exports = { swaggerUI, swaggerJsDoc, swaggerSpec };