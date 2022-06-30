const express = require("express");
const ProductController = require('../controllers/productControllers');
const rescue = require("express-rescue");
const router = express.Router();

router.get("/", rescue(ProductController.getAll));

router.get("/:id", rescue(ProductController.getById));

module.exports = router;