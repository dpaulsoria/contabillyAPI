const mysql2 = require("mysql2");
const Sequelize = require("sequelize");

// const connection = mysql.createConnection({
//   host: "localhost",
//   port: "3306",
//   user: "root",
//   password: "root",
//   database: "DbContabilly",
// });

// USING ORM

const sequelize = new Sequelize("DbContabilly", "root", "root", {
  dialect: "mysql",
  dialectModule: mysql2,
  host: "localhost",
});

// try {
//   await sequelize.authenticate()
//   console.log('Authenticated');
// } catch (err) {
//   console.log(err);
// }

// connection.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database: " + err.stack);
//     return;
//   }
//   console.log("Connected to the database.");
// });

module.exports = { sequelize };