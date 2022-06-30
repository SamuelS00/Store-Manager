const ProductService = require('../services/productServices');
const httpsStatusCode = require('../helpers/httpStatusCode');

const getAll = async (_req, res, _next) => {
  const products = await ProductService.getAll();

  res.status(httpsStatusCode.OK).json(products);
};

const getById = async (req, res, _next) => {
  const { id } = req.params;
  const product = await ProductService.getById(id);

  res.status(httpsStatusCode.OK).json(product);
};

module.exports = { getAll, getById };