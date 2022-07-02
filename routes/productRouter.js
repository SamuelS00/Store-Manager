const express = require('express');
const rescue = require('express-rescue');
const ProductController = require('../controllers/productControllers');

const productRouter = express.Router();

productRouter.get('/', rescue(ProductController.getAll));

productRouter.get('/:id', rescue(ProductController.getById));

productRouter.post('/', rescue(ProductController.create));

productRouter.put('/:id', rescue(ProductController.update));

module.exports = productRouter;