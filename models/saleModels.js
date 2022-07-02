const connection = require('./connection');

const createSale = async () => {
  const querySales = 'INSERT INTO StoreManager.sales (date) VALUES (now())';
  const [{ insertId }] = await connection.execute(querySales);

  return insertId;
};

const create = async (sale) => {
  const insertId = await createSale();

  const querySalesProduct = (
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)'
  );

  await Promise.all(
    sale.map((s) =>
      connection.execute(querySalesProduct, [insertId, s.productId, s.quantity])),
  );

  return {
    id: insertId,
    itemsSold: sale.map((s) => ({
      productId: s.productId,
      quantity: s.quantity,
    })),
  };
};

module.exports = { create };