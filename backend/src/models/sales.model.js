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

const insertProducts = async (id, products) => {
  const sqlQuery = `
    INSERT INTO sales_products (sale_id, product_id, quantity)
    VALUES (?, ?, ?)
  `;
  if (products && products.length > 0) {
    const salesArray = products.map(({ productId, quantity }) => connection.execute(
      sqlQuery,
      [id, productId, quantity],
    ));
    await Promise.all(salesArray);
  }
};

const insert = async (sales) => {
  const sqlQuery = 'INSERT INTO sales () VALUES ()';
  const [{ insertId }] = await connection.execute(sqlQuery);
  await insertProducts(insertId, sales);
  return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};