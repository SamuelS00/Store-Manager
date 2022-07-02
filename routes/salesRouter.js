const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../controllers/saleControllers');

const saleRouter = express.Router();

saleRouter.get('/', rescue(saleController.getAll));

saleRouter.get('/:id', rescue(saleController.getById));

saleRouter.post('/', rescue(saleController.create));

saleRouter.delete('/:id', rescue(saleController.remove));

module.exports = saleRouter;