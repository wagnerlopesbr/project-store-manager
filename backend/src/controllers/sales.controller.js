const salesService = require('../services/sales.service');
const { HTTPStatus } = require('../utils/HTTPStatus');

const findAll = async (_req, res) => {
  const { status, data } = await salesService.findAll();
  return res.status(HTTPStatus(status)).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.findById(id);
  return res.status(HTTPStatus(status)).json(data);
};

const insert = async (req, res) => {
  const { body } = req;
  const { status, data } = await salesService.insert(body);
  return res.status(HTTPStatus(status)).json(data);
};

module.exports = {
  findAll,
  findById,
  insert,
};