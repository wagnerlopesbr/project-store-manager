const productsModel = require('../models/products.model');

const findAll = async () => {
  const result = await productsModel.findAll();
  return { status: 'SUCCESS', data: result };
};

const findById = async (id) => {
  const result = await productsModel.findById(id);
  return !result
    ? { status: 'NOT_FOUND', data: { message: 'Product not found' } }
    : { status: 'SUCCESS', data: result };
};

const insert = async (product) => {
  const result = await productsModel.insert(product);
  return { status: 'CREATED', data: { id: result, name: product } };
};

module.exports = {
  findAll,
  findById,
  insert,
};