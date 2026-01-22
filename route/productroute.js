const express = require("express")
const router = express.Router()
const { createProduct , getProducts, getProductById, productDelete, updateProducts} = require("../controller/productcontroller")

router.post("/", createProduct)
router.get("/" , getProducts)
router.get("/:id", getProductById)
router.delete("/:id" , productDelete)
router.patch("/:id" , updateProducts)

module.exports = router;