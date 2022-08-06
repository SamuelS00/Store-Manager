const SaleService = require('../services/saleServices');
const httpsStatusCode = require('../helpers/httpStatusCode');

const getAll = async (req, res, _next) => {
  const sales = await SaleService.getAll();

  res.status(httpsStatusCode.OK).json(sales);
};

const getById = async (req, res, _next) => {
  const { id } = req.params;
  const sale = await SaleService.getById(id);

  res.status(httpsStatusCode.OK).json(sale);
};

const create = async (req, res, _next) => {
  const sales = req.body;
  const newSale = await SaleService.create(sales);
   
  res.status(httpsStatusCode.CREATED).json(newSale);
};

const update = async (req, res, _next) => {
  const { id } = req.params;
  const sales = req.body;
  const salesId = sales.map((s) => Object.assign(s, { saleId: +id }));
  const updatedSales = await SaleService.update(salesId);

  res.status(httpsStatusCode.OK).json(updatedSales);
};

const remove = async (req, res, _next) => {
  const { id } = req.params;
  await SaleService.remove(id);

  res.status(httpsStatusCode.NO_CONTENT).end();
};

module.exports = { create, getAll, getById, remove, update };