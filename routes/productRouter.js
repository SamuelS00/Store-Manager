const express = require('express');
const rescue = require('express-rescue');
const ProductController = require('../controllers/productControllers');

const router = express.Router();

router.get('/', rescue(ProductController.getAll));

router.get('/:id', rescue(ProductController.getById));

module.exports = router;