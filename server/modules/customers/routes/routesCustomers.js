const express = require('express');
const router = express.Router();

const customersControllers = require('../controllers/customersControllers');

router.get('/',customersControllers.getCliente);
router.get('/',customersControllers.getClientes);
router.post('/',customersControllers.addCliente);
router.put('/:idCliente',customersControllers.updateCliente);
router.desactive('/:idCliente',customersControllers.desactiveCliente);
module.exports = router;
