const ProductModel = require('../models/productModels');
const { validateId } = require('../helpers/validateId');

const getAll = async () => {
  const products = await ProductModel.getAll();
  return products;
};

const getById = async (id) => {
  await validateId(id);

  const product = await ProductModel.getById(id);
  return product;
};

const create = async (name) => {
  const newProduct = await ProductModel.create(name);
  return newProduct;
};

module.exports = { getAll, getById, create };