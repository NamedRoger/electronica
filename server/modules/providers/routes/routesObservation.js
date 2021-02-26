const express = require('express');
const router = express.Router();

const observationController = require('../controllers/observationControllers');

router.get('/',observationController.getObservation);
router.post('/',observationController.addObservation);
router.put('/:idObservation',observationController.updateObservation);
router.delete('/:idObservation',observationController.deleteObservation);
module.exports = router;
