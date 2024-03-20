const fs = require("fs");
const model = require("../model/product");
const Product = model.Product;

exports.createProduct = (req, res) => {
  const product = new Product(req.body);
  console.log(req.body)
   product.save();
   res.status(200).json(req.body)
};

exports.getProduct = async (req, res) => {
  const doc = await Product.find();
  res.json(doc);
};

exports.getProductId = async (req, res) => {
  const id = req.params.id
  const doc = await Product.findById({_id:id})
  res.json(doc);
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  const doc = await Product.findOneAndReplace({_id:id},req.body)
  res.status(201).json(doc);
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc);
  } catch(err){
    res.status(400).json();
  }

};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try{
    const doc = await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc);
  } catch(err){
    res.status(400).json();
  }
};
