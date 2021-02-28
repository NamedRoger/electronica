const express = require('express');
const router = express.Router();

const customersControllers = require('../controllers/customersControllers');

router.get('/:idCliente',customersControllers.getCliente);
router.get('/',customersControllers.getClientes);
router.post('/',customersControllers.addCliente);
router.put('/:idCliente',customersControllers.updateCliente);
router.delete('/:idCliente',customersControllers.desactiveCliente);
module.exports = router;
