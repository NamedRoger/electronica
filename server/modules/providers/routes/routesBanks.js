const express = require('express');
const router = express.Router();

const banksController = require('../controllers/banksControllers');

router.get('/:idProvider/banks',banksController.getBanks);
router.post('/:idProvider/banks',banksController.addBank);
router.put('/:idProvider/banks/:idBank',banksController.updateBank);
router.delete('/:idProvider/banks/:idBank',banksController.deleteBank);
module.exports = router;
