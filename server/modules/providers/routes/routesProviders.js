const express = require('express');
const router = express.Router();

const providersController = require('../controllers/providerController');

router.get('/',providersController.getProviders);
router.get('/:idProvider',providersController.getProvider);
router.post('/',providersController.addProvider);
router.put('/:idProvider',providersController.updateProvider);
router.delete('/:idProvider',providersController.desactiveProvider);
module.exports = router;
