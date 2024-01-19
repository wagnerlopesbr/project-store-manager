const salesModel = require('../models/sales.model');

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

module.exports = {
  findAll,
  findById,
};