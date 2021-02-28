const express = require('express');
const router = express.Router();

const observationController = require('../controllers/observationControllers');

router.get('/:idProvider/observations/',observationController.getObservation);
router.post('/:idProvider/observations/',observationController.addObservation);
router.put('/:idProvider/observations/:idObservation',observationController.updateObservation);
router.delete('/:idProvider/observations/:idObservation',observationController.deleteObservation);
module.exports = router;
