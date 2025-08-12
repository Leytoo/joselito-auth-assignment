const serverlessMysql = require("serverless-mysql");

const db = serverlessMysql({
  config: {
    host: "localhost",
    database: "joselito_auth",
    user: "root",
    password: "",
    port: 3306,
  },
});

// db.connect()
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((error) => {
//     console.error("Database connection failed:", error);
//   });

module.exports = db;
