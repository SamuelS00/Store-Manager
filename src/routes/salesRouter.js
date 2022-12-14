const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../controllers/productControllers');

const saleRouter = express.Router();

saleRouter.get('/', rescue(saleController.getAll));
saleRouter.get('/:id', rescue(saleController.getById));
saleRouter.post('/', rescue(saleController.create));
saleRouter.put('/:id', rescue(saleController.update));
saleRouter.delete('/:id', rescue(saleController.remove));

module.exports = saleRouter;