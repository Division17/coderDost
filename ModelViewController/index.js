const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");

const productRouter = require("./routes/products");

const port = 8000;
const server = express();

server.use(express.json());
server.use(express.static('public'));
server.use(express.Router('', productRouter.router))

// MVC model-view-controller      view-is for showing the frontend   model-is for data models(data base)   controller-is used for controlling both the view and the model

// server.post("/products", productController.createProduct)
// .get("/products", productController.getProduct)
// .get("/products/:id", productController.getProductId)
// .put("/products/:id", productController.replaceProduct)
// .patch("/products/:id", productController.updateProduct)
// .delete("/products/:id", productController.deleteProduct)
// .listen(port, () => {
//   console.log("server started");
// });


//    ------------ both the above and below are acceptable as upper one is all about chaining--------------------


// server.post("/products", productController.createProduct);
// server.get("/products", productController.getProduct);
// server.get("/products/:id", productController.getProductId);
// server.put("/products/:id", productController.replaceProduct);
// server.patch("/products/:id", productController.updateProduct);
// server.delete("/products/:id", productController.deleteProduct);
// server.listen(port, () => {
//   console.log("server started");
// });

server.listen(port, () => {
  console.log("server started");
})