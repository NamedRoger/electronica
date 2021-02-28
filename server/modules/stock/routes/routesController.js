const express = require('express');
const router = express.Router();

const customersController = require('../controllers/productsController');

router.get('/:idProduct',customersController.getProduct);
router.get('',customersController.getProducts);
router.post('',customersController.addProduct);
router.put('/:idProduct',customersController.updateProduct);
router.delete('/:idProduct',customersController.desactiveProduct);

module.exports = router;