const connection = require('./connection');

const findAll = async () => {
  const sqlQuery = `
    SELECT sale_id as saleId, date, product_id as productId, quantity
    FROM sales_products
    JOIN sales ON sales_products.sale_id = sales.id
  `;
  const [result] = await connection.execute(sqlQuery);
  return result;
};

const findById = async (id) => {
  const sqlQuery = `
    SELECT date, product_id as productId, quantity
    FROM sales_products
    JOIN sales ON sales_products.sale_id = sales.id
    WHERE id = ?
  `;
  const [result] = await connection.execute(sqlQuery, [id]);
  return result;
};

module.exports = {
  findAll,
  findById,
};