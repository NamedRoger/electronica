var express = require('express');
var router = express.Router();


const catalogsController = require('../controllers/catalogsController');
const optionsController = require('../controllers/catalogsOptionsController');

/* GET users listing. */
router.get('/', catalogsController.getCatalgos);
router.get('/:code', catalogsController.getCatalogByCode);


router.post('/',catalogsController.addCatalog);

router.put('/:idCatalog',catalogsController.updateCatalog);

router.delete('/:idCatalog',catalogsController.desactiveCatalog);

//catalog options
router.get('/options/:idCatalog',optionsController.getOptions);

router.post('/options/:idCatalog',optionsController.addOption);

router.put('/options/:idOption',optionsController.updateOption);

router.delete('/options/:idOption',optionsController.desactiveOption);

router.put('/options/:idOption/active',optionsController.actveOption);


module.exports = router;