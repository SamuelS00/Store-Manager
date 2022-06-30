const ProductModel = require('../models/productModels');
const notFound = require('../errors/notFound');

const validateId = async (id) => {
  const products = await ProductModel.getAll();
  const productById = products.find((p) => p.id === Number(id));

  if (!productById) throw notFound('Product not found');
};

module.exports = { validateId };