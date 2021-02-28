const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');

router.get('/:idProduct',productsController.getProduct);
router.get('/',productsController.getProducts);
router.post('/',productsController.addProduct);
router.put('/:idProduct',productsController.updateProduct);
router.delete('/:idProduct',productsController.desactiveProduct);

module.exports = router;