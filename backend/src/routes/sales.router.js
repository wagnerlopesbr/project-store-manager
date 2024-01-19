const { Router } = require('express');
const salesController = require('../controllers/sales.controller');
const { validateInsert } = require('../middlewares/sales.middleware');

const router = Router();

router.get('/', salesController.findAll);
router.get('/:id', salesController.findById);
router.post('/', validateInsert, salesController.insert);

module.exports = router;