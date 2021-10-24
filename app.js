const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes");
const app = express();
//habilitar body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.send("Servidor en NodeJs");
// });
app.use('/',routes())
app.listen(5000, () => {
  console.log("Servidor corriendo en ", 500);
});

const url = "mongodb://localhost/db_flordelis";
mongoose.Promise = global.Promise;
mongoose
  .connect(url,{
    useNewUrlParser:true
  })
  .then(() => console.log("conectado"))
  .catch(() => console.log("error"));

//habilitar cors
app.use(cors());

//mostrar
const mostrar = async () => {
  const items = await ItemModel.find();
  console.log(items);
};

// // mostrar()

// //crear
// const crear = async () => {
//   const item = new ItemModel({
//     nameProduct: "Producto_03",
//     category: "Velas de soja",
//     subCategory: "Vidrio",
//     description: "Prueba de creacion de un nuevo producto",
//     price: 250,
//     stock: 100,
//     discount: 20,
//     offer: true,
//     productFeatured: false,
//   });
//   const resultado = await item.save();
//   console.log(resultado);
// };
// // crear()
// const actualizar = async (id) => {
//   const item = await ItemModel.updateOne(
//     { _id: id },
//     {
//       $set: {
//         nameProduct: "Producto_06",
//         category: "Velas",
//         subCategory: "",
//         description: "Prueba de edicion del producto",
//         price: 250,
//         stock: 100,
//         discount: 20,
//         offer: true,
//         productFeatured: false,
//       },
//     }
//   );
// };
// // actualizar('6173633d3f24f9fd0b1dd628')

// const eliminar = async (id) => {
//   const item = await ItemModel.deleteOne({ _id: id });
//   console.log(item);
// };
// eliminar("6173633d3f24f9fd0b1dd628");
