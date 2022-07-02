const SaleService = require('../services/saleServices');
const httpsStatusCode = require('../helpers/httpStatusCode');

const getAll = async (req, res, _next) => {
  const sales = await SaleService.getAll();

  res.status(httpsStatusCode.OK).json(sales);
};

const create = async (req, res, _next) => {
  const products = req.body;
  const newSale = await SaleService.create(products);
   
  res.status(httpsStatusCode.CREATED).json(newSale);
};

module.exports = { create, getAll };