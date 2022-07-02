const Joi = require('joi');

const badRequest = require('../errors/badRequest');
const notFound = require('../errors/notFound');
const unprocessableEntity = require('../errors/unprocessableEntity');
const joiTypeError = require('./joiTypeError');

const { validateId } = require('./productValidations');

const saleSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});

const validateSale = async ({ productId, quantity }) => {
  const { error } = saleSchema.validate({ productId, quantity });

  if (error) {
    const {
      details: [{ type }],
    } = error;

    if (joiTypeError.TYPE_ANY_REQUIRED === type) throw badRequest(error.message);
    if (joiTypeError.TYPE_NUMBER_MIN === type) throw unprocessableEntity(error.message);
  }

  await validateId(productId);
};

const validateSaleId = (sale) => {
  if (!sale.length) throw notFound('Sale not found');
};

module.exports = { validateSale, validateSaleId };