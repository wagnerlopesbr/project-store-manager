const productsService = require('../services/products.service');
const HTTPStatus = require('../utils/HTTPStatus');

const findAll = async (_req, res) => {
  const { status, data } = await productsService.findAll();
  return res.status(HTTPStatus(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productsService.findById(id);
  return res.status(HTTPStatus(status)).json(data);
};

module.exports = {
  findAll,
  findById,
};