var express = require('express');
var router = express.Router();


const BankController = require('../controllers/banksControllers');
const ObservationController = require('../controllers/observationControllers');
const NoteController = require('../controllers/notesControllers');

/* GET users listing. */
router.get('/', catalogsController.getCatalgos);
router.get('/:code', catalogsController.getCatalogByCode);


router.post('/',(req,res,next) => {
    res.send('esto es un post');
});

router.put('/',(req,res,next) => {

});

router.delete('/',(req,res,next) => {});

//catalog options
router.get('/options/:idCatalog',optionsController.getOptions);

module.exports = router;
