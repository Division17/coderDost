const express = require("express");
const productController = require('../controller/product');
const router = express.Router();
router
.post("/products", productController.createProduct)
.get("/products", productController.getProduct)
.get("/products/:id", productController.getProductId)
.put("/products/:id", productController.replaceProduct)
.patch("/products/:id", productController.updateProduct)
.delete("/products/:id", productController.deleteProduct);

exports.router = router;