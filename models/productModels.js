const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);

  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);

  return product[0];
};

const create = async (name) => {
  const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  const newProduct = { id: insertId, name };

  return newProduct;
};

const update = async (id, name) => {
  const query = `
    UPDATE StoreManager.products
    SET name = ?
    WHERE id = ?`;

  await connection.execute(query, [name, id]);

  const updatedProduct = { id, name };

  return updatedProduct;
};

module.exports = { getAll, getById, create, update };
