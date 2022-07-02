const SaleModels = require('../models/saleModels');
const { validateSale, validateSaleId } = require('../helpers/saleValidations');

const getAll = async () => {
  const sales = await SaleModels.getAll();
  return sales;
};

const getById = async (id) => {
  await validateSaleId(id);

  const sale = await SaleModels.getById(id);
  return sale;
};

const create = async (sales) => {
  await Promise.all(sales.map((s) => validateSale(s)));

  const newSales = await SaleModels.create(sales);
  return newSales;
};

module.exports = { create, getAll, getById };