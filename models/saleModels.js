const connection = require('./connection');

const getAll = async () => {
  const query = `
    SELECT sp.sale_id, s.date, sp.product_id, sp.quantity FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    ORDER BY sp.sale_id, sp.product_id ASC`;
  
  const [result] = await connection.execute(query);

  const sales = result.map((sale) => {
    const SALE_ID = 'saleId';
    const PRODUCT_ID = 'productId';
    delete Object.assign(sale, { [SALE_ID]: sale.sale_id }).sale_id;
    delete Object.assign(sale, { [PRODUCT_ID]: sale.product_id }).product_id;
    return sale;
  });

  return sales;
};

const getById = async (id) => {
  const query = `
    SELECT sp.sale_id, s.date, sp.product_id, sp.quantity FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id
    WHERE sp.sale_id = ? 
    ORDER BY sp.sale_id, sp.product_id ASC`;
  
  const [result] = await connection.execute(query, [id]);

  const sales = result.map((sale) => {
    const PRODUCT_ID = 'productId';
    delete Object.assign(sale, { [PRODUCT_ID]: sale.product_id }).product_id;
    return sale;
  });

  return sales;
};

const createSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (date) VALUES (now())';
  const [{ insertId }] = await connection.execute(query);

  return insertId;
};

const create = async (sale) => {
  const insertId = await createSale();

  const query = `
    INSERT INTO
      StoreManager.sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?);
  `;

  await Promise.all(
    sale.map((s) =>
      connection.execute(query, [insertId, s.productId, s.quantity])),
  );

  return {
    id: insertId,
    itemsSold: sale.map((s) => ({
      productId: s.productId,
      quantity: s.quantity,
    })),
  };
};

const update = async (sales) => {
  const query = ` 
    UPDATE StoreManager.sales_products
    SET product_id = ?, quantity = ?
    WHERE sale_id = ? AND product_id = ?;
  `;

  await Promise.all(
    sales.map((s) => connection.execute(query, [s.productId, s.quantity, s.saleId, s.productId])),
  );

  return {
    saleId: sales[0].saleId,
    itemsUpdated: sales.map((s) => ({
      productId: s.productId,
      quantity: s.quantity,
    })),
  };
};

const remove = async (id) => {
  const query = 'DELETE FROM StoreManager.sales WHERE id = ?';

  await connection.execute(query, [id]);
};

module.exports = { create, getAll, getById, remove, update };