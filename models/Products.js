const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName: { type: String },
  productPrice: { type: Number },
  productImage: { type: String },
  quantity:{type : Number},
  productOffer: { type: Number },
});

module.exports = mongoose.model("Products", ProductSchema);
