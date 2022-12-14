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

const update = async (sales) => {
  await Promise.all(sales.map((s) => validateSale(s)));
  await Promise.all(sales.map((s) => validateSaleId(s.saleId)));

  const updatedSales = await SaleModels.update(sales);
  return updatedSales;
};

const remove = async (id) => {
  await validateSaleId(id);

  await SaleModels.remove(id);
};

module.exports = { create, getAll, getById, remove, update };