const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const { createUserTable } = require("./models/auth-models");

const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

// createUserTable()
//   .then(() => console.log("Table has been created"))
//   .catch((error) => {
//     console.log(error);
//   });


app.use("/api/auth", require("./routes/auth-route"));


app.listen(5000, () => {
  console.log("Server is running");
});
