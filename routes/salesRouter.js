const express = require('express');
const rescue = require('express-rescue');
const saleController = require('../controllers/saleControllers');

const saleRouter = express.Router();

saleRouter.get('/', rescue(saleController.getAll));

saleRouter.post('/', rescue(saleController.create));

module.exports = saleRouter;