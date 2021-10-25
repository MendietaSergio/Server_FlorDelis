const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const cors = require("cors");
const routes = require("./routes");
const app = express();
//habilitar body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Servidor en NodeJs - Flor de Lis");
});
app.use("/", routes());
app.use(express.static("uploads")); //Para esté expuesta en el servidor y se puedan ver

const url = process.env.DB_URL;
mongoose.Promise = global.Promise;
mongoose
  .connect(url, {
    useNewUrlParser: true,
  })
  .then(() => console.log("conectado"))
  .catch((error) => console.log(error));

//habilitar cors
app.use(cors());

app.listen(process.env.PORT || 5000, () => {
  console.log("Servidor corriendo en ", 500);
});
