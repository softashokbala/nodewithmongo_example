const express = require("express");
const Product = require('../models/product.model.js');
const router = express.Router();
//const productController = require('../controllers/productcontroller.js');
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productcontroller.js');


router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
//update product
router.put('/:id', updateProduct);
//delete product
router.delete('/:id', deleteProduct);

module.exports = router;