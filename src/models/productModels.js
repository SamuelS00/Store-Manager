const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);

  return products;
};

const getBySearch = async (q) => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);

  const filteredProducts = (
    products.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()))
  );
  
  return filteredProducts;
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

const remove = async (id) => {
  const query = `
    DELETE FROM StoreManager.products
    WHERE id = ?`;
  
  await connection.execute(query, [id]);
};

module.exports = { getAll, getById, create, update, remove, getBySearch };
