const Products = require("../models/Products");

exports.createProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).json(product);
    console.log(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.productDelete = async (req, res) => {
  try {
    const product = await Products.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProducts = async (req , res ) => {
     try {
     const product = await Products.findByIdAndUpdate(req.params.id , req.body, {new:true})
     res.json(product) 
     } catch(err) {
          res.status(404).json(err)
     }

     
}