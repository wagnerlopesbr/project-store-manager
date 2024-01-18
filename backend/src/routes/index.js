const { Router } = require('express');
const express = require('express');
const productsRouter = require('./products.router');

const globalRouter = Router();

globalRouter.use(express.json());
globalRouter.use('/products', productsRouter);

module.exports = globalRouter;