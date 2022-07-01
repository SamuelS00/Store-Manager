const SaleService = require('../services/saleServices');
const httpsStatusCode = require('../helpers/httpStatusCode');

const create = async (req, res, _next) => {
  const products = req.body;
  const newSale = await SaleService.create(products);
   
  res.status(httpsStatusCode.CREATED).json(newSale);
};

module.exports = { create };