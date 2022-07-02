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

const create = async (req, res, _next) => {
  const { name } = req.body;
  const newProduct = await ProductService.create(name);

  res.status(httpsStatusCode.CREATED).json(newProduct);
};

const update = async (req, res, _next) => {
  const { id } = req.params;
  const { name } = req.body;
  const updatedProduct = await ProductService.update(id, name);

  res.status(httpsStatusCode.OK).json(updatedProduct);
};

const remove = async (req, res, _next) => {
  const { id } = req.params;
  await ProductService.remove(id);

  res.status(httpsStatusCode.NO_CONTENT).end();
};

module.exports = { getAll, getById, create, update, remove };