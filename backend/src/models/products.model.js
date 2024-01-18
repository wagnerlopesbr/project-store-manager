const connection = require('./connection');

const findAll = async () => {
  const sqlQuery = `SELECT * FROM products`;
  const [result] = await connection.execute(sqlQuery);
  return result;
};

const findById = async (id) => {
  const sqlQuery = `SELECT * FROM products WHERE id = ?`;
  const [[result]] = await connection.execute(sqlQuery, [id]);
  return result;
};

module.exports = {
  findAll,
  findById,
};