import express from "express";
// import mysql from "mysql2/promise";
// import mongoose from "mongoose";
const app = express();

// //docker run --name projectmysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=seba mysql
// const client = mysql.createPool({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "seba",
// });

// const response = await client.query("SELECT 1 + 1");
// console.log(response);

// //docker run --name mymongo -p 27017:27017 mongo
// const mongoConnection = await mongoose.connect(
//   "mongodb://localhost:27017/mongodb"
// );
// console.log(mongoConnection.connection.db.databaseName);
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(3000);
console.log("server on port 3000");
//docker build -t nodeejemplo .    --> copiar el contenedor
//docker exec -it nodeejemplo bash --> entrar al contenedor
//Remote Development en vsc para abrir el contenedor desde visual studio code
