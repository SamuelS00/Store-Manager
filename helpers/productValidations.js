const Joi = require('joi');

const ProductModel = require('../models/productModels');
const notFound = require('../errors/notFound');
const unprocessableEntity = require('../errors/unprocessableEntity');
const badRequest = require('../errors/badRequest');

const joiTypeError = require('./joiTypeError');

const validateId = async (id) => {
  const products = await ProductModel.getAll();
  const productById = products.find((p) => p.id === Number(id));

  if (!productById) throw notFound('Product not found');
};

const productSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const validateName = async (name) => {
  const { error } = productSchema.validate({ name });
  
  if (error) {
    const {
      details: [{ type }],
    } = error;

    if (joiTypeError.TYPE_ANY_REQUIRED === type) throw badRequest(error.message);
    if (joiTypeError.TYPE_STRING_MIN === type) throw unprocessableEntity(error.message);
  }
};

module.exports = { validateId, validateName };
