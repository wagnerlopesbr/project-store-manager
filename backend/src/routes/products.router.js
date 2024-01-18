const { Router } = require('express');
const productsController = require('../controllers/products.controller');

const router = Router();

router.get('/', productsController.findAll);
router.get('/:id', productsController.findById);

module.exports = router;