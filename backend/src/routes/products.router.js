const { Router } = require('express');
const productsController = require('../controllers/products.controller');
const { validateInsert } = require('../middlewares/products.middleware');

const router = Router();

router.get('/', productsController.findAll);
router.get('/:id', productsController.findById);
router.post('/', validateInsert, productsController.insert);

module.exports = router;