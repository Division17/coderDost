const fs = require("fs");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const port = 8080;
const express = require("express");

const productController = require('./controller/product');
//const productRouter = require("./routes/products");

const server = express();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
  console.log("DB Connected");
}

server.use(express.json());
server.use(express.static("public"));
//server.use(express.Router("", productRouter.router));

server
.post("/products", productController.createProduct)
.get("/products", productController.getProduct)
.get("/products/:id", productController.getProductId)
.put("/products/:id", productController.replaceProduct)
.patch("/products/:id", productController.updateProduct)
.delete("/products/:id", productController.deleteProduct);

server.listen(port, () => {
  console.log(`Server Started at ${port}`);
});
