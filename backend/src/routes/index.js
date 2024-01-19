const { Router } = require('express');
const express = require('express');
const productsRouter = require('./products.router');
const salesRouter = require('./sales.router');

const globalRouter = Router();

globalRouter.use(express.json());
globalRouter.use('/products', productsRouter);
globalRouter.use('/sales', salesRouter);

module.exports = globalRouter;