require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db");
const app = express();
const port = process.env.PORT;
const router = require("./controllers/itemsController/router");

app.use(cors());
app.use(express.json());
app.use("/api", router);

function testDbConnection() {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error("Erro ao conectar com o banco de dados:", err);
      process.exit(1);
    } else {
      console.log("Conexão com o banco de dados testada e bem-sucedida");
      connection.release();
    }
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  testDbConnection();
});
