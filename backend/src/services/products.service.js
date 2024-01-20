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

const update = async (id, product) => {
  const result = await productsModel.update(id, product);
  return !result || result === 0
    ? { status: 'NOT_FOUND', data: { message: 'Product not found' } }
    : { status: 'SUCCESS', data: { id: Number(id), name: product } };
};

const remove = async (id) => {
  const result = await productsModel.remove(id);
  return !result || result === 0
    ? { status: 'NOT_FOUND', data: { message: 'Product not found' } }
    : { status: 'NO_CONTENT', data: { message: 'Deleted or non existent' } };
};

module.exports = {
  findAll,
  findById,
  insert,
  update,
  remove,
};