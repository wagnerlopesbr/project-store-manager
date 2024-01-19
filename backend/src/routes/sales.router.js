const { Router } = require('express');
const salesController = require('../controllers/sales.controller');

const router = Router();

router.get('/', salesController.findAll);
router.get('/:id', salesController.findById);
router.post('/', salesController.insert);

module.exports = router;