const connection = require('./connection');

const createSale = async () => {
  const querySales = 'INSERT INTO StoreManager.sales (date) VALUES (now())';
  const [{ insertId }] = await connection.execute(querySales);

  return insertId;
};

const registerSale = async ({ productId, quantity }) => {
  const insertId = await createSale();
  const querySalesProduct = (
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)'
  );

  await connection.execute(querySalesProduct, [insertId, productId, quantity]);
  
  return { insertId, productId, quantity };
};

const create = async (products) => {
  const newSale = await Promise.all(products.map((s) => registerSale(s)));

  return {
    id: newSale[0].insertId,
    itemsSold: newSale.map((s) => ({
      productId: s.productId,
      quantity: s.quantity,
    })),
  };
};

module.exports = { create };