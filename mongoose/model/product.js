const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title:{
    type: String,
    required: true,
  },
  description: String,
  price:{
    type: Number,
    min:[0,'Smaller than zero'],
    required:true,
  },
  discountPercentage: {
    type: Number,
    min:[0,'Smaller than zero'],
    max:[100,'greater than zero'],
  },
  ratings: Number,
  brand:{
    type: String,
    required: true,
  },
  category:{
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  }
  ,
  images: [String],
});

exports.Product = mongoose.model("Product", productSchema);
