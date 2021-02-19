var express = require('express');
var router = express.Router();


const catalogsController = require('../controllers/catalogs');
const optionsController = require('../controllers/catalogs_options');

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