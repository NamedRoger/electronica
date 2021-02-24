const express = require('express');
const router = express.Router();

const banksController = require('../controllers/banksControllers');

router.get('/',banksController.getBank);
router.get('/:idBank',banksController.getBank);
router.post('/',banksController.getBank);
router.put('/:idBank',banksController.updateBank);
router.delete('/:idBank',banksController.deleteBank);
module.exports = router;
