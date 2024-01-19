const salesModel = require('../models/sales.model');
const productsModel = require('../models/products.model');

const findAll = async () => {
  const result = await salesModel.findAll();
  return { status: 'SUCCESS', data: result };
};

const findById = async (id) => {
  const result = await salesModel.findById(id);
  return !result || result.length === 0
    ? { status: 'NOT_FOUND', data: { message: 'Sale not found' } }
    : { status: 'SUCCESS', data: result };
};

const ifProductsExists = async (sales) => {
  const products = await productsModel.findAll();
  const productsIds = products.map((product) => product.id);
  const salesIds = sales.map((sale) => sale.productId);
  const result = salesIds.every((id) => productsIds.includes(id));
  return result;
};

const insert = async (sales) => {
  const productsExists = await ifProductsExists(sales);
  if (!productsExists) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  const result = await salesModel.insert(sales);
  return { status: 'CREATED', data: { id: result, itemsSold: sales } };
};

module.exports = {
  findAll,
  findById,
  insert,
  ifProductsExists,
};