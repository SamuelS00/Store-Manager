const ProductModel = require('../models/productModels');
const { validateId, validateName } = require('../helpers/productValidations');

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
  await validateName(name);

  const newProduct = await ProductModel.create(name);
  return newProduct;
};

const update = async (id, name) => {
  await validateId(id);
  await validateName(name);

  const updatedProduct = await ProductModel.update(id, name);
  return updatedProduct;
};

const remove = async (id) => {
  await validateId(id);
  await ProductModel.remove(id);
};

module.exports = { getAll, getById, create, update, remove };