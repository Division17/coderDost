
const fs = require("fs");
const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

const express = require("express");
const port = 8080;
const server = express();

server.use(express.json()); 


//server.use(express.static('public'));


//   API or Endpoint or Routes


// C R U D  operations in the same order as the CRUD is.
  
// Create , POST is used for creating new entries generally data comes from the client side 
// body parser to be used to use the req.body

server.post("/products", (req, res) => {  
    console.log(req.body)
    products.push(req.body)
    res.sendStatus(201).json(req.body)
});

//------------------------------------------------------------------------------------------------------


// Read GET /products
server.get("/products", (req, res) => {   
  res.json(products);
});

 // Read GET /products/:id
server.get("/products/:id", (req, res) => {   
   const id = +req.params.id;        // + converts string into variable
      const product = products.find((p)=>p.id===id)
  res.json(product);
});

//------------------------------------------------------------------------------------------------------

// Update PUT /products/:id                                   overwrites the respective content

server.put("/products/:id", (req, res) => {
   const id = + req.params.id;
      const productIndex = products.findIndex((p)=>p.id===id)
      products.splice(productIndex,1,{...req.body, id:id})
      res.status(201).json()
});


//------------------------------------------------------------------------------------------------------

// Update PATCH /products/:id                                   to change the particular field of the content

server.patch<("/products/:id", (req, res) => {
  const id = + req.params.id;
     const productIndex = products.findIndex((p)=>p.id===id)
     const product = products[productIndex]
     products.splice(productIndex,1,{...product,...req.body, id:id})                     // the first parameter's respective field is overwritten by the last parameter.
     res.status(201).json()
});

//--------------------------------------------------------------------------------------------------------

// Delete DELETE /products/:id
server.delete("/products/:id", (req, res) => {
  const id = + req.params.id;
     const productIndex = products.findIndex((p)=>p.id===id)
     const product = products[productIndex]
     products.splice(productIndex,1)                     // the first parameter's respective field is overwritten by the last parameter.
     res.status(201).json(product)
});





server.get("/demo", (req, res) => {
  res.status(201).send("<h1>Hello world!</h1>");

});

server.listen(port, () => {
  console.log("server started");
});
