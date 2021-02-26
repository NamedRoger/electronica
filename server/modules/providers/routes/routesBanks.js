const express = require('express');
const router = express.Router();

const banksController = require('../controllers/banksControllers');

router.get('/',banksController.getBank);
router.post('/',banksController.addBank);
router.put('/:idBank',banksController.updateBank);
router.delete('/:idBank',banksController.deleteBank);
module.exports = router;
