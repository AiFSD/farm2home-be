const  Products = require("../models/Products")

exports.createProduct = async (req , res ) => {
     const product = await Products.create(req.body)
     res.status(201).json(product)
     console.log(product)

}

exports.getProducts = async (req, res ) => {
     const product = await Products.find();
     res.json(product)
}
