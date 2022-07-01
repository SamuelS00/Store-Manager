const SaleModels = require('../models/saleModels');
const { validateSale } = require('../helpers/saleValidations');

const create = async (sales) => {
  await Promise.all(sales.map((s) => validateSale(s)));

  const newSales = await SaleModels.create(sales);
  return newSales;
};

module.exports = { create };