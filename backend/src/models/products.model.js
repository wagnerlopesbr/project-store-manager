const connection = require('./connection');

const findAll = async () => {
  const sqlQuery = 'SELECT * FROM products';
  const [result] = await connection.execute(sqlQuery);
  return result;
};

const findById = async (id) => {
  const sqlQuery = 'SELECT * FROM products WHERE id = ?';
  const [[result]] = await connection.execute(sqlQuery, [id]);
  return result;
};

const insert = async (product) => {
  const sqlQuery = 'INSERT INTO products (name) VALUES (?)';
  const [{ insertId }] = await connection.execute(sqlQuery, [product]);
  return insertId;
};

const update = async (id, product) => {
  const sqlQuery = 'UPDATE products SET name = ? WHERE id = ?';
  const [{ affectedRows }] = await connection.execute(sqlQuery, [product, id]);
  return affectedRows;
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
};