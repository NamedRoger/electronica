const express = require('express');
const router = express.Router();

const productsProviderController = require('../controllers/productsProvidersController');

router.get("/:idProduct/providers/",productsProviderController.getProviders);
router.post("/:idProduct/providers/",productsProviderController.addProvider);
router.put("/:idProduct/providers/:idProductProvider",productsProviderController.updateProvider);
router.delete("/:idProduct/providers/:idProductProvider",productsProviderController.deleteProvider);

module.exports = router;